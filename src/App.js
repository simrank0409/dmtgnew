import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { WebRoutes } from "./routes";
import BaseComponent from "./componants";
import Home from "./componants/home";
import Travel from "./componants/travel/travel.jsx";
import Banking from "./componants/banking/banking.jsx";
import Utility from "./componants/utility/utility.jsx";
import Insurance from "./componants/insurance/insurance.jsx";
import Csp from "./componants/csp/csp.jsx";
import Signup from "./componants/signup/signup.jsx";
import Sitemap from "./componants/sitemap/sitemap.jsx";
import Team from "./componants/team/team.jsx";
import Career from "./componants/careers/careers.jsx";
import Aboutus from "./componants/about/about.jsx";
import Contact from "./componants/contact/contact.jsx";
import ScrollToTop from "./componants/common/scrollToTop.jsx";
import Cashdrop from "./componants/cashDrop/cashdrop";
import Login from "./componants/login/login";
import Terms from "./componants/terms/terms";
import Privacy from "./componants/privacy/privacy";
import GrievancePolicy from "./componants/grievancePolicy/grievancePolicy";
import Tncdmt from "./componants/tncDmt/tncdmt";
import RefundPolicy from "./componants/refundPolicy/refundPolicy";
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <ScrollToTop>
      <Routes>
        <Route
          path={WebRoutes.HOME}
          element={
            <BaseComponent setIsActive={setIsActive} isActive={isActive} />
          }
        >
          <Route
            path={WebRoutes.HOME}
            element={<Home setIsActive={setIsActive} isActive={isActive} />}
          />
          <Route path={WebRoutes.TRAVEL} element={<Travel />} />
          <Route path={WebRoutes.BANKING} element={<Banking />} />
          <Route path={WebRoutes.UTILITY} element={<Utility />} />
          <Route
            path={WebRoutes.INSURANCE}
            element={
              <Insurance setIsActive={setIsActive} isActive={isActive} />
            }
          />
          <Route path={WebRoutes.CSP} element={<Csp />} />
          <Route path={WebRoutes.SIGNUP} element={<Signup />} />
          <Route path={WebRoutes.SITE_MAP} element={<Sitemap />} />
          <Route path={WebRoutes.MEET_THE_TEAM} element={<Team />} />
          <Route path={WebRoutes.CAREERS} element={<Career />} />
          <Route path={WebRoutes.ABOUT_US} element={<Aboutus />} />
          <Route path={WebRoutes.LOGIN} element={<Login />} />
          <Route path={WebRoutes.CASHDROP} element={<Cashdrop />} />
          <Route path={WebRoutes.CONTACT} element={<Contact />} />
          <Route path={WebRoutes.TERMS} element={<Terms />} />
          <Route path={WebRoutes.PRIVACY} element={<Privacy />} />
          <Route
            path={WebRoutes.GRIEVANCEPOLICY}
            element={<GrievancePolicy />}
          />
          <Route path={WebRoutes.TNCDMT} element={<Tncdmt />} />
          <Route path={WebRoutes.REFUNDPOLICY} element={<RefundPolicy />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
