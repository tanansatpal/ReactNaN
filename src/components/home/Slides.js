import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slides() {
  return (<section className="home-full-slider-wrapper mb-10px">

    <OwlCarousel
      className="owl-theme owl-dots-modern home-full-slider"
      loop
      items={1}
      margin={10}
      nav
    >
      <div style={{background: '#f8d5cf'}} className="item home-full-item">
        <img
          src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/matheus-ferrero-334418-unsplash.jpg" alt=""
          className="bg-image"/>
        <div className="container-fluid h-100 py-5">
          <div className="row align-items-center h-100">
            <div className="col-lg-8 col-xl-6 mx-auto text-white text-center">
              <h5 className="text-uppercase text-white font-weight-light mb-4 letter-spacing-5"> Just arrived</h5>
              <h1 className="mb-5 display-2 font-weight-bold text-serif">Denim Jackets</h1>
              <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <p><a href="category.html" className="btn btn-light">View collection</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="item home-full-item bg-dark dark-overlay">
        <img
          src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/ian-dooley-347942-unsplash.jpg" alt=""
          className="bg-image"/>
        <div className="container-fluid h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-8 col-xl-6 mx-auto text-white text-center overlay-content">
              <h1 className="mb-4 display-2 text-uppercase font-weight-bold">Skeleton Tees</h1>
              <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <p><a href="category.html" className="btn btn-light">Start shopping</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="item home-full-item">
        <img
          src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/haley-phelps-62815-unsplash.jpg" alt=""
          className="bg-image"/>
        <div className="container-fluid h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-8 col-xl-6 mx-auto text-white text-center">
              <h5 className="text-uppercase font-weight-light mb-4 letter-spacing-5"> Our bestseller</h5>
              <h1 className="mb-5 display-1 font-weight-bold text-serif">Skinny Jeans</h1>
              <p><a href="category.html" className="btn btn-light">View collection</a></p>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  </section>)
}

export default Slides;
