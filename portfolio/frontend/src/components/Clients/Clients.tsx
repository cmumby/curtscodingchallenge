import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import JnJLogo from '../logos/JnJLogo';
import TakedaLogo from '../logos/TakedaLogo';
import NYULogo from '../logos/NYULogo';
import LVHNLogo from '../logos/LVHNLogo';
import CaterpillarLogo from '../logos/CaterpillarLogo';

import './Clients.scss';

function Clients() {
  return (
    <>
      <div className="title-box text-center client-highlights">
        <h3 className="title-a">Client Highlights</h3>
        <p className="subtitle-a">
          Spotlighting Client Success: Transformative Web Solutions and Impactful Results
        </p>
        <div className="line-mf"></div>
      </div>
      <div
        className="testimonials paralax-mf bg-image"
        style={{ backgroundImage: 'url(assets/img/overlay-bg.jpg)' }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop
                autoplay={{
                  delay: 10000,
                }}
                pagination={true}
                modules={[Autoplay, Pagination]}
              >
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                  <div className="swiper-wrapper">
                    {/* takeada */}
                    <SwiperSlide>
                      <div className="swiper-slide ">
                        <div className="testimonial-box">
                          <div className="author-test takeda">
                            <TakedaLogo />
                            <span className="author takeda">Takeda</span>
                          </div>
                          <div className="content-test takeda">
                            <p className="description lead">
                              <strong>Spearheaded the creation</strong> of a user-friendly Plasma donation web
                              application using React.js, resulting in increased traceability accuracy by 40%
                              within the first quarter.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* caterpillar */}
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-box">
                          <div className="author-test">
                            <CaterpillarLogo />
                            <span className="author">Caterpillar</span>
                          </div>
                          <div className="content-test">
                            <p className="description lead">
                              <strong>Directed the formulation of a Sales Forecasting App</strong> using
                              React.js, Node.js, Express.js, AWS, git, and Docker. Implemented machine
                              learning that <strong>yielded 98% accuracy in sales projections</strong> over
                              the next 3 quarters.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* nyu */}
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-box">
                          <div className="author-test">
                            <NYULogo />
                            <span className="author">New York Unversity</span>
                          </div>
                          <div className="content-test">
                            <p className="description lead">
                              <strong>Seeded a think tank</strong> to the gather business requirements from
                              internal teams and university end-users.{' '}
                              <strong>Developed an intuitive web application</strong> for the university which
                              <strong> doubled end-user approval.</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* lvhn */}
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-box">
                          <div className="author-test">
                            <LVHNLogo />
                            <span className="author">Lehigh Valley Health Network</span>
                          </div>
                          <div className="content-test">
                            <p className="description lead">
                              <strong>Revamped the copmpany website internal portals</strong>, enhancing user
                              experience and increasing viewership customer satisfaction.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* johnson and johnson */}
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-box">
                          <div className="author-test">
                            <JnJLogo />
                            <span className="author">Johnson and Johnson</span>
                          </div>
                          <div className="content-test">
                            <p className="description lead">
                              <strong>Rebuilt the CMS Web Application</strong> for a suite of customer-facing
                              product sites, leading to decreased development times and faster, more
                              performant web pages.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <div className="swiper-pagination"></div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
