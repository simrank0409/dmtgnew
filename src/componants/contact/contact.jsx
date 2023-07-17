import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <section id="Contact" class="clearfix">
        <div class="container-fluid">
          <h2>
            Get in Touch with Us
            <span>
              Whether you have a question, feedback or anything else. We are
              available
            </span>
            <span>
              to answer all your queries between 9:00 AM to 8:00 PM
              (Monday-Saturday)
            </span>
          </h2>
        </div>
      </section>
      <section class="addrDetails">
        <div class="container">
          <div class="row">
            <div class="col-md-4" data-wow-duration="1.4s">
              <div class="addrFlex">
                <i class="icofont-support"></i>
                <h2>Call Us</h2>
                <span class="Infos">
                  <a href="tel:+919355100668">+91 9355100668</a>
                  <a href="tel:+911204151488">0120-4151488</a>
                </span>
              </div>
            </div>
            <div
              class="col-md-4"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div class="addrFlex">
                <i class="icofont-email"></i>
                <h2>E-mail Us</h2>
                <span class="Infos">
                  <a href="mailto:contact@dmtgroup.in">contact@dmtgroup.in</a>
                </span>
              </div>
            </div>
            <div
              class="col-md-4"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div class="addrFlex">
                <i class="icofont-building-alt"></i>
                <h2>Meet Us</h2>
                <span class="Infos">
                  516, Vishal Chamber, Sector-18,
                  <br />
                  Noida-201301, Uttar Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="DMT_Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7008.082194571723!2d77.32543299999999!3d28.568528599999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ed73f3f40340355!2sDialmytrip%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1583999104206!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: "0" }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex="0"
          title="dmtmap"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
