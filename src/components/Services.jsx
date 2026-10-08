import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    id: "horticulture",
    title: "Horticulture",
    description: "Nurturing green spaces with attentive upkeep, grounds care and the everyday work that helps landscapes thrive.",
    detail: "Care for planted areas and outdoor grounds helps public spaces stay orderly, usable and welcoming. Our horticulture services support the routine upkeep needs of assigned landscapes and sites.",
    activities: ["Grounds and garden upkeep", "Care of planted areas", "Maintaining tidy outdoor spaces"],
    icon: <><path d="M21 3c-9 0-16 4-16 12a6 6 0 0 0 6 6c8 0 12-7 10-18Z" /><path d="M5 21c3-6 7-9 12-12" /></>,
    tint: "service-sage",
  },
  {
    number: "02",
    id: "sanitation",
    title: "Sanitation",
    description: "Supporting cleaner, more welcoming public facilities through consistent sanitation and site maintenance services.",
    detail: "Regular sanitation supports cleaner shared environments and public facilities. Services are organised around the upkeep requirements of the facility and the work assigned to our team.",
    activities: ["Routine cleanliness of public areas", "Upkeep of shared spaces", "Sanitation support for assigned facilities"],
    icon: <><path d="M4 21h16M6 17h12l-1-9H7l-1 9Z" /><path d="M9 8V5a3 3 0 0 1 6 0v3m-3 4v2" /></>,
    tint: "service-sand",
  },
  {
    number: "03",
    id: "civil-maintenance",
    title: "Civil maintenance",
    description: "Taking care of essential civil upkeep to keep public spaces, facilities and assigned sites in good working order.",
    detail: "Routine civil maintenance helps support the condition and day-to-day use of public facilities and assigned sites. Work is aligned with the requirements and scope of each assignment.",
    activities: ["Routine upkeep of civil areas", "Attention to day-to-day site maintenance needs", "Support for public facilities and assigned locations"],
    icon: <><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-7h6v7" /><path d="M9 10h.01M15 10h.01" /></>,
    tint: "service-blue",
  },
];

const deliverySteps = [
  ["01", "Understand the assignment", "Clarify the site, required services and day-to-day upkeep priorities."],
  ["02", "Organise service delivery", "Coordinate the work and workforce around the requirements of the assigned location."],
  ["03", "Support regular upkeep", "Focus on consistent execution of the agreed maintenance activities."],
];

function Services() {
  return (
    <>
      <section className="section-wrap py-16 sm:py-24">
        <div className="mb-5 text-xs font-medium text-ink/45"><a href="/" className="hover:text-forest">Home</a><span className="px-2">/</span>Services</div>
        <div className="grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> WHAT WE DO</span>
            <h1 className="section-heading mt-5 max-w-[640px]">Essential services.<br /><span className="text-moss">Thoughtfully delivered.</span></h1>
          </div>
          <div>
            <p className="max-w-[440px] text-sm leading-7 text-ink/60 sm:text-base">We provide horticulture, sanitation and civil maintenance services to support day-to-day upkeep across government-sector projects, public facilities and other assigned requirements.</p>
            <p className="mt-4 text-sm leading-7 text-ink/60">Our workforce of 350 supports organised service delivery across these core areas.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={`#${service.id}`}
              className="service-card group"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between">
                <span className={`service-icon ${service.tint}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{service.icon}</svg></span>
                <span className="font-display text-xs font-semibold tracking-widest text-ink/30">{service.number}</span>
              </div>
              <h2 className="mt-8 font-display text-[23px] font-semibold tracking-[-0.04em] text-forest">{service.title}</h2>
              <p className="mt-3 min-h-[76px] text-sm leading-6 text-ink/60">{service.description}</p>
              <span className="service-link mt-6">Explore this service <span aria-hidden="true">↓</span></span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="service-details-section">
        <div className="section-wrap py-16 sm:py-24">
          <div className="max-w-[600px]">
            <span className="eyebrow"><span className="eyebrow-dot" /> SERVICE AREAS</span>
            <h2 className="section-heading mt-5">Maintenance that supports<br />the <span className="text-moss">everyday.</span></h2>
            <p className="mt-5 text-sm leading-7 text-ink/60 sm:text-base">Each service responds to the routine upkeep needs of its assigned site. The exact activities are guided by the scope and requirements of the project.</p>
          </div>
          <div className="mt-10 space-y-4">
            {services.map((service, index) => (
              <motion.article
                id={service.id}
                key={service.id}
                className={`service-detail-card ${index % 2 === 1 ? "service-detail-reverse" : ""}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="service-detail-heading">
                  <span className={`service-icon ${service.tint}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{service.icon}</svg></span>
                  <span className="service-detail-number">{service.number} / SERVICE AREA</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-detail-copy">
                  <p>{service.detail}</p>
                  <h4>Typical areas of support</h4>
                  <ul>
                    {service.activities.map((activity) => <li key={activity}><span aria-hidden="true">+</span>{activity}</li>)}
                  </ul>
                  <a className="service-link mt-5" href="/contact">Discuss your requirement <span aria-hidden="true">↗</span></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> HOW WE SUPPORT YOUR SITE</span>
            <h2 className="section-heading mt-5">Clear focus.<br /><span className="text-moss">Capable execution.</span></h2>
            <p className="mt-5 max-w-[360px] text-sm leading-7 text-ink/60">A practical service approach centred on assigned requirements and the regular upkeep of each location.</p>
          </div>
          <div className="service-delivery-list">
            {deliverySteps.map(([number, title, description]) => (
              <article className="service-delivery-step" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-9 border-t border-forest/10 pt-5 text-xs leading-6 text-ink/45">Services and activities are delivered in line with the scope and requirements of each assignment.</p>
      </section>

      <section className="section-wrap pb-20 sm:pb-28">
        <div className="service-enquiry-panel">
          <div>
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> PLAN YOUR SITE SUPPORT</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.055em] text-paper sm:text-4xl">Looking for maintenance support?</h2>
            <p className="mt-3 max-w-[500px] text-sm leading-7 text-paper/65">Share your site, service area and requirements with our team to start a conversation.</p>
          </div>
          <a className="button button-light shrink-0" href="/contact">Discuss a requirement <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

export default Services;
