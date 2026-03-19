import React from "react";
import styles from "./technologies.scss";

const ROW1 = [
  { src: "/tec10.png", alt: "Next.js" },   
  { src: "/flutter.png", alt: "Flutter" },
  { src: "/tec8.svg", alt: "Python" },
  { src: "/tec7.svg", alt: "MongoDB" },
  { src: "/tec6.svg", alt: "Node.js" },
  { src: "/tec5.svg", alt: "Google Cloud" },
];

const ROW2 = [
  { src: "/tec4.svg", alt: "PostgreSQL" },
  { src: "/tec3.svg", alt: "MySQL" },
  { src: "/tec2.svg", alt: "React" },
  { src: "/android.svg", alt: "Android" },
  { src: "/aws-2.svg", alt: "AWS" },
];

export default function Technologies() {
  return (
    <section className="e-technologies">
      <div className="e-t-header">
        <h3 className="e-t-heading">Technologies We Use</h3>
        <p className="e-t-para">
          To deliver robust, scalable, and innovative solutions, we leverage a
          variety of cutting-edge tools, languages, and framework
        </p>
      </div>

      <div className="e-image-wrapper">
        <div className="e-image-row">
          {ROW1.map((logo) => (
            <div className="e-logo-item" key={logo.alt}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
        <div className="e-image-row">
          {ROW2.map((logo) => (
            <div className="e-logo-item" key={logo.alt}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}