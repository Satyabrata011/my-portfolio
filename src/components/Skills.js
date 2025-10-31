import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Skills = () => {

  const mainSkills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "JAVA",
    "SQL",
    "MongoDB",
    "Git & GitHub",
    "HTML / CSS"
  ];

  const testingTools = ["Selenium Automation", "Manual Testing"];
  const ideTools = ["IntelliJ IDEA", "VS Code", "Eclipse"];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Skills</h2><br/>
                  

                  {/* Main Skills Section (no subtitle) */}
                  <div className="skill-container">
                    {mainSkills.map((skill, idx) => (
                      <div className="skill-card" key={idx}>
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Testing Tools Section */}
                  <div className="skill-category">
                    <h3 className="skills-subtitle">Testing Tools</h3>

                    <div className="skill-container">
                      {testingTools.map((tool, idx) => (
                        <div className="skill-card" key={idx}>
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IDEs Section */}
                  <div className="skill-category">
                   <h3 className="skills-subtitle">IDEs</h3>

                    <div className="skill-container">
                      {ideTools.map((tool, idx) => (
                        <div className="skill-card" key={idx}>
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
