import React from "react";
import Image from "next/image";
import "./services.scss";

const services = [
  {
    id: 1,
    icon: "/services-icon1.png",
    title: "Fintech platform development",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "#",
  },
  {
    id: 2,
    icon: "/ser2.svg",
    title: "Web app development",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "#",
  },
  {
    id: 3,
    icon: "/ser3.svg",
    title: "Mobile app development",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "#",
  },
];

export default function Services() {
  return (
    <section className="e-services">
      <div className="e-services-inner">
        <h3 className="e-services-heading">Related services</h3>

        <div className="e-services-container">
          {services.map((service) => (
            <div className="e-service-card" key={service.id}>
              <div className="e-card-bg" />

              {/* Card content */}
              <div className="e-card-inner">
                <div className="e-card-icon">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                  />
                </div>

                <h4 className="e-card-title">{service.title}</h4>
                <p className="e-card-para">{service.description}</p>

                <a href={service.link} className="e-card-link">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}