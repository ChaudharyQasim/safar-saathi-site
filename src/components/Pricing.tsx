import { useState } from 'react';
import { ROUTES } from '../content';
import { useLang } from '../lang';
import { Reveal } from './Sections';

const fmt = (n: number) => n.toLocaleString('en-US');

/** Mirrors the app's pricing: rate x road km rounded to Rs 10 (floor Rs 100); the fee is 10 % of the agreed fare. */
export function Pricing() {
  const { t } = useLang();
  const [route, setRoute] = useState(0);
  const [rate, setRate] = useState(10);
  const [pct, setPct] = useState(100);
  const km = ROUTES[route]?.km ?? 0;
  const listed = Math.max(100, Math.round((rate * km) / 10) * 10);
  const driver = pct === 100 ? listed : Math.max(Math.floor(listed / 2), Math.round((listed * pct) / 100));
  const fee = Math.round(driver * 0.1);

  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">{t('eyebrowPricing')}</span>
          <h2>{t('h2Pricing')}</h2>
          <p className="lead">{t('leadPricing')}</p>
        </Reveal>
        <Reveal className="calc">
          <div>
            <b>{t('chooseRoute')}</b>
            <div className="route-pick">
              {ROUTES.map((r, i) => (
                <button key={i} type="button" className={i === route ? 'on' : ''} onClick={() => setRoute(i)}>{r.from} → {r.to}</button>
              ))}
            </div>
            <div className="range">
              <label><span>{t('ratePerKm')}</span><output>Rs {rate}</output></label>
              <input type="range" min={8} max={14} step={1} value={rate} onChange={(e) => setRate(Number(e.target.value))} aria-label="Rate per km" />
            </div>
            <div className="range">
              <label><span>{t('lowerOffer')}</span><output>{pct === 100 ? '—' : `${pct}% · Rs ${fmt(driver)}`}</output></label>
              <input type="range" min={50} max={100} step={5} value={pct} onChange={(e) => setPct(Number(e.target.value))} aria-label="Offer as percent of listed price" />
            </div>
            <p className="note">{t('offerNote')}</p>
          </div>
          <div className="fare">
            <div className="row"><span>{t('roadDistance')}</span><b>{km} km</b></div>
            <div className="row"><span>{t('driverReceives')}</span><b>Rs {fmt(driver)}</b></div>
            <div className="row"><span>{t('serviceFee')}</span><b>Rs {fmt(fee)}</b></div>
            <div className="row total"><span>{t('travelerPays')}</span><b>Rs {fmt(driver + fee)}</b></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
