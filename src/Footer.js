import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../src/Assets/amharic.png";
import navIcon1 from "../src/Assets/img/nav-icon1.svg";
import navIcon2 from "../src/Assets/img/nav-icon2.svg";
import navIcon3 from "../src/Assets/img/nav-icon3.svg";
import "./App.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Perspective" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Powered by  <a href="https://www.instagram.com/perspective_digital_hub/">Perspective</a> 2024. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
