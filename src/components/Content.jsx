import React from 'react'

const Content = ({title,sections}) => {
  return (
    <div className='text-start'>
        <h1>{title}</h1>
        {sections.map((section, index) => {
        
        switch (section.type) {

          case "paragraph":
            return <p key={index}>{section.content}</p>;

          case "heading":
            return <h4 key={index}>{section.content}</h4>;

          case "highlight":
            return (
              <h5 key={index} className="text-primary fw-bold">
                {section.content}
              </h5>
            );

          case "list":
            return (
              <ul key={index}>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "table":
            return (
             <div>
               {section.content.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
             </div>
            );

          default:
            return null;
        }
      })}
    </div>
  )
}

export default Content