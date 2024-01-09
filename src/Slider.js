import React, { useState } from 'react';
import img1 from './Assets/Frame 12.png';
import img2 from './Assets/Frame 5 (2).png';
import img3 from './Assets/Frame 13.png';
import img4 from './Assets/Frame 7 (1).png';
import img5 from './Assets/Frame 8 (3).png';
import img6 from './Assets/Frame 11 (1).png';
import img7 from './Assets/Frame 9.png';
import img9 from './Assets/Frame 10.png';
import img8 from './Assets/Frame 6 (1).png';
import '@fortawesome/fontawesome-free/css/all.css';




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
      { title: 'Bridal boutiques', image: img1 },
      { title: 'Makeup/Beauty/Hair', image: img2 },
      { title: 'Decorators', image: img8 },
    ],
    [
      { title: 'Photographers', image: img4 },
      { title: 'Realtors', image: img5 },
      { title: 'Microfinance', image: img6 },
    ],
    [
      { title: 'Catering', image: img3 },
      { title: 'Wedding Planner', image: img9 },
      { title: 'Florists', image: img7 },
    ],
  ];

  return (
    <section className="pt-5 pb-5">
      <div className="container">
      <h3>
              <span style={{ color: '#cb9313' }}>Our</span> Products
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
               
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-3">
          <div className="col-6">
            
          </div>


    

<div className="row mt-3">
  <div className="col-6"></div>
  <div className="col-6 text-right">
    <div className="button-container">
      <button className="btn btn-primary mb-3 mr-1" onClick={handlePrev}>
        <i className="fa fa-arrow-left"></i>
      </button>
      <button className="btn btn-primary mb-3" onClick={handleNext}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Slider;