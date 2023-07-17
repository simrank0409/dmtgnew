import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer content container-fluid">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 250"
          className="footerWave"
        >
          <path
            fill="#001c27"
            fill-opacity="1"
            d="M0,224L80,213.3C160,203,250,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,250L1360,250C1280,250,1120,250,960,250C800,250,640,250,480,250C250,250,160,250,80,250L0,250Z"
          ></path>
        </svg>
        <div className="row">
          <div className="col-md-4">
            <h4 className="footerLinksHead">Company</h4>
            <ul className="footerLinks">
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/meettheteam">Meet the Team</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/sitemap">Site Map</Link>
              </li>
            </ul>
            <div className="footerDmtDetails">
              <div className="social-media-ico">
                <Link
                  Link
                  to="https://www.facebook.com/dmt.dialmytrip"
                  target="_blank"
                  className="icon-button facebook"
                >
                  <i className="icofont-facebook"></i>
                  <span></span>
                </Link>
                <Link
                  Link
                  to="https://www.instagram.com/dialmytrip/"
                  target="_blank"
                  className="icon-button instagram"
                >
                  <i className="icofont-instagram"></i>
                  <span></span>
                </Link>
                <Link
                  Link
                  to="https://www.linkedin.com/company/dialmytrip/"
                  target="_blank"
                  className="icon-button linkedin"
                >
                  <i className="icofont-linkedin"></i>
                  <span></span>
                </Link>
                <Link
                  Link
                  to="https://www.twitter.com/dialmytrip"
                  target="_blank"
                  className="icon-button twitter"
                >
                  <i className="icofont-twitter"></i>
                  <span></span>
                </Link>
                <Link
                  Link
                  to="https://www.youtube.com/dialmytrip"
                  target="_blank"
                  className="icon-button youtube"
                >
                  <i className="icofont-youtube-play"></i>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="footerLinksHead">Group Companies</h4>
            <ul className="footerLinks">
                    <li>
                      <a href="#DialMyTrip">DialMyTrip</a>
                    </li>
                    <li>
                      <a href="#Accountancy">Accountancy</a>
                    </li>
                    <li>
                      <a href="#MediaMarketing">Media and Marketing</a>
                    </li>
                    <li>
                      <a href="#Shardajeet">Shardajeet Foundation</a>
                    </li>
                </ul>
          </div>
          {/* <div className="col-md-3">
            <h4 className="footerLinksHead">Utility Services</h4>
            <ul className="footerLinks">
              <li>
                <Link to="/banking">Banking Services</Link>
              </li>
              <li>
                <Link to="/utility">Utility Services</Link>
              </li>
              <li>
                <Link to="/csp">Customer Service Point</Link>
              </li>
              <li>
                <Link to="/cashdrop">Cash Collection / Loan Repayment</Link>
              </li>
              <li>
                <Link to="/insurance">Insurance Services</Link>
              </li>
            </ul>
          </div> */}
          <div className="col-md-4">
            <h4 className="footerLinksHead">Contact Us</h4>
            <ul className="footerLinks">
              <li className="mobile">
                <Link to="tel:9355100668">9355100668</Link>
              </li>
              <li className="call">
                <Link to="tel:0120-4151488">0120-4151488</Link>
              </li>
              <li className="mail">
                <Link to="mailto:help@dialmytrip.com">help@dialmytrip.com</Link>
              </li>
            </ul>
            <ul className="footerLinks">
              <li className="addr">
                <Link>
                  516, Vishal Chamber, Sector-18,
                  <br />
                  Noida-201301, Uttar Pradesh
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="companyName">
        <div className="content container-fluid py-0">
          <div className="row">
            <div className="col-md-4">
              <strong style={{ fontWeight: "500" }}>
                Copyright ©&nbsp;
                <span
                  className="iconify svg-loading"
                  data-icon="icofont:car"
                ></span>
                {`2015-${date}`}&nbsp;
                <span className="dmt-D">DIAL</span>
                <span className="dmt-M">MY</span>
                <span className="dmt-T">TRIP</span>&nbsp;
              </strong>
              <span className="hidden-xs">All rights reserved.</span>
            </div>
            <div className="col-md-8">
              <ul>
                <li>
                  <Link to="/terms">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/grievancePolicy">Grievance Policy</Link>
                </li>
                <li>
                  <Link to="/tncdmt">T&amp;C DMT CSP</Link>
                </li>
                <li>
                  <Link to="/refundpolicy">
                    Refund &amp; Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
