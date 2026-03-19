"use client";
import React from "react";
import "./subscribe.scss"; 
export default function Subscribe() {
  return (
    <section className="e-subscribe">
      <div className="e-subscribe-inner">
        {/* Heading */}
        <h3 className="e-subscribe-heading">
          Subscribe and keep updated
        </h3>

        {/* Subtext */}
        <p className="e-subscribe-para">
          Get weekly update about our product on your email, no spam
          <br />
          guaranteed we promise ✌️
        </p>

        {/* Email form */}
        <div className="e-subscribe-form">
          <input
            type="email"
            className="e-subscribe-input"
            placeholder="Enter your email"
          />
          <button className="e-subscribe-button" type="button">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}