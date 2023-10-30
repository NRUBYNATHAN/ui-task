import "./CenterCon.css";
import avtar1 from "../images/avtar/avtar5.png";
import avtar2 from "../images/avtar/avtar6.png";
import banner1 from "../images/backgrounds/center-back1.png";
import banner2 from "../images/backgrounds/center-back2.png";
import banner3 from "../images/backgrounds/center-bot1.png";
import banner4 from "../images/backgrounds/center-bot2.png";
import banner5 from "../images/backgrounds/center-bot3.png";

import icon1 from "../images/icons/comment.png";
import icon2 from "../images/icons/share.png";
import icon3 from "../images/icons/heart.png";
function CenterCon() {
  return (
    <div className="CenterCon">
      <div className="main-con">
        <div className="content1">
          <div className="con1">
            <img className="con1_img" src={avtar1} />
            <div>
              <h3 className="con1_head">Lara Leones</h3>
              <p className="con1-para">@thewallart</p>
            </div>
          </div>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
              <span className="con1_hover">Read More</span>
            </p>
          </div>
          <div>
            <img className="con1_back_img" src={banner1} />
          </div>
          <div className="con1_icons">
            <div className="con_icon">
              <img src={icon3} />
              <p>9.8K</p>
            </div>
            <div className="con_icon">
              <img src={icon1} />
              <p>9.8K</p>
            </div>
            <div className="con_icon">
              <img src={icon2} />
              <p>9.8K</p>
            </div>
          </div>
        </div>

        <div className="content1">
          <div className="con1">
            <img className="con1_img" src={avtar2} />
            <div>
              <h3 className="con1_head">Thomas J.</h3>
              <p className="con1-para">@thecustomcreater</p>
            </div>
          </div>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. Read
              More <span className="con1_hover">Read More</span>
            </p>
          </div>
          <div>
            <img className="con1_back_img" src={banner2} />
          </div>
          <div className="con1_icons">
            <div className="con_icon">
              <img src={icon3} />
              <p>9.8K</p>
            </div>
            <div className="con_icon">
              <img src={icon1} />
              <p>8.6K</p>
            </div>
            <div className="con_icon">
              <img src={icon2} />
              <p>7.2K</p>
            </div>
          </div>
        </div>

        <div className="bots">
          <div className="bot1">
            <img className="bot_ban1" src={banner3} />
            <p>Modern Wall Decor Framed Painting</p>
            <div className="bot_con">
              <h3 className="num">$199.99</h3>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="bot1">
            <img className="bot_ban1" src={banner4} />
            <p>Modern Wall Decor Framed Painting</p>
            <div className="bot_con">
              <h3 className="num">$199.99</h3>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="bot1">
            <img className="bot_ban1" src={banner5} />
            <p>Modern Wall Decor Framed Painting</p>
            <div className="bot_con">
              <h3 className="num">$199.99</h3>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterCon;
