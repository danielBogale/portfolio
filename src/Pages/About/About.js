import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import aboutImage from "../../assets/images/about/about.jpg";
import "../../Share/Style.css";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import PageTitle from "../../Share/PageTitle";

const About = () => {
  const { local, serviceArray } = UseData();
  return (
    <>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
                About Me
              </h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4">
                  {/* personal images for about page  */}
                  <img
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src={aboutImage}
                    alt=""
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                      Who am i?
                    </h3>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      I am a talented Java Developer with almost two years of
                      hands-on experience in the field. My expertise lies in
                      implementing the latest programming languages to
                      streamline software development processes, with the
                      ultimate goal of improving efficiency and functionality.
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      I excel in writing customized code, which enables me to
                      tailor software solutions to meet specific client needs.
                      My skillset includes Java, REST API, MongoDB, Jenkins,
                      Eclipse, and StarUML, among others. With my proven track
                      record in the field, I am confident in my ability to
                      develop top-quality software solutions that meet and
                      exceed client expectations.
                    </p>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                      Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMobileAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Phone
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                              href="tel:+1234567890"
                            >
                              +641 233 9191
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMapMarkerAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Location
                          </p>
                          <h6 className="font-medium dark:text-white">
                            Iowa, USA
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaEnvelopeOpenText />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Email
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                              href="mailto:ibthemes21@gmail.com"
                            >
                              abelkibebe5@mail.com
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* <div className="flex">
                        <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaRegCalendarAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Birthday
                          </p>
                          <h6 className="font-medium dark:text-white">
                            May 27, 1990
                          </h6>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* End personal information */}
                </div>
              </div>
            </div>

            {/* Common Footer call here */}
            <Footer condition={false} bg={"#FFFF"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
