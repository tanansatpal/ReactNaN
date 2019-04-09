import React from 'react'
// import {tns} from "tiny-slider/src/tiny-slider.module"
import "tiny-slider/dist/tiny-slider.css"

const settings = {
  nav: true,
  mouseDrag: true,
  container: '.brands-slider',
  items: 6,
  controls: false,
  center: true,
  slideBy: 'page'
};

class Brands extends React.Component {
  slider;


  componentDidMount() {
    // this.slider = tns(settings);
  }

  componentWillUnmount() {
    if (this.slider) this.slider.destroy();
  }

  render() {
    const brands = this.props.brands;
    return (
      <section className="py-6 brands">
        <div className="container">
          <h4 className="text-uppercase text-center mb-5">Our brands</h4>
          <div className="brands-slider">
            {brands.map((brand, index) => (
              <div key={index} className="item align-items-center justify-content-center">
                <div className="w-6rem">
                  <img src={'https://cdn.storehippo.com/s/576253cbd08b24115d6731e6/' + brand.image}
                       alt={brand.name} className="img-fluid"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>)
  }
}

export default Brands;
