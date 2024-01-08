import React from 'react';
import "./App.css";

const Hero = () => {
  return (
    <div className='hero'>
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-6 py-5">
        <p className="text-white">
          made in Ethiopia
          </p>
          <h5 className="shop-Text display-2">
        
          “Show your  <span className="stylish-text"> Diva</span> Within”
          </h5>
        
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 py-5">
          <img
            src="https://media.istockphoto.com/id/862209732/photo/nordic-walking-on-the-mountains.jpg?s=612x612&w=is&k=20&c=gT5Oey7Zik6OwQf0KQgwkeIW9ogSC5vAm-acRpK_J5Q="
            className="img-fluid image"
            alt="Nature"
          />
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Leather-Bag-PNG.png"
            className="secound-bag"
            alt="Leather Bag"
          />
          
        </div>

      </div>
      <p className="text-a" >“አንቺ ዉድ ነሽ፤ አንቺ ጠንካራ ነሽ፤ አንቺ የከበርሽ ነሽ…….”</p>
    </div>
    </div>
  );
};

export default Hero;
