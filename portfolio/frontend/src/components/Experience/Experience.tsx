import './Experience.scss';
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
            <div className="service-box" style={{ textAlign: 'left', display: 'flex' }}>
              <div className="service-ico">
                <span className="ico-circle ey">
                  <svg xmlns="http://www.w3.org/2000/svg" height="69.32" width="68.67">
                    <path
                      d="M11.09 61.4h17.37v7.92H.67V34.9h19.7l4.61 7.92H11.1v5.68h12.56v7.22H11.1zm35.86-26.5l-5.9 11.23-5.88-11.23H23.65l12.13 20.82v13.6h10.4v-13.6L58.31 34.9z"
                      fill="#161d23"
                      fill-rule="evenodd"
                    />
                    <path fill="#ffe600" fill-rule="evenodd" d="M68.67 12.81V0L0 24.83z" />
                  </svg>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title" style={{ textAlign: 'left', margin: 0 }}>
                  Ernst & Young (EY)
                </h2>
                <p className="s-description text-center">Senior Application Architech</p>
              </div>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                  Quia, provident vitae! Magni tempora perferendis eum non provident.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                  Quia, provident vitae! Magni tempora perferendis eum non provident.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                  Quia, provident vitae! Magni tempora perferendis eum non provident.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                  Quia, provident vitae! Magni tempora perferendis eum non provident.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                  Quia, provident vitae! Magni tempora perferendis eum non provident.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                  Quia, provident vitae! Magni tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
