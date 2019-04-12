import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  mobileFirst: true
};

class Brands extends React.Component {

  render() {
    const brands = this.props.brands;
    return (
      <section className="py-6 brands">
        <div className="container">
          <h4 className="text-uppercase text-center mb-5">Our brands</h4>
          <Slider {...settings} className="brands-slider">
            {brands.map((brand, index) => (
              <div key={index} className="item align-items-center justify-content-center">
                <div className="w-6rem">
                  <img src={'https://cdn.storehippo.com/s/576253cbd08b24115d6731e6/' + brand.image}
                       alt={brand.name} className="img-fluid"/>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>)
  }
}

export default Brands;
