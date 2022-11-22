import React from "react";
import Slider from "react-slick";
import firstbanner from "../../Images/first.webp";
import secondbanner from "../../Images/second.webp";
import thirdbanner from "../../Images/third.webp";
function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="sliderBanner">
      <Slider {...settings}>
        <div>
          <img src={firstbanner} />
        </div>
        <div>
          <img src={secondbanner} />
        </div>
        <div>
          <img src={thirdbanner} />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;