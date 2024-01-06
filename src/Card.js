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
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">
                  Content for Card 1
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
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">
                  Content for Card 2
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
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">
                  Content for Card 3
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Card;
