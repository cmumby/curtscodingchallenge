import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormStatus({ loading: true, error: null, success: false });
    try {
      // Your form submission logic here
      // For example, you can use fetch to send the form data to a server
      const response = await fetch('forms/contact.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setFormStatus({ loading: false, error: null, success: true });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error: any) {
      setFormStatus({ loading: false, error: error.message, success: false });
    }
  };

  return (
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
                      <form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message"
                                required
                                value={formData.message}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 my-3 text-center">
                            <div className="loading">Loading</div>
                            <div className="error-message">
                              {formStatus.error}
                            </div>
                            <div className="sent-message">
                              {formStatus.success &&
                                'Your message has been sent. Thank you!'}
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-md-0 pt-4">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        I&apos;d love to hear from you! Whether you have a
                        project in mind, a question, or just want to connect,
                        feel free to reach out using the form below. I&apos;ll
                        get back to you as soon as possible. Looking forward to
                        chatting!
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="bi bi-geo-alt"></span>Located in NYC.
                          Open to Remote / Relocation
                        </li>
                        <li>
                          <span className="bi bi-file-earmark-richtext"></span>
                          <a href="https://github.com/cmumby/curtscodingchallenge/blob/main/documents/curtis_mumby_resume.pdf">
                            Resume
                          </a>
                        </li>
                        <li>
                          <span className="bi bi-envelope"></span>{' '}
                          <a href="mailto:curtis.mumby@gmail.com">
                            curtis.mumby@gmail.com
                          </a>
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
  );
}

export default Contact;
