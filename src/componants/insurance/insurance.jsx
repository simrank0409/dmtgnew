import React from "react";
import "./insurance.css";
import TrainingImg from "../../static/img/training.svg";
const Insurance = ({ setIsActive, isActive }) => {
  return (
    <>
      <section className="OP_BannerI clearfix">
        <div className="container-fluid ">
          <h2>
            Insurance
            <span>We provide best in className Insurance Policy.</span>
            <span></span>
          </h2>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 checkFirst">
              <div id="LifeInsurance">
                <div className="serviceHeading d-flex justify-content-start">
                  Life-Term Insurance
                </div>
                <img
                  src={require("../../static/img/services/TermLifeInsurance2.png")}
                  alt="termLifeInsurance"
                  className="img-fluid float-right"
                />
                <p className="srvCntnt">
                  Term Life insurance is the purest and most cost effective form
                  of life insurance. This type of insurance provides financial
                  protection to the nominee. Term Insurance policies provide
                  high life cover at lower premiums. These fixed premiums can be
                  paid at once or at regular intervals for the entire policy
                  term or for a limited period of time. Premium amount varies
                  basis the type of the premium payment method opted by the
                  buyer.
                </p>
                <div className="features">
                  <h2>Why do we need Term Insurance ?</h2>
                  <ul>
                    <li>
                      <b>Our family depends on us:</b> The term insurance money
                      can be used to meet your family’s monthly expenses and
                      important goals like your child’s education.
                    </li>
                    <li>
                      <b>Our assets need protection:</b> You may take loans for
                      assets like a house or a car. However, if something
                      happens to you, your loved ones might be burdened with
                      loan repayments. In such a situation, the term insurance
                      pay-out which your family will receive can be utilized in
                      paying off outstanding loans.
                    </li>
                    <li>
                      <b>Lifestyle risks:</b> Modern day lifestyle problems can
                      lead to a host of ailments. Some term insurance plans
                      don’t just protect your family after death but also during
                      your lifetime by offering critical illness protection.
                      This feature pays out on the diagnosis of certain critical
                      ailments like cancer or heart attack.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="HealthInsurance">
                <div className="serviceHeading d-flex justify-content-end">
                  Health Insurance
                </div>
                <img
                  src={require("../../static/img/services/HealthInsurance.png")}
                  alt="healthInsurance"
                  className="img-fluid float-left"
                />
                <p className="srvCntnt">
                  A health insurance is a product which gives you a sense of
                  security from the incurring expenses of hospital bills at the
                  time of emergency. It covers the medical and surgical expenses
                  of an ensured person.
                </p>
                <p className="srvCntnt">
                  Health insurance has now become an essential for individual of
                  all the age group in today’s life. Following a rise in
                  lifestyle diseases and double digit medical inflation in India
                  every year, you must have a health insurance plan that fulfils
                  your requirement. Life is very uncertain, especially when we
                  are living an imbalanced one in between stress and unhealthy
                  habits. In such scenario, the main priority of every
                  individual is to protect themselves from the expenses incurred
                  due to any unforeseen medical issues. To cover that risk of
                  medical expenses and to save the pocket from the huge bills of
                  hospitals, we all need to cover ourselves with a health
                  insurance.
                </p>
                <div className="features">
                  <h2 className="d-block">Why do we need Health Insurance ?</h2>
                  <p className="srvCntnt">
                    Nobody wants to get hurt or fall sick, but still we all need
                    a medical care like doctor’s visit, prescribed drugs, lab
                    tests, and so on at some point of time. As the advanced
                    technology has taken place of those old ways in health care
                    segment, the cost of health facilities has also increased.
                    At that point of time, a health insurance solves the purpose
                    by providing us the financial aids either in the form of
                    cashless or reimbursement.
                  </p>
                  <p className="srvCntnt">
                    We all know the importance of health insurance, but the fact
                    is that it is still considered as a tax saving tool only and
                    taken by people only for the sake of getting exempted from
                    the tax slab. But the fact is that other than a tax
                    exemption, health insurance covers essential health benefits
                    critical to maintaining your health and treating illness,
                    accidents and high medical costs and gives us a free
                    preventive care.
                  </p>
                  <ul>
                    <li>
                      A basic health insurance plan offers protection for
                      hospitalization expenses including room rent, medicines,
                      nursing expenses, surgery, OT, anaesthesia etc.
                    </li>
                    <li>
                      The insurance company would pay or reimburse valid,
                      covered expenses up to or less than the total policy
                      amount.
                    </li>
                    <li>
                      The policyholder can make a cashless claim at any of the
                      network hospitals or diagnostic centres specified by the
                      insurance company.
                    </li>
                    <li>
                      Health Insurance plans also cover expenses incurred 30
                      days before hospitalization and 60 days after discharge.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="MotorInsurance">
                <div className="serviceHeading d-flex justify-content-start">
                  Motor Insurance
                </div>
                <img
                  src={require("../../static/img/services/motorInsurance.png")}
                  alt="motorInsurance"
                  className="img-fluid float-right"
                />
                <p className="srvCntnt">
                  If you can afford your own vehicle than you will never prefer
                  using a public transport for sure. With the increased income
                  slabs, people have got the tendency to pay more and this
                  paying capacity inspires them to have a vehicle which also
                  increases the mobility.
                </p>
                <p className="srvCntnt">
                  The&nbsp;top 10 motor insurance companies in India&nbsp;are
                  determined on the basis of some standard parameters that make
                  them the most preferred ones in this industry.
                </p>
                <div className="features">
                  <h2>Importance of Motor Insurance</h2>
                  <p className="srvCntnt">
                    Vehicle insurance or Motor insurance or auto insurance is an
                    insurance mainly purchased for two wheelers as well for
                    four-wheelers or you can say any vehicle on the roads. The
                    primary objective of this vehicle insurance is to provide a
                    protection to you and your vehicle against any physical
                    damage resulting from accidents.
                  </p>
                  <p className="srvCntnt">
                    There are hundreds of more reasons why you should have a
                    vehicle insurance policy depending upon the needs of the
                    different people. But the main reasons for having a motor or
                    vehicle insurance are listed below:
                  </p>
                  <ul>
                    <li>
                      <b>Loss or Damage:</b>&nbsp;We all know that the traffic
                      condition on Indian roads are becoming worse day by day.
                      One of the main reasons for having vehicle insurance
                      policy is that it covers the expenses incurred due to any
                      loss or damage to your vehicle.
                    </li>
                    <li>
                      <b>Hospitalisation:</b>&nbsp;Nobody knows that a small
                      accident can put you in a difficult situation. A small
                      accident could hurt you badly and you need to be
                      hospitalized. The insurance company will take care of your
                      long hospital bills.
                    </li>
                    <li>
                      <b>Decreases&nbsp;Your&nbsp;Liabilities:</b>
                      &nbsp;According to the Motor Vehicles Act, third party
                      liability insurance coverage is mandatory in India. if
                      your vehicle met with an accident which results in damages
                      to a stranger’s property or causes injuries to him/her or
                      causes death, the insurance company will pay the expenses
                      for their treatment and save you from legal matters.
                    </li>
                    <li>
                      <b>Compensates&nbsp;Your&nbsp;Family:</b>&nbsp;The demise
                      of a vehicle owner is the most unfortunate outcome of a
                      road accident. If someone has vehicle insurance policy,
                      the insurance company will compensate to help the family
                      after the unfortunate event.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <header className="section-header">
          <h3 className="mb-3">
            Become a Certified DMT Insurance Advisor (POSP)
          </h3>
          <p className="pb-4">We are onboarding our POS agents</p>
        </header>

        <div className="row">
          <div className="col-md-7 POSP">
            <b>Why Become A DialMyTrip POSP Advisor?</b>
            <ul>
              <li>Zero investment business opportunity</li>
              <li>Free POSP Certification under IRDAI guidelines</li>
              <li>Attractive Pay-outs</li>
              <li>Dedicated Relationship manager support</li>
            </ul>
          </div>
          <div className="col-md-5">
            <img src={TrainingImg} alt="training" className="img-fluid" />
          </div>
          <div className="col-md-12 text-center pt-5">
            <button
              onClick={() => setIsActive(!isActive)}
              className="btn btn-primary text-light toggle-form"
            >
              Register Now <i className="icofont-rounded-right"></i>
            </button>
          </div>
          <div className="col-md-12 pb-5">
            <small className="mt-5 d-block pb-5">
              Insurance is offered by DIALMYTRIP TECH PRIVATE LIMITED (CIN
              U93000DL2015PTC286253), Principal Place of Business: 516, Vishal
              Chamber, Sector – 18, Noida, GB Nagar - 201301, Uttar Pradesh.
              Registered Office: B-75, F/F, Plot No-1, New Ashok Nagar, Delhi -
              110096, IRDAI Corporate Agent Registration Code - CA0756, License
              category- Corporate Agent (Life &amp; General), valid till
              01/07/2024. Product information is solely based on the information
              received from the insurers. For more details on risk factors,
              associated terms and conditions and exclusions, please read the
              sales brochure carefully of respective insurer before concluding a
              sale.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
