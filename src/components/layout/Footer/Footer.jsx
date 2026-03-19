import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./footer.scss";

const services = [
  { label: "UX/UI Design", href: "#" },
  { label: "Mobile App Development", href: "#" },
  { label: "Web App Development", href: "#" },
  { label: "Cloud Based Product Development", href: "#" },
];

const domainExpertise = [
  { label: "Fintech & Banking", href: "#" },
  { label: "Enterprise & Logistics", href: "#" },
  { label: "E-commerce & Supply-chain", href: "#" },
  { label: "Healthcare & Hospitality", href: "#" },
];

const siteNavCol1 = [
  { label: "Portfolio", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Career", href: "#" },
  { label: "Process", href: "#" },
];

const siteNavCol2 = [
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.03-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.07 9.07 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg width="22" height="20" viewBox="0 0 24 16" fill="currentColor">
        <path d="M0 0h7.5c3.3 0 5.5 1.6 5.5 4.3 0 1.6-.8 2.8-2.1 3.5C13 8.5 14 10 14 12c0 3-2.3 4.7-5.8 4.7H0V0zm3.2 6.5H7c1.5 0 2.3-.7 2.3-1.9S8.5 2.7 7 2.7H3.2v3.8zm0 7.3H7.8c1.7 0 2.6-.8 2.6-2.1s-1-2.1-2.6-2.1H3.2v4.2zM16.5 3.5h6.2v1.8h-6.2V3.5zm6.4 6.5c-.2 2.2-1.8 3.7-4.2 3.7-2.6 0-4.4-1.8-4.4-4.5S16.1 5 18.7 5c2.8 0 4.3 1.8 4.3 4.6v.7h-5.8c.2 1.3.9 2 2 2 .9 0 1.5-.4 1.8-1.3h1.9zm-1.9-2.2c-.1-1.1-.8-1.8-1.9-1.8-1.1 0-1.9.7-2.1 1.8h4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="e-footer">
      <div className="e-footer-top">
        {/* Brand */}
        <div className="e-footer-brand">
          <Link href="/" className="e-footer-logo">
            <Image
              src="/footer-logo.png"
              alt="evoqins"
              width={140}
              height={32}
            />
          </Link>

          <address className="e-footer-address">
            Evoqins pvt. ltd.
            <br />
            BK Circle, Nayak Layout, 8th Phase,
            <br />
            J.P. Nagar, Bengaluru,
            <br />
            Karnataka - 560078
          </address>

          <div className="e-footer-contact">
            <p>
              <span className="e-contact-label">Phone: </span>
              <a href="tel:+916364696980" className="e-contact-link">
                +91 6364 696980
              </a>
            </p>

            <p>
              <span className="e-contact-label">Email: </span>
              <a href="mailto:connect@evoqins.com" className="e-contact-link">
                connect@evoqins.com
              </a>
            </p>
          </div>

          <div className="e-footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="e-social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="e-footer-col">
          <h4 className="e-footer-col-heading">Services</h4>
          <ul className="e-footer-links">
            {services.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="e-footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Domain Expertise */}
        <div className="e-footer-col">
          <h4 className="e-footer-col-heading">Domain Expertise</h4>
          <ul className="e-footer-links">
            {domainExpertise.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="e-footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Site Navigation */}
        <div className="e-footer-col">
          <h4 className="e-footer-col-heading">Site Navigation</h4>

          <div className="e-footer-nav-cols">
            <ul className="e-footer-links">
              {siteNavCol1.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="e-footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="e-footer-links">
              {siteNavCol2.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="e-footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="e-footer-bottom">
        <p className="e-footer-copy">© 2022 Evoqins. All Rights Reserved.</p>

        <div className="e-footer-legal">
          <Link href="#" className="e-footer-legal-link">
            Terms & Conditions
          </Link>

          <span className="e-footer-legal-dot">.</span>

          <Link href="#" className="e-footer-legal-link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
