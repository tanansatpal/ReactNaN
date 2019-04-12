import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  mobileFirst: true
};

class Slides extends React.Component {

  render() {
    const imgs = this.props.slides;
    return (<Slider {...settings} className="home-full-slider-wrapper mb-10px">
      {imgs.map((slide, index) => (
        <div key={index} className="item home-full-item">
          <img src={'https://cdn.storehippo.com/s/576253cbd08b24115d6731e6/' + slide.image}
               alt={slide.title} style={{width: '100%'}}/>
          {/*{slide.description}*/}
        </div>
      ))}
    </Slider>)
  }
}

export default Slides;
