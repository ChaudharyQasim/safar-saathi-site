import { useState } from 'react';
import { NAV } from '../content';
import { useScrolled } from '../hooks';
import { useLang } from '../lang';
import { CarMark } from './Icon';

export function Nav() {
  const { lang, setLang, t } = useLang();
  const solid = useScrolled(40);
  const [open, setOpen] = useState(false);
  return (
    <nav className={`nav${solid ? ' solid' : ''}`}>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="BlaCar home">
          <span className="logo"><CarMark /></span>
          BlaCar
        </a>
        <div className={`links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{t(n.label)}</a>
          ))}
        </div>
        <div className="lang" role="group" aria-label="Language">
          <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>English</button>
          <button type="button" className={`ur${lang === 'ur' ? ' on' : ''}`} onClick={() => setLang('ur')}>اردو</button>
        </div>
        <a className="btn nav-cta" href="#get">{t('getApp')}</a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
    </nav>
  );
}
