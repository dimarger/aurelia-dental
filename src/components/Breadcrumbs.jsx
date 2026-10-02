import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LangContext } from '../App.jsx';

export default function Breadcrumbs({ current }) {
  const { t } = useContext(LangContext);
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">{t.home}</Link><span>/</span><span>{current}</span></nav>;
}
