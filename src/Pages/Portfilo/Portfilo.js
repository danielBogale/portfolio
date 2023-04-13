import React, { useEffect } from "react";
import ReactGA from "react-ga";
import CommonPortfilo from "./CommonPortfilo";

const Portfilo = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <CommonPortfilo items={9} condition={true} />
    </div>
  );
};

export default Portfilo;
