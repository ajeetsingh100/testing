import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';  
import ImageTool from '@editorjs/image';
import EditorjsList from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';

const BlogEditor = () => {
    const editorRef=useRef(null)
    const editorInstance=useRef(null)
    const imageMap=useRef(new Map())
    useEffect(()=>{
        editorInstance.current = new EditorJS({
                        holder: editorRef.current,
                        onReady:()=>console.log('editor is ready for use'),
                        placeholder:'Just writing your blog...',
                          tools:{
                              image: {
                                      class: ImageTool,
                                      config: {
                                        uploader: {             
                                            async uploadByFile(file){
                                              const blobURL=URL.createObjectURL(file)
                                              console.log(blobURL)
                                              imageMap.current.set(blobURL,file)
                                              return {
                                                success:1,
                                                file:{
                                                  url:blobURL,                                               
                                                }
                                              }
                                            }
                                          }                                      
                                      },                 
                                  },
                              header:Header,
                              paragraph:Paragraph,
                              List:    {
                                          class: EditorjsList,
                                          inlineToolbar: true,
                                          config: {
                                              defaultStyle: 'unordered'
                                          },
                                      },
                    }},);
        return ()=>{editorInstance?.current?.destroy()}
    },[])

    async function handleData(){
        const data=await editorInstance.current.save()
        data.blocks.forEach(block=>{
          if(block.type==='image'){
            block.data.file.File=imageMap.current.get(block.data.file.url)
          }
        }
        )
        console.log(data)
    }
  return (
    <div>
        <div ref={editorRef} className='container mt-5 border border-1 text-start'></div>
        <button className="btn btn-sm btn-dark" onClick={handleData}>Save</button>
    </div>
    
  )
}

export default BlogEditor