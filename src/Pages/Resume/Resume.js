import React from "react";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <>
      <PageTitle title="Resume"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container  sm:px-5 md:px-10 lg:px-20">
            <div className="py-12 px-4">
              {/*page title here */}
              <h2 className="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">
                Resume
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
                <ResumeCard />
              </div>
            </div>
          </div>
          {/* End education */}

          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1  md:grid-cols-1 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Skills
                </h4>

                {/* Knowledges items */}

                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                  <button className="resume-btn">Java</button>
                  <button className="resume-btn">HTML</button>
                  <button className="resume-btn">CSS</button>
                  <button className="resume-btn">jQuery</button>
                  <button className="resume-btn">JavaScript</button>
                  <button className="resume-btn">Bootstrap</button>
                  <button className="resume-btn">TypeScript</button>
                  <button className="resume-btn">REST</button>
                  <button className="resume-btn">GraphQL</button>
                  <button className="resume-btn">Apache Tomcat</button>
                  <button className="resume-btn">Jetty</button>
                  <button className="resume-btn">React</button>
                  <button className="resume-btn">Node.js</button>
                  <button className="resume-btn">Next.js</button>
                  <button className="resume-btn">Express</button>
                  <button className="resume-btn">Spring Boot</button>
                  <button className="resume-btn">Tailwind</button>
                  <button className="resume-btn">MongoDB</button>
                  <button className="resume-btn">MySQL</button>
                  <button className="resume-btn">Agile/Scrum</button>
                  <button className="resume-btn">Git</button>
                  <button className="resume-btn">Eclipse</button>
                  <button className="resume-btn">StarUML</button>
                  <button className="resume-btn">Slack</button>
                  <button className="resume-btn">Postman</button>
                  <button className="resume-btn">Maven</button>
                  <button className="resume-btn">Docker</button>
                  <button className="resume-btn">ActiveMQ</button>
                  <button className="resume-btn">Junit</button>
                  <button className="resume-btn">Jenkins</button>
                  <button className="resume-btn">Windows</button>
                  <button className="resume-btn">AWS</button>
                </div>
              </div>
            </div>
          </div>
          {/* End Skills */}

          {/* call footer */}
          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  );
};

export default Resume;
