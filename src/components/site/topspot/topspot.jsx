import React, { Component } from "react";
import "../topspot/topspot.css";
import pic1 from "../css/image/1.png";
import pic2 from "../css/image/2.png";
import largimage from "../css/image/larg-image.png";
class TopSpot extends Component {
  state = {};
  render() {
    return (
      <div className="topspot">
        <div className="container">
          <div className="larg-image">
            <img src={largimage} />
          </div>
          <div className="thumbnails">
            <div className="item">
              <img src={pic1} />
              <p>
                <a href="#">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </a>
              </p>
            </div>
            <div className="item">
              <img src={pic2} />
              <p>
                <a href="#">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </a>
              </p>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    );
  }
}

export default TopSpot;
