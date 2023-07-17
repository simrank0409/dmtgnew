import React from "react";
import "./banking.css";
const Banking = () => {
  return (
    <>
      <section className="OP_BannerBA clearfix">
        <div className="container-fluid">
          <h2>
            Banking Services
            <span>We provide best in className Neo Banking Services.</span>
            <span></span>
          </h2>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 checkFirst">
              <div id="DomesticMnyTrnsf">
                <div className="serviceHeading">Domestic Money Remittance</div>
                <img
                  src={require("../../static/img/services/domesticMoney.png")}
                  alt="domesticMoney"
                  className="img-fluid float-right"
                />
                <p className="srvCntnt">
                  DMT’s retailers can provide their customers with money
                  transfer facility anytime and anywhere within India. For
                  customers, transferring money to any account in the country is
                  easier than ever before. Now customers don’t need to visit a
                  bank branch, stand in long queues and fill cumbersome forms to
                  transfer money to their people.
                </p>
                <p className="srvCntnt">
                  With DMT Domestic Money Transfer service, retailers can help
                  customers to instantly transfer their money to any bank
                  account in the country, anywhere and anytime, even on bank
                  holidays. The sender does not need a bank account to transfer
                  the money from, and just need to pay a minimal transaction fee
                  to the retailers. Every customer can send INR – 25000/- in a
                  month by using their mobile number.
                </p>
              </div>

              <div id="NeoalMnyTrnsf">
                <div className="serviceHeading text-right">
                  Nepal Money Transfer
                </div>
                <img
                  src={require("../../static/img/services/nepalMoney.png")}
                  alt="nepalMoney"
                  className="img-fluid float-left"
                />
                <p className="srvCntnt text-right">
                  SEND MONEY TO YOUR DEAR ONES IN NEPAL IN FEW MINUTES!
                </p>
                <p className="srvCntnt">
                  Dialmytrip has launched Indo-Nepal Remittance arrangement with
                  Prabhu Money Transfer. We have 2400+ retail partners all over
                  India and all the outlets are able to send money to Nepal.
                  Prabhu Money has more than 20,000 locations all over Nepal
                  where the customers can receive the Money.
                </p>
                <p className="srvCntnt">
                  <b className="dmt-D">D</b>
                  <b className="dmt-M">M</b>
                  <b className="dmt-T">T</b> understands your urgency of sending
                  money to your dear ones at the right time. You can send 12
                  times and up to 6 lakh rupees in a year to Nepal. With its
                  real time money transfer service, you can instantly send money
                  and be assured of its delivery in not more than few minutes.
                </p>
              </div>

              <div id="AePS">
                <div className="serviceHeading">
                  Aadhaar Enabled Payment System (AePS)
                </div>
                <img
                  src={require("../../static/img/services/aeps.png")}
                  alt="aeps"
                  className="img-fluid float-right"
                />
                <p className="srvCntnt">
                  AEPS (Aadhaar Enabled Payment System) powered digital banking
                  service that enables retailers to provide basic banking
                  functions such as cash withdrawal and balance inquiry to their
                  customers and earn money as commission. The retailers must be
                  approved by the bank by providing their KYC documents.
                </p>
                <p className="srvCntnt">
                  Once the Retailer is approved, the transaction can be
                  performed at the Retail outlet. It is a win-win situation for
                  both – the retailers and the customers. Instead of searching
                  for ATMs or standing at long queues at bank branches,
                  customers can walk up to any retail store and conduct banking
                  transactions with their Aadhaar number and fingerprint
                  authentication.
                </p>
              </div>

              <div id="MicroATM">
                <div className="serviceHeading text-right">Micro ATM</div>
                <img
                  src={require("../../static/img/services/microATM.png")}
                  alt="microATM"
                  className="img-fluid float-left"
                />
                <p className="srvCntnt">
                  Micro ATM has emerged as one of the fastest growing payments
                  systems in the country. It is a debit card swipe machine
                  through which banks can remotely connect to their core banking
                  system. This machine comes with a fingerprint scanner attached
                  to it. In other words, micro ATMs are handheld point of sale
                  terminals used to disburse cash in remote locations where bank
                  branches cannot reach.
                </p>
                <p className="srvCntnt">
                  Micro ATMs would particularly help address the problems that
                  people are facing in rural and semi-urban areas, where the ATM
                  network is not as strong currently. It empowers local retail
                  partners by allowing customers to do their financial
                  transactions like balance inquiry, and withdrawal of cash
                  using their debit cards at our retailer’s point.
                </p>
              </div>

              <div id="MPOS" className="pb-5">
                <div className="serviceHeading">M-POS</div>
                <img
                  src={require("../../static/img/services/mPOS.png")}
                  alt="mPos"
                  className="img-fluid float-right"
                />
                <p className="srvCntnt">
                  Small and medium-sized businesses in India mostly accept
                  ‘cash-only’ payments, due to high card-processing fees; M-POS
                  platforms open an affordable channel to accept alternate forms
                  of payment.
                </p>
                <p className="srvCntnt">
                  M-POS solutions from Dialmytrip give you the opportunity to
                  streamline your operations and create among your customers a
                  lasting impression. With us, you can accept both debit and
                  credit card payments quickly and, in a hassle, free way to
                  expedite your billing transactions.
                </p>
                <p className="srvCntnt pb-sm-5 pb-0">
                  We strive dedicatedly to assist merchants accept card payments
                  anytime and anywhere. Further, our M-POS comes optimized for
                  all types of devices, i.e. mobile and tablet which makes our
                  service highly useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
