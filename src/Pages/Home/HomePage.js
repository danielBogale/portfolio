import React, { useEffect } from "react";
import ReactGA from "react-ga";
import userImage from "../../assets/images/about/avatar.jpg";
// eslint-disable-next-line
import downloadIcon from "../../assets/images/download.png";
// eslint-disable-next-line
// import cvFile from "../../assets/images/cv.webp";
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";
import PageTitle from "../../Share/PageTitle";

const HomePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <div
        className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
        data-aos="fade"
      >
        <img
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] object-scale-down"
          src={userImage}
          alt=""
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Daniel Aykadu
        </h3>
        <p className="mb-4 text-[#7B7B7B]">Fullstack Developer</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
          <a
            href="https://www.t.me/danielAykadu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#e14a84] ">
              <FaTelegramPlane />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/danielAykadu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <FaLinkedinIn />
            </span>
          </a>

          <a
            href="https://github.com/danielBogale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
