import Image from "next/image";
import "../Navbar/navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-md navbar-dark container navbar-inner">
        
        {/* Logo */}
        <a className="navbar-brand navbar-logo" href="#">
          <Image src="/logo.png" alt="logo" width={126} height={32} />
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

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
          <div className="navbar-links">
            <a
              className="d-inline-flex align-items-center justify-content-center gap-2"
              href="#"
            >
              <span>Services</span>
              <i className="bi bi-chevron-down"></i>
            </a>

            <a href="#">Portfolio</a>
            <a href="#">About us</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-actions d-none d-md-flex">
          <button className="contact-btn">Let’s talk</button>

          <div className="lang-switch">
            <Image src="/flag.png" width={16} height={12} alt="flag" />
            <span>EN</span>
          </div>

          <Image src="/Frame 111.png" width={16} height={12} alt="menu" />
        </div>
      </nav>
    </header>
  );
}