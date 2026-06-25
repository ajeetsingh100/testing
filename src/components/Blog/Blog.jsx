import React from 'react'
import img1 from '../../assets/b1.jpg'
import img2 from '../../assets/b2.jpg'


const Blog = () => {
      const cards=[
        {
          img:img1,
          title:'Laparoscopic Colorectal Surgery: Why It’s Better for Your Recovery',
          description:'What Is Laparoscopic Colorectal Surgery? Laparoscopic colorectal surgery is a type of minimally invasive colorectal surgery. In this method, doctors use small cuts and special'
        },
        {
          img:img2,
          title:'What Is Preeclampsia? Signs Pregnant Women Should Never Ignore',
          description:'What is Preeclampsia? Preeclampsia is a serious condition that can happen during pregnancy. It usually starts after the 20th.'
        },
        {
          img:img1,
          title:'Appendectomy Surgery: What to Expect Before, During, and After',
          description:'What is an Appendectomy? An appendectomy is a surgery to remove the appendix. The appendix is a small, finger-shaped pouch attached to your large.'
        } 
    ]
  return (
    <div>
        <div className="container  text-start">           
            <h2 >Latest Articles</h2>
            <div className='row gy-3 mt-4'>
               {
                  cards.map(card=>
                    <div className='col-md-6 col-lg-4'>
                      <div class="card" >
                        <img src={card.img} class="card-img-thu" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{card.title}</h5>
                          <p class="card-text">{card.description}</p>
                          <a href="#" class="btn text-white" style={{backgroundColor:'var(--website-primary)'}} >Read more</a>
                        </div>
                     </div>
                    </div>
                  )
               }
            </div>
        </div>
    </div>
  )
}

export default Blog