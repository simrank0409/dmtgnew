import React from "react";
import "./sitemap.css";
import { Link } from "react-router-dom";
const Sitemap = () => {
  return (
    <>
      <section className="OP_BannerS clearfix">
        <div className="container-fluid">
          <h2>
            Site Map
            <span>Checkout Our Site Map</span>
            <span></span>
          </h2>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row siteMap">
            <div className="col-md-4">
              <b>Company</b>
              <ul>
                <li>
                  <Link to="Default.aspx">Home</Link>
                </li>
                <li>
                  <Link to="about.aspx">About Us</Link>
                </li>
                <li>
                  <Link to="team.aspx">Meet the Team</Link>
                </li>
                <li>
                  <Link to="Certification.aspx">Certification</Link>
                </li>
                <li>
                  <Link to="Careers.aspx">Careers</Link>
                </li>
                <li>
                  <Link to="SiteMap.aspx">Site Map</Link>
                </li>
                <li>
                  <Link to="contact.aspx">Contact Us</Link>
                </li>
                <li>
                  <Link to="https://services.dialmytrip.com">Agent Login</Link>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3">
              <b>Travel</b>
              <ul>
                <li>
                  <Link to="Travel.aspx">Flight Booking</Link>
                </li>
                <li>
                  <Link to="Travel.aspx#HotelBooking">Hotel Booking</Link>
                </li>
                <li>
                  <Link to="Travel.aspx#BusBooking">Bus Booking</Link>
                </li>
                <li>
                  <Link to="Travel.aspx#HolidayPackages">Holiday Booking</Link>
                </li>
                <li>
                  <Link to="Travel.aspx#RailBooking">Rail Ticket Booking</Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-md-3">
              <b>Banking</b>
              <ul>
                <li>
                  <Link to="Banking.aspx">Domestic Money Remittance</Link>
                </li>
                <li>
                  <Link to="Banking.aspx#NeoalMnyTrnsf">
                    Nepal Money Transfer
                  </Link>
                </li>
                <li>
                  <Link to="Banking.aspx#AePS">Aadhaar Banking (AePS)</Link>
                </li>
                <li>
                  <Link to="Banking.aspx#MicroATM">Micro ATM</Link>
                </li>
                <li>
                  <Link to="Banking.aspx#MPOS">M-POS</Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-md-3">
              <b>Insurance</b>
              <ul>
                <li>
                  <Link to="Insurance.aspx">Life-Term Insurance</Link>
                </li>
                <li>
                  <Link to="Insurance.aspx#HealthInsurance">
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link to="Insurance.aspx#MotorInsurance">
                    Motor Insurance
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-md-3">
              <b>Utility Payment</b>
              <ul>
                <li>
                  <Link to="Utility.aspx">Electricity Bill</Link>
                </li>
                <li>
                  <Link to="Utility.aspx#WaterBill">Water Bill</Link>
                </li>
                <li>
                  <Link to="Utility.aspx#GasBill">Gas Bill</Link>
                </li>
                <li>
                  <Link to="Utility.aspx#TelephoneBill">Telephone Bill</Link>
                </li>
                <li>
                  <Link to="Utility.aspx#InternetBill">Internet Bill</Link>
                </li>
                <li>
                  <Link to="Utility.aspx#GasCylinder">GAS Cylinder</Link>
                </li>
                <li>
                  <Link to="Utility.aspx#PANServices">PAN Service</Link>
                </li>
                <li>
                  <Link to="CashDrop.aspx">Cash Drop</Link>
                </li>
              </ul>
            </div> */}
            <div className="col-md-4">
              <b>Group Companies</b>
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
            </div>
            {/* <div className="col-md-3">
              <b>Cash Management</b>
              <ul>
                <li>
                  <Link to="CashDrop.aspx">Cash Drop/Loan Repayment</Link>
                </li>
              </ul>
            </div> */}
            <div className="col-md-4">
              <b>Grahak Seva Kendra</b>
              <ul>
                <li>
                  <Link to="CSP.aspx">Grahak Seva Kendra</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
