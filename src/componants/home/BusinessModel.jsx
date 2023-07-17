import React from "react";
import Iconify from "@iconify/iconify";
const BusinessModel = () => {
  console.log(Iconify);
  return (
    <>
      <section class="servicesSec busyModel py-5">
        <div class="container-fluid">
          <div class="section-header" data-wow-duration="1.1s">
            <h3>Our Business Model</h3>
          </div>
          <div class="row">
            <p class=" col-10 mx-auto text-center">
              We are working hard towards automation where every products or
              services are being transacted in auto mode with the help of
              technology. Since the Company is in B2B module, it is very
              selective towards selecting the Platforms or modules before
              entering into competitive era. DMT has the following platform to
              make available the Products & Services to the Market.
            </p>
          </div>

          <div
            class="row pt-5 pb-5 wow section-bg slideInUp"
            data-wow-duration="1s"
          >
            <div class="col-12 section-bg">
              <div>
                <div class="tabs section-bg tabs-style-underline">
                  <nav className="section-bg">
                    <ul
                      class="nav nav-tabs section-bg"
                      id="myTab"
                      role="tablist"
                    >
                      <li class="nav-item px-1">
                        <div
                          class="icon mb-0"
                          style={{ background: "#e1bee7" }}
                        >
                          <i style={{ color: "#8e24aa" }}>
                            <span
                              class="iconify"
                              data-icon="bi:shop"
                              data-inline="false"
                            ></span>
                          </i>
                        </div>
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          Link
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <span>Retail Model</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <div
                          class="icon mb-0"
                          style={{ background: "#e1bee7" }}
                        >
                          <i style={{ color: "#8e24aa" }}>
                            <span
                              class="iconify"
                              data-icon="typcn-group-outline"
                              data-inline="false"
                            ></span>
                          </i>
                        </div>
                        <a
                          class="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          Link
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <span>Distribution Model</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <div
                          class="icon mb-0"
                          style={{ background: "#e1bee7" }}
                        >
                          <i style={{ color: "#8e24aa" }}>
                            <span
                              class="iconify"
                              data-icon="mdi-devices"
                              data-inline="false"
                            ></span>
                          </i>
                        </div>
                        <a
                          class="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          Link
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          <span>White-Label Model</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <div
                          class="icon mb-0"
                          style={{ background: "#e1bee7" }}
                        >
                          <i style={{ color: "#8e24aa" }}>
                            <span
                              class="iconify"
                              data-icon="mdi-devices"
                              data-inline="false"
                            ></span>
                          </i>
                        </div>
                        <a
                          class="nav-link"
                          id="Franchise-tab"
                          data-toggle="tab"
                          Link
                          href="#Franchise"
                          role="tab"
                          aria-controls="Franchise"
                          aria-selected="false"
                        >
                          <span>Franchise-Label Model</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" id="myTabContent">
            <section
              className="tab-pane container fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="row">
                <div class="col-md-3 animated fadeInLeft">
                  <img
                    src={require("../../static/img/businessModel/retailShop.png")}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-9 pl-5 animated fadeInRight">
                  <span class="modelHead">Retail Model</span>A Retail business
                  model of DMT has been developed in a way which evolves with
                  changes in the business environment, and the value proposition
                  continues to be aligned with the needs of consumers. The
                  retailer should also leverage opportunities that the operating
                  model provides to create differentiating features in its value
                  proposition. The associated retailors can fulfil all the
                  customer’s requirements by using DMT platform.
                </div>
              </div>
            </section>
            <section
              className="tab-pane container fade "
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="row">
                <div class="col-md-9 pl-5 animated fadeInRight">
                  <span class="modelHead">Distribution Model</span>DMT has
                  adopted the Conventional distribution model for our
                  distributors where you can make more out of the distribution
                  business. We ask you to onboard your existing and new network
                  to us and earn more than 24% per month on the money invested.
                  No physical stocks and expenditure in-store space, staff or
                  physical transfer of goods are required. Every time a retailer
                  in your network does a transaction and both Distributor and
                  Retailer makes money.
                </div>
                <div class="col-md-3 animated fadeInLeft">
                  <img
                    src={require("../../static/img/businessModel/distribution.png")}
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </section>
            <section
              className="tab-pane container fade "
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div class="row">
                <div class="col-md-3 animated fadeInLeft">
                  <img
                    src={require("../../static/img/businessModel/franchise.png")}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-9 pl-5 animated fadeInRight">
                  <span class="modelHead">Franchise Model</span>DMT Group has
                  built its 5+ years success around its Franchisees –
                  independent business owners with a common vision and mission
                  India’s leading B2B aggregator for Travel, Financial
                  inclusion, Telecom & Insurance. Much of this success has come
                  from our franchise business model. Follow the path of more
                  than 95% of our franchise owners and learn to run and operate
                  a store or supervise multiple stores, before investing in your
                  own stores.
                </div>
              </div>
            </section>
            <section
              className="tab-pane container fade "
              id="Franchise"
              role="tabpanel"
              aria-labelledby="Franchise-tab"
            >
              <div class="row">
                <div class="col-md-9 pl-5 animated fadeInRight">
                  <span class="modelHead">White-Label Model</span>DMT offers B2B
                  white label portal that allows you to connect with other
                  associates from your network and allow them to make
                  transaction of Travel, Banking, Insurance, Utility and many
                  more services to their customers simply and quickly. They can
                  also manage all their day to day financial transactions online
                  and run numerous reports to aid the smooth running of their
                  business.
                </div>
                <div class="col-md-3 animated fadeInLeft">
                  <img
                    src={require("../../static/img/businessModel/whiteLabel.png")}
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessModel;
