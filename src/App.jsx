import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Approach from "./components/Approach.jsx";
import HomeContent from "./components/HomeContent.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const pageTitles = {
    "/": "Tikkan Lal Khatri & Sons Infratech | Built on dependable service",
    "/services": "Maintenance Services | Tikkan Lal Khatri & Sons Infratech",
    "/about": "About Us | Tikkan Lal Khatri & Sons Infratech",
    "/approach": "Our Approach | Tikkan Lal Khatri & Sons Infratech",
    "/contact": "Contact | Tikkan Lal Khatri & Sons Infratech",
  };

  useEffect(() => {
    document.title = pageTitles[path] || "Page Not Found | Tikkan Lal Khatri & Sons Infratech";
  }, [path]);

  useEffect(() => {
    const updateStickyHeader = () => setIsSticky(window.scrollY > 80);
    updateStickyHeader();
    window.addEventListener("scroll", updateStickyHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateStickyHeader);
  }, []);

  const pages = {
    "/": <><Hero /><HomeContent /></>,
    "/services": <Services />,
    "/about": <About />,
    "/approach": <Approach />,
    "/contact": <Contact />,
  };

  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} currentPath={path} isSticky={isSticky} />
      <main key={path}>
        {pages[path] || <NotFound />}
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <section className="section-wrap py-32 text-center">
      <span className="eyebrow"><span className="eyebrow-dot" /> PAGE NOT FOUND</span>
      <h1 className="section-heading mt-5">This page isn’t here.</h1>
      <a className="button button-dark mt-8" href="/">Return home <span aria-hidden="true">↗</span></a>
    </section>
  );
}

export default App;
