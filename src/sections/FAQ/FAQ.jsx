"use client";
import React, { useState } from "react";
import "./faq.scss";

const faqs = [
  {
    id: 1,
    question: "How long does it take to create a web app?",
    answer:
      "The timeline for web app development varies depending on the requirements and complexity of the project.",
  },
  {
    id: 2,
    question: "What is the average cost of developing a web app?",
    answer:
      "The cost of developing a web app depends on several factors including the complexity, features, and the development team you choose.",
  },
  {
    id: 3,
    question:
      "What are the key benefits of web app development for businesses?",
    answer:
      "Web apps offer businesses increased reach, lower maintenance costs, cross-platform compatibility, and easier scalability compared to native apps.",
  },
  {
    id: 4,
    question: "Why choose Evoqins for your web app development needs?",
    answer:
      "Evoqins brings years of expertise, a proven track record, and a dedicated team that ensures your project is delivered on time and within budget.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "We offer flexible billing options including milestone-based payments, monthly retainers, and fixed-price contracts depending on your project needs.",
  },
  {
    id: 6,
    question: "Do you offer wearable device app services?",
    answer:
      "Yes, we develop apps for wearable devices including smartwatches and fitness trackers across multiple platforms.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="e-faq">
      {/* Header */}
      <div className="e-faq-header">
        <h3 className="e-faq-heading">Frequently asked questions</h3>
        <p className="e-faq-para">Got questions? We&apos;ve got answers!</p>
      </div>

      {/* Accordion */}
      <div className="e-faq-list">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`e-faq-item${isOpen ? " is-open" : ""}`}
            >
              <button
                className="e-faq-question"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="e-faq-icon">
                  {isOpen ? (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="13" stroke="#9ca3af" strokeWidth="1.5" />
                      <line x1="8" y1="14" x2="20" y2="14" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="13" stroke="#9ca3af" strokeWidth="1.5" />
                      <line x1="14" y1="8" x2="14" y2="20" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="8" y1="14" x2="20" y2="14" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </button>

              {isOpen && <p className="e-faq-answer">{faq.answer}</p>}

              <div className="e-faq-divider" />
            </div>
          );
        })}
      </div>
    </section>
  );
}