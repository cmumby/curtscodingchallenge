'use server';
//import { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import HeroContainer from './components/Hero/HeroContainer';
import Stage from './components/Stage/Stage';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import AccomplishmentsContainer from './components/Accomplishments/AccomplishmentsContainer';
import Portfolio from './components/Portfolio/Portfolio';
import ClientsContainer from './components/Clients/ClientsContainer';
import Challenges from './components/Challenges/Challenges';
import ContactContainer from './components/Contact/ContactContainer';
import Footer from './components/Footer/Footer';
import MenuContainer from './components/Menu/MenuContainer';

//import { animateHome } from './utils';

interface PageProps {
  initialLogoText: string;
  initialLogoDescriptionHidden: boolean;
}

async function App() {
  const initialLogoText = 'CurtsCode';
  const initialLogoDescriptionHidden = true;

  const handleIntersection = (entries: { boundingClientRect: any }[]) => {
    entries.forEach((entry: { boundingClientRect: any }) => {
      const targetRect = entry.boundingClientRect;
      const viewportAboveAboutSection = targetRect.top < 0;
    });
  };

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
        <AccomplishmentsContainer />
        <Portfolio />
        <ClientsContainer />
        <Challenges />
        <ContactContainer />
      </Stage>
      <Footer />
    </>
  );
}

export default App;
