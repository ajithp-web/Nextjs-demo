import Image from "next/image";
import "../Navbar/navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-md navbar-dark container navbar-inner">
        
        {/* Logo */}
        <a className="navbar-brand navbar-logo" href="#">
          <Image src="/logo.png" alt="logo" width={126} height={32} aria-label="Company Logo" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links & Actions Wrapper */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-links">
            <a className="nav-item-link" href="#">
              <span>Services</span>
              <i className="bi bi-chevron-down ms-2"></i>
            </a>
            <a className="nav-item-link" href="#">Portfolio</a>
            <a className="nav-item-link" href="#">About us</a>
          </div>

          {/* This section now shows inside the menu on mobile AND on the right on desktop */}
          <div className="navbar-actions">
            <button className="contact-btn">Let’s talk</button>

            <div className="lang-switch">
              <Image src="/flag.png" width={16} height={12} alt="flag" />
              <span>EN</span>
            </div>

            <Image src="/Frame 111.png" width={16} height={12} alt="menu" />
          </div>
        </div>
      </nav>
    </header>
  );
}