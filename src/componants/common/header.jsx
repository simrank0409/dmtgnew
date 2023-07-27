import React from "react";
// import { Link } from "react-router-dom";
import MobileNav from "./mobileNav";
import { Link } from 'react-scroll';
import { useState } from "react";
const Header = ({ setIsActive, isActive }) => {
  const [navshow, setNavshow] = useState(false);

  const handleNav = () => {
    setNavshow(!navshow);
  };
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={handleNav}
          class="mobile-nav-toggle d-lg-none"
          style={{ position: "fixed", zIndex: "9999999" }}
        >
          {!navshow ? <i class="fa fa-bars"></i> : <i class="fa fa-close"></i>}
        </button>
        <header id="header" className="header-scrolled">
          <div className="container-fluid content flexCetner">
            <div className="logo float-left">
              <Link to="/" className="scrollto">
                <img
                  src={require("../../static/img/logo.png")}
                  alt="logo"
                  className="img-fluid"
                />
              </Link>
            </div>

            <nav className="main-nav ml-auto d-none d-lg-block">
              <ul>
                <li>
                  <a href="/">Home </a>
                </li>
                <li className="drop-down">
                  <a href="">About</a>
                  <ul>
                    <li>
                      <a href="/aboutus">About Us</a>
                    </li>
                    <li>
                      <a href="/meettheteam">Meet the Team</a>
                    </li>
                    <li>
                      <a href="/careers">Careers</a>
                    </li>
                    <li>
                      <a href="/sitemap">Site Map</a>
                    </li>
                  </ul>
                </li>
                {/* <li className="drop-down">
                  <Link to="/travel">Travel</Link>
                  <ul>
                    <li>
                      <a href="/travel#FlightBooking">Flight Booking</a>
                    </li>
                    <li>
                      <a href="/travel#HotelBooking">Hotel Booking</a>
                    </li>
                    <li>
                      <a href="/travel#BusBooking">Bus Booking</a>
                    </li>
                    <li>
                      <a href="/travel#HolidayPackages">Holiday Booking</a>
                    </li>
                    <li>
                      <a href="#RailBooking">Rail Ticket Booking</a>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="drop-down">
                  <Link to="/banking">Banking</Link>
                  <ul>
                    <li>
                      <a href="/banking#DomesticMnyTrnsf">
                        Domestic Money Remittance
                      </a>
                    </li>
                    <li>
                      <a href="/banking#NeoalMnyTrnsf">Nepal Money Transfer</a>
                    </li>
                    <li>
                      <a href="/banking#AePS">Aadhaar Banking (AePS)</a>
                    </li>
                    <li>
                      <a href="/banking#MicroATM">Micro ATM</a>
                    </li>
                    <li>
                      <a href="/banking#MPOS">M-POS</a>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="drop-down">
                  <Link to="/utility">Utility</Link>
                  <ul>
                    <li>
                      <Link to="/utility#MobileRecharge">Mobile Recharge</Link>
                    </li>
                    <li>
                      <Link to="/utility#DTHRecharge">DTH Recharge</Link>
                    </li>
                    <li>
                      <Link to="/utility#FastTag">FASTag</Link>
                    </li>
                    <li>
                      <Link to="/utility#ElectricityBill">
                        Electricity Bill
                      </Link>
                    </li>
                    <li>
                      <Link to="/utility#WaterBill">Water Bill</Link>
                    </li>
                    <li>
                      <Link to="/utility#GasBill">Gas Bill</Link>
                    </li>
                    <li>
                      <Link to="/utility#TelephoneBill">Telephone Bill</Link>
                    </li>
                    <li>
                      <Link to="/utility#InternetBill">Internet Bill</Link>
                    </li>
                    <li>
                      <Link to="/utility#GasCylinder">GAS Cylinder</Link>
                    </li>
                    <li>
                      <Link to="/utility#PANServices">PAN Service</Link>
                    </li>
                    <li>
                      <Link to="/cashdrop">Cash Drop</Link>
                    </li>
                  </ul>
                </li> */}
                <li className="drop-down">
                  <a href="">Group Companies</a>
                  <ul>
                    <li>
                      <Link to="DialMyTrip">DialMyTrip</Link>
                    </li>
                    <li>
                      <Link to="Accountancy">Accountancy</Link>
                    </li>
                    <li>
                      <Link to="MediaMarketing">Media and Marketing</Link>
                    </li>
                    <li>
                      <Link to="Shardajeet">Shardajeet Foundation</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/csp">CSP</a>
                </li>
                <li className="mr-3">
                  <a
                    href="#"
                    onClick={() => setIsActive(!isActive)}
                    className="loginBtn _D toggle2"
                  >
                    Enquiry
                  </a>
                </li>
                <li className="mr-3">
                  <a href="/signup" className="loginBtn _M">
                    SignUp
                  </a>
                </li>
                <li>
                  <a href="/login" className="loginBtn _T">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      {navshow && <MobileNav setNavshow={setNavshow} setIsActive={setIsActive} isActive={isActive}/>}
    </>
  );
};

export default Header;
