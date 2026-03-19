import React from "react";
import styles from "./cta.scss";

export default function CTA() {
  return (
    <section className="e-cta">
      {/* Yellow corner accent */}
      <div className="e-cta-corner" />

      {/* Grid overlay */}
      <div className="e-cta-grid" />

      {/* Content */}
      <div className="e-cta-inner">
        <h3 className="e-cta-heading">
          Let's build the next<br />big thing!
        </h3>
        <button className="e-cta-button">Contact Us</button>
      </div>
    </section>
  );
}