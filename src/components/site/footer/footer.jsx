import React, { Component } from "react";
import "../footer/footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="col">
            <h4 className="page-header">فرم تماس با من</h4>
            <div className="form-group">
              <label>نام:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>پست الکنرونیک:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>پیام:</label>
              <textarea />
            </div>
            <div className="form-group text-left">
              <input type="submit" value="ارسال" className="btn success" />
              <input type="reset" value="پاک کردن فرم" className="btn" />
            </div>
          </div>
          <div className="col">
            <h4 className="page-header">ارتباط با من</h4>
            <p>
              <b>آدرس:</b> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ و با استفاده.
            </p>
            <p>
              <b>تلفن:</b> ۱۲۳۴۵۶۷۸ ۰۲۱
            </p>
            <p>
              <b>فکس:</b> ۱۲۳۴۵۶۷۸ ۰۲۱
            </p>
          </div>
          <div className="col">
            <h4 className="page-header">نقشه سایت</h4>
            <ul>
              <li>
                <a href="#">خانه</a>
              </li>
              <li>
                <a href="#">درباره من</a>
              </li>
              <li>
                <a href="#">تماس با من</a>
              </li>
            </ul>
          </div>
          <div className="clear" />
          <div className="copyright">
            © ایجاد شده با <span className="hearts">♥</span> توسط من
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
