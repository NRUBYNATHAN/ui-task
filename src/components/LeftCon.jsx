import "./LeftCon.css";
import home from "../images/icons/home.png";
import notification from "../images/icons/notification.png";
import heart from "../images/icons/heart.png";
import message from "../images/icons/message.png";
import message1 from "../images/icons/message1.png";
import favorite from "../images/icons/favorite.png";
import profile from "../images/icons/profile.png";
import setting from "../images/icons/setting.png";
import logout from "../images/icons/logout.png";
function LeftCon() {
  return (
    <div className="LeftCon">
      <div className="icon1">
        <img className="icon-img" src={home} />
        <p className="icon-text1">Home</p>
      </div>
      <div className="icon">
        <img className="icon-img" src={notification} />
        <p className="icon-text">Notifications</p>
      </div>
      <div className="icon">
        <img className="icon-img" src={heart} />
        <p className="icon-text">Shop</p>
      </div>
      <div className="icon">
        <img className="icon-img" src={message} />
        <p className="icon-text">Conversation</p>
      </div>
      <div className="icon">
        <img className="icon-img" src={message1} />
        <p className="icon-text">Wallet</p>
      </div>
      <div className="icon">
        <img className="icon-img" src={favorite} />
        <p className="icon-text">Subscription</p>
      </div>
      <div className="icon">
        <img className="icon-img" src={profile} />
        <p className="icon-text">My Profile</p>
      </div>
      <div className="icon">
        <img className="icon-img" src={setting} />
        <p className="icon-text">Settings</p>
      </div>
      <div className="icon2">
        <img className="icon-img" src={logout} />
        <p className="icon-text">Log out</p>
      </div>
    </div>
  );
}

export default LeftCon;
