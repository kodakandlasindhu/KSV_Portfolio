import React, { useState } from "react";
import "./Education.css";

function Education() {
  const educationDetails = [
    {
      id: 1,
      institution:
        "University of North Texas",
      degree: "Master of Science in Computer and Information Sciences",
      location: "Denton,TX",
      date: "August 2022 - May 2024",
      gpa: "GPA: 3.5/4",
      coursework: [
        "Operating System Design",
        "Software Engineering",
        "Introduction to Big Data & Data Science",
        "Analysis of Computer Algorithms",
        "Computer Networks",
        "Secure Software Systems",
      ],
    },
    {
      id: 2,
      institution:
        "Kakatiya Institute of Technology and Sciences",
      degree: "Bachelor of Science in Electronics and Instrumentation",
      location: "Warangal, India",
      date: "August 2018 - May 2022",
      cgpa: "CGPA: 8.16/10.00",
      coursework: [
        "Object Oriented Programming",
        "Data Structures",
        "Computer Architechture and Organization",
        "Project Management",
        "Cloud Computing",
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
      <div className="ProjectWrapper" id="education">
        <div className="Container">
          <div className="SectionTitle">Education</div>
          <div className="EducationDetails">
            {educationDetails.map((edu) => (
              <div key={edu.id} className="EducationCard">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.location}</p>
                <p>{edu.date}</p>
                <p>{edu.cgpa || edu.gpa}</p>
                <p>Relevant course:</p>
                <ul>
                  {edu.coursework.map((course, idx) => (
                    <li
                      key={idx}
                      style={{
                        display:
                          idx < 2 || expandedCards.includes(edu.id)
                            ? "block"
                            : "none",
                      }}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
                {edu.coursework.length > 2 && (
                  <button
                    className="ViewMoreButton"
                    onClick={() => toggleExpand(edu.id)}
                  >
                    {expandedCards.includes(edu.id) ? "View Less" : "View More"}
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

export default Education;
