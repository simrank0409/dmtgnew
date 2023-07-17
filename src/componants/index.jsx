import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";
import SidebarForm from "./common/sidebarForm";

// import {IoLogoWhatsapp} from "react-icons/io";
const BaseComponent = ({ setIsActive, isActive }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleToggleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Header setIsActive={setIsActive} isActive={isActive} />
      <Outlet />
      <Footer />
      <SidebarForm
        handleToggleClick={handleToggleClick}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {showButton && (
        <div
          className="rocket animate__animated animate__bounce"
          onClick={handleScrollToTop}
        >
          <i>
            <span
              class="iconify"
              data-icon="flat-ui:rocket"
              data-inline="false"
            ></span>
          </i>
        </div>
      )}
      <Link
        to="https://api.whatsapp.com/send?phone=919355100668&text=Hi!%20Thanks%20for%20getting%20in%20touch%20with%20us%20on%20whatsapp.%20Please%20send%20us%20any%20questions%20you%20may%20have."
        target="_blank"
        class="WhatsappAPI animated"
      >
        <i>
          <span
            class="iconify"
            data-icon="logos:whatsapp"
            data-inline="false"
          ></span>
        </i>
      </Link>
    </>
  );
};

export default BaseComponent;
