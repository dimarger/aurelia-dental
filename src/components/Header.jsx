import { Menu, X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LangContext } from '../App.jsx';

export default function Header() {
  const { lang, setLang, t } = useContext(LangContext);
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function goToSection(hash) {
    setOpen(false);
    navigate('/');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }));
    });
  }

  const items = [
    ['#treatments', t.nav.treatments],
    ['#doctors', t.nav.doctors],
    ['#clinic', t.nav.clinic],
    ['#pricing', t.nav.prices],
    ['/book', t.nav.contact],
  ];

  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <Link className="brand" to="/" aria-label="Aurelia Dental home"><span>AURELIA</span><span>DENTAL</span></Link>
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      <nav className={open ? 'is-open' : ''} aria-label="Primary navigation">
        {items.map(([href, label]) => href.startsWith('#')
          ? <button key={href} type="button" onClick={() => goToSection(href)}>{label}</button>
          : <NavLink key={href} to={href} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <div className="lang-switch" aria-label="Language switcher">
          <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>RU</button>
          <span>/</span>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <Link className="button small" to="/book">{t.cta}</Link>
      </div>
    </header>
  );
}
