import './Experience.scss';
import FoxNewsLogo from './FoxNewsLogo';
import EYLogo from './EYLogo';
import NycDoeLogo from './NycDoeLogo';

function Experience() {
  return (
    <section id="experience" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Experience</h3>
              <p className="subtitle-a">Driving Innovation and Excellence in Web Development.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="service-box">
              <div className="service-container ey">
                <div className="service-icon">
                  <span className="ico-circle ey">
                    <EYLogo />
                  </span>
                </div>

                <div className="service-content">
                  <h2 className="s-title" style={{ textAlign: 'left', margin: 0 }}>
                    Ernst & Young (EY)
                  </h2>
                  <p className="s-description">Senior Full-Stack Developer - Blockchian Solutions</p>
                  <p className="s-description">Full-time . 2015 - 2024</p>
                  <p className="s-description">New York City</p>
                  <p className="s-info">
                    <span style={{ fontWeight: 'bold' }}>
                      Technnolgies: React, Redux Node, Python, Git, Agile, Docker, Aws, Azure, Agile,
                      Javascript, TypeScript, Ruby, Solidity,
                    </span>
                    <br />
                    My tasks as a Full Stack Developer in the US Blockchain practice involved leveraging an
                    array of modern web technologies including JavaScript, PHP, Python, React, Node.js,
                    Express, MongoDB, MySQL, Oracle, and PostgreSQL. My primary focus has been on developing
                    web applications that operate on blockchain infrastructures. This involves building robust
                    applications that utilize Web3.js, Solidity, and truffle/hardhat.js, ensuring seamless
                    integration and functionality within the blockchain ecosystem.
                  </p>
                </div>
              </div>
              <div className="service-container northpint">
                <div className="service-icon">
                  <span className="ico-circle northpoint">
                    <img src="/assets/img/NorthPointDigitalLogo.png" />
                  </span>
                </div>

                <div className="service-content">
                  <h2 className="s-title" style={{ textAlign: 'left', margin: 0 }}>
                    Northpoint Digital
                  </h2>
                  <p className="s-description">Senior Web Consultant</p>
                  <p className="s-description">Full-time . 2015 - 2024</p>
                  <p className="s-description">New York City</p>
                  <p className="s-info">
                    <span style={{ fontWeight: 'bold' }}>
                      Technnolgies: HTML, CSS, SSCSS, PHP, Node, Python, React, GIT, Docker, AWS
                    </span>
                    <br />
                    My work involved developing back-end web components, including custom Drupal modules,
                    WordPress plugins, and new Drupal templates. I specialize in populating web pages with
                    data from various third-party content provider APIs and creating feeds to integrate
                    Drupal/PHP content across multiple platforms. Additionally, I have expertise in
                    maintaining functionality that streamlines common assets across all Drupal/PHP websites
                    and web applications, such as headers, footers, styles, scripts, and metadata. I have
                    integrated social network components from Facebook, Twitter, and other platforms and
                    configured backend APIs for mobile apps. My skills include developing internal client
                    applications using popular PHP MVC Frameworks like Laravel and Symfony. Technologies I
                    work with include PHP, MySQL, SQLite, MongoDB, JavaScript, jQuery, Node.js, Python, HTML5,
                    CSS3, Drupal (versions 6-8), and WordPress.
                  </p>
                </div>
              </div>
              <div className="service-container fox">
                <div className="service-icon">
                  <span className="ico-circle ey">
                    <FoxNewsLogo />
                  </span>
                </div>

                <div className="service-content">
                  <h2 className="s-title" style={{ textAlign: 'left', margin: 0 }}>
                    Fox News
                  </h2>
                  <p className="s-description">Application Developer</p>
                  <p className="s-description">Full-time . 2006 - 2014</p>
                  <p className="s-description">New York City</p>
                  <p className="s-info">
                    <span style={{ fontWeight: 'bold' }}>
                      Technnolgies: HTML, CSS, ActionScript, PHP, Python, SVN, GIT, Vagrant, Linux Server
                    </span>
                    <br />
                    My main tasks involved developing applications, sections, and show pages for leading media
                    platforms such as Fox News, Fox Business, and Fox Nation. Collaborating closely with
                    cross-functional teams, I played a key role in the development of show-specific websites
                    and the implementation of time-based campaigns. This experience has not only honed my
                    technical skills but also deepened my understanding of user engagement strategies in the
                    digital media landscape.
                  </p>
                </div>
              </div>
              <div className="service-container nycdoe">
                <div className="service-icon">
                  <span className="ico-circle ey">
                    <NycDoeLogo />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title" style={{ textAlign: 'left', margin: 0 }}>
                    NYC Department of Education
                  </h2>
                  <p className="s-description">Staff Web Developer</p>
                  <p className="s-description">2005 - 2006</p>
                  <p className="s-description">New York City</p>
                  <p className="s-info">
                    <span style={{ fontWeight: 'bold' }}>Technnolgies: Flash ActionScript, HTML, CSS</span>
                    <br />
                    My main tasks involved working closely with school principals, teachers, and staff to
                    create interactive school sites and portals. These platforms were designed to showcase
                    each school's specialties and events, fostering a sense of community and engagement.
                    Collaborating with educators has not only enhanced my technical abilities but also
                    deepened my appreciation for the role of technology in education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
