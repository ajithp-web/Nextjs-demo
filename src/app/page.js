import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Sticky_nav from "@/components/layout/StickyNav/StickyNav";
import Benefits from "@/sections/Benefits/Benefits";
import Blog from "@/sections/Blog/Blog";
import Contact from "@/sections/Contact/Contact";
import CTA from "@/sections/CTA/CTA";
import FAQ from "@/sections/FAQ/FAQ";
import Hero from "@/sections/Hero/Hero";
import Process from "@/sections/Process/Process";
import Projects from "@/sections/Projects/Projects";
import Services from "@/sections/Services/Services";
import Solutions from "@/sections/Solutions/Solutions";
import Stats from "@/sections/Stats/Stats";
import Subscribe from "@/sections/Subscribe/Subscribe";
import Technologies from "@/sections/Technologies/Technologies";

export default function Home() {

  
  return (
    <>
      <div>
        <div className="hero-wrapper">
          <Navbar />
          <Hero />
        </div>
        <Sticky_nav />
        <Solutions />
        <Benefits />
        <Process />
        <Technologies />
        <Projects />
        <Contact />
        <Stats />
        <FAQ />
        <Services />
        <CTA />
        <Blog />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
