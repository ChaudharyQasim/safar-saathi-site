import { useLang } from '../lang';
import { Icon } from './Icon';

function PhoneMock() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="screen">
        <div className="s-head"><div className="s-sun" /><div className="hi">Welcome, Ayesha</div><div className="q">Where are you going?</div></div>
        <div className="s-card">
          <div className="s-field"><span className="dot" /><div><small>From</small><b>Lahore</b></div></div>
          <div className="s-field"><span className="pin" /><div><small>To</small><b>Jhang</b></div></div>
          <div className="s-days"><span className="on">Today</span><span>Tomorrow</span><span>Pick date</span></div>
          <div className="s-btn">Find a ride</div>
        </div>
        <div className="s-trip"><div><b>2:00 PM · Thokar</b><small>Bilal · Suzuki Cultus · AC</small></div><div className="price">Rs 2,530</div></div>
        <div className="s-road" />
        <div className="s-car"><div className="t" /><div className="b" /><div className="w" style={{ left: 6 }} /><div className="w" style={{ right: 6 }} /></div>
        <div className="s-tabs"><span className="on"><i />Search</span><span><i />My trips</span><span><i />Alerts</span><span><i />Profile</span></div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="eyebrow rise" style={{ color: 'var(--amber)' }}>{t('eyebrowHero')}</span>
          <h1 className="rise d1">{t('h1a')}<br /><span className="hl">{t('h1b')}</span></h1>
          <p className="lead rise d2">{t('heroLead')}</p>
          <div className="hero-ctas rise d3">
            <a className="btn" href="#get">
              {t('getAndroid')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="btn ghost" href="#how">{t('seeHow')}</a>
          </div>
          <div className="chips rise d4">
            <span className="chip"><Icon name="shield" /><span>{t('chipVerified')}</span></span>
            <span className="chip"><Icon name="person" /><span>{t('chipLadies')}</span></span>
            <span className="chip"><Icon name="pin" /><span>{t('chipLive')}</span></span>
            <span className="chip"><Icon name="chatPlain" /><span>{t('chipLang')}</span></span>
          </div>
        </div>
        <div className="hero-art rise d2">
          <PhoneMock />
          <div className="badge b1 bob">
            <span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg></span>
            <div><span>{t('badgeSeat')}</span><small>{t('badgeSeatSub')}</small></div>
          </div>
          <div className="badge b2 bob" style={{ animationDelay: '1.5s,3s' }}>
            <span className="ic"><Icon name="pinSolid" size={18} /></span>
            <div><span>{t('badgeNear')}</span><small>{t('badgeNearSub')}</small></div>
          </div>
          <div className="badge b3 bob" style={{ animationDelay: '2s,4s' }}>
            <span className="ic"><Icon name="shieldSolid" size={18} /></span>
            <div><span>{t('badgeSafe')}</span><small>{t('badgeSafeSub')}</small></div>
          </div>
        </div>
      </div>
    </header>
  );
}
