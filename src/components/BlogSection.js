import React from "react";


const blogs = [
  {
    date: "July 11, 2025",
    title: "Robotic Surgery for Choledochal Cyst in Children",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
  },
  {
    date: "June 26, 2025",
    title: "Robotic Pyeloplasty in Children – Precision Kidney Surgery",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&auto=format&fit=crop",
  },
  {
    date: "June 10, 2025",
    title: "Advanced Pediatric Urology Treatments",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop",
  },
  {
    date: "May 28, 2025",
    title: "Minimally Invasive Surgery for Kids",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop",
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section py-5">
      <div className="container">

        {/* Heading */}
        <h2 className="text-center fw-bold mb-4">
          From <span className="text-primary">Our Blog</span>
        </h2>

        {/* Horizontal Scroll */}
        <div className="scroll-container">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt="" />
              <div className="blog-content">
                <p className="date">📅 {blog.date}</p>
                <h5>{blog.title}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button className="btn btn-primary px-4 py-2">
            More Blogs →
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;