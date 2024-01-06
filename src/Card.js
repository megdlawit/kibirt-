import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./App.css"; // Assuming you have a separate CSS file for styles

const Card = () => {
  return (
    <div className=" text-light">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <div className="card-deck mx-4 mt-0">
              <div className="card shadow mt-5" style={{ backgroundColor: "#1A2E3A" }}>
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1466074395296-41cba23ce4f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Goals</h5>
                  <hr style={{ color: "#C0A142" }}></hr>
                  <p className="card-text">
                  High quality, Accessibility, Africanism,Convenience and Consistency
                  </p>
                  <p className="card-text">
                   
                  </p>
                </div>
              </div>
              <div className="card shadow mt-5" style={{ backgroundColor: "#1A2E3A" }}>
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1466074395296-41cba23ce4f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Values</h5>
                  <hr style={{ color: "#C0A142" }}></hr>
                  <p className="card-text">
                  High quality,Accessibility,Africanism,Convenience and Consistency
                  </p>
                  <p className="card-text">
                   
                  </p>
                </div>
              </div>
              <div className="card shadow mt-5" style={{ backgroundColor: "#1A2E3A" }}>
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1466074395296-41cba23ce4f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Vision</h5>
                  <hr style={{ color: "#C0A142" }}></hr>
                  <p className="card-text">
                  To become the best leather and clothing brand that presents Africa for the rest of the World and deliver our products all over.
                  </p>
                  <p className="card-text">
                   
                  </p>
                </div>
              </div>
            </div>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Card;
