import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-section global-padding">
      <div className="container text-center">
        <div className="row contact-margin contact-top-row">
          <h5>
            <a
              className="contact-email"
              href="mailto:aburke.dev@gmail.com"
              rel="noopener"
              target="_top"
            >
              <i className="bi bi-envelope"></i> aburke.dev@gmail.com
            </a>
          </h5>
          <h5 className="contact-phone">
            <i className="bi bi-phone"></i> 801-708-2782
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
