import "./RightCon.css";
import rightimg1 from "../images/backgrounds/right-back1.png";
import rightimg2 from "../images/backgrounds/right-back2.png";
import rightimg3 from "../images/backgrounds/right-back3.png";
import rightimg4 from "../images/backgrounds/right-back4.png";
import avtar1 from "../images/avtar/avtar1.png";
import avtar2 from "../images/avtar/avtar2.png";
import avtar3 from "../images/avtar/avtar3.png";
import avtar4 from "../images/avtar/avtar4.png";
function RightCon() {
  return (
    <div className="RightCon">
      <div className="right-top-letter">
        <p className="let1">Artists</p>
        <p className="let2">Photographers</p>
      </div>

      <div className="right-content">
        <div className="right-con">
          <img className="right1-back" src={rightimg1} />
          <div className="right1">
            <img className="right1_img" src={avtar1} />
            <div>
              <h3 className="right1_head">Thomas Edward</h3>
              <p className="right1-para">@thewildwithyou</p>
            </div>
          </div>
        </div>
        <div className="right-con">
          <img className="right1-back" src={rightimg2} />
          <div className="right1">
            <img className="right1_img" src={avtar2} />
            <div>
              <h3 className="right1_head">Chris Doe</h3>
              <p className="right1-para">@thecustomcreater</p>
            </div>
          </div>
        </div>
        <div className="right-con">
          <img className="right1-back" src={rightimg3} />
          <div className="right1">
            <img className="right1_img" src={avtar3} />
            <div>
              <h3 className="right1_head">Emilie Jones</h3>
              <p className="right1-para">@thecustomcreater</p>
            </div>
          </div>
        </div>
        <div className="right-con">
          <img className="right1-back" src={rightimg4} />
          <div className="right1">
            <img className="right1_img" src={avtar4} />
            <div>
              <h3 className="right1_head">Jessica Williams</h3>
              <p className="right1-para">@thecustomcreater</p>
            </div>
          </div>
        </div>
        <div className="right-con">
          <img className="right1-back" src={rightimg1} />
          <div className="right1">
            <img className="right1_img" src={avtar1} />
            <div>
              <h3 className="right1_head">Jessica Williams</h3>
              <p className="right1-para">@thecustomcreater</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCon;
