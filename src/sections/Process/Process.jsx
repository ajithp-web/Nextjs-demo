import Image from "next/image";
import React from "react";
import "./process.scss";

export default function Process() {
  const processData = [
    {
      id: 1,
      img: "/proccess1.png",
      title: "Step 1: Discovery & strategy",
      text: "Understand business ideas, analyze market potentials and define key product requirements. A structured project vision and priority backlog ensure a clear development roadmap.",
    },
    {
      id: 2,
      img: "/procees2.png",
      title: "Step 2: Product design & architecture",
      text: "Wireframing will provide the visual representation, while infrastructure architecture will ensure scalability and security. Project estimation helps optimize resources, timelines, and costs.",
    },
    {
      id: 3,
      img: "/process3.png",
      title: "Step 3: Development & testing",
      text: "MVP development to conduct early testing with essential features, while proof of concept ensures technical feasibility. With the help of real-user feedback, the product will be refined.",
    },
    {
      id: 4,
      img: "/process4.png",
      title: "Step 4: Deployment & continuous optimization",
      text: "Thorough testing eliminates bugs and ensures smooth operation before deployment. Ongoing maintenance keeps the product updated, secure, and competitive in an evolving market.",
    },
  ];

  return (
    <section className="e-process">
      <div className="e-p-header">
        <h3 className="e-p-heading">
          Our Digital Product Development Process
        </h3>

        <p className="e-p-header-para">
          We take a strategic, user-focused approach to build innovative and
          scalable digital products that drive real impact.
        </p>
      </div>

      <div className="e-p-container">
        {processData.map((item) => (
          <div className="e-p-card" key={item.id}>
            <div className="number-circle">{item.id}</div>

            <Image
              src={item.img}
              alt="process"
              width={280}
              height={191}
              className="e-p-img"
            />

            <h4 className="e-p-title">{item.title}</h4>

            <p className="e-p-para">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="process-btn">
        <button>Get a quote</button>
      </div>
    </section>
  );
}

