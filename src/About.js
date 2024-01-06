import React from 'react'
import "./App.css";
import img1 from "./Assets/bag.jpg"
export default function About() {
  return (

  
          <section id="about" class="about" >
      <div class="container" data-aos="fade-up">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="about_img">
              <img src={img1} alt="" />
            </div>
          </div>
    
          <div class="col-md-6 mt-5 mt-md-0 ps-md-5 text-white content">
            <h2 class="section_title">Who we are</h2>
            <p id="firstParagraph" class="mt-3">
             
Kibirt is a fashion design that makes Bags, Shoes and Clothing that have an African touch. Leather and cotton are our most used raw materials that are well finished and enhance aesthetic beauty to our products. Quality and convenience is our top priority to keep our customers satisfied, always delivering products that are up to their expectations. Kibirt simply represents a diva that thrives on positivity, dignity, compassion and support

     

            </p>
          </div>
        </div>
      </div>
    </section>
    
   
  )
}
