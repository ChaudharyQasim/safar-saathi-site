import { CITIES } from '../content';
import { useCounter, useReveal } from '../hooks';
import { useLang } from '../lang';

export function Marquee() {
  const items = [...CITIES, ...CITIES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((c, i) => <span key={i}>{c}</span>)}
      </div>
    </div>
  );
}

function Count({ end }: { end: number }) {
  const { ref, value } = useCounter(end);
  return <span ref={ref}>{value}</span>;
}

function Stat({ delay, children, label }: { delay?: string; children: React.ReactNode; label: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`stat reveal${delay ? ` ${delay}` : ''}`}>
      <b className="num">{children}</b>
      <span>{label}</span>
    </div>
  );
}

export function Stats() {
  const { t } = useLang();
  return (
    <section className="stats">
      <div className="wrap">
        <Stat label={t('statCities')}><Count end={112} /></Stat>
        <Stat delay="d1" label={t('statRate')}><Count end={8} /><span className="sep">–</span><Count end={14} /></Stat>
        <Stat delay="d2" label={t('statFee')}><Count end={10} /><span className="unit">%</span></Stat>
        <Stat delay="d3" label={t('statLang')}><Count end={2} /></Stat>
      </div>
    </section>
  );
}
