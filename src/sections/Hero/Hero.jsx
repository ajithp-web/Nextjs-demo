"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import "./hero.scss";
import Sticky_nav from "../../components/layout/StickyNav/StickyNav";

const Hero = () => {
  // In your JSX, add a ref to track the last image
  const scrollRef = useRef(null);
  const lastImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollRef.current) {
        const screenEl = scrollRef.current.closest(".screen");
        if (!screenEl) return;

        const screenHeight = screenEl.clientHeight;

        let maxTranslate = 0;
        if (lastImgRef.current) {
          const scrollContentTop =
            scrollRef.current.getBoundingClientRect().top;
          const lastImgBottom =
            lastImgRef.current.getBoundingClientRect().bottom;
          maxTranslate = Math.max(
            0,
            lastImgBottom - scrollContentTop - screenHeight,
          );
        }

        const multiplier =
          window.innerWidth <= 480 ? 0.8 : window.innerWidth <= 768 ? 0.6 : 0.4;

        const translateY = Math.min(scrollY * multiplier, maxTranslate);
        scrollRef.current.style.transform = `translateY(-${translateY}px)`;
      }

      const moveAmount = Math.min(scrollY * 0.1, 30);

      const leftGroup = document.querySelector(".iconGroupLeft");
      if (leftGroup) leftGroup.style.transform = `translateX(-${moveAmount}px)`;

      const rightGroup = document.querySelector(".iconGroupRight");
      if (rightGroup)
        rightGroup.style.transform = `translateX(${moveAmount}px)`;

      const react = document.querySelector(".floatingIcon.react");
      const python = document.querySelector(".floatingIcon.python");
      if (react) react.style.transform = `translateX(-${moveAmount}px)`;
      if (python) python.style.transform = `translateX(-${moveAmount}px)`;

      const android = document.querySelector(".floatingIcon.android");
      const mysql = document.querySelector(".floatingIcon.mysql");
      if (android) android.style.transform = `translateX(${moveAmount}px)`;
      if (mysql) mysql.style.transform = `translateX(${moveAmount}px)`;
    };

    const timeout = setTimeout(handleScroll, 200);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="hero">
      <div className="heroInner">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumbLink">
            Home
          </Link>
          <span className="breadcrumbSeparator">›</span>
          <Link href="/services" className="breadcrumbLink">
            All services
          </Link>
          <span className="breadcrumbSeparator">›</span>
          <span className="breadcrumbCurrent">Digital product development</span>
        </nav>

        {/* Content */}
        <div className="heroContent">
          <h1 className="heroHeading">
            Pioneer in{" "}
            <span className="heroHeadingGradient">Digital Product</span>{" "}
            Development
          </h1>

          <p className="heroDesc">
            Strategic ideation and flawless execution to create digital
            solutions that elevate brands.
          </p>

          <button className="heroBtn">Let's talk</button>

          {/* Visual */}
          <div className="heroVisual">
            {/* Phone */}
            <div className="phoneWrapper">
              <div className="iphone13Pro">
                <img src="/phonebody.png" className="phoneBodyFrame" />
                <div className="screen">
                  <div className="scrollContent" ref={scrollRef}>
                    <img src="/phoneimage2.png" className="screenImg" />
                    <div className="screenImgClip">
                      <img
                        src="/phone_image2.png"
                        className="screenImg screenImgSecond"
                        ref={lastImgRef}
                      />
                    </div>
                  </div>
                </div>
                <img src="/phonenotch.png" className="notch" />
              </div>
            </div>

            <div className="iconGroupLeft">
              <div className="floatingIcon bulb">
                <img src="/bulb1.png" />
              </div>

              <img
                src="/arrowline.png"
                alt="bulb to window"
                className="connectorImg bulbToWindow"
              />

              <div className="floatingIcon window">
                <div className="iconBox">
                  <img src="/window.png" />
                </div>
              </div>
            </div>

            {/* ===== RIGHT GROUP: VSCode + Arrow + Rocket ===== */}
            <div className="iconGroupRight">
              <div className="floatingIcon vscode">
                <div className="iconBox">
                  <img src="/vscode.png" />
                </div>
              </div>

              <img
                src="/arrowline.png"
                alt="vscode to rocket"
                className="connectorImg vscodeToRocket"
              />

              <div className="floatingIcon rocket">
                <img src="/rocket1.png" />
              </div>
            </div>

            {/* Standalone Floating Icons */}
            <div className="floatingIcon react">
              <img src="/react1.png" />
            </div>

            <div className="floatingIcon python">
              <img src="/python1.png" />
            </div>

            <div className="floatingIcon android">
              <img src="/android1.png" />
            </div>

            <div className="floatingIcon mysql">
              <img src="/sql1.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="heroGridOverlay" />
    </section>
  );
};

export default Hero;
