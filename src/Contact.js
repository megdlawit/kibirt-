import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaThumbsUp, FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { MdOutlineSocialDistance } from "react-icons/md";

const Contact = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center h-70">
        <Col md={3} className="d-flex align-items-center">
          <div className="bg-white p-4 text-center" style={{ border: '2px solid #C0A142' }}>
            <FaThumbsUp className="icons" />
            <h3>100% Satisfaction Guaranteed</h3>
            <p>High quality, Accessibility, Africanism, Convenience and Consistency </p>
          </div>
        </Col>
        <Col md={3}>
          <Row className="h-100">
            <Col md={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white p-4 text-center" style={{ border: '2px solid #C0A142' }}>
                <FaPhoneSquareAlt className="icons" />
                <h3>Contact Us</h3>
                <p>+2519087654/+2519876543</p>
              </div>
            </Col>
            <Col md={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white p-4 text-center" style={{ border: '2px solid  #C0A142' }}>
                <IoIosRocket className="icons" />
                <h3> Delivery</h3>
                <h6>free delivery sgsegedthxfgt t</h6>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <div className="bg-white p-4 text-center" style={{ border: '2px solid #C0A142' }}>
            <MdOutlineSocialDistance className="icons" />
            <h3>Social media</h3>
            <h6>Email: info@Kibirtgmail</h6>
            <h6>Instagram: kibirt</h6>
            <h6>Telegram: kibirt</h6>
            <h6>Facebook: kibirt</h6>
            <h6>X: kibirt</h6>
           
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
