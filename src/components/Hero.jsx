import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero-section relative">
      <div className="section-wrap relative z-10 grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.03fr_.97fr] lg:py-20">
        <div className="max-w-[610px]">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="eyebrow"><span className="eyebrow-dot" /> PUBLIC SPACES. EVERYDAY CARE.</span>
          </motion.div>
          <motion.h1
            className="mt-7 font-display text-[clamp(3.2rem,6.7vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-forest"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Better spaces, <span className="text-moss">built on</span> dependable service.
          </motion.h1>
          <motion.p
            className="mt-7 max-w-[480px] text-base leading-7 text-ink/65 sm:text-lg sm:leading-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            We keep essential places working, welcoming and well cared for—with dependable horticulture, sanitation and civil maintenance.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap items-center gap-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }}>
            <a href="/services" className="button button-dark">Explore our services <span aria-hidden="true">↗</span></a>
            <a href="/about" className="text-sm font-semibold text-forest underline decoration-forest/25 underline-offset-8 transition hover:decoration-forest">Discover our company</a>
          </motion.div>
          <motion.div className="mt-14 flex items-center gap-4 border-t border-forest/10 pt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="avatar avatar-one">H</span><span className="avatar avatar-two">S</span><span className="avatar avatar-three">C</span>
            </div>
            <p className="text-xs leading-5 text-ink/55 sm:text-sm">One capable team supporting<br className="sm:hidden" /> essential everyday services</p>
          </motion.div>
        </div>

        <motion.div className="hero-art-wrap relative mx-auto w-full max-w-[570px]" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="hero-art">
            <div className="art-grid" />
            <svg className="landscape-svg" viewBox="0 0 620 520" fill="none" role="img" aria-labelledby="landscape-title">
              <title id="landscape-title">Illustration of a well-maintained public landscape</title>
              <circle cx="467" cy="103" r="47" fill="#DDE9BF" />
              <path d="M0 339c83-56 159-42 242-8 70 29 122 14 200-18 64-26 119-30 178-9v216H0V339Z" fill="#709078" />
              <path d="M0 393c84-45 164-38 245-6 77 30 149 20 226-11 50-20 100-25 149-7v151H0V393Z" fill="#426951" />
              <path d="M116 520c31-73 79-120 142-143 69-25 139-15 205 24 52 31 89 72 112 119H116Z" fill="#DFE9CE" />
              <path d="M188 520c39-58 82-91 128-101 57-13 117 12 180 75l22 26H188Z" fill="#EEF1E6" />
              <path d="M272 419c13 37 25 71 35 101" stroke="#C1CEAA" strokeWidth="3" strokeLinecap="round" />
              <path d="M378 405c-1 40 4 77 16 115" stroke="#C1CEAA" strokeWidth="3" strokeLinecap="round" />
              <path d="M81 358c-2-64 8-116 31-157" stroke="#624F3E" strokeWidth="12" strokeLinecap="round" />
              <path d="M106 225c-39-19-56-50-53-93 38 8 61 32 69 74 10-49 37-77 80-83 2 46-19 81-65 106" fill="#8DA77B" />
              <path d="M509 353c-1-44 6-82 22-115" stroke="#624F3E" strokeWidth="9" strokeLinecap="round" />
              <path d="M528 260c-30-15-43-39-40-73 29 7 46 26 52 57 8-38 29-59 61-62 1 35-15 62-49 81" fill="#90AA7D" />
              <path d="M247 363h133v10H247z" fill="#E9E8DD" />
              <path d="M261 373v38m104-38v38" stroke="#E9E8DD" strokeWidth="7" strokeLinecap="round" />
              <path d="M238 360h151" stroke="#F9FAF4" strokeWidth="5" strokeLinecap="round" />
              <rect x="354" y="311" width="48" height="52" rx="5" fill="#C8D999" />
              <path d="M365 311v-14h25v14m-25 16h25" stroke="#6D8564" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M165 379c-4-19 1-32 15-40 12 5 18 18 16 38m226 21c-3-15 1-25 12-31 10 4 14 15 12 30" stroke="#C7E18B" strokeWidth="5" strokeLinecap="round" />
              <path d="M0 461c69-23 124-18 174 12m274-32c71-27 128-31 172-12" stroke="#A6BB94" strokeWidth="3" strokeLinecap="round" />
              <circle cx="202" cy="324" r="3" fill="#F5F6EB" /><circle cx="431" cy="352" r="3" fill="#F5F6EB" />
            </svg>
            <div className="art-label"><span className="art-label-icon">✳</span><span><strong>Care that shows.</strong><small>Service you can count on.</small></span></div>
          </div>
          <motion.div className="hero-stat-card" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <span className="stat-number">350<span>+</span></span>
            <span className="stat-caption">workers ready<br />to make a difference</span>
          </motion.div>
          <div className="hero-side-note">CARE IN EVERY DETAIL <span>—</span> COMMITMENT IN EVERY TASK</div>
        </motion.div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  );
}

export default Hero;
