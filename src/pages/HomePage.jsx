import { ArrowUpRight, CalendarDays, ChevronRight, HeartPulse, MapPin } from 'lucide-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeforeAfter from '../components/BeforeAfter.jsx';
import { LangContext } from '../App.jsx';
import { doctors } from '../data/doctors.js';
import { pricing } from '../data/pricing.js';
import { treatments } from '../data/treatments.js';

const copy = {
  en: {
    heroTitle: 'Confident smiles. Thoughtful dentistry.',
    heroText: 'Private dental care focused on precision, comfort and long-term results.',
    careTitle: 'Care designed around you.',
    careText: 'From preventive care to complex restorative and aesthetic dentistry.',
    restoration: 'Natural-looking results begin with a thoughtful plan.',
    whyTitle: 'Why Aurelia',
    journey: 'From first conversation to confident smile.',
    costs: 'Transparent treatment costs.',
    costNote: 'Final treatment cost is determined after an individual examination and treatment plan.',
    clinicTitle: 'Designed around the patient.',
    clinicText: 'Aurelia Dental was planned as a quiet clinical environment: soft light, private rooms, precise diagnostics and details that reduce stress before treatment begins.',
  },
  ru: {
    heroTitle: 'Уверенная улыбка. Вдумчивая стоматология.',
    heroText: 'Частная стоматологическая помощь с фокусом на точность, комфорт и долгосрочный результат.',
    careTitle: 'Лечение, построенное вокруг вас.',
    careText: 'От профилактики до сложной реставрационной и эстетической стоматологии.',
    restoration: 'Естественный результат начинается с продуманного плана.',
    whyTitle: 'Почему Aurelia',
    journey: 'От первой беседы до уверенной улыбки.',
    costs: 'Понятная стоимость лечения.',
    costNote: 'Итоговая стоимость определяется после индивидуального осмотра и плана лечения.',
    clinicTitle: 'Пространство, созданное вокруг пациента.',
    clinicText: 'Aurelia Dental спроектирована как спокойная клиническая среда: мягкий свет, приватные кабинеты, точная диагностика и детали, которые снижают напряжение до начала лечения.',
  },
};

const advantages = [
  ['Personal treatment plans', 'Every treatment begins with understanding your goals and medical needs.'],
  ['Digital diagnostics', 'Modern imaging helps us plan treatment with greater precision.'],
  ['One coordinated team', 'Doctors across different specialties work together around one treatment plan.'],
  ['Calm environment', 'A quiet, considered environment designed to make dental care more comfortable.'],
];

export default function HomePage() {
  const { lang, t } = useContext(LangContext);
  const c = copy[lang];

  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy page-transition">
          <span className="eyebrow">Private dental clinic</span>
          <h1>{c.heroTitle}</h1>
          <p>{c.heroText}</p>
          <div className="hero-actions"><Link className="button" to="/book">{t.cta}</Link><a className="text-link" href="#treatments">{t.explore}<ChevronRight size={16} /></a></div>
        </div>
        <div className="hero-image page-transition"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80" alt="Modern private dental clinic treatment room" /><div className="hero-note"><HeartPulse size={17} /> Digital diagnostics and calm clinical care</div></div>
      </section>

      <section className="trust-bar" aria-label="Clinic facts">
        {[['15+ years', 'of experience'], ['12 000+', 'patients'], ['4.9 / 5', 'patient rating'], ['Modern', 'diagnostics']].map(([a, b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
      </section>

      <section id="treatments" className="section-pad treatments-section">
        <div className="section-heading"><span className="eyebrow">Treatments</span><h2>{c.careTitle}</h2><p>{c.careText}</p></div>
        <div className="treatment-grid">{treatments.map((item) => <article className="treatment-card" key={item.key}><div className="treatment-index">{item.id}</div><img src={item.image} alt={`${item.title[lang]} room detail`} /><div><h3>{item.title[lang]}</h3><p>{item.description[lang]}</p><a href="#contact">{t.viewTreatment}<ArrowUpRight size={15} /></a></div></article>)}</div>
      </section>

      <section className="featured section-pad">
        <div><span className="eyebrow">Featured treatment</span><h2>Smile Restoration</h2><p>{c.restoration}</p></div>
        <div className="process-line">{['consultation', 'digital diagnostics', 'treatment planning', 'final result'].map((step, i) => <div key={step}><span>0{i + 1}</span><strong>{step}</strong></div>)}</div>
      </section>

      <section className="section-pad why-section">
        <div className="section-heading split"><div><span className="eyebrow">Aurelia method</span><h2>{c.whyTitle}</h2></div><p>Focused dentistry feels different when every decision is explained and every specialist works from the same plan.</p></div>
        <div className="why-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="doctors" className="section-pad doctors-section">
        <div className="section-heading"><span className="eyebrow">Doctors</span><h2>Experienced care, one coordinated team.</h2></div>
        <div className="doctor-grid">{doctors.map((doctor) => <article className="doctor-card" key={doctor.slug}><img src={doctor.image} alt={`${doctor.name}, ${doctor.specialization[lang]}`} /><div><h3>{doctor.name}</h3><p>{doctor.specialization[lang]}</p><span>{doctor.years} {t.years}</span><Link to={`/doctors/${doctor.slug}`}>{t.viewProfile}<ArrowUpRight size={14} /></Link></div></article>)}</div>
      </section>

      <section className="section-pad journey-section"><div className="section-heading"><span className="eyebrow">Patient journey</span><h2>{c.journey}</h2></div><div className="journey-grid">{['Consultation', 'Diagnostics', 'Personal treatment plan', 'Treatment & follow-up'].map((s, i) => <article key={s}><span>0{i + 1}</span><h3>{s}</h3><p>Clear explanations, measured decisions and a calm rhythm at every stage.</p></article>)}</div></section>

      <BeforeAfter />

      <section id="pricing" className="section-pad pricing-section"><div className="section-heading split"><div><span className="eyebrow">Pricing</span><h2>{c.costs}</h2></div><Link className="button ghost" to="/book">{t.fullPrices}</Link></div><div className="price-list">{pricing.map((p) => <div key={p.service.en}><span>{p.service[lang]}</span><strong>{p.price}</strong></div>)}</div><p className="note">{c.costNote}</p></section>

      <section id="clinic" className="section-pad clinic-section"><div className="clinic-gallery"><img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80" alt="Aurelia Dental reception" /><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80" alt="Treatment room" /><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80" alt="Waiting area detail" /></div><div><span className="eyebrow">Clinic</span><h2>{c.clinicTitle}</h2><p>{c.clinicText}</p><div className="clinic-tags"><span>reception</span><span>treatment room</span><span>waiting area</span><span>equipment</span><span>details</span></div></div></section>

      <section className="section-pad testimonials"><div className="section-heading"><span className="eyebrow">Patient notes</span><h2>What patients mention after their visit.</h2></div><div className="testimonial-grid">{['I appreciated how clearly everything was explained before treatment. I never felt rushed.', 'The clinic feels calm and considered. The plan was detailed, and each step made sense.', 'I came for an implant consultation and left with a clear timeline, options and costs.'].map((quote) => <blockquote key={quote}>“{quote}”<cite>Verified patient</cite></blockquote>)}</div></section>

      <section className="section-pad faq-section"><div className="section-heading"><span className="eyebrow">FAQ</span><h2>Before your first visit.</h2></div><div className="faq-list">{['How do I book an appointment?', 'Do you accept international patients?', 'How long does a consultation take?', 'Do you offer payment plans?', 'What languages do your doctors speak?', 'How should I prepare for my first visit?'].map((q) => <details key={q}><summary>{q}</summary><p>Our care coordinator will guide you through the details and help prepare the right appointment type for your needs.</p></details>)}</div></section>

      <section id="contact" className="section-pad contact-strip"><div><span className="eyebrow">Contact</span><h2>Ready for a thoughtful consultation?</h2></div><Link className="button" to="/book"><CalendarDays size={17} />{t.cta}</Link><p><MapPin size={16} />Na Prikope 23, Prague 1</p></section>
    </>
  );
}
