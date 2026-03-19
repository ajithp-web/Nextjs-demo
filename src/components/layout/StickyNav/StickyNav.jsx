"use client";
import React, { useRef, useState } from "react";
import "./StickyNav.scss";

const NAV_LINKS = [
  "Digital Product development",
  "Expertise",
  "How it helps",
  "Process",
  "Recent projects",
  "Enquiry",
  "FAQs",
  "Related Services",
  "Blogs",
];

export default function StickyNav() {
  const [activeIndex, setActiveIndex] = useState(1); 
  const navRef = useRef(null);

  return (
    <div className="e-sec-nav">
      <div className="e-navbar-links">
        <div className="e-navbar-links-inner">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              className={[
                i === 0 ? "is-brand" : "",
                i === activeIndex ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={(e) => {
                e.preventDefault();
                if (i !== 0) setActiveIndex(i);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}