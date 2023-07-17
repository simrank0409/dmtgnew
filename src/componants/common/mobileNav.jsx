import React from "react";
import "./mobilenavbar.css";
import { Link } from "react-router-dom";
const mobileNav = () => {
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
                <hr />
                <li className="drop-down ">
                  <Link to="">About</Link>
                  <ul>
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
                      <Link to="/sitemap">Site Map</Link>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <Link to="">Group Companies</Link>
                  <ul>
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
                </li>
                <li className="">
                  <Link to="/csp">CSP</Link>
                </li>
                <li className="mr-3">
                  <Link
                    to="#"
                    className="loginBtn _D toggle2" style={{marginRight:"",paddingLeft:"5px"}}
                  >
                    Enquiry
                  </Link>
                </li>
                <li className="mr-3">
                  <Link to="/signup" className="loginBtn _M" style={{marginRight:"",paddingLeft:"5px"}}>
                    SignUp
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="loginBtn _T" style={{marginRight:"10px",paddingLeft:"5px"}}>
                    Login
                  </Link>
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
