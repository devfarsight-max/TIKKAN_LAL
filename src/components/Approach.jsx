import { motion } from "framer-motion";

const principles = [
  ["01", "Understand the assignment", "Start with the site, the services required and the routine maintenance needs set out for the assignment."],
  ["02", "Organise the work", "Coordinate the work and workforce around the service requirements and responsibilities of the location."],
  ["03", "Carry out regular upkeep", "Support day-to-day maintenance activities across horticulture, sanitation and civil work."],
  ["04", "Build delivery capability", "Continue working to strengthen service capacity, operational efficiency and execution capabilities."],
];

const serviceAreas = [
  ["Horticulture", "Support the upkeep of gardens, planted areas and outdoor grounds."],
  ["Sanitation", "Help maintain cleaner, more welcoming public facilities and shared spaces."],
  ["Civil maintenance", "Support routine upkeep of civil areas and assigned facilities."],
];

function Approach() {
  return (
    <>
      <section className="approach-hero">
        <div className="section-wrap py-12 sm:py-16">
          <div className="mb-8 text-xs font-medium text-ink/45"><a href="/" className="hover:text-forest">Home</a><span className="px-2">/</span>Our approach</div>
          <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
            <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
              <span className="eyebrow"><span className="eyebrow-dot" /> OUR APPROACH</span>
              <h1 className="section-heading mt-5">Made for the<br />work <span className="text-moss">that matters.</span></h1>
            </motion.div>
            <motion.div className="approach-hero-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <p>Dependable maintenance begins with understanding what a site needs and organising the work to support its everyday upkeep.</p>
              <p>Our approach brings together a capable workforce and three core service areas—horticulture, sanitation and civil maintenance—to support government-sector projects, public facilities and other assigned requirements.</p>
            </motion.div>
          </div>
          <div className="approach-facts">
            <div><strong>350<span>+</span></strong><p>workers supporting service delivery</p></div>
            <div><strong>03</strong><p>core areas of maintenance</p></div>
            <div><strong>Site-focused</strong><p>work guided by each assignment’s requirements</p></div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-24">
        <div className="grid gap-9 lg:grid-cols-[.75fr_1.25fr]">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow"><span className="eyebrow-dot" /> FROM REQUIREMENT TO UPKEEP</span>
            <h2 className="section-heading mt-5">A practical way<br />to organise <span className="text-moss">the work.</span></h2>
            <p className="mt-5 max-w-[370px] text-sm leading-7 text-ink/60 sm:text-base">Each assignment has its own needs. We focus on the scope of the work, the site’s routine requirements and the people needed to support delivery.</p>
          </motion.div>
          <div className="approach-timeline">
            {principles.map(([number, title, description], index) => (
              <motion.article
                key={number}
                className="approach-timeline-step"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <span className="approach-timeline-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-service-section">
        <div className="section-wrap py-16 sm:py-24">
          <div className="grid gap-7 md:grid-cols-[1fr_.75fr] md:items-end">
            <div>
              <span className="eyebrow"><span className="eyebrow-dot" /> ONE WORKFORCE, THREE SERVICE AREAS</span>
              <h2 className="section-heading mt-5">Coordinated around<br />the <span className="text-moss">site’s needs.</span></h2>
            </div>
            <p className="text-sm leading-7 text-ink/60">Our service capabilities address different aspects of day-to-day maintenance. Their application depends on the scope and requirements of each assignment.</p>
          </div>
          <div className="mt-9 grid gap-3 md:grid-cols-3">
            {serviceAreas.map(([title, description], index) => (
              <motion.article
                key={title}
                className={`approach-service-card approach-service-card-${index + 1}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span>0{index + 1} / SERVICE</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="/services">View service details <span aria-hidden="true">↗</span></a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-24">
        <div className="approach-direction-panel">
          <div>
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> CONTINUOUS DEVELOPMENT</span>
            <h2>Strengthen today.<br />Build for what’s next.</h2>
          </div>
          <div>
            <p>As the company builds on its existing base, its objective is to strengthen service capabilities and create a broader platform for sustainable future growth.</p>
            <div className="approach-priority-list">
              <span><b>01</b> Increase service capacity</span>
              <span><b>02</b> Improve operational efficiency</span>
              <span><b>03</b> Strengthen execution capabilities</span>
            </div>
            <a href="/about" className="approach-about-link">Read more about the company <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-20 sm:pb-28">
        <div className="approach-contact-panel">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> READY TO WORK TOGETHER?</span>
            <h2>Let’s discuss your site requirements.</h2>
            <p>Tell us about your location and the maintenance services you need.</p>
          </div>
          <a className="button button-light shrink-0" href="/contact">Contact our team <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

export default Approach;
