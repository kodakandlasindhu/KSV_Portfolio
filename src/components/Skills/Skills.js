import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      title: "Technical Skills",
      icon: <CodeIcon style={{ fontSize: 40, color: "#3498db" }} />,
      
      items: [
        "Proficient in Java,C, C++ and Python for Software Development",
        "Experienced in developing web applications using HTML,CSS and JavaScript",
        "Expertise in using frameworks such as React, Nodejs, Spring Boot, Angular and Hibernate.",
        "Skilled in database management and data handling with MongoDB, MySQL, PostgreSQL, JDBC, NoSQL."

      ],
    },
    {
      title: "Cloud and Infrastructure skills",
      icon: <AssessmentIcon style={{ fontSize: 40, color: "#e74c3c" }} />,
      items: [
        "Experienced in cloud platforms such as AWS and Azure.",
        "Experienced with DevOps tools: Docker and Kubernetes.",
        "Skilled in version control: Git, GitHub, and GitLab.",
        "Proficient in working with both Windows and Linux environments for software development.",
      ],
    },
    {
      title: "Project Management and Methodologies",
      icon: <WorkIcon style={{ fontSize: 40, color: "#f1c40f" }} />,
      items: [
        "Knowledgeable in Agile/Scrum and Waterfall methodologies.",
        "Experienced in project collaboration using JIRA for Agile project tracking and Confluence for documentation.",
        "Skilled in Kanban for visualizing workflows and managing tasks.",
        "Proficient in CI/CD pipelines using tools like Jenkins for automation"
      ],
    },
    {
      title: "Business and Communication Skills",
      icon: <BusinessIcon style={{ fontSize: 40, color: "#2ecc71" }} />,
      items: [
        "Strong problem-solving and data-driven decision-making skills.",
        "Proven leadership in managing teams and projects.",
        "Excellent at presenting data insights to stakeholders.",
        "Collaborative team player with cross-functional experience.",
      ],
    },
  ];

  return (
    <>
      <br />
      <div className="SkillsWrapper" id="skills">
        <div className="Container">
          <div className="SectionTitle">Skills</div>
          <Grid container spacing={3}>
            {skillsData.map((skill, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card className="SkillCard">
                  <CardContent>
                    <Box className="IconWrapper">{skill.icon}</Box>
                    <Typography
                      variant="h6"
                      component="div"
                      className="SkillTitle"
                    >
                      {skill.title}
                    </Typography>
                    <ul className="SkillList">
                      {skill.items.map((item, index) => (
                        <li key={index} className="SkillItem">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <p className="commitment-text">
            I am dedicated to continuous learning and staying updated with the
            latest trends and advancements in the field of Software. My
            commitment to excellence ensures that I provide the best possible
            solutions and support for any project.
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;
