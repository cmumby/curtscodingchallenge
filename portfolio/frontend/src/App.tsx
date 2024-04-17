/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Stage from './components/Stage/Stage';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Accomplishments from './components/Accomplishments/Accomplishments';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Challenges from './components/Challenges/Challenges';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { animateHome } from './utils';

function App() {
  const [logoText, setLogoText] = useState('CurtsCode');
  const [logoDescriptionHidden, setLogoDescriptionHidden] = useState(true);

  function handleIntersection(entries: { boundingClientRect: any }[]) {
    entries.forEach((entry: { boundingClientRect: any }) => {
      const targetRect = entry.boundingClientRect;
      const viewportAboveAboutSection = targetRect.top < 0;

      if (viewportAboveAboutSection) {
        setLogoText('Curtis Mumby');
        setLogoDescriptionHidden(false);
      } else {
        setLogoText('CurtsCode');
        setLogoDescriptionHidden(true);
      }
    });
  }

  const targetRef = useRef(null);

  useEffect(() => {
    const options = animateHome();
    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetRef.current) observer.observe(targetRef.current);
  }, []);

  return (
    <>
      <Menu logoText={logoText} logoDescriptionHidden={logoDescriptionHidden} />
      <Hero />
      <Stage>
        <About targetRef={targetRef} />
        <Experience />
        <Accomplishments />
        <Portfolio />
        <Clients />
        <Challenges />
        <Contact />
      </Stage>
      <Footer />
    </>
  );
}

export default App;
