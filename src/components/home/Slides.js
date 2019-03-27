import React from 'react'
import {tns} from "tiny-slider/src/tiny-slider.module"
import "tiny-slider/dist/tiny-slider.css"


const settings = {
  nav: false,
  mouseDrag: true,
  container: '.home-full-slider-wrapper',
  items: 1,
  slideBy: 'page',
  autoWidth: true
};

class Slides extends React.Component {
  slider;


  componentDidMount() {
    this.slider = tns(settings);
  }

  componentWillUnmount() {
    if (this.slider) this.slider.destroy();
  }

  render() {
    const imgs = this.props.slides;
    return (<section className="home-full-slider-wrapper mb-10px">
      {imgs.map((slide, index) => (
        <div key={index} className="item home-full-item">
          <img src={'https://cdn.storehippo.com/s/576253cbd08b24115d6731e6/' + slide.image}
               alt={slide.title} style={{width: '100%'}}/>
          {/*{slide.description}*/}
        </div>
      ))}
    </section>)
  }
}

export default Slides;
