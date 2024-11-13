import React from "react";
import "./Tools.css";


const toolsData = [
  {
    name: "Intellij",
    logo: "https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg",
  },
  {
    name: "Visual Studio",
    logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.worldvectorlogo.com/logos/postman.svg",
  },
  {
    name: "Eclipse",
    logo: "https://cdn.worldvectorlogo.com/logos/eclipse-11.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.worldvectorlogo.com/logos/mysql-2.svg",
  },
  {
    name: "Jenkins",
    logo: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg",
  },
  {
    name: "JIRA",
    logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
  },
  {
    name: "Confluence",
    logo: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  },
  {
    name: "Powerpoint",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-powerpoint-2013.svg",
  },
  
];

function Tools() {
  return (
    <>
      <br />
      <div className="ProjectWrapper" id="tools">
        <div className="Container">
          <div className="SectionTitle">Tools</div>
          <div className="ToolsList">
            {toolsData.map((tool, index) => (
              <div className="ToolCard" key={index}>
                <img src={tool.logo} alt={tool.name} />
                <div className="ToolName">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;