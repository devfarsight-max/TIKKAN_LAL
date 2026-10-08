import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Our approach", "/approach"],
];

function Navbar({ menuOpen, setMenuOpen, currentPath, isSticky }) {
  return (
    <>
      {isSticky && <div className="header-spacer" aria-hidden="true" />}
      <motion.header
        className={`site-header ${isSticky ? "is-sticky" : ""}`}
        initial={false}
        animate={{ y: isSticky ? [-14, 0] : 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
      <nav className="section-wrap flex h-[82px] items-center justify-between" aria-label="Main navigation">
        <a className="company-logo-link" href="/" aria-label="Tikkan Lal Khatri and Sons home">
          <img className="company-logo" src="/tikkan-infra-logo.png" alt="TK Infra — Tikkan Lal Khatri & Sons Infratech Private Limited" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a key={label} className={`nav-link ${currentPath === href ? "nav-link-active" : ""}`} href={href} aria-current={currentPath === href ? "page" : undefined}>{label}</a>
          ))}
          <a href="/contact" className={`button button-dark !px-5 !py-3 !text-[13px] ${currentPath === "/contact" ? "hidden" : ""}`}>Get in touch <span aria-hidden="true">↗</span></a>
        </div>

        <button
          className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-forest md:hidden"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-full overflow-hidden border-t border-black/5 bg-paper px-6 shadow-lg md:hidden"
          >
            <div className="section-wrap flex flex-col py-3">
              {links.map(([label, href]) => (
                <a key={label} className={`border-b border-black/5 py-4 font-medium ${currentPath === href ? "text-moss" : ""}`} href={href} onClick={() => setMenuOpen(false)} aria-current={currentPath === href ? "page" : undefined}>{label}</a>
              ))}
              {currentPath !== "/contact" && <a className="py-4 font-semibold text-forest" href="/contact" onClick={() => setMenuOpen(false)}>Get in touch ↗</a>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;
