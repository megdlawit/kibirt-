import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css"; // Assuming you have a separate CSS file for styles

const Card = () => {
  return (
    <div className="text-light">
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4">
          <Col>
            <div className="card shadow" style={{ backgroundColor: "#1A2E3A" }}>
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title-vision">Vision</h5>
                <p className="card-text">
                To become the best leather and clothing brand that presents Africa for the rest of the World and deliver our products all over. 
  
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card shadow" style={{ backgroundColor: "#1A2E3A" }}>
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title-value">Values</h5>
                <p className="card-text">
                High quality, Accessibility, Africanism, Convenience and Consistency 
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card shadow" style={{ backgroundColor: "#1A2E3A" }}>
              <div className="fullcard">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title-goal">Goals</h5>
                <p className="card-text">
                Produces goods that tell stories of brave women supporting each other and Focus on products that customers like most
                </p>
              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Card;
