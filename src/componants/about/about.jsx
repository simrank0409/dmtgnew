import React from "react";
import "./about.css";
import featuresSvg from "../../static/img/features.svg";
import OwlCarousel from "react-owl-carousel";
import "../../static/css/AboutUs.css";
import BusinessModel from "../home/BusinessModel";

const About = () => {
  const options = {
    fade: true,
    loop: true,
    dots: false,
    setGallerySize: true,
    wrapAround: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    prevNextButtons: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <>
      <section id="AboutBanner" class="clearfix">
        <div class="container-fluid">
          <h2>
            About Us
            <span>What do we do?</span>
            <span>
              Over the years a lot has changed, but our goals remain the same.
            </span>
          </h2>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <div class="row ">
            <div class="col-lg-5 col-md-6">
              <div class="about-img">
                <img
                  src={require("../../static/img/about-img.png")}
                  alt="About"
                />
              </div>
            </div>

            <div class="col-lg-7 col-md-6">
              <div class="about-content">
                <h2>About Us</h2>
                <h3>Established in 2015</h3>
                <p class="paraSize">
                 
                  DMT GROUP was incorporated in India in year 2015 with present offices in
                  Delhi-NCR region. DMT is a medium size of Group company with
                  diversified business interest in areas like Financial
                  Inclusion, Travel, Media and Marketing, accounting, Technology, Telecom, Insurance, charity etc.
                </p>
                <p class="paraSize">
                  <b class="dmt-D">D</b>
                  <b class="dmt-M">M</b>
                  <b class="dmt-T">T</b> group initiated its journey offering a range
                  of best value products powered by technology and the
                  best-in-class customer support to empower the Network with
                  instant transactions and comprehensive choices. The company
                  rise has been led by the vision and the spirit of each one of
                  its employees, for whom no idea is too big and no problem is
                  too difficult. With untiring determination, DMT has stayed
                  ahead of the curve by continually evolving its technology to
                  meet the ever-changing demands of the rapidly developing
                  Industry, steadily establishing itself as one India’s growing
                  Company.
                </p>
                <p class="paraSize">
                  The company has presence through its physical representatives
                  in the following states who represent our company and are
                  generating the business for the company. The States are Delhi
                  & NCR, Punjab, Haryana, MP, UP, Bihar, Jharkhand, Maharashtra,
                  Gujrat, West Bengal, Assam, Rajasthan, Himachal Pradesh,
                  Uttarakhand, J&K, Chhattisgarh and we are planning to expand
                  in South India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <div className="row  feature-item mt-4 mb-0 pt-4">
            <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
              <img src={featuresSvg} alt="Features" className="img-fluid" />
            </div>

            <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
              <h4>We value our Business relations.</h4>
              <p className="paraSize">
                <b className="dmt-D">D</b>
                <b className="dmt-M">M</b>
                <b className="dmt-T">T</b> is an organization where people are
                nurtured through continuous learning and skill improvement, are
                respected, heard and encouraged to do their best. We believe
                that a company is made by its employees. We value our
                relationship with our Suppliers and trade partner. People are
                nurtured here with gradual learning and developing their skills.
                We provide individuals opportunity to showcase their talent and
                grow. Employee satisfaction is highly considered in DIALMYTRIP.
              </p>
              <p className="paraSize">
                <b className="dmt-D">D</b>
                <b className="dmt-M">M</b>
                <b className="dmt-T">T</b> actively work to provide an elaborate
                and accessible ecosystem to have a wide representation across
                India. We help our partners in the marketplace, gaining them
                exposure, growing networks and ultimately increasing their
                revenue. We strive to give our partners a professional and
                personalized service that truly understands their needs and
                expectations, whether it is about establishing new commercial
                relationships and coordinate sales and marketing activities with
                the trade at large.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <BusinessModel /> */}

      <section id="testimonials" className="wow fadeInUp">
        <div className="container">
          <div className="section-header">
            <h3>Testimonials</h3>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-12">
              <OwlCarousel
                className="testimonials-carousel owl-theme"
                {...options}
              >
                <div class="testimonial-item">
                  <img
                    src={require("../../static/img/testimonials/user1.png")}
                    alt=""
                    class="testimonial-img"
                  />
                  <h3>Dhirendra Modi</h3>
                  <h4>Distributor</h4>
                  <p>
                    It has been a pleasure working with <b class="dmt-D">D</b>
                    <b class="dmt-M">M</b>
                    <b class="dmt-T">T</b>. I have had very positive feedback on
                    the system which we have built together, for which I would
                    like to send you once more my compliments. Thank you for
                    your outstanding support throughout the event.
                  </p>
                </div>
                <div class="testimonial-item">
                  <img
                    src={require("../../static/img/testimonials/user2.png")}
                    alt=""
                    class="testimonial-img"
                  />
                  <h3>Ashok Sharma</h3>
                  <h4>Super Partner</h4>
                  <p>
                    Dialmytrip is our invaluable partner. Their team has
                    hands-on as well as planning, supporting, architectural and
                    quality assurance experience with service oriented attitude.
                    We've found a true partner that is able to hold our hand and
                    work with us to implement our visions and strategies.
                  </p>
                </div>

                <div class="testimonial-item">
                  <img
                    src={require("../../static/img/testimonials/user3.png")}
                    alt=""
                    class="testimonial-img"
                  />
                  <h3>Divya Sachdeva</h3>
                  <h4>Distributor</h4>
                  <p>
                    Professional recommended and great experience, Dialmytrip is
                    a great utility service provider. They have shown
                    consistency and high integrity over the course of our
                    relationship. I am very impressed with their commitment and
                    outstanding services.
                  </p>
                </div>

                <div class="testimonial-item">
                  <img
                    src={require("../../static/img/testimonials/user4.png")}
                    alt=""
                    class="testimonial-img"
                  />
                  <h3>Nitish Kashyap</h3>
                  <h4>Super Partner</h4>
                  <p>
                    Dialmytrip is our invaluable partner. Their team has
                    hands-on as well as planning, supporting, architectural and
                    quality assurance experience with service oriented attitude.
                    We've found a true partner that is able to hold our hand and
                    work with us to implement our visions and strategies.
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action" class="wow fadeInUp">
        <div class="row m-0">
          <div className="col-10 mx-auto">
            <div className="row">
              <div class="col-lg-9 mx-auto text-center text-lg-left">
                <h3 class="cta-title">Call To Action</h3>
                <p class="cta-text">
                  Whether you have a question, feedback or anything else,
                  <br />
                  Our team is ready to answer all your calls
                </p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" href="tel:0120-4151488">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" class="wow fadeIn ">
        <div class="container">
          <div class="row counters">
            <div
              class="col-lg-3 col-6 text-center wow fadeInRight"
              data-wow-delay="0.0s"
            >
              <span data-toggle="counter-up">50+</span>
              <p>Products & Services</p>
            </div>

            <div
              class="col-lg-3 col-6 text-center wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <span data-toggle="counter-up">500+</span>
              <p>Associated Distributors</p>
            </div>

            <div
              class="col-lg-3 col-6 text-center wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <span data-toggle="counter-up">20K</span>
              <p>Active Retailers</p>
            </div>

            <div
              class="col-lg-3 col-6 text-center wow fadeInRight "
              data-wow-delay="0.3s"
            >
              <span data-toggle="counter-up">150K</span>
              <p>Transactions per Day</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
