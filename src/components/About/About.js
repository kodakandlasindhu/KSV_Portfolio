import React from "react";
import { Image, ContactWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/photo.png";
function About() {
  return (
    <>
      {" "}
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
            <ScrollAnimation animateIn="fadeInLeft">
              <Image
                style={{ borderRadius: "50%" }}
                src={logo}
                alt="photo.png"
              />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="fadeInLeft">
                Hello! My name is <strong>Sindhuvyshnavi Kodakandla</strong>. I'm
                recent Master's graduate in Computer and Information Sciences at 
                University of North Texas,With over three years of experience,
                I’ve developed a strong ability to analyze complex data and streamline processes, 
                which has consistently contributed to improvements.
              </ScrollAnimation>
              <br />
              <ScrollAnimation animateIn="fadeInLeft">
              Throughout my career, I have contributed to projects that optimize system 
              performance and elevate user experience, particularly in CRM and Web applications.
              By developing efficient APIs, responsive interfaces, and improving complex SQL operations,
              I've driven measurable improvements, such as enhancing data retrieval speed by 25%
              and reducing code defects by 40%. I have a strong foundation in full-stack development
              and a solid understanding of cloud technologies, enabling me to bridge technical
              and business goals effectively. My focus on high-quality solutions and customer-centric
              development has consistently led to increased customer satisfaction and operational 
              cost savings.
              </ScrollAnimation>
              
               <br />
              <ScrollAnimation animateIn="fadeInLeft">
              I have volunteered as an Assistant for a professor,helping teach computer science
               to undergraduate students. In addition, I have experience mentoring junior software developers,
               helping them to build their skills and understand best practices in software development.
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
