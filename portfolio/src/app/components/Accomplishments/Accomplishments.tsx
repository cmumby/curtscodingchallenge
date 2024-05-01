import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Accomplishments.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import MediaQuery from 'react-responsive';
import { YEARS_EXPRIENCE } from '../../utils';

function Accomplishments() {
  return (
    <>
      <div className="title-box client-highlights text-center">
        <h3 className="title-a">Acheivements</h3>
        <p className="subtitle-a">Project Metrics at-a-glance</p>
        <div className="line-mf"></div>
      </div>
      <div
        className="section-counter paralax-mf bg-image"
        style={{ backgroundImage: 'url(assets/img/counters-bg.jpg)' }}
      >
        <div className="overlay-mf"></div>
        <div className="position-relative container">
          <div id="acheivements-slider" className="row">
            <MediaQuery query="(max-width: 875px)">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop
                // autoplay={{
                //   delay: 10000,
                // }}
                pagination={true}
                modules={[Autoplay, Pagination]}
              >
                <div className="swiper" data-aos="fade-up" data-aos-delay="100">
                  <div className="swiper-wrapper">
                    {/* takeada */}
                    <SwiperSlide>
                      <div className="col-sm-12">
                        <div className="counter-box counter-box pt-md-0 pt-4">
                          <div className="counter-ico">
                            <span className="ico-circle">
                              <i className="bi bi-buildings"></i>
                            </span>
                          </div>
                          <div className="counter-num">
                            <p
                              data-purecounter-start="0"
                              data-purecounter-end="15"
                              data-purecounter-duration="1"
                              className="counter purecounter"
                            ></p>
                            <span className="counter-text">
                              INDUSTRIES WORKED
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* caterpillar */}
                    <SwiperSlide>
                      <div className="col-sm-12">
                        <div className="counter-box pt-md-0 pt-4">
                          <div className="counter-ico">
                            <span className="ico-circle">
                              <i className="bi bi-journal-richtext"></i>
                            </span>
                          </div>
                          <div className="counter-num">
                            <p
                              data-purecounter-start="0"
                              data-purecounter-end={YEARS_EXPRIENCE}
                              data-purecounter-duration="1"
                              className="counter purecounter"
                            ></p>
                            <span className="counter-text">
                              YEARS OF EXPERIENCE
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* nyu */}
                    <SwiperSlide>
                      <div className="col-sm-12">
                        <div className="counter-box pt-md-0 pt-4">
                          <div className="counter-ico">
                            <span className="ico-circle">
                              <i className="bi bi-file-earmark-code"></i>
                            </span>
                          </div>
                          <div className="counter-num">
                            <p
                              data-purecounter-start="0"
                              data-purecounter-end="10"
                              data-purecounter-duration="1"
                              className="counter purecounter"
                            ></p>
                            <span className="counter-text">
                              PROGRAMMING LANGUAGES LEARNED
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* lvhn */}
                    <SwiperSlide>
                      <div className="col-sm-12">
                        <div className="counter-box pt-md-0 pt-4">
                          <div className="counter-ico">
                            <span className="ico-circle">
                              <i className="bi bi-tools"></i>
                            </span>
                          </div>
                          <div className="counter-num">
                            <p
                              data-purecounter-start="0"
                              data-purecounter-end="12"
                              data-purecounter-duration="1"
                              className="counter purecounter"
                            ></p>
                            <span className="counter-text">
                              FRAMEWORKS UTILIZED
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* johnson and johnson */}

                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </Swiper>
            </MediaQuery>
            <MediaQuery query="(min-width: 876px)">
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box counter-box pt-md-0 pt-4">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-buildings"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">INDUSTRIES WORKED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-md-0 pt-4">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-journal-richtext"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end={YEARS_EXPRIENCE}
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-md-0 pt-4">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-file-earmark-code"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="10"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">
                      PROGRAMMING LANGUAGES LEARNED
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-md-0 pt-4">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-tools"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="12"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">FRAMEWORKS UTILIZED</span>
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
