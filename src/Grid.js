import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Container from '@mui/material/Container';
import bag from './Assets/bag.jpg';
import shoe from './Assets/shoe .png';
import cloth from './Assets/cloth2.png';
// import cloth from "./Assets/Asset 5.png"

export const Grid = () => {

  return (
    <div className='grid-container'>
     <Container maxWidth="lg">
   
   <div className='grid_style'>
    <MDBRow>
      <MDBCol lg={6} md={12} className='mb-4 mb-lg-0'>
        
<div className='img-bag'>
<img
          src={bag}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
  <div className='img-bag-text' 
  >
    Bags
  </div>
</div>

<div className='img-shoe'>
  <img
    src={shoe}
    className='w-100 shadow-1-strong rounded mb-4'
    alt='Wintry Mountain Landscape'
  />
  <div className='img-shoe-text' 
  >
    Shoes
  </div>
</div>
      </MDBCol>

      <MDBCol lg={6} className='mb-4 mb-lg-0'>
       
<div className='img-cloth'>
<img
          src={cloth}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />
  <div className='img-cloth-text' 
  >
    Cloths
  </div>
</div>
       
      </MDBCol>
     
       

    </MDBRow>
    </div>
    </Container>
    
    </div>
  );
}