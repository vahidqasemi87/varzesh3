import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "../slide/slideShow.css";
import pic10 from "../css/image/pic1.jpg";
import pic11 from "../css/image/pic2.jpg";
import pic12 from "../css/image/pic3.jpg";
import pic13 from "../css/image/pic4.jpg";

const slideImages = [pic10, pic11, pic12, pic13];

const properties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

class SlideShow extends Component {
  render() {
    return (
      <div id="slideShow">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[3]})` }} />
          </div>
        </Slide>
      </div>
    );
  }
}

export default SlideShow;
