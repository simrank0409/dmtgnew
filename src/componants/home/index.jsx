import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import Typewriter from "typewriter-effect";
import "./sliderSection.css";
import BusinessModel from "./BusinessModel";
import { ProminentData } from "./ProminentArray";
import {AccData } from "./AccArray";
import {MediaData } from "./MediaArray";
import {ShardaData } from "./ShardaArray";
import 'bootstrap/dist/css/bootstrap.css';
import { WebRoutes } from "../../routes";
const Home = ({ setIsActive, isActive }) => {
  const options = {
    fade: true,
    accessibility: true,
    pageDots: false,
    loop: true,
    dots: false,
    setGallerySize: false,
    wrapAround: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000, // Set to 0 to disable initial timeout
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    prevNextButtons: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <>
      <div className="MyCarousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            {/* <li data-target="#carouselExampleIndicators" data-slide-to="5"></li> */}
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <div className="sliderSection">
                <div className="overlaySlider"></div>
                <div className="slide-content">
                  <div className="mask">
                    <h1 className="title" style={{fontSize:"60px"}}>
                      DMT group
                      {/* <span className="">
                        <Typewriter
                          options={{
                            strings: ["PARTNERS", "ASSOCIATES"],
                            autoStart: true,
                            loop: true,
                            cursor: "|",
                          }}
                        />
                      </span> */}
                    </h1>
                    <div className="sub-title">
                      <div className="typedStrings">
                        <p >your business buddy</p>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="mask">
                    <p className="caption">
                      <center> Easiest way to upgrade, grow and manage your business. 
                    </center>
                      {/* DMT is determined to discover new ways to create business
                      opportunities in real time from online and mobile
                      platform. Start your business with us today & serve your
                      customers with all the Travel based services. Our offering
                      includes – Air, Bus, Train Tickets, Hotel Booking &
                      Holiday packages with economical & cost-effective pricing. */}
                    </p>
                    <Link
                      onClick={() => setIsActive(!isActive)}
                      className="btn  toggle-form"
                    >
                      CONTACT US
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="sliderSection1">
                <div className="overlaySlider"></div>
                <div className="slide-content">
                  <div className="mask">
                    <h1 className="title">
                      Dialmytrip
                      {/* <span className="">
                        <Typewriter
                          options={{
                            strings: ["DIGITAL INDIA", "डिजिटल भारत"],
                            autoStart: true,
                            loop: true,
                            cursor: "|",
                          }}
                        />
                      </span> */}
                    </h1>
                    <div className="sub-title">
                      <div className="typedStrings">
                        <p>THE EASIEST WAY TO SPENT, SAVE AND MANAGE MONEY</p>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="mask">
                    <p className="caption">
                      <center>
            
                    We provide you with the best products and more then 25 services of diverse range at valuable prices including travel, banking, insurance, utility, csp.
                    </center>
                     {/* DMT is offering business opportunity to become Bank’s CSP
                      and maximize the earning by fulfilling your customers day
                      to day banking needs. To promote rural entrepreneurship,
                      enable community participation for social improvement.
                      Sign up today with us to become CSP with ease of doing
                      business. */}
                    </p>
                    <Link
                    to="https://www.dialmytrip.com/Home/Dialmytrip/Home.aspx"
                      
                      className="btn toggle-form"
                    >
                      VISIT US
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="sliderSection6">
                <div className="overlaySlider"></div>
                <div className="slide-content">
                  <div className="mask">
                    <h1 className="title">
                     DMT Media and Marketing
                      {/* <Typewriter
                        options={{
                          strings: [
                            "Grahak Seva Kendra",
                            "ग्राहक सेवा केन्द्र",
                          ],
                          autoStart: true,
                          loop: true,
                          cursor: "|",
                        }}
                      /> */}
                    </h1>
                    <div className="sub-title">
                      <div className="typedStrings">
                        <p>full suite of marketing solutions</p>
                      </div>
                      <span
                        className="typed"
                        style={{ whiteSpace: "pre" }}
                      ></span>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="mask">
                    <p className="caption">
                      <center>
                    We Specialize in developing the best Marketing Strategy for your Digital Business.
                    </center> 
                    {/* DMT is determined to discover new ways to create business
                      opportunities in real time from online and mobile
                      platform. Start your business with us today & serve your
                      customers with all the Travel based services. Our offering
                      includes – Air, Bus, Train Tickets, Hotel Booking &
                      Holiday packages with economical & cost-effective pricing. */}
                    </p>
                    <Link
                    to="https://dmtmediamarketing.netlify.app/"
                      
                      className="btn  toggle-form"
                    >
                      VISIT US
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="sliderSection3">
                <div className="overlaySlider"></div>
                <div className="slide-content">
                  <div className="mask">
                    <h2 className="title">DMT Accountancy</h2>
                    <div className="sub-title">
                      <div className="typedStrings">
                        <p>Saving is Earning</p>
                      </div>
                      {/* <span
                        className="typed"
                        style={{ whiteSpace: "pre" }}
                      ></span> */}
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="mask">
                    <p className="caption">
                      <center>
                    Our core team consists of skilled and proficient qualified Accounts, Advocates & CA along with a diligent team of other professionals, all under one roof.
                    </center>
                     {/* DMT is offering Cash drop services to authorized partners
                      across India. The customer can go to our outlet and make
                      the payment for repayments of Loan, Eateries payments and
                      Insurance Premium hassle-free & Instant settlement of
                      payments. Digitally transformed services for improving
                      ease of doing business. */}
                    </p>
                    <Link
                      to="https://dmtaccountancy.netlify.app/"
                      
                      className="btn toggle-form "
                    >
                      VISIT US
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="sliderSection5">
                <div className="overlaySlider"></div>
                <div className="slide-content">
                  <div className="mask">
                    <h2 className="title">
                      Shardajeet Foundation
                    </h2>
                    <div className="sub-title">
                      <div className="typedStrings">
                        <p>Helping hand for the underprivileged community</p>
                      </div>
                      {/* <span
                        className="typed"
                        style={{ whiteSpace: "pre" }}
                      ></span> */}
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="mask">
                    <p className="caption">
                    <center> It is a Social Service Organization working for the welfare and empowerment of Underprivileged Community. The mission of this foundation is to provide with the necessary resources like books, pencil, notebooks, scholarships to the selected students, etc.</center>
                      {/* DMT is a corporate agent approved by IRDAI and has been
                      authorized to do insurance business across India. DMT
                      invites you to become the associate partner and full fill
                      your customer’s need of Insurance and maximize your
                      revenue by doing Life, Health, Motor & Travel and many
                      more Insurance with DMT. */}
                    </p>
                    <Link
                      to="https://shardhajeet.netlify.app/"
                      
                      className="btn toggle-form "
                    >
                      VISI US
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="carousel-item">
              <div className="sliderSection4">
                <div className="overlaySlider"></div>
                <div className="slide-content">
                  <div className="mask">
                    <h2 className="title">Utility Bill Payment Services</h2>
                    <div className="sub-title">
                      <div className="typedStrings">
                        <p>ONLINE UTILITY PAYMENT PROCESSOR</p>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="mask">
                    <p className="caption">
                      DMT is offering Prepaid recharge and utility bill payments
                      services to our associate partners across Pan India to pay
                      instantly & hassle-free customer’s utility bills for
                      Electricity, Gas, Water, Landline, Mobile, Broadband, DTH,
                      and much more We urge you to Joins us and maximize your
                      revenue by providing hassle-free services.
                    </p>
                    <Link
                      onClick={() => setIsActive(!isActive)}
                      className="btn toggle-form "
                    >
                      CONTACT US
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* ================USP Section=================*/}
      <section id="usp" className="text-center">
      <Link
          className="usp-wrp"
          target="_blank"
        >
          <img
            src={require("../../static/img/tata.png")}
            alt="USP"
            style={{ width:"80px", height: "80px" }}
          />
          <span >
            Approved CA of
            <br />
            IATA
          </span>
        </Link>
        <Link
          className="usp-wrp"
          target="_blank"
          to="https://dialmytrip.com/Home/Dialmytrip/certifications/irdai.pdf"
        >
          <img
            src="https://services.dialmytrip.com/Home/couponfares/assets_new/img/partners/usp-irdai.png"
            alt="USP"
          />
          <span>
            Approved CA of
            <br />
            IRDAI
          </span>
        </Link>
        <Link
          className="usp-wrp"
          target="_blank"
          to="https://dialmytrip.com/Home/Dialmytrip/certifications/amfi.pdf"
        >
          <img
            src="https://services.dialmytrip.com/Home/couponfares/assets_new/img/partners/usp-amfi.png"
            alt="USP"
          />
          <span>
            Authorized CA of
            <br />
            AMFI
          </span>
        </Link>
        <Link
          className="usp-wrp"
          target="_blank"
          to="https://dialmytrip.com/Home/Dialmytrip/certifications/irctc.pdf"
        >
          <img
            src="https://services.dialmytrip.com/Home/couponfares/assets_new/img/partners/usp-irctc.png"
            alt="USP"
          />
          <span>
            Authorized PSP of
            <br />
            IRCTC
          </span>
        </Link>
        <Link
          className="usp-wrp"
          target="_blank"
          to="https://dialmytrip.com/Home/Dialmytrip/certifications/nsdl.pdf"
        >
          <img
            src="https://services.dialmytrip.com/Home/couponfares/assets_new/img/partners/usp-nsdl.png"
            alt="USP"
          />
          <span>
            Authorised CBC of
            <br />
            NSDL
          </span>
        </Link>
        <Link
          className="usp-wrp"
          target="_blank"
          to="https://dialmytrip.com/Home/Dialmytrip/certifications/uti.pdf"
        >
          <img
            src="https://services.dialmytrip.com/Home/couponfares/assets_new/img/partners/utiitsl.png"
            alt="USP"
          />
          <span>
            Authorized PSP of
            <br />
            UTI
          </span>
        </Link>
        <Link
          className="usp-wrp"
          target="_blank"
          to="https://bcfi.org.in/dialmytrip-tech-private-limited/"
        >
          <img
            src="https://services.dialmytrip.com/Home/couponfares/assets_new/img/partners/usp-bcfi.png"
            alt="USP"
          />
          <span>
            Authorized by
            <br />
            BCFI
          </span>
        </Link>
      </section>
      {/*========================End USP Section=====================*/}

      {/*======================== business model======================== */}
      {/* <BusinessModel /> */}

      <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title" style={{paddingBottom:"0px"}}>
          <h2>About Us</h2>
        </div>

        <div className="row content" >
          <div className="">
            <p> 
            DMT group was incorporated in India in year 2015 with present offices in Delhi-NCR region. DMT is a medium size of Fintech company with diversified business interest in areas like Financial Inclusion, Travel, Technology, Accountancy, media and marketing, Insurance etc. 
            DMT initiated its journey offering a range of best value products powered by technology and the best-in-class customer support to empower the Network with instant transactions and comprehensive choices. The company rise has been led by the vision and the spirit of each one of its employees, for whom no idea is too big and no problem is too difficult. With untiring determination, DMT has stayed ahead of the curve by continually evolving its technology to meet the ever-changing demands of the rapidly developing Industry, steadily establishing itself as one of India’s growing Company.
            </p>
            <Link to="/aboutus"className=" link-style1" style={{marginLeft:"450px", marginTop:"30px", position:"absolute"}}>  know More </Link>
            {/* <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul> */}
          </div>
          {/* <div className="col-lg-6 pt-4 pt-lg-0">
            
           
          </div> */}
        </div>

      </div>
    </section>

      <section id="why-us " id="DialMyTrip" className="why-us section-bg dmt">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content" >
              <h3><strong>DialMyTrip</strong></h3>
              <p>
              Dialmytrip provides with the best products and services of diverse range at valuable prices, fully backed up by its top-class customer care system. It has been established and find its place as a leading fintech company.
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <Link to="/travel" data-bs-toggle="collapse" className="collapsed" data-bs-target="#accordion-list-1"><span><i class="icofont-check-circled"></i></span> Travel Services </Link>
                  {/* <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list"> */}
                    {/* <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p> */}
                  {/* </div> */}
                </li>

                <li>
                  <Link to="/banking" data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span><i class="icofont-check-circled"></i></span>Digital banking and Utility payment services<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></Link>
                  
                </li>
                <li>
                  <Link to="/utility" data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span><i class="icofont-check-circled"></i></span> Utility payment services<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></Link>
                  
                </li>
                <li>
                  <Link to="/cashdrop" data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span><i class="icofont-check-circled"></i></span> Cash management system<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></Link>
                  
                </li>
                <li>
                  <Link to="/insurance" data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span><i class="icofont-check-circled"></i></span> Composite Insurance<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></Link>
                 
                </li>
              </ul>
            </div>
            <div className="" style={{marginLeft:"100px"}}>
              <Link
               
                to="https://www.dialmytrip.com/Home/Dialmytrip/Home.aspx"
                className="link-style1"
              >
                Visit Us <i class="icofont-rounded-right"></i>
              </Link>
            </div>
          </div>
         
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img"  data-aos="zoom-in" data-aos-delay="150">&nbsp;
          <img
                  src={require("../../static/img/dialMyTrip.png")}
                  
                /></div>
        </div>

      </div>
      </section>
      <hr />
      <section id="skills" id="Accountancy" className="skills acc" style={{backgroundColor:"#F3F5FA"}}>
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
          <img
                  src={require("../../static/img/accountancy.png")}
                  class="img-fluid"
                  alt="Step-1"
                />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100" >
            <h3>DMT Accountancy</h3>
            <p className="fst-italic" style={{marginBottom:"40px"}}>
            We have a team of classified professionals to offer you all the services and to assist you in all possible ways.
            </p>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span><i class="icofont-check-circled"></i></span> GST and Income Tax </a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                   
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className=""><span><i class="icofont-check-circled"></i></span> Accounting<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                   
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className=""><span><i class="icofont-check-circled"></i></span> Ministry of Corporate Affairs<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="  "><span><i class="icofont-check-circled"></i></span> Registration & Certificates<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    
                  </div>
                </li>
              </ul>
            </div>
            
            {/* <div className="skills-content">

              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">CSS <i class="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">JavaScript <i class="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Photoshop <i class="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="">
              <Link
                onClick={() => setIsActive(!isActive)}
                to="/contact"
                className="link-style1"
              >
                Contact Us <i class="icofont-rounded-right"></i>
              </Link>
            </div>
            </div> */}
             <div className="" style={{marginTop:"50px"}}>
              <Link
                
                to="https://dmtaccountancy.netlify.app/"
                className="link-style1"
              >
                Visit Us <i class="icofont-rounded-right"></i>
              </Link>
            </div>
          </div>
        </div>

      </div>
      </section>
      <hr />
      <section id="why-us" id="MediaMarketing" className="why-us section-bg media" >
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3><strong>DMT Media and Marketing</strong></h3>
              <p>
              We help companies to grow their businesses digitally. The unique combination of strategic thinking marketing expertise operational know-how digital transformation capabilities and advanced analytics.
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span><i class="icofont-check-circled"></i></span> Social Media Marketing <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    {/* <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p> */}
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className=""><span><i class="icofont-check-circled"></i></span> Creative Work  <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className=""><span><i class="icofont-check-circled"></i></span>Digital Marketing <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className=""><span><i class="icofont-check-circled"></i></span> Search engine optimization <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="" style={{marginLeft:"100px"}}>
              <Link
                // onClick={() => setIsActive(!isActive)}
                to="https://dmtmediamarketing.netlify.app/"
                className="link-style1"
              >
                Visit Us <i class="icofont-rounded-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img"  data-aos="zoom-in" data-aos-delay="150">&nbsp;
          <img
                  src={require("../../static/img/media.png")}
                  
                /></div>
        </div>

      </div>
      </section>
      <hr />
      <section id="skills" id="Shardajeet" className="skills sharda" style={{backgroundColor:"#F3F5FA"}}>
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
          <img
                  src={require("../../static/img/tree.png")}
                  class="img-fluid"
                  alt="Step-1"
                />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Shardajeet Foundation</h3>
            <p className="fst-italic" style={{marginBottom:"40px"}}>
            A Social Service Organization working for the welfare and empowerment of Underprivileged Community. The mission of this foundation is to provide with the necessary resources like books, scholarships etc. to students, and in the health segment we are mainly focused on the eyesight segment.
            </p>


           
            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span><i class="icofont-check-circled"></i></span> Health</a>
                  
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className=""><span><i class="icofont-check-circled"></i></span> Education</a>
                 
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className=""><span><i class="icofont-check-circled"></i></span> Environment</a>
                 
                </li>
               
              </ul>
            </div>
             

           
            <div className="" style={{marginTop:"50px"}}>
              <Link
                
                to="https://shardhajeet.netlify.app/"
                className="link-style1"
              >
                Visit Us <i class="icofont-rounded-right"></i>
              </Link>
            </div>
          </div>
        </div>

      </div>
      </section>

      {/* <section class="wow fadeIn  py-5" style={{backgroundColor:"rgb(245, 248, 253)"}}>
        <div class="container-fluid">
          <div class="section-header">
            <h3>Start working with us in 3 simple steps</h3>
            <p style={{ paddingBottom: "36px" }}>
              Just few clicks and your business starts growing
            </p>
          </div>

          <div class="row">
            <div
              class="col-md-4"
              data-wow-delay="0.4s"
              data-wow-duration="0.9s"
            >
              <div class="step">
                <img
                  src={require("../../static/img/steps/img-1.png")}
                  class="img-fluid"
                  alt="Step-1"
                />
                <h4>Create an account</h4>
                <span>
                  Register using your Your Name, Shop Name, Mobile Number, Email
                  ID, Address and PINcode.
                </span>
              </div>
            </div>
            <div
              class="col-md-4 "
              data-wow-delay="0.8s"
              data-wow-duration="0.9s"
            >
              <div class="step">
                <img
                  src={require("../../static/img/steps/img-2.png")}
                  class="img-fluid"
                  alt="Step-2"
                />
                <h4>Complete shop KYC</h4>
                <span>
                  Upload any of shop's KYC documents like GSTIN, Utility Bill,
                  Shop & Establishment Licence.
                </span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="step">
                <img
                  src={require("../../static/img/steps/img-3.png")}
                  class="img-fluid"
                  alt="Step-3"
                />
                <h4>Start Transacting</h4>
                <span>
                  Login your account, Click on Service, Complete your
                  transaction process and Generate the receipt.
                </span>
              </div>
            </div>
            <div class="col-md-12 text-center pt-5">
              <Link
                onClick={() => setIsActive(!isActive)}
                to="/contact"
                className="link-style1"
              >
                Contact Us <i class="icofont-rounded-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section class="servicesSec pt-5">
        <div class="container-fluid ">
          <div class="section-header">
            <h3>Our Prominent Divisions</h3>
            <p>We provide best in class services.</p>
          </div>
         <div id="DialMyTrip" className="pt-5" style={{backgroundColor:"rgb(245, 248, 253)"}}>
         <h3 class="division text-center pb-5" > Dialmytrip</h3>
          <div class="row" >
            {ProminentData.map((item) => {
              return (
                <>
                  <div
                    class="col-md-6 col-lg-4 wow bounceInLeft"
                    data-wow-duration="1.4s"
                  >
                    <div class="box">
                      <div class="icon" style={{ background: "#fceef3" }}>
                        <i style={{ color: "#ff689b" }}>
                          <span
                            class="iconify"
                            data-icon={`${item.icon}`}
                            data-inline="false"
                          ></span>
                        </i>
                      </div>
                      <h4 class="title">
                        <Link to="">
                          <span class="Travel">{item.typeWriterOption}</span>
                        </Link>
                      </h4>
                      <p class="description">
                        {item.description}
                        <br />
                        <Link to={item.path} class="readMore">
                          {item.buttonText}
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          
         </div>
        
        <div id="Accountancy" className="pt-5 pb-5" >
         <h3 class="division text-center pb-5" >DMT Accountancy</h3>
          <div class="row" >
            {AccData.map((item) => {
              return (
                <>
                  <div
                    class="col-md-6 col-lg-4"
                    data-wow-duration="1.4s"
                  >
                    <div class="box">
                      <div class="icon" style={{ background: "#fceef3" }}>
                        <i style={{ color: "#ff689b" }}>
                          <span
                            class="iconify"
                            data-icon={`${item.icon}`}
                            data-inline="false"
                          ></span>
                        </i>
                      </div>
                      <h4 class="title">
                        <Link to="">
                          <span class="Travel">{item.typeWriterOption}</span>
                        </Link>
                      </h4>
                      <p class="description">
                        {item.description}
                        <br />
                        
                      </p>
                    </div>
                    
                  </div>
                </>
              );
            })}
            <div class="col-md-12 text-center">
              <Link
                to="https://dmtaccountancy.netlify.app/"
                className="link-style1"
              >
                VISIT US <i class="icofont-rounded-right"></i>
              </Link>
            </div>
          </div>
          
         </div>
         <div id="MediaMarketing" className="pt-5 pb-5" style={{backgroundColor:"rgb(245, 248, 253)"}}>
         <h3 class="division text-center pb-5" >DMT Media and Marketing</h3>
          <div class="row" >
            {MediaData.map((item) => {
              return (
                <>
                  <div
                    class="col-md-6 col-lg-4 wow bounceInLeft"
                    data-wow-duration="1.4s"
                  >
                    <div class="box">
                      <div class="icon" style={{ background: "#fceef3" }}>
                        <i style={{ color: "#ff689b" }}>
                          <span
                            class="iconify"
                            data-icon={`${item.icon}`}
                            data-inline="false"
                          ></span>
                        </i>
                      </div>
                      <h4 class="title">
                        <Link to="">
                          <span class="Travel">{item.typeWriterOption}</span>
                        </Link>
                      </h4>
                      <p class="description">
                        {item.description}
                        <br />
                       
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div class="col-md-12 text-center ">
              <Link
                to="https://dmtmediamarketing.netlify.app/"
                className="link-style1"
              >
                VISIT US <i class="icofont-rounded-right"></i>
              </Link>
            </div>
         </div>
         <div id="Shardajeet" className="pt-5 pb-5" >
         <h3 class="division text-center pb-5" >Shardajeet Foundation</h3>
          <div class="row" >
            {ShardaData.map((item) => {
              return (
                <>
                  <div
                    class="col-md-6 col-lg-4 wow bounceInLeft"
                    data-wow-duration="1.4s"
                  >
                    <div class="box">
                      <div class="icon" style={{ background: "#fceef3" }}>
                        <i style={{ color: "#ff689b" }}>
                          <span
                            class="iconify"
                            data-icon={`${item.icon}`}
                            data-inline="false"
                          ></span>
                        </i>
                      </div>
                      <h4 class="title">
                        <Link to="">
                          <span class="Travel">{item.typeWriterOption}</span>
                        </Link>
                      </h4>
                      <p class="description">
                        {item.description}
                        <br />
                        
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div class="col-md-12 text-center pt-1">
              <Link
              to="https://shardhajeet.netlify.app/"
                // onClick={() => setIsActive(!isActive)}
                className="link-style1"
              >
                VISIT US <i class="icofont-rounded-right"></i>
              </Link>
            </div>
         </div>

          <hr />
          </div>
      </section> */}

      <section id="achievement" class=" py-4" style={{marginBottom:"80px"}}>
        <div class="container-fluid">
          <div class="section-header">
            <h3>Our Professional Certifications & Affiliations</h3>
          </div>

          <div class="row">
            <OwlCarousel className="owl-theme" {...options}>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/nsdl.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/irctc.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/utiitsl.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/irdai.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/xiarch.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/prabhuMoney.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/redbus.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/paytm.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/airtel.png")}
                    alt="Partners"
                  />
                </div>
              </div>
              <div class="item">
                <div class="achive-wrp">
                  <img
                    src={require("../../static/img/partners/mosambee.png")}
                    alt="Partners"
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      {/* <section id="why-us" class="wow fadeIn section-bg" #DFF7F0>
        <div class="container-fluid">
          <div class="section-header">
            <h3>Why choose us?</h3>
            <p>
              We strive to provide our customers with differentiated products
              and services delivered within a flexible and cost-effective
              business model with profitable growth that meets the customer’s
              needs.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="why-us-img">
                <img
                  src={require("../../static/img/Teamwork.png")}
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="why-us-content">
                <div
                  class="features wow bounceInUp clearfix"
                  data-wow-delay="0.0s"
                >
                  <i class="text-info">
                    <span
                      class="iconify"
                      data-icon="ant-design:safety-certificate-outlined"
                      data-inline="false"
                    ></span>
                  </i>
                  <h4 class="text-info">Safe & Secure</h4>
                  <p>
                    We are certified by CERT-IN Empanelled & ISO 9001-2015,
                    27001-2013 certified Global Consultation and Implementation
                    firm.
                  </p>
                </div>

                <div
                  class="features wow bounceInUp clearfix"
                  data-wow-delay="0.1s"
                >
                  <i class="dmt-D">
                    <span
                      class="iconify"
                      data-icon="typcn-group-outline"
                      data-inline="true"
                    ></span>
                  </i>
                  <h4 class="dmt-D">Team Work</h4>
                  <p>
                    Our team of experts makes us the most sought-after the
                    development of new products which involves understanding of
                    customer needs toward a common goal.
                  </p>
                </div>

                <div
                  class="features wow bounceInUp clearfix"
                  data-wow-delay="0.2s"
                >
                  <i class="dmt-M">
                    <span
                      class="iconify"
                      data-icon="vaadin-handshake"
                      data-inline="true"
                    ></span>
                  </i>
                  <h4 class="dmt-M">Superior Services</h4>
                  <p>
                    Customer’s expectations have never been higher for improved
                    services because communication is the basis of a sound
                    relationship with our customers
                  </p>
                </div>

                <div
                  class="features wow bounceInUp clearfix"
                  data-wow-delay="0.3s"
                >
                  <i class="dmt-T">
                    <span
                      class="iconify"
                      data-icon="si-glyph:infinity-2"
                      data-inline="false"
                    ></span>
                  </i>
                  <h4 class="dmt-T">Flexibility</h4>
                  <p>
                    By giving service beyond contractual obligations, we provide
                    special features to associates for managing business which
                    makes a real difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row counters pb-sm-5 pb-0">
            <div
              class="col-lg-3 col-6 text-center wow fadeInRight"
              data-wow-delay="0.0s"
            >
              <span data-toggle="counter-up">50+</span>
              <p className="pt-2">Products & Services</p>
            </div>

            <div
              class="col-lg-3 col-6 text-center wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <span data-toggle="counter-up">500+</span>
              <p className="pt-2">Associated Distributors</p>
            </div>

            <div
              class="col-lg-3 col-6 text-center wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <span data-toggle="counter-up">20K</span>
              <p className="pt-2">Active Retailers</p>
            </div>

            <div
              class="col-lg-3 col-6 text-center wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <span data-toggle="counter-up">150K</span>
              <p className="pt-2">Transactions per Day</p>
            </div>
          </div>
        </div>
      </section> */}
    
    </>
  );
};

export default Home;
