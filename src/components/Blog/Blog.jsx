import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/b1.jpg'
import img2 from '../../assets/b2.jpg'
import { apiconnector } from '../../services/apiconnector'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SERVER_API } from '../../services/api';


     

const Blog = () => {
  const [blogs,setBlogs]=useState([])

  const swiperRef3 = useRef(null);
  async function loadBlogs(){
    const response=await apiconnector('get',`${SERVER_API.MAIN_SERVER}/api/v1/blog/get-blog`)
    setBlogs(response.data.blog)
    console.log(response.data.blog[0]._id)
  }

  useEffect(()=>{
    loadBlogs()
  },[])

function changeDateFomat(date){
  const newDate=new Date(date)
    const changedFormat=newDate.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                });
        return changedFormat
    }

  
  return (
    <div>

      
        <div className="container  text-start">           
            <h2 >Latest Articles</h2>
             <div className="d-flex gap-2 justify-content-end">
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => swiperRef3.current?.slidePrev()}
              >
                  <i className="bi bi-arrow-left"></i>
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => swiperRef3.current?.slideNext()}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
             </div>
         </div>
        <div className="container mt-3">
              <Swiper
              onSwiper={(swiper) => (swiperRef3.current = swiper)}

              // ✅ Fix resize issue
              onResize={() => swiperRef3.current?.update()}
              observer={true}
              observeParents={true}

              slidesPerView={1}      // ✅ Mobile default
              spaceBetween={15}
              grabCursor={true}

              breakpoints={{
                576: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                  centeredSlides: true
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: false
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 25
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
            >
              {blogs?.map((blog, index) => {
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
                return (<SwiperSlide key={index}>
                <div className="card text-start">
              <img
                src={image?.data?.file?.url}
                className="card-img-top"
                alt={header?.data?.text || "Blog"}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {shortTitle}
                </h5>
                <div className="text-muted small">
                  {changeDateFomat(blog.createdAt)}
                </div>

                <p className="card-text">
                  {shortDescription}...
                </p>

                <a
                  href={`view-blog/${blog._id}`}
                  className="btn text-white"
                  style={{ backgroundColor: "var(--website-primary)" }}
                >
                  Read More
                </a>
              </div>
            </div>
                </SwiperSlide>)
              })}
            </Swiper>
        </div>  
  </div>
 
  )
}

export default Blog