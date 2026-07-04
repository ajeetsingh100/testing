import React, { useEffect, useState } from 'react'
import logo from '../assets/b1.jpg'
import { useParams } from 'react-router-dom'
import { apiconnector } from '../services/apiconnector'
import { SERVER_API } from '../services/api'

const ViewBlog = () => {
    const param=useParams()
    const [blog,setBlog]=useState([])
    const [recentBlog,setRecentBlog]=useState([])

    function changeDateFormat(date){
        const newDate=new Date(date)
        const changedFormat=newDate.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                });
        return changedFormat
    }
    
    async function loadBlog(){
        const responseBlog=await apiconnector('get',`${SERVER_API.MAIN_SERVER}/api/v1/blog/find-blog?blogId=${param.blogId}`)
        const responseRecentBlog=await apiconnector('get',`${SERVER_API.MAIN_SERVER}/api/v1/blog/recent-blog`)
        console.log('loadblog is called')
        console.log(responseRecentBlog,responseBlog)
        setRecentBlog(responseRecentBlog.data.recentBlog)
        setBlog(responseBlog.data.blog)
    }

    useEffect(()=>{
        loadBlog()
    },[])
  return (
    <div>
        <div className='container-fluid bg-website-primary'>
            <div className="container w-75 py-4 px-2 ">
                <div className='text-start'>
                    <div className='d-flex flex-column gap-2 bg-white p-3 rounded-pill'>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <span className='bi bi-house-door me-1 small fw-bold'></span>
                                <span className='bi bi-chevron-right ' style={{fontSize:'12px',fontStyle:"bold"}} ></span>
                            </div>                        
                            <span style={{fontSize:'12px'}}>Article</span>
                        </div>
                         <div className='fw-bold' style={{color:'var(--website-primary',fontSize:'12px'}}> 
                            {
                                        blog.blog?.map(block=>{
                                            if(block.type==='header')
                                                return block.data.text
                                        })
                                   }
                         </div>
                    </div>
                    <div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-8">
                                <h3>
                                   {
                                        blog.blog?.map(block=>{
                                            if(block.type==='header')
                                                return block.data.text
                                        })
                                   }
                                </h3>
                            </div>
                        </div>
                    </div>
                                     
                </div>
                
                

            </div>
           

          
        </div>
        {/* end of header */}

          {/* start of main */}
            <div className='w-75 container  mt-3 px-2 py-4'>
                    <div className='row '>
                        <div className="col-12 col-md-8 small text-start " >
                            {blog.blog?.map((block, index) => {
        
        switch (block.type) {

          case "paragraph":
            return <p key={index}>{block.data.text}</p>;        


          case "image":
            return (
              <img src={block.data?.file?.url} height={440} width={100} className=' w-100 mb-3' alt="" />
            );

      

          case "List":
            return (
              <ul key={index} className='d-flex gap-1 flex-column'>
                {block.data.items.map((item, i) => (
                  <li key={i}>{item.content}</li>
                ))}
              </ul>
            );
                
          case "header":
            if(index>0)
            return (<h4 key={index}>{block.data.text}</h4>);

          default:
            return null;
        }
      })}
                        </div>
                        <div className="col-12 col-md-4 text-start">
                            <div className='card border-0  '>
                                <div className="card-body">
                                    <button className="w-100 btn btn-outline-primary px-1 py-2 border rounded-pill border-primary border-2">
                                        Book Appointment 
                                    </button>
                                </div>
                               
                            </div>
                            {/*  */}
                             <h5 className='mt-5 mb-3'>Recent Posts</h5>
                             
                             {recentBlog?.map((blog, index) => {
                const header = blog.blog?.find(block => block.type === "header");
                  const title = header?.data?.text
                    ?.replace(/<[^>]*>/g, "") // Agar HTML ho to remove
                    ?.trim();

                  const shortTitle =
                    title?.length > 60
                      ? title.slice(0, 60).split(" ").slice(0, -1).join(" ") + "..."
                      : title;
                  const image = blog.blog?.find(block => block.type === "image");
                  const paragraph = blog.blog?.find(block => block.type === "paragraph");
                  const description = paragraph?.data?.text
                  ?.replace(/<[^>]*>/g, "") // HTML tags remove
                  ?.trim();

                const shortDescription =
                  description?.length > 120
                    ? description.slice(0, 120).split(" ").slice(0, -1).join(" ") + "..."
                    : description;
                return (
                <div className="card text-start mb-4">
              <img
                src={image?.data?.file?.url}
                className="card-img-top"
                alt={header?.data?.text || "Blog"}
              />

              <div className="card-body small">
                <h6 className="card-title">
                  {shortTitle}
                </h6>
                <div className='small text-muted'>
                    {changeDateFormat(blog.createdAt)}
                </div>

                <p className="card-text ">
                  {shortDescription}...
                </p>

                <a
                  href={`/view-blog/${blog._id}`}
                  className="btn text-white btn-sm"
                  style={{ backgroundColor: "var(--website-primary)" }}
                >
                  Read More
                </a>
              </div>
            </div>
                              )})}
                               
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ViewBlog