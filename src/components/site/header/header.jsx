import React, { Component } from "react";
import "../header/header.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <h1>ورزش 3</h1>
            <p>اولین وب سایت ساخته شده توسط من</p>
          </div>
          <div className="menu-holder">
            <div className="search">
              <input type="text" placeholder="جستخوی اخبار تیم ها" />
              <input type="submit" value="جستجو" />
            </div>
            <div className="clear" />
            <ul className="menu">
              <li className="selected">
                <a href="#">خانه</a>
              </li>
              <li>
                <a href="#">جدول لیگ ها</a>
                <ul>
                  <li>
                    <a href="#">لیگ برتر</a>
                  </li>
                  <li>
                    <a href="#">دسته 1</a>
                  </li>
                  <li>
                    <a href="#">دسته 2</a>
                  </li>
                  <li>
                    <a href="#">جام حذفی</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">پخش زنده</a>
                <ul>
                  <li>
                    <a href="#">شبکه 3 سیما</a>
                  </li>
                  <li>
                    <a href="#">شبکه ورزش سیما</a>
                  </li>
                  <li>
                    <a href="#">شبکه جام جم</a>
                  </li>
                </ul>
              </li>
              <div className="clear" />
            </ul>
            <div className="clear" />
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default Header;
