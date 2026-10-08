const pages = [["Home", "/"], ["Services", "/services"], ["About us", "/about"], ["Our approach", "/approach"], ["Contact us", "/contact"]];
const services = [["Horticulture", "/services#horticulture"], ["Sanitation", "/services#sanitation"], ["Civil maintenance", "/services#civil-maintenance"]];

function ContactIcon({ type }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{type === "phone" ? <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /> : type === "email" ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></> : <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>}</svg>;
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-topline"><p>Dependable care for the places that matter.</p><a href="/contact">Let’s discuss your requirements <span aria-hidden="true">↗</span></a></div>
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="footer-brand-logo" href="/" aria-label="Tikkan Lal Khatri and Sons home"><img src="/tikkan-infra-logo.png" alt="TK Infra — Tikkan Lal Khatri & Sons Infratech Private Limited" /></a>
            <p className="footer-company-name">Tikkan Lal Khatri &amp; Sons<br />Infratech Private Limited</p>
            <p>Organised maintenance services across horticulture, sanitation and civil work for public spaces and facilities.</p>
          </div>
          <nav aria-labelledby="footer-company-heading"><h2 id="footer-company-heading">Quick links</h2><ul>{pages.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></nav>
          <nav aria-labelledby="footer-services-heading"><h2 id="footer-services-heading">Our services</h2><ul>{services.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></nav>
          <div className="footer-contact"><h2>Get in touch</h2><address>
            <a className="footer-contact-row" href="tel:+919335232041"><ContactIcon type="phone" /><span><small>Call us</small>93352 32041</span></a>
            <a className="footer-contact-row" href="mailto:s_khanna_tlk@yahoo.co.in"><ContactIcon type="email" /><span><small>Email us</small>s_khanna_tlk@yahoo.co.in</span></a>
            <a className="footer-contact-row" href="https://www.google.com/maps/search/?api=1&query=HIG-49%20RATAN%20LAL%20NAGAR%20KANPUR-208022" target="_blank" rel="noopener noreferrer"><ContactIcon type="address" /><span><small>Our address</small>HIG-49 RATAN LAL NAGAR<br />KANPUR-208022</span></a>
          </address></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Tikkan Lal Khatri &amp; Sons Infratech Private Limited. All rights reserved.</p><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }}>Back to top <span aria-hidden="true">↑</span></a></div>
      </div>
    </footer>
  );
}

export default Footer;
