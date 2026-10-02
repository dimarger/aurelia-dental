import { useContext, useState } from 'react';
import { LangContext } from '../App.jsx';
import { treatments } from '../data/treatments.js';

export default function BookingForm({ doctor }) {
  const { lang, t } = useContext(LangContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function submit(e) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    if (!form.get('consent')) {
      setError(t.requiredConsent);
      return;
    }
    setError('');
    setLoading(true);
    window.setTimeout(() => { setLoading(false); setSuccess(true); formElement.reset(); }, 800);
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      {success && <div className="success" role="status">{t.sendSuccess}</div>}
      {error && <div className="error" role="alert">{error}</div>}
      <div className="form-row"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div>
      <div className="form-row"><label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
      <div className="form-row"><label>Preferred date<input name="date" type="date" /></label><label>Treatment<select name="treatment" defaultValue={doctor ? doctor.name : ''}><option value="">Select treatment</option>{doctor && <option>{doctor.name}</option>}{treatments.map((item) => <option key={item.key}>{item.title[lang]}</option>)}</select></label></div>
      <label>Message<textarea name="message" rows="5" placeholder="Tell us what you would like to discuss" /></label>
      <label className="checkbox"><input type="checkbox" name="consent" /> <span>I agree to be contacted regarding my appointment request.</span></label>
      <button className="button" type="submit" disabled={loading}>{loading ? t.loading : t.request}</button>
    </form>
  );
}
