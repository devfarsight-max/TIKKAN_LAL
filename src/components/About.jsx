import { motion } from "framer-motion";

const companyFacts = [
  ["350+", "workers supporting service delivery"],
  ["03", "core areas of maintenance"],
  ["Private Limited", "service-based enterprise"],
];

const focusAreas = [
  {
    number: "01",
    title: "Public-sector support",
    description: "Supporting government-sector requirements, public facilities and other assigned maintenance work.",
    tone: "about-focus-blue",
  },
  {
    number: "02",
    title: "Organised service delivery",
    description: "Addressing routine upkeep through an organised approach and a workforce able to support day-to-day requirements.",
    tone: "about-focus-red",
  },
  {
    number: "03",
    title: "Building for the future",
    description: "Working to increase service capacity, improve operational efficiency and strengthen execution capabilities.",
    tone: "about-focus-orange",
  },
];

function About() {
  return (
    <>
      <section className="about-section">
        <div className="section-wrap py-12 sm:py-16">
          <div className="mb-8 text-xs font-medium text-paper/55"><a href="/" className="hover:text-paper">Home</a><span className="px-2">/</span>About</div>
          <div className="grid gap-12 pb-14 lg:grid-cols-[1fr_.82fr] lg:items-center lg:pb-20">
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> ABOUT THE COMPANY</span>
              <h1 className="section-heading mt-5 max-w-[620px] text-paper">Grounded in service.<br /><span className="text-lime">Focused on what’s next.</span></h1>
              <p className="mt-7 max-w-[580px] text-sm leading-7 text-paper/70 sm:text-base sm:leading-8">
                Tikkan Lal Khatri &amp; Sons Infratech Private Limited is a service-based enterprise providing maintenance services across horticulture, sanitation and civil work.
              </p>
              <p className="mt-4 max-w-[580px] text-sm leading-7 text-paper/70 sm:text-base sm:leading-8">
                The company was established to address routine maintenance requirements through organised service delivery and a capable workforce. Its work supports government-sector projects, public facilities and other assigned upkeep needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/services" className="button button-light">Explore our services <span aria-hidden="true">↗</span></a>
                <a href="/contact" className="about-outline-button">Talk to our team <span aria-hidden="true">↗</span></a>
              </div>
            </motion.div>
            <motion.div className="about-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65 }}>
              <div className="about-visual-top"><span>OUR WORKFORCE</span><span>CAPABLE BY DESIGN</span></div>
              <div className="worker-mark-grid" aria-hidden="true">
                {Array.from({ length: 35 }, (_, index) => <span key={index} className={index % 6 === 0 ? "worker-mark worker-mark-highlight" : "worker-mark"} />)}
              </div>
              <div className="about-stat-row"><strong>350<span>+</span></strong><div><b>People. One purpose.</b><small>Supporting essential everyday services.</small></div></div>
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            </motion.div>
          </div>
          <div className="about-facts-grid">
            {companyFacts.map(([value, label]) => (
              <div className="about-fact" key={value}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow"><span className="eyebrow-dot" /> OUR PURPOSE</span>
            <h2 className="section-heading mt-5">Care for the places<br />people <span className="text-moss">count on.</span></h2>
          </motion.div>
          <div className="about-purpose-copy">
            <p>Routine maintenance plays an important part in keeping public spaces and facilities ready for everyday use. Our business is focused on providing that practical, on-the-ground support across horticulture, sanitation and civil work.</p>
            <p>We bring these service areas together under one enterprise, with a workforce of 350 supporting assigned day-to-day maintenance requirements.</p>
          </div>
        </div>
      </section>

      <section className="about-focus-section">
        <div className="section-wrap py-16 sm:py-24">
          <div className="max-w-[650px]">
            <span className="eyebrow"><span className="eyebrow-dot" /> WHAT GUIDES OUR WORK</span>
            <h2 className="section-heading mt-5">A practical foundation<br />for <span className="text-moss">dependable service.</span></h2>
            <p className="mt-5 max-w-[550px] text-sm leading-7 text-ink/60 sm:text-base">Our business is centred on clear service requirements, organised delivery and the capability to support regular upkeep.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <motion.article
                className={`about-focus-card ${area.tone}`}
                key={area.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-24">
        <div className="about-growth-panel">
          <div className="about-growth-heading">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> LOOKING AHEAD</span>
            <h2>Growing our capacity<br />to deliver.</h2>
          </div>
          <div className="about-growth-copy">
            <p>With an objective to strengthen its service capabilities, the business aims to build on its existing base and expand its scale.</p>
            <ul>
              <li><span aria-hidden="true">01</span> Increase service capacity</li>
              <li><span aria-hidden="true">02</span> Improve operational efficiency</li>
              <li><span aria-hidden="true">03</span> Strengthen execution capabilities</li>
            </ul>
            <p className="about-growth-note">These priorities support the company’s aim to create a broader platform for sustainable future growth.</p>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-20 sm:pb-28">
        <div className="about-contact-panel">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> WORK WITH US</span>
            <h2>Let’s discuss your service requirements.</h2>
            <p>Tell us about your site, facility or maintenance needs.</p>
          </div>
          <a className="button button-light shrink-0" href="/contact">Contact our team <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

export default About;
