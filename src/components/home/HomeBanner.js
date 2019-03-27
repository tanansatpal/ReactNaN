import React from 'react'

function HomeBanner() {
  return (<section className="py-6 position-relative light-overlay">
    <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/benjamin-voros-260869-unsplash.jpg" alt=""
         className="bg-image"/>
    <div className="container">
      <div className="overlay-content text-center text-dark">
        <p className="text-uppercase font-weight-bold mb-1 letter-spacing-5">Old Collection </p>
        <h3 className="display-1 font-weight-bold text-serif mb-4">Summer Sales</h3>
        <a href="category.html"
           className="btn btn-dark">Shop Now</a>
      </div>
    </div>
  </section>)
}

export default HomeBanner;
