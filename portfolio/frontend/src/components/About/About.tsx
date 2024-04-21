/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { YEARS_EXPRIENCE } from '../../utils';
import './About.scss';

interface propTypes {
  targetRef: React.RefObject<HTMLImageElement>;
}

function About({ targetRef }: propTypes) {
  return (
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
                      Experience: <span id="total-years">{YEARS_EXPRIENCE} Years</span>
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
                        aria-valuemin={0}
                        aria-valuemax={100}
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
                        aria-valuemin={0}
                        aria-valuemax={100}
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
                        aria-valuemin={0}
                        aria-valuemax={100}
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
                        aria-valuenow={71}
                        aria-valuemin={0}
                        aria-valuemax={100}
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
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
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
                        aria-valuenow={47}
                        aria-valuemin={0}
                        aria-valuemax={100}
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
                      Welcome to my portfolio! With 17 years of experience in web development and a diverse
                      skill set encompassing HTML, CSS, SASS, React, Redux, Node JS, Git, Docker, AWS, Cloud
                      Services, Bash Scripting, and Agile methodologies, I am passionate about crafting
                      innovative digital experiences. Explore my projects and discover how I can contribute to
                      your team.
                    </p>
                    <p className="lead">
                      Throughout my career, I have successfully designed and implemented innovative web
                      solutions that have met and exceeded client expectations. My proficiency in front-end
                      technologies, coupled with a strong understanding of back-end technologies has allowed
                      me to create responsive and user-friendly web applications. I have experience
                      collaborating with cross-functional teams and leveraging Agile methodologies to deliver
                      projects on time and within budget.
                    </p>
                    <p className="lead">
                      Thank you for visiting my portfolio! I look forward to connecting and discussing how I
                      can contribute to your projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
