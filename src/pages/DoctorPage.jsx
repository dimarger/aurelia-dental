import { CalendarDays } from 'lucide-react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import BookingForm from '../components/BookingForm.jsx';
import { LangContext } from '../App.jsx';
import { doctors } from '../data/doctors.js';

export default function DoctorPage() {
  const { slug } = useParams();
  const { lang, t } = useContext(LangContext);
  const doctor = doctors.find((item) => item.slug === slug) || doctors[0];

  return (
    <section className="section-pad doctor-detail page-transition">
      <Breadcrumbs current={doctor.name} />
      <div className="doctor-hero-detail">
        <img src={doctor.image} alt={`${doctor.name} portrait`} />
        <div><span className="eyebrow">{doctor.specialization[lang]}</span><h1>{doctor.name}</h1><p>{doctor.years} {t.years}</p><Link className="button" to="/book"><CalendarDays size={17} />{t.bookWith} {doctor.name}</Link></div>
      </div>
      <div className="doctor-info-grid">
        <article><h2>{t.about}</h2><p>{doctor.about[lang]}</p></article>
        <article><h2>{t.education}</h2><ul>{doctor.education.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><h2>{t.expertise}</h2><ul>{doctor.expertise[lang].map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><h2>{t.languages}</h2><ul>{doctor.languages.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </div>
      <div className="doctor-booking"><div><span className="eyebrow">{t.appointments}</span><h2>{t.bookWith} {doctor.name}</h2><p>Share your preferred time and our coordinator will confirm availability.</p></div><BookingForm doctor={doctor} /></div>
    </section>
  );
}
