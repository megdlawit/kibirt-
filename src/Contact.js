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
            <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.</p>
          </div>
        </Col>
        <Col md={3}>
          <Row className="h-100">
            <Col md={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white p-4 text-center" style={{ border: '2px solid #C0A142' }}>
                <FaPhoneSquareAlt className="icons" />
                <h3>Contact Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laore</p>
              </div>
            </Col>
            <Col md={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white p-4 text-center" style={{ border: '2px solid  #C0A142' }}>
                <IoIosRocket className="icons" />
                <h3>Fast Delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laore</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <div className="bg-white p-4 text-center" style={{ border: '2px solid #C0A142' }}>
            <MdOutlineSocialDistance className="icons" />
            <h3>Social media</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laore Lorem ipsum dolor sit amet consectetur. Suspendisse laore
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreLorem ipsum dolor sit amet consectetur. Suspendisse laoreLorem ipsum dolor sit amet consectetur. Suspendisse laore
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
