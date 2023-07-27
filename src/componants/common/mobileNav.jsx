import React from "react";
import "./mobilenavbar.css";
import { Link } from 'react-scroll';
import MobileNav from "./mobileNav";
import { useState } from "react";
// import { Link } from "react-router-dom";
const mobileNav = ({ setIsActive, isActive, setNavshow, navshow }) => {

  // const [navshow, setNavshow] = useState(false);
  const handleNav = () => {
    setNavshow(!navshow);
  };
  return (
    <>
      <div className="mobilenNavBar">
        <div className="cart-content ">
          <div>
            <img
              src={require("../../static/img/logo.png")}
              alt="logo"
              width={100}
              className="img-fluid"
            />
          </div>
          <div>
          <nav className="hello main-nav ml-auto ">
              <ul>
                <li className="">
                <Link to="/">Home </Link>
                </li>
               
                <li className="drop-down">
                  <Link to="">About</Link>
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
                <li className="drop-down">
                  <a to="">Group Companies</a>
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
                <li className="">
                <Link to="/csp">CSP</Link>
                </li>
                {/* <li className="mr-3">
                  <a
                    href="#"
                    onClick={() => setIsActive(!isActive)}
                    className="loginBtn _D toggle2" style={{marginRight:"",paddingLeft:"5px"}}
                  >
                    Enquiry
                  </a>
                </li> */}
                <li className="mr-3">
                  <a href="/signup" className="loginBtn _M" style={{marginRight:"",paddingLeft:"5px"}}>
                    SignUp
                  </a>
                </li>
                <li>
                  <a href="/login" className="loginBtn _T" style={{marginRight:"10px",paddingLeft:"5px"}}>
                    Login
                  </a>
                  </li>
                </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default mobileNav;
