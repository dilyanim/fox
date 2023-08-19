import React from "react";
import { useState } from "react";
import imgUser from "../../img/user.svg";
import imgChat from "../../img/chat.svg";
import imgSms from "../../img/sms.svg";
import imgStar from "../../img/magic-star.svg";
import imgSetting from "../../img/setting-2.svg";
import imgQuestion from "../../img/Question.svg";
import imgSingOut from "../../img/SignOut.svg";
import ProfileUser from "./ProfileUser/ProfileUser";
const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div id="profile">
      <div className="container">
        <div className="profile">
          <div className="profile--nav">
            <div className={`profile--nav__prof ${
                activeSection === "profile" ? "active" : ""
              }`} 
              onClick={() => handleSectionClick("profile")}
              >
              <img
                className="profile--nav__prof--imgUser"
                src={imgUser}
                alt="img"
              />
              <p>Профиль</p>
            </div>
            <div className="profile--nav__chat">
              <img
                className="profile--nav__chat--imgChat"
                src={imgChat}
                alt="img"
              />
              <p>Чат</p>
            </div>
            <div className="profile--nav__kurs">
              <img
                className="profile--nav__kurs--imgKurs"
                src={imgSms}
                alt=""
              />
              <p>Курсы</p>
            </div>
            <div className="profile--nav__status">
              <img
                className="profile--nav__status--imgStatus"
                src={imgStar}
                alt=""
              />
              <p>Оценить</p>
            </div>
            <div className="profile--nav__privacy">
              <img
                className="profile--nav__privacy--imgSetting"
                src={imgSetting}
                alt=""
              />
              <p>Оценить</p>
            </div>
            <div className="profile--nav__help">
              <img
                className="profile--nav__help--imgQues"
                src={imgQuestion}
                alt=""
              />
              <p>Помощь</p>
            </div>
            <div className="profile--nav__exit">
              <img
                className="profile--nav__exit--imgSignOut"
                src={imgSingOut}
                alt=""
              />
              <p>Выйти</p>
            </div>
          </div>
          <div className="profile--block1">
          {activeSection === "profile" && <ProfileUser />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
