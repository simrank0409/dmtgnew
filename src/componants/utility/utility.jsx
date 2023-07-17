import React from "react";
import "./utility.css";
const Utility = () => {
  return (
    <>
      <section class="OP_BannerU clearfix">
        <div class="container-fluid">
          <h2>
            Utility Payment Services
            <span>We provide best in class Utility Payment Services.</span>
            <span></span>
          </h2>
        </div>
      </section>

      <section class="services pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 checkFirst">
              <div id="MobileRecharge">
                <div class="serviceHeading">Mobile Recharge</div>
                <img
                  src={require("../../static/img/services/mobileRecharge.png")}
                  alt="mobileRecharge"
                  class="img-fluid float-right mt-4"
                />
                <p class="srvCntnt">
                  We at Dialmytrip not only provide you easy accessibility, we
                  also ensure quick transactions. It is possible to complete a
                  prepaid mobile recharge with us in less than 15 seconds.
                </p>
                <p class="srvCntnt">
                  Online Mobile Recharge can easily be done by simply visiting
                  our retail outlet. Our retailer can help with the best
                  suitable plan as per customer’s requirement. The Complete
                  details about the plans, mobile operator tariff, and special
                  offers available in the market are present on our portal. When
                  the recharge request is made, by the retailer amount is also
                  deducted on real-time from the Retailer wallet available on
                  our portal, in case of short of balance the retailer can top
                  up the wallet by using the payment gateway called instant fund
                  top up.
                </p>
              </div>

              <div id="DTHRecharge">
                <div class="serviceHeading d-flex justify-content-end">
                  DTH Recharge
                </div>
                <img
                  src={require("../../static/img/services/dthRecharge.png")}
                  alt="dthRecharge"
                  class="img-fluid float-left"
                />
                <p class="srvCntnt text-right">
                  Your DTH recharge cannot get simpler than this! Dialmytrip is
                  one of the most trusted portals.
                </p>
                <p class="srvCntnt">
                  You just need to enter recharge amount, Subscriber ID, select
                  the operator and click the Proceed to recharge button. With
                  just one click recharge is done .You can browse the plans
                  available on the portal and recharge according to the
                  customer’s requirement. We provide DTH online recharge for an
                  array of companies including Airtel DTH, Dish TV, Tata Sky,
                  Videocon and Sun Direct. Stay connected with DMT for latest
                  offers and we will ensure that the process is quick and
                  convenient.
                </p>
              </div>

              <div id="FastTag">
                <div class="serviceHeading d-flex justify-content-start">
                  FASTag
                </div>
                <img
                  src={require("../../static/img/services/fastagRecharge.png")}
                  alt="fastagRecharge"
                  class="img-fluid float-right"
                />
                <p class="srvCntnt">
                  FasTag is a perfect solution for a hassle free trip on
                  national highways. To reduce vehicular traffic at the toll
                  plazas, the Government of India (GOI) has mandated all toll
                  plazas; pan India, to make toll payments electronic. With this
                  mandate, all vehicles travelling through toll plazas will have
                  to mandatorily pay toll charges using FasTag.
                </p>
                <p class="srvCntnt">
                  FasTag is a simple to use; reloadable tag which enables
                  automatic deduction of toll charges and lets you pass through
                  the toll plaza without stopping for the cash transaction.
                  FasTag is linked to a prepaid account from which the
                  applicable toll amount is deducted. The tag employs
                  Radio-frequency Identification (RFID) technology and is
                  affixed on the vehicle's windscreen after the tag account is
                  active.
                </p>
                <p class="srvCntnt">
                  We are authorized sales and service provider for “FasTag”
                  product in India. We have the facilities of FasTag Recharge
                  online and FasTag recharge agents for distributing products in
                  India.
                </p>
              </div>

              <div id="ElectricityBill">
                <div class="serviceHeading d-flex justify-content-end">
                  Electricity Bill
                </div>
                <img
                  src={require("../../static/img/services/electricityBill.png")}
                  alt="electricityBill"
                  class="img-fluid float-left"
                />
                <p class="srvCntnt">
                  Dialmytrip is your one-stop shop for online bill payments
                  hence your electricity bill payment gets easier with DMT.
                  Online payment eliminates any kind of hassles and ensures that
                  bill payment is extremely easy.
                </p>
                <p class="srvCntnt">
                  Electricity has become one of the basic necessities of our
                  life, not just household but it extends its service to large
                  scale industries. We use electricity for all-purpose be it our
                  home electric appliances or huge machines in industries.
                  Having such importance in our lives, it is also crucial to pay
                  electricity bill on time to enjoy uninterrupted power supply.
                  Now no more waiting in long queues outside the Electricity
                  bill payment centre, all you need to do is just visit our
                  authorized retail outlet to get your bill paid.
                </p>
              </div>

              <div id="WaterBill">
                <div class="serviceHeading d-flex justify-content-start">
                  Water Bill
                </div>
                <img
                  src={require("../../static/img/services/waterBill.png")}
                  alt="waterBill"
                  class="img-fluid float-right"
                />
                <p class="srvCntnt">
                  Water is the necessity of life and it is very important to pay
                  water bill before the due date. In this busy scenario,
                  everybody is too busy to queue up for water bill payment at
                  the centres. To get rid of this hassle, DMT presents online
                  water bill payment service. Online water bill payment is a
                  useful method, especially when one is running short of time.
                  You do not need to stress over paper bills and cheques now.
                </p>
                <p class="srvCntnt">
                  Dialmytrip is your one-stop shop for online bill payments
                  hence your Water bill payment gets easier with DMT. Online
                  payment eliminates any kind of hassles and ensures that bill
                  payment is extremely easy.
                </p>
              </div>

              <div id="GasBill">
                <div class="serviceHeading d-flex justify-content-end">
                  Gas Bill
                </div>
                <img
                  src={require("../../static/img/services/pipeGasBill.png")}
                  alt="pipegasBill"
                  class="img-fluid float-left"
                />
                <p class="srvCntnt">
                  Nowadays people are too busy to line-up at stores for gas bill
                  payments, in this technological scenario Dialmytrip is your
                  one-stop shop for bill payment hence your Gas bill payment
                  gets easier with DMT. Online payment eliminates any kind of
                  hassles and ensures that bill payment is extremely easy.
                </p>
                <p class="srvCntnt">
                  We make your experience will be the simplest one, no more gas
                  bill would not be mounting up at your head. Now you can make
                  gas bill online payment before the due date without any
                  hassles by visiting DMT authorized retail outlet.
                </p>
              </div>

              <div id="TelephoneBill">
                <div class="serviceHeading d-flex justify-content-start">
                  Telephone Bill
                </div>
                <img
                  src={require("../../static/img/services/telephoneBill.png")}
                  alt="telephoneBill"
                  class="img-fluid float-right"
                />
                <p class="srvCntnt">
                  Dialmytrip introduces new service to their channel partners to
                  pay the Landline bills from our portal. A lot of people rely
                  on their broadband for several office & other tasks. With such
                  an importance in our lives, it is important to pay broadband
                  bill on time to enjoy its uninterrupted access.
                </p>
                <p class="srvCntnt">
                  DMT provide a reliable service to its consumers that lets you
                  make broadband bill payment online. we offer you the easiest
                  online bill payment service. Now online payment is a better
                  solution no matter where you are, you can make landline bills
                  by visiting our authorizes retail outlet.
                </p>
              </div>

              <div id="InternetBill">
                <div class="serviceHeading d-flex justify-content-end">
                  Internet Bill
                </div>
                <img
                  src={require("../../static/img/services/internetBill.png")}
                  alt="internetBill"
                  class="img-fluid float-left"
                />
                <p class="srvCntnt">
                  Dialmytrip introduces new service to their channel partners to
                  pay the Internet bills from our portal. The Internet bill
                  payment can be made in three easy steps. First the user has to
                  select the Preferred service provider in the Internet bill pay
                  section. Post that, the retailer has to enter the amount of
                  his monthly or yearly charges according to the plan selected
                  by customer. Finally the mode of payment has to be wallet.
                  Thus, as a result, the internet bill payment can be done in a
                  hassle free manner.
                </p>
              </div>

              <div id="GasCylinder">
                <div class="serviceHeading justify-content-start d-flex">
                  Gas Cylinder
                </div>
                <img
                  src={require("../../static/img/services/gasBill.png")}
                  alt="gasBill"
                  class="img-fluid float-right"
                />
                <p class="srvCntnt">
                  A gas cylinder is one of the most important utilities for us.
                  Whether it is for our home or our commercial use such as in a
                  restaurant. But who likes to go outside and stand in the
                  queues for hours just to book a gas cylinder. Feel the comfort
                  and book cylinder without any hassles, please visit to DMT
                  authorized retail outlet near you and get the Gas booking
                  done.
                </p>
              </div>

              <div id="PANServices" className="pb-5">
                <div class="serviceHeading d-flex justify-content-end">
                  PAN Services
                </div>
                <img
                  src={require("../../static/img/services/panCard.png")}
                  alt="pancard"
                  class="img-fluid float-left"
                />
                <p class="srvCntnt">
                  Permanent Account number(PAN) is a must have asset for the
                  Indian Citizens. Being a loyal and good citizen, You must get
                  your PAN card. Having a PAN card helps you to be tension free
                  from all tax related issues. It also serves as an Identity
                  proof and in some cases, the existence of PAN becomes
                  mandatory. We at DMT are dedicated to help people in applying
                  for New PAN cards, Applying for Duplicate PAN, Making
                  corrections in PAN information and related services are
                  available here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Utility;
