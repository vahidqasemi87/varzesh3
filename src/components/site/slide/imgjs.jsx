import React, { Component } from "react";
import pic10 from "../css/image/larg-image.png";
import pic11 from "../css/image/pic90.png";
import pic12 from "../css/image/pic91.jpg";

const slideImages = [pic10, pic11, pic12];
class ImgSlide extends Component {
  state = { counter: 0 };
  render() {
    this.timing();
    return (
      <div>
        <img src={slideImages[this.state.counter]} />
      </div>
    );
  }
  Incremental = () => {
    if (this.state.counter < 2)
      this.setState({ counter: this.state.counter + 1 });
    else this.setState({ counter: 0 });
  };
  timing = () => {
    setInterval(this.Incremental, 3000);
  };
}

export default ImgSlide;
