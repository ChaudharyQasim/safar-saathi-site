import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { T, type Bi, type Key, type Lang } from './content';

interface LangState {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Text of a dictionary key, or of an inline {en, ur} pair, in the current language. */
  t: (k: Key | Bi) => string;
}

const Ctx = createContext<LangState>({ lang: 'en', setLang: () => undefined, t: (k) => (typeof k === 'string' ? T[k].en : k.en) });

function initial(): Lang {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'ur' || q === 'en') return q;
  try {
    return localStorage.getItem('blacar-lang') === 'ur' ? 'ur' : 'en';
  } catch {
    return 'en';
  }
}

/** Holds the page language; the `ur` class on <html> switches direction, fonts and the Urdu type scale (glass.css). */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initial);
  useEffect(() => {
    document.documentElement.classList.toggle('ur', lang === 'ur');
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('blacar-lang', lang);
    } catch {
      /* private mode: the choice simply does not persist */
    }
  }, [lang]);
  const t = (k: Key | Bi) => (typeof k === 'string' ? T[k][lang] : k[lang]);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
