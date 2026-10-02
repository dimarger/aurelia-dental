import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useContext } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import BookingForm from '../components/BookingForm.jsx';
import { LangContext } from '../App.jsx';

export default function BookingPage() {
  const { t } = useContext(LangContext);
  return (
    <section className="section-pad booking-page page-transition">
      <Breadcrumbs current={t.contact} />
      <div className="booking-layout">
        <div className="booking-copy"><span className="eyebrow">Appointments</span><h1>Book a consultation</h1><p>Tell us what you would like to discuss. A care coordinator will contact you to confirm your appointment and answer initial questions.</p><div className="contact-cards"><a href="tel:+420222184901"><Phone size={18} />+420 222 184 901</a><a href="https://wa.me/420222184901"><MessageCircle size={18} />WhatsApp</a><a href="mailto:care@aureliadental.com"><Mail size={18} />care@aureliadental.com</a><span><MapPin size={18} />Na Prikope 23, Prague 1</span></div><div className="hours"><strong>Opening hours</strong><span>Mon-Fri 08:00-20:00</span><span>Sat 09:00-15:00</span></div></div>
        <BookingForm />
      </div>
      <div className="map-block" aria-label="Clinic location map"><div><span>AURELIA DENTAL</span><strong>Prague 1</strong><small>Na Prikope 23</small></div></div>
    </section>
  );
}
