import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";
// import projImg5 from "../assets/img/project-img5.png";
// import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Movies Hub",
      description:
        "Full-stack movie website using React, Express, and MongoDB. Users can search movies, view details, and admins manage via dashboard.",
      imgUrl: projImg1,
      link: "https://github.com/chinmayeesahoo/movies-hub",
    },
    {
      title: "E-Shop",
      description:
        "Full-stack eCommerce website built using React, Express, and MongoDB with features like cart, wishlist, and user authentication.",
      imgUrl: projImg2,
      link: "https://github.com/chinmayeesahoo/eshop",
    },
    {
      title: "Weather App",
      description:
        "Responsive weather application built with React and OpenWeather API for real-time weather updates.",
      imgUrl: projImg3,
      link: "https://github.com/chinmayeesahoo/weather-app",
    },
    {
      title: "Heart Disease Detection",
      description:
        "Machine learning project using Python and logistic regression to predict the likelihood of heart disease.",
      imgUrl: projImg3,
      link: "https://github.com/chinmayeesahoo/heart-disease-detection",
    },
    {
      title: "Online Examination System",
      description:
        "PHP and XAMPP-based web app for managing online tests, question sets, and student performance.",
      imgUrl: projImg2,
      link: "https://github.com/chinmayeesahoo/online-exam-system",
    },
    {
      title: "Hotel & Bus Management Systems",
      description:
        "Hotel management (PHP) and Bus booking system (Java) built as academic projects for record management and automation.",
      imgUrl: projImg1,
      link: "https://github.com/chinmayeesahoo/hotel-bus-systems",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
