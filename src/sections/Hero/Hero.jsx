"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import "./hero.scss";

const Hero = () => {
  const scrollRef = useRef(null);
  const lastImgRef = useRef(null);
  const rafRef = useRef(null);
  const currentTranslateRef = useRef(0);   
  const targetTranslateRef  = useRef(0);  

 useEffect(() => {

    const LERP_FACTOR = 0.12; 

    const lerp = (a, b, t) => a + (b - a) * t;

    const applyIconParallax = (scrollY) => {
      const unit = document.querySelector(".heroVisualUnit");
      const unitWidth = unit ? unit.offsetWidth : window.innerWidth;
      const moveAmount = Math.min((scrollY / unitWidth) * 70, 30);
      
      const moves = [
        [".iconGroupLeft",    `-${moveAmount}px`],
        [".iconGroupRight",   `${moveAmount}px`],
        [".floatingIcon.react",   `-${moveAmount}px`],
        [".floatingIcon.python",  `-${moveAmount}px`],
        [".floatingIcon.android", `${moveAmount}px`],
        [".floatingIcon.mysql",   `${moveAmount}px`],
      ];

      moves.forEach(([selector, value]) => {
        const el = document.querySelector(selector);
        if (el) el.style.transform = `translateX(${value})`;
      });
    };

    const getMaxTranslate = () => {
      if (!scrollRef.current || !lastImgRef.current) return 0;
      const screenEl = scrollRef.current.closest(".screen");
      if (!screenEl) return 0;
      const screenHeight = screenEl.clientHeight;
      const { top }    = scrollRef.current.getBoundingClientRect();
      const { bottom } = lastImgRef.current.getBoundingClientRect();
      return Math.max(0, bottom - top - screenHeight);
    };

    const tick = () => {
      const scrollY = window.scrollY;

      if (scrollRef.current) {

        const multiplier =
          window.innerWidth <= 480 ? 1.5 :  
          window.innerWidth <= 768 ? 1.2 : 
          1.0;                              

        const maxTranslate = getMaxTranslate();
        const desired = Math.min(scrollY * multiplier, maxTranslate);
        targetTranslateRef.current = desired;
      }

      currentTranslateRef.current = lerp(
        currentTranslateRef.current,
        targetTranslateRef.current,
        LERP_FACTOR
      );

      if (scrollRef.current) {
        const diff = Math.abs(currentTranslateRef.current - targetTranslateRef.current);
        
        scrollRef.current.style.transform =
          `translate3d(0, -${currentTranslateRef.current.toFixed(2)}px, 0)`;

        if (diff < 0.01) {
          scrollRef.current.style.transform =
            `translate3d(0, -${targetTranslateRef.current}px, 0)`;
        }
      }

      applyIconParallax(scrollY);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div>
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
  
              {/* ── All icons + phone as one scaling unit ── */}
              <div className="heroVisualUnit">
  
                {/* Phone */}
                <div className="phoneWrapper">
                  <div className="iphone13Pro">
                    <img src="/phonebody.png" className="phoneBodyFrame" alt="" />
                    <div className="screen">
                      <div className="scrollContent" ref={scrollRef}>
                        <img src="/phoneimage2.png" className="screenImg" alt="" />
                        <div className="screenImgClip">
                          <img
                            src="/phone_image2.png"
                            className="screenImg screenImgSecond"
                            ref={lastImgRef}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <img src="/phonenotch.png" className="notch" alt="" />
                  </div>
                </div>
  
                {/* LEFT GROUP: Bulb → connector → Window */}
                <div className="iconGroupLeft">
                  <div className="floatingIcon bulb">
                    <img src="/bulb1.png" alt="Bulb" />
                  </div>
  
                  <img
                    src="/arrowline.png"
                    alt=""
                    className="connectorImg bulbToWindow"
                  />
  
                  <div className="floatingIcon window">
                    <img src="/window.png" alt="Window" />
                  </div>
                </div>
  
                {/* RIGHT GROUP: VSCode → connector → Rocket */}
                <div className="iconGroupRight">
                  <div className="floatingIcon vscode">
                    <img src="/vscode.png" alt="VSCode" />
                  </div>
  
                  <img
                    src="/arrowline.png"
                    alt=""
                    className="connectorImg vscodeToRocket"
                  />
  
                  <div className="floatingIcon rocket">
                    <img src="/rocket1.png" alt="Rocket" />
                  </div>
                </div>
  
                {/* Standalone floating icons */}
                <div className="floatingIcon react">
                  <img src="/react1.png" alt="React" />
                </div>
  
                <div className="floatingIcon python">
                  <img src="/python1.png" alt="Python" />
                </div>
  
                <div className="floatingIcon android">
                  <img src="/android1.png" alt="Android" />
                </div>
  
                <div className="floatingIcon mysql">
                  <img src="/sql1.png" alt="MySQL" />
                </div>
  
              </div>
              {/* ── end heroVisualUnit ── */}
  
            </div>
          </div>
        </div>
  
        <div className="heroGridOverlay" />
      </section>
      <div className="heroSpacer" />
    </div>
  );
};

export default Hero;