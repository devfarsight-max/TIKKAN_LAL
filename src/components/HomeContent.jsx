import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Horticulture",
    description: "Regular care for gardens, planted areas and outdoor spaces to help keep assigned grounds healthy and presentable.",
    color: "home-service-blue",
  },
  {
    number: "02",
    title: "Sanitation",
    description: "Day-to-day sanitation support that helps public facilities remain clean, usable and welcoming for their visitors.",
    color: "home-service-red",
  },
  {
    number: "03",
    title: "Civil maintenance",
    description: "Routine civil upkeep to support the continued use and general condition of buildings and public facilities.",
    color: "home-service-orange",
  },
];

const deliverySteps = [
  ["01", "Understand the requirement", "Get clear on the location, upkeep priorities and day-to-day service needs."],
  ["02", "Organise the workforce", "Coordinate a capable team around the work and the needs of the assigned site."],
  ["03", "Support regular upkeep", "Deliver practical maintenance services with attention to routine tasks and dependable execution."],
];

function HomeContent() {
  return (
    <>
      <section className="section-wrap py-16 sm:py-20">
        <div className="home-facts">
          <div className="home-fact">
            <strong>350<span>+</span></strong>
            <p>workers supporting our service delivery</p>
          </div>
          <div className="home-fact">
            <strong>03</strong>
            <p>core maintenance service areas</p>
          </div>
          <div className="home-fact">
            <strong>One</strong>
            <p>organised partner for everyday upkeep</p>
          </div>
        </div>
      </section>

      <section className="home-intro-section">
        <div className="section-wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
            <span className="eyebrow"><span className="eyebrow-dot" /> WHO WE ARE</span>
            <h2 className="section-heading mt-5">Everyday upkeep.<br /><span className="text-moss">Organised around you.</span></h2>
            <a className="service-link mt-7" href="/about">Learn about our company <span aria-hidden="true">↗</span></a>
          </motion.div>
          <motion.div className="home-intro-copy" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.08 }}>
            <p className="text-base leading-8 text-ink/75 sm:text-lg">
              Tikkan Lal Khatri &amp; Sons Infratech Private Limited is a service-based enterprise providing maintenance services across horticulture, sanitation and civil work.
            </p>
            <p className="mt-5 text-sm leading-7 text-ink/60 sm:text-base">
              We support government-sector requirements, public facilities and assigned projects with the regular upkeep that keeps essential places working. Our organised service delivery is backed by a workforce of 350 people.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> OUR SERVICE CAPABILITIES</span>
            <h2 className="section-heading mt-5 max-w-[570px]">The care that keeps<br />places <span className="text-moss">working.</span></h2>
          </div>
          <div className="max-w-[370px]">
            <p className="text-sm leading-7 text-ink/60 sm:text-base">A focused set of services for the day-to-day needs of public spaces and facilities.</p>
            <a className="service-link mt-4" href="/services">Explore all services <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.a
              className={`home-capability-card ${service.color}`}
              href="/services"
              key={service.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between">
                <span className="home-capability-number">{service.number}</span>
                <span className="home-capability-arrow" aria-hidden="true">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="home-capability-more">Learn more <span aria-hidden="true">→</span></span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="home-delivery-section">
        <div className="section-wrap py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> HOW WE WORK</span>
              <h2 className="section-heading mt-5 text-paper">A clear path<br />from requirement<br />to <span className="text-lime">regular care.</span></h2>
              <p className="mt-5 max-w-[350px] text-sm leading-7 text-paper/65">We focus on understanding the assigned work, organising people and supporting consistent day-to-day service delivery.</p>
            </div>
            <div className="home-delivery-list">
              {deliverySteps.map(([number, title, description], index) => (
                <motion.article
                  className="home-delivery-step"
                  key={number}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="home-workforce-banner">
            <div className="home-workforce-count">350<span>+</span></div>
            <p>A capable workforce supporting horticulture, sanitation and civil maintenance services.</p>
            <a href="/approach" className="button button-light">Our approach <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-24">
        <div className="home-growth-panel">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> LOOKING AHEAD</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.055em] text-forest sm:text-4xl">Growing our ability<br />to deliver.</h2>
          </div>
          <p className="max-w-[430px] text-sm leading-7 text-ink/65 sm:text-base">
            We aim to increase service capacity, improve operational efficiency and strengthen execution capabilities—building a broader platform for sustainable future growth.
          </p>
          <a href="/about" className="service-link font-semibold">More about our direction <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section-wrap pb-20 sm:pb-28">
        <div className="home-contact-panel">
          <div>
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> START A CONVERSATION</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.055em] text-paper sm:text-4xl">Have a site or service requirement?</h2>
            <p className="mt-3 max-w-[520px] text-sm leading-7 text-paper/65">Tell us about the maintenance support you need for your public facility or assigned project.</p>
          </div>
          <a href="/contact" className="button button-light shrink-0">Contact our team <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
