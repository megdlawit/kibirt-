import React, { useState } from 'react';

const Slider = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handlePrev = () => {
    setActiveItem(activeItem === 0 ? 2 : activeItem - 1);
  };

  const handleNext = () => {
    setActiveItem(activeItem === 2 ? 0 : activeItem + 1);
  };

  const carouselItems = [
    [
      { title: 'Bridal boutiques', image: './assets/img/bridal butique.jpg' },
      { title: 'Makeup/Beauty/Hair', image: './assets/img/makeup.jpg' },
      { title: 'Decorators', image: './assets/img/flower1.jpg' },
    ],
    [
      { title: 'Photographers', image: './assets/img/photographer.jpg' },
      { title: 'Realtors', image: 'assets/img/house.jpg' },
      { title: 'Microfinance', image: 'assets/img/money.jpg' },
    ],
    [
      { title: 'Catering', image: './assets/img/catering.jpg' },
      { title: 'Wedding Planner', image: './assets/img/weddinghall.jpg' },
      { title: 'Florists', image: './assets/img/shoes.jpg' },
    ],
  ];

  return (
    <section className="pt-5 pb-5">
      <div className="container">
      <h3>
              <span style={{ color: '#cb9313' }}>Who</span> Will Be There?
            </h3>
        <div className="row">
          {carouselItems[activeItem].map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card" style={{ borderRadius: '20px' }}>
                <img
                  className="img-fluid"
                  style={{ borderRadius: '20px' }}
                  alt="100%x280"
                  src={item.image}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-3">
          <div className="col-6">
            
          </div>
          <div className="col-6 text-right">
            <button
              className="btn btn-primary mb-3 mr-1"
              onClick={handlePrev}
            >
              <i className="fa fa-arrow-left"></i>
            </button>
            <button className="btn btn-primary mb-3 " onClick={handleNext}>
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;