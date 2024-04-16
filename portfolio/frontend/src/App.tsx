/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [logoText, setLogoText] = useState('CurtsCode');
  const [logoDescriptionHidden, setLogoDescriptionHidden] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleIntersection(entries: { boundingClientRect: any }[], _observer: any) {
    entries.forEach((entry: { boundingClientRect: any }) => {
      const targetRect = entry.boundingClientRect;
      console.log('top:', targetRect.top);
      if (targetRect.top < 0) {
        // Target element is above the viewport
        setLogoText('Curtis Mumby');
        setLogoDescriptionHidden(false);
      } else {
        // Target element is below the viewport
        setLogoText('CurtsCode');
        setLogoDescriptionHidden(true);
      }
    });
  }

  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the viewport
      threshold: 0.5, // Trigger when 50% of the target is visible
    };
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetRef.current) observer.observe(targetRef.current);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function isBeforeSeptember(date: number | Date) {
    const SEPTEMBER = 8;
    const septemberFirst = new Date(new Date().getFullYear(), SEPTEMBER, 1);
    return date < septemberFirst;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const yearModifier = isBeforeSeptember(currentDate) ? -1 : 0;
  const STARTING_YEAR = 2006;
  const YEARS_EXPRIENCE = currentYear - STARTING_YEAR;
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
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={10000}
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
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: 'url(assets/img/hero-bg.jpg)' }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title mb-4">Curtis Mumby</h1>
              <p className="hero-subtitle">
                <ReactTyped
                  strings={[
                    'Full Stack Web Architect',
                    'JavaScript/TypeScript - Python - PHP',
                    'React - Node - Git - AWS - Docker',
                    'Postgres - Mongo - Oracle',
                    `${YEARS_EXPRIENCE + yearModifier} Years Web Engineering Experience`,
                    'Scroll For More Information',
                  ]}
                  typeSpeed={50}
                  backSpeed={25}
                  backDelay={3000}
                />
                <span
                  className="typed"
                  data-typed-items="Full Stack Web Architect, JavaScript/TypeScript - Python - PHP,React - Node - Git - AWS - Docker, Postgres - Mongo - Oracle, [YEARS] Years Web Deb Experience, Scroll For More Information"
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <main id="main">
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img
                              id="profile-photo"
                              ref={targetRef}
                              src="assets/img/about-me.jpg"
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p>
                              <span className="title-s">Name: </span> <span>Curtis Munby</span>
                            </p>
                            <p>
                              <span className="title-s">Profile: </span> <span>Full Stack Web Architect</span>
                            </p>
                            <p>
                              <span className="title-s">Email: </span>{' '}
                              <span>
                                <a href="mailto:curtis.mumby@gmail.com">curtis.mumby@gmail.com</a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">
                          Experience: <span id="total-years">{YEARS_EXPRIENCE + yearModifier} Years</span>
                        </p>
                        <span>
                          <strong>Front End: (HTML / JavaScipt / CSS):</strong>
                        </span>{' '}
                        <span className="pull-right">17 Years</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>
                          <strong>Backend (Node / Python / Ruby / PHP/ GO):</strong>
                        </span>{' '}
                        <span className="pull-right">17 Years</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>
                          <strong>Version Control Managment (Git / SVN / Mercucial)</strong>
                        </span>{' '}
                        <span className="pull-right">17 Years</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>
                          <strong>Agile Development (Sprints / Cermonies / Planning)</strong>
                        </span>{' '}
                        <span className="pull-right">12 Years</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '71%' }}
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>
                          <strong>Containerization (Docker / Podman)</strong>
                        </span>{' '}
                        <span className="pull-right">11 Years</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '65%' }}
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>
                          <strong>Cloud Services: AWS / Azure:</strong>
                        </span>{' '}
                        <span className="pull-right">8 Years</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '47%' }}
                            aria-valuenow="47"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About me</h5>
                        </div>
                        <p className="lead">
                          Welcome to my portfolio! With 17 years of experience in web development and a
                          diverse skill set encompassing HTML, CSS, SASS, React, Redux, Node JS, Git, Docker,
                          AWS, Cloud Services, Bash Scripting, and Agile methodologies, I am passionate about
                          crafting innovative digital experiences. Explore my projects and discover how I can
                          contribute to your team.
                        </p>
                        <p className="lead">
                          Throughout my career, I have successfully designed and implemented innovative web
                          solutions that have met and exceeded client expectations. My proficiency in
                          front-end technologies, coupled with a strong understanding of back-end technologies
                          has allowed me to create responsive and user-friendly web applications. I have
                          experience collaborating with cross-functional teams and leveraging Agile
                          methodologies to deliver projects on time and within budget.
                        </p>
                        <p className="lead">
                          Thank you for visiting my portfolio! I look forward to connecting and discussing how
                          I can contribute to your projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-mf pt-5 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Experience</h3>
                  <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-briefcase"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Design</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem
                      fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-card-checklist"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Development</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem
                      fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-bar-chart"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Photography</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem
                      fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-binoculars"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Responsive Design</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem
                      fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-brightness-high"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Graphic Design</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem
                      fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-calendar4-week"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Marketing Services</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem
                      fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="section-counter paralax-mf bg-image"
          style={{ backgroundImage: 'url(assets/img/counters-bg.jpg)' }}
        >
          <div className="overlay-mf"></div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-check"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="450"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">WORKS COMPLETED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-journal-richtext"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="25"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-people"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="550"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">TOTAL CLIENTS</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-award"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="48"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">AWARD WON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Portfolio</h3>
                  <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img src="assets/img/work-1.jpg" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Project X/Twitter Clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{' '}
                          <span className="w-date">18 Sep. 2024</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {' '}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img src="assets/img/work-2.jpg" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Loreda Cuno Nere</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{' '}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {' '}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img src="assets/img/work-3.jpg" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Mavrito Lana Dere</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{' '}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {' '}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img src="assets/img/work-4.jpg" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bindo Laro Cado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{' '}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {' '}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img src="assets/img/work-5.jpg" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Lena Mado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{' '}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {' '}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img src="assets/img/work-6.jpg" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Big Bang</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{' '}
                          <span className="w-date">18 Sep. 2017</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {' '}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="testimonials paralax-mf bg-image"
          style={{ backgroundImage: 'url(assets/img/overlay-bg.jpg)' }}
        >
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img
                            src="assets/img/testimonial-2.jpg"
                            alt=""
                            className="rounded-circle b-shadow-a"
                          />
                          <span className="author">Xavi Alonso</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img
                            src="assets/img/testimonial-4.jpg"
                            alt=""
                            className="rounded-circle b-shadow-a"
                          />
                          <span className="author">Marta Socrate</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="blog" className="blog-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Code Challenges</h3>
                  <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <a href="blog-single.html">
                      <img src="assets/img/post-1.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Travel</h6>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="blog-single.html">See more ideas about Travel</a>
                    </h3>
                    <p className="card-description">
                      Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien
                      massa, convallis a pellentesque nec, egestas non nisi.
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                        <span className="author">Morgan Freeman</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock"></span> 10 min
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <a href="blog-single.html">
                      <img src="assets/img/post-2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Web Design</h6>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="blog-single.html">See more ideas about Travel</a>
                    </h3>
                    <p className="card-description">
                      Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien
                      massa, convallis a pellentesque nec, egestas non nisi.
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                        <span className="author">Morgan Freeman</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock"></span> 10 min
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <a href="blog-single.html">
                      <img src="assets/img/post-3.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Web Design</h6>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="blog-single.html">See more ideas about Travel</a>
                    </h3>
                    <p className="card-description">
                      Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien
                      massa, convallis a pellentesque nec, egestas non nisi.
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                        <span className="author">Morgan Freeman</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock"></span> 10 min
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: 'url(assets/img/overlay-bg.jpg)' }}
        >
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left">Message Me</h5>
                        </div>
                        <div>
                          <form
                            action="forms/contact.php"
                            method="post"
                            role="form"
                            className="php-email-form"
                          >
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-md-12 text-center my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                              </div>
                              <div className="col-md-12 text-center">
                                <button type="submit" className="button button-a button-big button-rouded">
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">Get in Touch</h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            I'd love to hear from you! Whether you have a project in mind, a question, or just
                            want to connect, feel free to reach out using the form below. I'll get back to you
                            as soon as possible. Looking forward to chatting!"
                          </p>
                          <ul className="list-ico">
                            <li>
                              <span className="bi bi-geo-alt"></span>Located in NYC. Open to Remote /
                              Relocation
                            </li>
                            <li>
                              <span className="bi bi-file-earmark-richtext"></span>
                              <a href="https://github.com/cmumby/curtscodingchallenge/blob/main/documents/curtis_mumby_resume.pdf">
                                Resume
                              </a>
                            </li>
                            <li>
                              <span className="bi bi-envelope"></span>{' '}
                              <a href="mailto:curtis.mumby@gmail.com">curtis.mumby@gmail.com</a>
                            </li>
                          </ul>
                        </div>
                        <div className="socials">
                          <ul>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-facebook"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-instagram"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-twitter"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-linkedin"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  &copy; Copyright <strong>CurtsCode</strong>. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
