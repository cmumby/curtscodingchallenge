import { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { constants, select, on } from '../../utils';
import Image from 'next/image';
import './Menu.scss';
import { animateHome } from '../../utils';

interface MenuProps {
  logoText: string;
  logoDescriptionHidden: boolean;
}

const Menu = ({ logoText, logoDescriptionHidden }: MenuProps) => {
  const [updatedText, setUpdatedText] = useState(logoText);
  const [updatedLogoDescriptionHidden, setUpdatedLogoDescriptionHidden] =
    useState(logoDescriptionHidden);
  const [scrolled, setScrolled] = useState(false);
  //let updatedText = logoText;

  const { THIRTY_SECONDS, ONE_TENTH_SECOND, HALF_THENTH_SECOND } = constants;

  const handleIntersection = (entries: { boundingClientRect: any }[]) => {
    entries.forEach((entry: { boundingClientRect: any }) => {
      const targetRect = entry.boundingClientRect;
      const viewportAboveAboutSection = targetRect.top < 0;

      if (viewportAboveAboutSection) {
        setUpdatedText('Curtis Mumby');
        setUpdatedLogoDescriptionHidden(false);
        setScrolled(true);
        //console.log('ABOVE');
      } else {
        // console.log('BELOW');
        setUpdatedText('CurtsCode');
        setUpdatedLogoDescriptionHidden(true);
        setScrolled(false);
      }
    });
  };

  useEffect(() => {
    const options = animateHome();

    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      const observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(aboutElement);

      // Cleanup observer on unmount
      return () => {
        observer.disconnect();
      };
    }

    const navbar = select('#navbar');

    // on('click', '.mobile-nav-toggle', function () {
    //   if (navbar !== null && !Array.isArray(navbar)) navbar?.classList.toggle('navbar-mobile');

    //   this.classList.toggle('bi-list');
    //   this.classList.toggle('bi-x');
    // }); for testing purposes

    on('click', '.mobile-nav-toggle', function () {
      if (navbar !== null && !Array.isArray(navbar))
        navbar?.classList.toggle('navbar-mobile');

      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }, [updatedText, updatedLogoDescriptionHidden]);

  return (
    <>
      <header
        id="header"
        className={`fixed-top test ${scrolled ? 'header-scrolled' : ''}`}
      >
        <div className="d-flex align-items-center justify-content-between container">
          <h1 className="logo">
            <a href="index.html">
              <Image
                alt="face logo"
                className="face-logo"
                src="/assets/img/logo-me.png"
                width={40}
                height={40}
              />
              <span id="logo-text">{updatedText}</span>
              <span
                id="logo-desc"
                className={`logo-scroll ${
                  updatedLogoDescriptionHidden ? 'hidden' : ''
                }`}
                data-typed-items="Web Engineer., Code Enthusiast., Technophile., Problem Solver., Teamate."
              >
                <ReactTyped
                  strings={[
                    'Web Engineer.',
                    'Code Enthusiast.',
                    'Technophile.',
                    'Problem Solver.',
                    `Teamate.`,
                  ]}
                  loop
                  typeSpeed={ONE_TENTH_SECOND}
                  backSpeed={HALF_THENTH_SECOND}
                  backDelay={THIRTY_SECONDS}
                  showCursor={false}
                ></ReactTyped>
              </span>
            </a>
          </h1>

          <nav id="navbar" className="navbar test">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#challenges">
                  Code Challenges
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{' '}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Menu;
