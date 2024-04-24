import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Accomplishments.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import MediaQuery from 'react-responsive';

function Accomplishments() {
  return (
    <>
      <div className="title-box text-center client-highlights">
        <h3 className="title-a">Acheivements</h3>
        <p className="subtitle-a">Project Metrics at-a-glance</p>
        <div className="line-mf"></div>
      </div>
      <div
        className="section-counter paralax-mf bg-image"
        style={{ backgroundImage: 'url(assets/img/counters-bg.jpg)' }}
      >
        <div className="overlay-mf"></div>
        <div className="container position-relative">
          <div id="acheivements-slider" className="row">
            <MediaQuery query="(max-width: 875px)">
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
                <div className="swiper" data-aos="fade-up" data-aos-delay="100">
                  <div className="swiper-wrapper">
                    {/* takeada */}
                    <SwiperSlide>
                      <div className="col-sm-12">
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
                    </SwiperSlide>
                    {/* caterpillar */}
                    <SwiperSlide>
                      <div className="col-sm-12">
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
                    </SwiperSlide>
                    {/* nyu */}
                    <SwiperSlide>
                      <div className="col-sm-12">
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
                    </SwiperSlide>
                    {/* lvhn */}
                    <SwiperSlide>
                      <div className="col-sm-12">
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
                    </SwiperSlide>
                    {/* johnson and johnson */}

                    <div className="swiper-pagination">TEST</div>
                  </div>
                </div>
              </Swiper>
            </MediaQuery>
            <MediaQuery query="(min-width: 876px)">
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
            </MediaQuery>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accomplishments;
