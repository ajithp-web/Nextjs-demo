import React from "react";
import Image from "next/image";
import styles from "./stats.scss";

const metrics = [
  { value: "50M+", label: "End customers' lives touched" },
  { value: "120+", label: "Satisfied clients and counting" },
  { value: "87%",  label: "Recurring customers" },
];

export default function Stats() {
  return (
    <div className="e-stats">

      {/* Header */}
      <div className="e-stats-head">
        <div className="e-stats-icon">
          <Image src="/Featured icon.svg" alt="icon" width={24} height={24} />
        </div>
        <h3 className="e-stats-heading">
          Why Evoqins is the best in E-commerce Development game?
        </h3>
        <p className="e-stats-para">
          Evoqins, as a trusted mobile app development company, likely possesses
          several key attributes that contribute to its reputation
        </p>
      </div>

      <div className="e-stats-container">
        {metrics.map((metric, index) => (
          <React.Fragment key={metric.value}>
            <div className="e-stats-info">
              <h3 className="e-stats-info-heading">{metric.value}</h3>
              <p className="e-stats-info-para">{metric.label}</p>
            </div>
            {index < metrics.length - 1 && (
              <div className="e-stats-divider" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* CTA */}
      <button className="e-stats-button">Let's Talk</button>
    </div>
  );
}