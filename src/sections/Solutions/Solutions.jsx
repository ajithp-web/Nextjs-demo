import React from "react";
import "./solutions.scss";

export default function Solutions() {
  const cards = [
    {
      title: "Product strategy & consulting",
      desc: "Understanding business goals and market trends, including competitive analysis, defining KPIs and a clear roadmap.",
      img:"/sol-img.png"
    },
    {
      title: "Digital product optimization",
      desc: "Identify areas of improvement to boost user experience by improving page load times and streamlining navigation.",
      img:"/so2.png"
    },
    {
      title: "Product design & prototyping",
      desc: "Detailed wireframes, interactive prototypes, and high-fidelity designs that resonate with your brand through feedback.",
      img:"/so3.png"
    },
    {
      title: "Software development",
      desc: "Build high-quality digital solutions, from initial coding to deployment and beyond, by focusing on meeting user expectations.",
      img:"/so4.png"
    },
  ];

  return (
    <div className="e-solutions">

      <div className="grid-bg" />

      {/*  Centered content */}
      <div className="e-solutions__inner">
        <h3 className="e-sol-head">Digital product solutions</h3>

        <p className="e-sol-para">
          Transforming business ideas into end-to-end digital products using
          design thinking and technology.
        </p>

        <div className="card-container">
          {cards.map((card, i) => (
            <div className="card" key={i}>
              <div className="card__content">
                <h4 className="card__title">{card.title}</h4>
                <p className="card__desc">{card.desc}</p>
                <a className="card__link" href="#">
                  Learn more
                  <img src="/arrow-right.svg" alt="" className="card__arrow" />
                </a>
              </div>

              <div className="card__image-wrap">
                <img src={card?.img} alt="" className="card__img" />
              </div>
            </div>
          ))}
        </div>
        
      </div>

    </div>
  );
}



