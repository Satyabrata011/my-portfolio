import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";  // LinkedIn
import navIcon2 from '../assets/img/github.svg';  // GitHub
import navIcon3 from "../assets/img/nav-icon3.svg";  // Instagram

export const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="align-items-center">
          
          {/* Left side - Logo */}
          <Col xs={12} sm={6} className="footer-logo">
            <img src={logo} alt="Logo" />
          </Col>

          {/* Right side - Social Icons + Copyright */}
          <Col xs={12} sm={6} className="footer-social">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/satyabrata-pradhan-2b735120b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Satyabrata011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              <a
                href="https://www.instagram.com/llsatyabratall?igsh=ZzNhOHJ5dHkydTRj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>© 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
