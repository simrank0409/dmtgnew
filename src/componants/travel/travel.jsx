import React from "react";
import "./travel.css";
const Travel = () => {
  return (
    <>
      <section class="OP_BannerTR clearfix">
        <div class="container-fluid">
          <h2>
            Travel Services
            <span>We provide best in class Travel Services.</span>
          </h2>
        </div>
      </section>

      <section class="services pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 checkFirst">
              <div id="FlightBooking">
                <div class="serviceHeading">Flight Booking</div>
                <img
                  src={require("../../static/img/services/flight.png")}
                  alt="flight"
                  class="img-fluid float-right"
                />
                <p class="srvCntnt">
                  The conventional way of flight ticket booking used to be quite
                  tiresome and chaotic. With the emergence of the internet, one
                  can easily book tickets for domestic and International flights
                  online without contacting any offline travel agent. DMT
                  presents an incredible and seamless service of domestic and
                  International flight ticket booking service even at the last
                  minute. So, if you are planning a domestic or International
                  trip from any destination in India or abroad and facing issue
                  while booking flight tickets, then worry no more. Book
                  domestic and International flight tickets online from the
                  comfort of your home, office or while traveling anytime &amp;
                  anywhere through our reliable platform.
                </p>
                <p class="srvCntnt">
                  Dialmytrip.com is one of the leading online ticketing and
                  multiservice portal that presents comprehensive details of the
                  cheapest flight tickets for all airlines across the world.
                  Passengers can compare airline ticket rates and book domestic
                  and International flight ticket in just few trouble-free
                  steps. Forget the dilemma of ticket counter, be it a one-way
                  or a round-trip, book domestic and International flight
                  tickets online for any destination like Delhi, Kolkata,
                  Mumbai, Jaipur, Chennai, Goa, Hyderabad etc. and many more
                  places in India. It is really simple and straightforward
                  method at DMT, all you need to do is just log on to
                  dialmytrip.com, fill in the information in, pick the choice of
                  class i.e. Economy Class or Business Class and book domestic
                  flight tickets online. You just need to fill up the agency
                  details form before processing the booking request.
                </p>
                <p class="srvCntnt">
                  Airline reservation for the domestic destination and
                  International destination is a faultless process with DMT, we
                  offer an amazing traveling experience to our users. For any
                  further assistance, while booking flight tickets online here,
                  our customer service representatives are available for 24x7.
                </p>
                <p class="srvCntnt">
                  Air tickets can make for a significant part of the travel
                  expense and getting cheap flights tickets could mean saving
                  quite a good sum of money. To enhance user-experience DMT
                  presents exciting offers and different type of fares. Book
                  flight ticket online here and enjoy great flight deals,
                  special discount &amp; much more. There are a plethora of
                  discount offers on several airlines for various seasons,
                  routes and dates. Make the cheapest flight ticket booking and
                  save more with DMT. So, enter your travel details and we will
                  fetch the best suited-flights for you at the reasonable prices
                  and jaw-dropping offers!
                </p>
              </div>

              <div id="HotelBooking">
                <div className="serviceHeading d-flex justify-content-end">
                  Hotel Booking
                </div>
                <img
                  src={require("../../static/img/services/hotel.png")}
                  alt="hotel"
                  class="img-fluid float-left"
                />
                <p class="srvCntnt">
                  Business, Tourism, Pilgrimage, Holidays, there are many
                  reasons to travel and India is an absolute treasure of
                  destinations, opportunities. Hotels are growing along with the
                  population increase and are in line with the growing clout of
                  the people in terms of economic power. Tourism in India has
                  become a large industry, in 2012, there were 7 million
                  tourists arriving in India, and the real engine of growth, the
                  domestic tourist travelling within India numbered 800 million.
                  This means close to 60 or 70 percent of India's population
                  travels, and guess what, a large number of them are looking
                  for affordable hotels, star hotels and luxury hotels.
                </p>
                <p class="srvCntnt">
                  A list of India hotels is needed to enjoy India's amazing
                  cultural diversity, its vibrant history with its ancient
                  civilization, Mughal and Colonial ages and progressive modern
                  face. All these make this region an unforgettable experience
                  for travellers and tourist. The geographical regions India
                  enjoys on account of being a subcontinent make it a pukka
                  attraction to British and European tourists who love this warm
                  tropical paradise. India's booming business and IT revolution
                  means there has been an exponential growth in the online
                  business and Dialmytrip is at the forefront of this growth
                  fuelling it with the sale of online hotel booking. When you
                  book hotels online you get better deals and most importantly
                  you get clarity on the hotel itself because you can view
                  pictures and videos of the hotel you book.
                </p>
                <p class="srvCntnt">
                  Along with heritage and cultural tourism there has been a
                  large growth in sports tourism but once again what is driving
                  the engine of growth in the business is the vast growth in
                  medical tourism and the demand it creates for budget hotels
                  and affordable hotels in India.
                </p>
              </div>

              <div id="BusBooking">
                <div class="serviceHeading">Bus Seat Booking</div>
                <img
                  src={require("../../static/img/services/bus.png")}
                  alt=""
                  class="img-fluid float-right"
                />
                <p class="srvCntnt">
                  Now, book your bus tickets on DMT and make your bus booking
                  experience smoother and more affordable. DMT allows you to
                  book bus tickets from anywhere in India at the lowest price.
                </p>
                <p className="srvCntnt">
                  To book your bus tickets on DMT just fill in the requisite
                  information in the required fields and customise your trip.
                  DMT gives you the privilege to plan your trip on your own. We
                  provide you an array of options for your travel. You can
                  choose sleeper, semi-sleeper, AC/non-AC, or any other type of
                  bus you want, for your trip. You can search for availability
                  of the bus by entering the time and date of the reservation.
                  We also facilitate you to choose the seat you want from all
                  available seats in the bus.
                </p>
              </div>

              <div id="HolidayPackages">
                <div class="serviceHeading text-right">
                  Holiday Packages - (LTC Packages)
                </div>
                <img
                  src={require("../../static/img/services/holiday.png")}
                  alt="holiday"
                  class="img-fluid float-left"
                />
                <p class="srvCntnt">
                  If one is seeking a travel plans for an Indian destination for
                  a memorable excursion that lets them savor a perfect blend of
                  nature, spirituality, fun, wildlife, culture, and adventure,
                  then all they need to browse through our travel portal.
                  Crammed with a plethora of India Tour Packages, Dialmytrip
                  offers its customers some really well-crafted travel packages
                  that are inclusive of their favourite attractions and
                  activities, and that too under their budget. Moreover, as they
                  are also completely customizable, one can always get their
                  choicest attractions included in the itinerary at an extra
                  cost. The idea behind providing the personalized travel
                  packages is to offer a memorable experience that they really
                  want.
                </p>
                <p className="srvCntnt">
                  Depending on the nature of the trip, travelers pick different
                  India tour packages. Honeymooners who plan holiday in India
                  prefer hill stations and beaches, and thus choose from the
                  best of Kashmir packages, Himachal packages, Uttarakhand
                  Tours, Kerala tours and Goa Tour Package etc.
                </p>
                <p className="srvCntnt">
                  Depending on the nature of the trip, travelers pick different
                  India tour packages. Honeymooners who plan holiday in India
                  prefer hill stations and beaches, and thus choose from the
                  best of Kashmir packages, Himachal packages, Uttarakhand
                  Tours, Kerala tours and Goa Tour Package etc.
                </p>
                <p className="srvCntnt">
                  Families looking for relaxing getaways mostly choose relaxing
                  holiday packages in India. Most popular pick from families are
                  Himachal tour packages, Kashmir Tour Packages, Kerala tours
                  and Sikkim-Gangtok tours etc.
                </p>
                <p className="srvCntnt">
                  We at Dialmytrip also offer special LTC Packages - we have
                  delightful packages for the domestic itinerary, while if
                  you're eyeing an international destination, we have a few
                  exciting packages for travel within the country or outside of
                  country. We can modify and tailor these domestic packages
                  according to your requirements. While this may not be possible
                  for the international itinerary, the Destinations we have on
                  offer are bound to be attractive. You can go right ahead and
                  book your LTC Package right away with us
                </p>
              </div>

              <div id="RailBooking" className="pb-sm-5">
                <div class="serviceHeading">Rail Ticket Booking</div>
                <img
                  src={require("../../static/img/services/railway.png")}
                  alt="railway"
                  class="img-fluid float-right"
                />
                <div class="col-md-12">
                  <b class="boldTxt my-4 text-left">
                    Dialmytrip is an Authorized Principal Agent of IRCTC and has
                    been allowed to Appoint Agents across India.
                  </b>

                  <div class="my-4">
                    <table class="table my-table table-sm table-bordered">
                      <tbody>
                        <tr>
                          <th class="th">Agent Benifits</th>
                          <th class="th">DMT Retailer</th>
                        </tr>
                        <tr>
                          <td class="td">One time Integration Fee</td>
                          <td class="td">Rs 4,000 (Limited Period Offer)</td>
                        </tr>
                        <tr>
                          <td class="td">Tickets / Month</td>
                          <td class="td">300</td>
                        </tr>
                        <tr>
                          <td class="td">
                            Monthly Earning
                            <br />
                            (Rs 20 for Non-Ac and Rs 40 for AC){" "}
                          </td>
                          <td class="td">Rs 3,900</td>
                        </tr>
                        <tr>
                          <td class="td">
                            ROI -Monthly - You earn your money back in the first
                            month itself.
                          </td>
                          <td class="td">100% Approx.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <b class="boldTxt my-5">
                    Online hotel reservations are a popular method for booking
                    hotel rooms. Travelers can book rooms on a computer by using
                    on{" "}
                    <a href="mailto:help@dialmytrip.com" class="text-primary">
                      help@dialmytrip.com
                    </a>{" "}
                    Online hotel reservations are also helpful for making last
                    minute travel arrangements.
                  </b>

                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 features">
                      <h2>What you need:</h2>
                      <ul>
                        <li>
                          Computer or Laptop - No software to be installed.
                          System works on most Internet Browsers.
                        </li>
                        <li>
                          Internet Connection - Basic internet connection is
                          sufficient. Our site is optimised.
                        </li>
                        <li>
                          Printer - To print the ticket when Customer would
                          request. PNR would be sent automatically via SMS.
                        </li>
                        <li>
                          Class 3 Digital Signature - This will be provided by
                          Dial My Trip with 2 years validity in the above cost.
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 features">
                      <h2>Some other highlights:</h2>
                      <ul>
                        <li>You can book unlimited tickets.</li>
                        <li>
                          Single Wallet and Single Account for all transactions.
                        </li>
                        <li>
                          Tatkal Booking can be done after 10:30 am for AC and
                          11:30 am for Non-AC.
                        </li>
                        <li>
                          You can put money in DMT Account via NEFT or
                          NetBanking. We can also put you in touch with nearby
                          Distributors to avail the credit facility.
                        </li>
                      </ul>
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

export default Travel;
