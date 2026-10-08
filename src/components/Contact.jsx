import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="section-wrap min-h-[calc(100vh-160px)] py-16 sm:py-24">
      <div className="mb-8 text-xs font-medium text-ink/45"><a href="/" className="hover:text-forest">Home</a><span className="px-2">/</span>Contact</div>
      <motion.div className="contact-panel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <div className="contact-pattern" aria-hidden="true" />
        <div className="relative z-10 max-w-[670px]">
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> CONTACT OUR TEAM</span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-paper sm:text-6xl">Let’s talk about<br />the work ahead.</h1>
          <p className="mt-5 max-w-[450px] text-sm leading-7 text-paper/65 sm:text-base">Looking for a dependable maintenance partner? Share your site or service requirements and start a conversation with our team.</p>
          <a className="button button-light mt-8" href="mailto:s_khanna_tlk@yahoo.co.in?subject=Service%20enquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20discuss%20a%20service%20requirement.%0A%0AName%3A%0AOrganisation%3A%0AService%20needed%3A%0ASite%20or%20location%3A%0APhone%3A%0A">Draft an enquiry email <span aria-hidden="true">↗</span></a>
        </div>
      </motion.div>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <div className="contact-info-card"><span className="eyebrow"><span className="eyebrow-dot" /> PHONE</span><h2><a className="hover:text-moss" href="tel:+919335232041">93352 32041</a></h2></div>
        <div className="contact-info-card"><span className="eyebrow"><span className="eyebrow-dot" /> EMAIL</span><h2 className="break-words"><a className="hover:text-moss" href="mailto:s_khanna_tlk@yahoo.co.in">s_khanna_tlk@yahoo.co.in</a></h2></div>
        <div className="contact-info-card"><span className="eyebrow"><span className="eyebrow-dot" /> ADDRESS</span><address className="mt-4 text-sm not-italic leading-7 text-ink/65">HIG-49 RATAN LAL NAGAR KANPUR-208022</address></div>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {[["Horticulture", "Grounds and green-space upkeep"], ["Sanitation", "Public facility cleanliness and care"], ["Civil maintenance", "Routine upkeep for assigned sites"]].map(([title, copy]) => (
          <div className="contact-info-card" key={title}><span className="eyebrow"><span className="eyebrow-dot" /> SERVICE ENQUIRIES</span><h2>{title}</h2><p>{copy}</p></div>
        ))}
      </div>
      <p className="mt-6 text-xs leading-5 text-ink/45">The email draft opens in your device’s default mail application, addressed to s_khanna_tlk@yahoo.co.in.</p>
    </section>
  );
}

export default Contact;
