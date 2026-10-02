import React, { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import DoctorPage from './pages/DoctorPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import { translations } from './data/translations.js';

export const LangContext = React.createContext(null);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState('en');
  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? 'Aurelia Dental | Private Dental Clinic' : 'Aurelia Dental | Частная стоматологическая клиника';
  }, [lang]);

  return (
    <LangContext.Provider value={value}>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors/:slug" element={<DoctorPage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
      <Link className="mobile-cta" to="/book">{value.t.cta}</Link>
    </LangContext.Provider>
  );
}
