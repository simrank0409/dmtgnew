import React from "react";
import "./career.css";
import { Link } from "react-router-dom";
const Careers = () => {
  return (
    <>
      <section className="OP_BannerC clearfix">
        <div className="container-fluid">
          <h2>
            Careers
            <span>What's your next destination?</span>
            <span>Explore a career at Dialmytrip, Come work with Us</span>
          </h2>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="accordion" id="JobsAccordion">
                <div className="card">
                  <div
                    className="jobHead"
                    id="headingOne"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Sales Executive / Senior Sales Executive
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#JobsAccordion"
                  >
                    <div className="card-body">
                      <div className="jobOpening">
                        <p>
                          Urgent Requirement in Dialmytrip Tech Private Limited
                          (Fintech Company) dealing in financial inclusion
                          Project (Bank BC Kiosk), Money Remittance, AePS,
                          IRCTC, Travel, Insurance and Utilities etc.
                        </p>
                        <p>
                          Person willing to work in Digital Banking as Area
                          Manager / Sales Executive / Senior Sales Executive any
                          of these locations: Rajasthan, Gujrat, Punjab,
                          Haryana, Uttar Pradesh, Madhya Pradesh, Bihar,
                          Jharkhand, West-Bangal, Chhattisgarh, Odisha.
                        </p>
                        <h4>
                          <span>Key Responsibilities</span>
                        </h4>
                        <ul>
                          <li>
                            Industry preferred: Digital Banking, Financial
                            services, Insurance.
                          </li>
                          <li>Good communication skills</li>
                        </ul>
                        <h4>
                          <span>Experience</span>
                        </h4>
                        <ul>
                          <li>Total: 2-5 Years in Industry</li>
                          <li>Relevant: Minimum 1 Year</li>
                        </ul>
                        <h4>
                          <span>Benefits</span>
                        </h4>
                        <ul>
                          <li>Good Salary</li>
                          <li>Incentive</li>
                          <li>PF - Provident Fund</li>
                          <li>ESI - Employee State Insurance</li>
                          <li>Mobile Reimbursement</li>
                          <li>Conveyance</li>
                        </ul>
                        <p>
                          Apply for this position. Send us your updated CV @
                          <Link to="mailto:hr@dialmytrip.com">
                            hr@dialmytrip.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
