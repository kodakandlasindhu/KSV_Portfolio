import React, { useEffect, useState } from "react";
import "./Certifications.css";


const certificationsData = [
  {
    title: "Front-End Developer Certification - Meta (via Coursera) ",
    details: [
      "Learned JavaScript basics, including object/array manipulation and unit testing with Jest.",
      "Gained version control skills using Git and GitHub for code management and revisions.",
      "Built responsive web layouts with HTML5, CSS3, and Bootstrap.",
      "Developed interactive web apps using React, focusing on components and state management.",
      "Advanced React skills, including API integration, testing with React Testing Library, and using popular libraries.",
      "Learned UI/UX design principles, created wireframes in Figma, and built a capstone project using React.",
     
    ],
  },
  {
    title: "Spring Boot 3, Spring 6 & Hibernate by Chad Darby(via Udemy)",
    details: [
      "Learned core Spring Boot 3 features, including annotations, Java configuration, Spring REST, Spring MVC, AOP, Hibernate/JPA, and Maven.",
      "Developed REST APIs, integrated Spring Security, and utilized Spring Data JPA, Spring Data REST, and Thymeleaf for full-stack development.",
      "Learned industry-relevant skills that are in high demand for Spring Boot and Hibernate developers.",
      "Worked with modern development tools like IntelliJ and Maven for building and managing Spring Boot projects."

    ],
  },

];

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setCertifications(certificationsData);
  }, []);

  return (
    <>
      <div className="ProjectWrapper" id="certifications">
        <div className="SectionTitle">Certifications</div>
        <div className="certifications">
          {certifications.map((certification, index) => (
            <div className="certification" key={index}>
              <h3>{certification.title}</h3>
              <ul>
                {certification.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <br />
      
    </>
  );
}

export default Certifications;
