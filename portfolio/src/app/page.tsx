'use server';
//import { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import HeroContainer from './components/Hero/HeroContainer';
import Stage from './components/Stage/Stage';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Accomplishments from './components/Accomplishments/Accomplishments';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Challenges from './components/Challenges/Challenges';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MenuContainer from './components/Menu/MenuContainer';

//import { animateHome } from './utils';

interface PageProps {
  initialLogoText: string;
  initialLogoDescriptionHidden: boolean;
}

async function App() {
  // const [logoText, setLogoText] = useState('CurtsCode');
  // const [logoDescriptionHidden, setLogoDescriptionHidden] = useState(true);
  const initialLogoText = 'CurtsCode';
  const initialLogoDescriptionHidden = true;

  const handleIntersection = (entries: { boundingClientRect: any }[]) => {
    entries.forEach((entry: { boundingClientRect: any }) => {
      const targetRect = entry.boundingClientRect;
      const viewportAboveAboutSection = targetRect.top < 0;

      // if (viewportAboveAboutSection) {
      //   setLogoText('Curtis Mumby');
      //   setLogoDescriptionHidden(false);
      // } else {
      //   setLogoText('CurtsCode');
      //   setLogoDescriptionHidden(true);
      // }
    });
  };

  //const targetRef = useRef(null);

  // useEffect(() => {
  //   const options = animateHome();
  //   const observer = new IntersectionObserver(handleIntersection, options);
  //   if (targetRef.current) observer.observe(targetRef.current);
  // }, []);
  console.log({ initialLogoText });

  return (
    <>
      <MenuContainer
        logoText={initialLogoText}
        logoDescriptionHidden={initialLogoDescriptionHidden}
      />
      <HeroContainer />
      <Stage>
        <About />
        <Experience />
        <Accomplishments />
        <Portfolio />
        <Clients />
        <Challenges />
        {/* <Contact />*/}
      </Stage>
      <Footer />
    </>
  );
}

export default App;
