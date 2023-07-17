import React from "react";
import "./cashdrop.css";
const Cashdrop = () => {
  return (
    <>
      <section class="OP_BannerCASH clearfix">
        <div class="container-fluid">
          <h2>
            Cash Collection
            <span>
              We also provide services like Cash Collection & Loan Repayment
            </span>
          </h2>
        </div>
      </section>
      <section class="services">
        <div class="container">
          <div class="row">
            <div class="col-md-12 checkFirst pb-5">
              <div id="FlightBooking">
                <div class="serviceHeading d-flex justify-content-start">
                  Cash Collection & Loan Repayment
                </div>
                <img
                  src={require("../../static/img/services/cashDropService.png")}
                  alt="cashDropServices"
                  class="img-fluid float-right"
                />
                <p class="srvCntnt">
                  DMT has introduced the Cash Management Services Which Support
                  in optimizing cash collection delivery turn-around time,
                  back-office operations and re-conciliations of your customers
                  or vendors. It Increased trust in organizations due to
                  transparency measures like reports/ alerts on transactions and
                  other value-added services.
                </p>
                <p class="srvCntnt">
                  DMT Retail’s cash management solution caters to a diversified
                  products and services like Loan repayment, cash-in transit
                  agencies, banks/financial Institutions and other enterprises
                  and aids them in streamlining their cash management
                  operations.
                </p>
                <p class="srvCntnt pb-5">
                  DMT cash manager is an easy to use, customized solution with
                  an integrated technology platform, operations support and
                  other value-added services to its clients, making it an
                  end-to-end platform for the cash management process. For one
                  thing, many of your customers still prefer cash payment. In
                  fact, cash is still the most common payment for transactions
                  for the people who are not aware about the digital banking and
                  we believe that cash isn’t going anywhere for time being. By
                  becoming DMT associate/Partner/Distributor you can increase
                  your revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cashdrop;
