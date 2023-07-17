import React from "react";
import Typewriter from "typewriter-effect";
import "./csp.css";
const Csp = () => {
  return (
    <>
      <section className="OP_BannerCSP clearfix">
        <div className="container-fluid">
          <h2>
            Customer Service Point
            <span>ग्राहक सेवा केन्द्र</span>
          </h2>
        </div>
      </section>
      <section className="services pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 checkFirst">
              <div id="CSP">
                <div className="serviceHeading d-flex justify-content-start">
                  <span className="head1">
                    <Typewriter
                      options={{
                        strings: [
                          "Customer Service Point",
                          "ग्राहक सेवा केन्द्र",
                        ],
                        loop: true,
                        autoStart: true,
                        typeSpeed: 80,
                        backSpeed: 30,
                        cursor: "|",
                      }}
                    />
                  </span>
                </div>
                <img
                  src={require("../../static/img/services/cspService.png")}
                  alt="cspService"
                  className="img-fluid float-right"
                />
                <p className="srvCntnt">
                  Dialmytrip is an authorized CSP of Bank and appointing Grahak
                  Seva Kendra as per the given mandates by the banks.
                </p>
                <p className="srvCntnt">
                  The main objective of the Grahak Seva Kendra is to provide
                  banking services to people living in remote rural areas. There
                  are still many villages and small towns in India where banking
                  facilities are not available. An authorised Grahak Seva Kendra
                  get profits from this endless need, which will keep on growing
                  in the service sector and increase in payment power of the
                  general consumer.
                </p>
                <p className="srvCntnt">
                  An individual is given the licence to work as Grahak Seva
                  Kendra operator only after his/her CSP registration is done
                  successfully. On successful CSP registration, the individual
                  will get a unique code from the Bank authorising him/her to
                  set off Bank Kiosk banking outlet.
                </p>
                <p className="srvCntnt">
                  The venture of Bank Customer Service Point is to deliver
                  banking facilities to the citizens. The banking facilities
                  include Saving Bank Account Opening, Cash Deposit, Cash
                  Withdrawal and many more..
                </p>
                <p className="srvCntnt pb-5">
                  Catering the job of a kiosk banking operator demands high
                  sincerity. Hence, an authorised CSP Provider bank always does
                  a thorough screening test and training session before handing
                  over the responsibilities. Furthermore; Railway Reservations,
                  Flight Ticket Booking, Bus Ticket Booking, Gas Cylinder
                  Booking, Mobile Recharge, DTH Bill Payment, Broad Band Bill
                  Payment, Post Paid Bill Payment etc. can also be done in
                  Grahak Sava Kendra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Csp;
