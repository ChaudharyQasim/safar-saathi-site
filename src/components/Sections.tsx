import { useState, type ReactNode } from 'react';
import { DRIVER_CARDS, FAQ, FEATURES, SAFETY, STEPS, SUPPORT_EMAIL, type Feature, type Key } from '../content';
import { useReveal } from '../hooks';
import { useLang } from '../lang';
import { CarMark, Icon } from './Icon';

/** A block that fades up when scrolled into view. */
export function Reveal({ as: Tag = 'div', className = '', delay, children, ...rest }: { as?: 'div' | 'details'; className?: string; delay?: string; children: ReactNode } & Record<string, unknown>) {
  const ref = useReveal<HTMLDivElement>();
  const cls = `${className} reveal${delay ? ` ${delay}` : ''}`.trim();
  if (Tag === 'details') return <details ref={ref as never} className={cls} {...rest}>{children}</details>;
  return <div ref={ref} className={cls} {...rest}>{children}</div>;
}

function SectionHead({ eyebrow, title, lead }: { eyebrow: Key; title: Key; lead?: Key }) {
  const { t } = useLang();
  return (
    <Reveal className="sec-head">
      <span className="eyebrow">{t(eyebrow)}</span>
      <h2>{t(title)}</h2>
      {lead ? <p className="lead">{t(lead)}</p> : null}
    </Reveal>
  );
}

function Card({ f, delay }: { f: Feature; delay?: string }) {
  const { t } = useLang();
  return (
    <Reveal className="card" delay={delay}>
      <div className={`ic-box${f.amber ? ' amber' : ''}`}><Icon name={f.icon} /></div>
      <h3>{t(f.title)}</h3>
      <p>{t(f.text)}</p>
    </Reveal>
  );
}

const DELAYS = ['', 'd1', 'd2'];

export function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <SectionHead eyebrow="eyebrowFeatures" title="h2Features" lead="leadFeatures" />
        <div className="grid c3">
          {FEATURES.map((f, i) => <Card key={f.icon} f={f} delay={DELAYS[i % 3]} />)}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const { t } = useLang();
  const [who, setWho] = useState<'traveler' | 'driver'>('traveler');
  return (
    <section className="how" id="how">
      <div className="wrap">
        <SectionHead eyebrow="eyebrowHow" title="h2How" />
        <Reveal className="tabs" role="tablist">
          <button className={who === 'traveler' ? 'on' : ''} role="tab" aria-selected={who === 'traveler'} onClick={() => setWho('traveler')}>{t('tabTraveler')}</button>
          <button className={who === 'driver' ? 'on' : ''} role="tab" aria-selected={who === 'driver'} onClick={() => setWho('driver')}>{t('tabDriver')}</button>
        </Reveal>
        <div className="pane on" key={who}>
          <div className="steps">
            {STEPS[who].map((s, i) => (
              <Reveal key={i} className="step in" delay={DELAYS[i]}>
                <div className="n">{i + 1}</div>
                <h3>{t(s.title)}</h3>
                <p>{t(s.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Safety() {
  const { t } = useLang();
  return (
    <section className="safety" id="safety">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{t('eyebrowSafety')}</span>
          <h2>{t('h2Safety')}</h2>
          <p className="lead" style={{ marginTop: 14 }}>{t('leadSafety')}</p>
          <div className="list">
            {SAFETY.map((s, i) => (
              <Reveal key={s.icon} className="li" delay={['', 'd1', 'd2', 'd3'][i]}>
                <div className={`ic-box${s.amber ? ' amber' : ''}`}><Icon name={s.icon} size={22} /></div>
                <div><b>{t(s.title)}</b><span>{t(s.text)}</span></div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal className="track-card" delay="d2" aria-hidden="true">
          <div className="map" />
          <div className="tc-top"><b>Lahore → Jhang</b><small>Ayesha's ride · Suzuki Cultus · Bilal</small><div className="pill"><i />LIVE · 84 km/h</div></div>
          <div className="path" /><div className="pt a" /><div className="pt b" />
          <div className="car2"><Icon name="car" fill="#14231F" /></div>
          <div className="tc-bottom"><div><b>96 km to Jhang</b><small>Updated 3 s ago</small></div><div className="pill" style={{ margin: 0 }}>✓ Near pickup</div></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Drivers() {
  const { t } = useLang();
  return (
    <section className="drivers" id="drivers">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{t('eyebrowDrivers')}</span>
          <h2>{t('h2Drivers')}</h2>
          <p className="lead" style={{ marginTop: 14 }}>{t('leadDrivers')}</p>
          <div className="grid c2" style={{ marginTop: 28 }}>
            {DRIVER_CARDS.map((f, i) => <Card key={f.icon} f={f} delay={['', 'd1', 'd2', 'd3'][i]} />)}
          </div>
        </Reveal>
        <Reveal className="earn" delay="d2">
          <span className="eyebrow">{t('example')}</span>
          <h3 style={{ marginTop: 8 }}>{t('exampleTitle')}</h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: 14, marginTop: 6 }}>{t('exampleSub')}</p>
          <div className="big">Rs 11,250</div>
          <div className="bar"><i /></div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>{t('exampleNote')}</p>
          <div className="rows">
            <div><span>{t('rowSeats')}</span><b>Rs 11,250</b></div>
            <div><span>{t('rowFuel')}</span><b>Rs 9,500</b></div>
            <div><span>{t('rowToll')}</span><b>Rs 1,200</b></div>
            <div className="keep"><span>{t('rowKeep')}</span><b>Rs 550+</b></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLang();
  return (
    <section className="faq" id="faq">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <SectionHead eyebrow="eyebrowFaq" title="h2Faq" />
        {FAQ.map((f, i) => (
          <Reveal as="details" key={i}>
            <summary>{t(f.q)}<i className="tg" /></summary>
            <p>{t(f.a)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Download() {
  const { t } = useLang();
  return (
    <section className="cta" id="get">
      <div className="wrap">
        <Reveal className="box">
          <div>
            <h2>{t('h2Cta')}</h2>
            <p className="lead" style={{ marginTop: 12 }}>{t('leadCta')}</p>
            <div className="btns">
              <a className="btn" href={`mailto:${SUPPORT_EMAIL}?subject=BlaCar%20app`}>{t('requestApp')}</a>
              <span className="store" title="Coming soon"><Icon name="play" /><span><small>{t('comingSoon')}</small>Google Play</span></span>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="app-badge"><CarMark size={70} /></div>
            <p style={{ marginTop: 18, fontWeight: 800, fontSize: 24 }}>BlaCar</p>
            <div className="cta-meta"><span>{t('android8')}</span><span>{t('free')}</span><span>اردو · English</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="wrap">
        <div>© 2026 BlaCar. <span>{t('rights')}</span></div>
        <div>
          <a href="privacy.html">{t('privacy')}</a>
          <a href="terms.html">{t('terms')}</a>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{t('contact')}</a>
        </div>
      </div>
    </footer>
  );
}
