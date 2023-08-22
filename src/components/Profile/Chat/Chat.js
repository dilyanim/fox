import React from "react";
import imgFriendsGroup from "../../../img/chatGroupFriends 2.svg";
import imgOdnogrup from "../../../img/chatImg.svg";
import imgChatGirls from "../../../img/chatGirlsGr.svg";
import imgBeka from "../../../img/beka.svg";
import imgIra from "../../../img/chatIra.svg";
import imgAza from "../../../img/chatAzamat.svg";
import imgBegimai from "../../../img/chatBegimai.svg";
import { GrPhone } from "react-icons/gr";
import { PiVideoCameraFill } from "react-icons/pi";
import img3cir from "../../../img/chat3circle.svg";
import imgMassage1 from "../../../img/chatHelloImg.png";
import imgMassage2 from "../../../img/chatHello2Img.png";
import imgMassage3 from "../../../img/chatHowAreYouImg.png";
import imgMassage4 from "../../../img/chatGoodImg.png";
import imgXZ from "../../../img/fluent_channel-share-16-filled.png";
import imgEmoji from "../../../img/bi_emoji-laughing.png";
import imgCamera from "../../../img/cmeraChat.png";
import { MdOutlineKeyboardVoice } from "react-icons/md";
const Chat = () => {
  return (
    <div id="chat">
      <div className="container">
        <div className="chat">
          <div className="chat--group">
            <div className="chat--group__friends">
              <img src={imgFriendsGroup} alt="img" />
              <div className="chat--group__friends--text">
                <h1>Друзья навеки</h1>
                <p>Привет ребята!</p>
              </div>
              <h6>Сегодня, 15:25</h6>
            </div>
            <div className="chat--group__odnodrupniki">
              <img src={imgOdnogrup} alt="img" />
              <div className="chat--group__odnodrupniki--text">
                <h1>Однокурссники</h1>
                <p>Рад видеть вас</p>
              </div>
              <h6>Вчера, 12:55pm</h6>
            </div>
            <div className="chat--group__girls">
              <img src={imgChatGirls} alt="img" />
              <div className="chat--group__girls--text">
                <h1>Девчонки</h1>
                <p>какие планы на сегодня</p>
              </div>
              <h6>Сегодня, 9:22</h6>
            </div>
            <div className="chat--group__beka">
              <img src={imgBeka} alt="img" />
              <div className="chat--group__beka--text">
                <h1>Бека</h1>
                <p>Где ты?</p>
              </div>
              <h6> Сегодня, 8:56</h6>
            </div>
            <div className="chat--group__Ira">
              <img src={imgIra} alt="img" />
              <div className="chat--group__Ira--text">
                <h1>Ира</h1>
                <p>Хорошо!</p>
              </div>
              <h6>Сегодня, 2:31</h6>
            </div>
            <div className="chat--group__azamat">
              <img src={imgAza} alt="img" />
              <div className="chat--group__azamat--text">
                <h1>Азамат</h1>
                <p>Привет</p>
              </div>
              <h6>Вчера, 16:22</h6>
            </div>
            <div className="chat--group__begimai">
              <img src={imgBegimai} alt="img" />
              <div className="chat--group__begimai--text">
                <h1>Бегимай</h1>
                <p>я приеду сегодня</p>
              </div>
              <h6>Вчера, 12:22</h6>
            </div>
          </div>
          <div className="chat--ira">
            <div className="chat--ira__prof">
              <img src={imgIra} alt="img" />
              <div className="chat--ira__prof--text">
                <h1>Ира</h1>
                <p>В сети</p>
              </div>
              <p className="chat--ira__prof--phoneIcon">
                <GrPhone />
              </p>
              <p className="chat--ira__prof--cameraIcon">
                <PiVideoCameraFill />
              </p>
              <img
                className="chat--ira__prof--3cirImg"
                src={img3cir}
                alt="img"
              />
            </div>
            <div className="chat--ira__message">
              <img
                className="chat--ira__message--hello1"
                src={imgMassage1}
                alt=""
              />
              <img
                className="chat--ira__message--howAreYou"
                src={imgMassage2}
                alt=""
              />
              <img
                className="chat--ira__message--hello2"
                src={imgMassage3}
                alt=""
              />
              <img
                className="chat--ira__message--good"
                src={imgMassage4}
                alt=""
              />
            </div>
            <div className="chat-ira__getMessage">
              <div className="chat--ira__getMessage--vot">
                <img src={imgXZ} alt="img" />
                <div className="chat--ira__getMessage--vot__vot2">
                  <img src={imgEmoji} alt="img" />
                  <img src={imgCamera} alt="img" />
                </div>
              </div>
              <div className="chat-ira__getMessage--voice">
                <p>
                  <MdOutlineKeyboardVoice />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
