import React, { Component } from "react";
import "./css/style.css";
import Header from "./header/header";
import TopSpot from "./topspot/topspot";
import Main from "./main/main";
import Footer from "./footer/footer";
//import SlideShow from "./slide/slideShow";
class Site extends Component {
  state = {};
  render() {
    return (
      <div className="site">
        <Header />
        <TopSpot />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Site;
