import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const workExperience = [
    {
      id: 1,
      position: "Full-Stack Developer",
      company: "PTC",
      location: "Boston,MA",
      date: "June 2024 - Present",
      responsibilities: [
        "Spearheaded the optimization of a legacy CRM system, leading to a 30% improvement in overall system performance and a 20% reduction in response time by refactoring code and implementing efficient algorithms using Java, Spring Boot, and Hibernate.",
        "Designed and implemented high-performance RESTful APIs, facilitating seamless data communication and integration for enterprise clients,resulting in a 25% increase in data retrieval speed. Utilized Java, Spring Boot, and Postman for API development and testing. ",
        "Developed responsive and user-friendly interfaces using Angular, enhancing user experience and increasing customer satisfaction scores by 15%. Ensured cross-browser compatibility and optimized load times by 20%.",
        "Enhanced code quality and collaboration through code reviews and pair programming, leading to a 40% reduction in code defects and improved team efficiency. Utilized tools such as Git, GitHub for version control and code review processes.",
        
      ],
    },
    {
      id: 2,
      position: "Software Developer",
      company: "Sigma Info solutions",
      location: "Bengaluru, India",
      date: "August 2020 - July 2022",
      responsibilities: [
        "Engineered responsive web applications using HTML, CSS, JavaScript, and React enhancing user interfaces and user experience, which led to a 30% increase in user engagement.",
        "Created scalable and secure RESTful APIs to facilitate seamless client-server communication using Java and Spring Boot, improving API response times by 20% and ensuring high reliability and scalability of backend services.",
        "Constructed database schemas, wrote and optimized complex SQL queries, and managed database interactions using MySQL, PostgreSQL,Hibernate, and JDBC, reducing data retrieval times by 25% and improving overall database efficiency.",
        "Implemented CI/CD pipelines using Jenkins, Docker, Kubernetes, and Git to automate build, test, and deployment processes, decreasing deployment time by 50% and reducing post-release defects by 35% through automated testing and continuous integration practices.",
        "Participated in Agile/Scrum ceremonies, engaged in sprint planning, daily stand-ups, and retrospectives using JIRA and Confluence,significantly improving team productivity and project delivery timelines. "
      ],
    },
  ];

  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpand = (id) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((cardId) => cardId !== id));
    } else {
      setExpandedCards([...expandedCards, id]);
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="ProjectWrapper" id="work-experience">
        <div className="Container">
          <div className="SectionTitle">Work Experience</div>
          <div className="WorkExperienceDetails">
            {workExperience.map((work) => (
              <div key={work.id} className="WorkExperienceCard">
                <h3>{work.position}</h3>
                <p>{work.company}</p>
                <p>{work.location}</p>
                <p>{work.date}</p>
                <ul>
                  {work.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      style={{
                        display:
                          idx < 2 || expandedCards.includes(work.id)
                            ? "block"
                            : "none",
                      }}
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
                {work.responsibilities.length > 2 && (
                  <button
                    className="ViewMoreButton"
                    onClick={() => toggleExpand(work.id)}
                  >
                    {expandedCards.includes(work.id)
                      ? "View Less"
                      : "View More"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
