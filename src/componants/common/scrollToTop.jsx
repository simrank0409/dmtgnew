import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(window.scrollTo);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
