/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { constants } from '../../utils';

interface MenuProps {
  logoText: string;
  logoDescriptionHidden: boolean;
}

const Menu = ({ logoText, logoDescriptionHidden }: MenuProps) => {
  const [scrolled, setScrolled] = useState(false);

  const { THIRTY_SECONDS, ONE_TENTH_SECOND, HALF_THENTH_SECOND } = constants;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className={`fixed-top test ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">
              <img className="face-logo" src="assets/img/logo-me.png" />{' '}
              <span id="logo-text">{logoText}</span>
              <span
                id="logo-desc"
                className={`logo-scroll ${logoDescriptionHidden ? 'hidden' : ''}`}
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

          <nav id="navbar" className="navbar">
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
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#blog">
                  Blog
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
                      <span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i>
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
