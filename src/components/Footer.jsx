import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App.jsx';

export default function Footer() {
  const { t } = useContext(LangContext);
  return (
    <footer className="footer section-pad">
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" to="/"><span>AURELIA</span><span>DENTAL</span></Link>
          <p>Private dental care focused on precision, comfort and long-term results.</p>
        </div>
        <div><span className="eyebrow">Phone</span><a href="tel:+420222184901">+420 222 184 901</a></div>
        <div><span className="eyebrow">Email</span><a href="mailto:care@aureliadental.com">care@aureliadental.com</a></div>
        <div><span className="eyebrow">Address</span><p>Na Prikope 23, Prague 1</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Aurelia Dental</span><Link to="/book">{t.cta}</Link></div>
    </footer>
  );
}
