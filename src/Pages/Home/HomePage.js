import React, { useEffect } from "react";
import ReactGA from "react-ga";
import userImage from "../../assets/images/about/avatar.jpg";
import downloadIcon from "../../assets/images/download.png";
import abel from "../../assets/files/abel.doc";
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
          Abel Kibebe
        </h3>
        <p className="mb-4 text-[#7B7B7B]">Fullstack Developer</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
          <a
            href="https://www.t.me/Abelkibebe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#e14a84] ">
              <FaTelegramPlane />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/abelkibebe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <FaLinkedinIn />
            </span>
          </a>

          <a
            href="https://github.com/zadigg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <FaGithub />
            </span>
          </a>
        </div>
        {/* Social information start */}

        {/* Dowanload button start */}
        {/* <a
          href={abel}
          download="abel"
          className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
        >
          <img src={downloadIcon} alt="icon" className="mr-2" />
          Download CV
        </a> */}

        {/* Dowanload button End */}
      </div>
    </>
  );
};

export default HomePage;
