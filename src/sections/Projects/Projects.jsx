import React from "react";
import Image from "next/image";
import "./projects.scss";

const projects = [
  {
    id: 1,
    bg: "card-purple",
    tag: "Restack",
    title:
      "Mutual fund website & mobile app development for financial institutions.",
    image: "/pimages.png",
  },
  {
    id: 2,
    bg: "card-violet",
    tag: "Restack",
    title:
      "Mutual fund website & mobile app development for financial institutions.",
    image: "/pimages.png",
  },
  {
    id: 3,
    bg: "card-blue",
    tag: "Restack",
    title:
      "Mutual fund website & mobile app development for financial institutions.",
    image: "/pimages.png",
  },
];

export default function Projects() {
  return (
    <section className="e-projects">
      <div className="e-projects-inner">
        <div className="e-pro-header">
          <h3 className="e-pro-heading">Recent projects</h3>
          <p className="e-pro-para">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="e-pro-container">
          {projects.map((project) => (
            <div className={`e-card ${project.bg}`} key={project.id}>
              {/* Image mockup area */}
              <div className="e-card-image">
                <Image
                  src={project.image}
                  alt="Project mockup"
                  width={184}
                  height={182}
                  className="e-img"
                />
              </div>

              {/* Card content */}
              <div className="e-card-content">
                <span className="e-pro-tag">{project.tag}</span>
                <h4 className="e-pro-title">{project.title}</h4>
                <button className="e-pro-button">
                  View project&nbsp;&nbsp;→
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}