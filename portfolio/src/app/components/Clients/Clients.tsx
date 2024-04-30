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
      <div className="title-box client-highlights text-center">
        <h3 className="title-a">Client Highlights</h3>
        <p className="subtitle-a">
          Spotlighting Client Success: Transformative Web Solutions and
          Impactful Results
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
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
