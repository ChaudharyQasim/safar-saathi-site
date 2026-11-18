import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Pricing } from './components/Pricing';
import { Download, Drivers, Faq, Features, Footer, HowItWorks, Safety } from './components/Sections';
import { Marquee, Stats } from './components/Stats';
import { LangProvider } from './lang';

export function App() {
  return (
    <LangProvider>
      <div className="aurora" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <Safety />
      <Drivers />
      <Faq />
      <Download />
      <Footer />
    </LangProvider>
  );
}
