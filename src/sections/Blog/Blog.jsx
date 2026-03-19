import React from "react";
import Image from "next/image";
import "./blog.scss";

const blogs = [
  {
    id: 1,
    image: "/blog1.png",
    readTime: "6 min read",
    category: "Product Development",
    title: "Why is a full-stack development company the right solution for your business growth?",
    link: "#",
  },
  {
    id: 2,
    image: "/blog2.png",
    readTime: "6 min read",
    category: "Product Development",
    title: "Unleashing the power of custom software development for your business",
    link: "#",
  },
  {
    id: 3,
    image: "/blog3.png",
    readTime: "6 min read",
    category: "Product Development",
    title: "How did Evoqins earn its reputation as the best web app development company in India?",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section className="e-blog">
      <div className="e-blog-inner">
        <h3 className="e-blog-heading">Related blog</h3>

        <div className="e-blog-container">
          {blogs.map((blog) => (
            <a href={blog.link} key={blog.id} className="e-blog-card">

              {/* Thumbnail */}
              <div className="e-blog-thumb">
                <div className="e-blog-corner" />
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="e-blog-img"
                />
              </div>

              {/* Meta row */}
              <div className="e-blog-meta">
                <span className="e-blog-time">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#9ca3af" strokeWidth="1.2" />
                    <path d="M7 4v3.5l2 1.5" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {blog.readTime}
                </span>
                <span className="e-blog-dot">•</span>
                <span className="e-blog-category">{blog.category}</span>
                <span className="e-blog-arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* Title */}
              <h4 className="e-blog-title">{blog.title}</h4>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}