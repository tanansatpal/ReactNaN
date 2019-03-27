import React from 'react'

function CategoryBanner() {
  return (<section>
    <div className="container-fluid px-5px">
      <div className="row mx-0">
        <div className="col-md-6 mb-10px px-5px">
          <div className="card border-0 text-white text-center">
            <img
              src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/christopher-campbell-28571-unsplash.jpg"
              alt="Card" className="card-img"/>
            <div className="card-img-overlay d-flex align-items-center">
              <div className="w-100 py-3">
                <h2 className="display-3 font-weight-bold mb-4">Top picks</h2><a href="category.html"
                                                                                 className="btn btn-light">Shop
                now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-10px px-5px">
          <div className="card border-0 text-white text-center"><img
            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/marco-xu-496929-unsplash.jpg"
            alt="Card" className="card-img"/>
            <div className="card-img-overlay d-flex align-items-center">
              <div className="w-100 py-3">
                <h2 className="display-3 font-weight-bold mb-4">New arrivals</h2><a href="category.html"
                                                                                    className="btn btn-light">Shop
                now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-lg-4 mb-10px px-5px">
          <div className="card border-0 text-center text-white"><img
            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/benjamin-voros-260869-unsplash.jpg"
            alt="Card" className="card-img"/>
            <div className="card-img-overlay d-flex align-items-center">
              <div className="w-100">
                <h2 className="display-4 mb-4">Jackets</h2><a href="category.html"
                                                              className="btn btn-link text-white">Shop now <i
                className="fa-arrow-right fa ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-10px px-5px">
          <div className="card border-0 text-center text-white"><img
            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/malvestida-magazine-458585-unsplash.jpg"
            alt="Card" className="card-img"/>
            <div className="card-img-overlay d-flex align-items-center">
              <div className="w-100">
                <h2 className="display-4 mb-4">Lookbook</h2><a href="category.html"
                                                               className="btn btn-link text-white">Shop now <i
                className="fa-arrow-right fa ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-10px px-5px">
          <div className="card border-0 text-center text-dark"><img
            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/michael-frattaroli-221247-unsplash.jpg"
            alt="Card" className="card-img"/>
            <div className="card-img-overlay d-flex align-items-center">
              <div className="w-100">
                <h2 className="display-4 mb-4">Try this</h2><a href="category.html"
                                                               className="btn btn-link text-dark">Shop now <i
                className="fa-arrow-right fa ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

export default CategoryBanner;
