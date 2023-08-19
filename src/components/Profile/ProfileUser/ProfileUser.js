import React, { useState } from "react";
import imgProf from "../../../img/profileUser.png";
import imgAvatar from "../../../img/AvatarUser.png";

const ProfileUser = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div id="user">
      <div className="container">
        <div className="user">
          <div className="user--blocks">
            <div className="user--blocks__block1">
              <img
                className="user--blocks__block1--imgProf"
                src={imgProf}
                alt="img"
              />
              <div className="user--blocks__block1--userInfo">
                <img
                  className="user--blocks__block1--userInfo__imgAva"
                  src={imgAvatar}
                  alt="img"
                />
                <div className="user--blocks__block1--userInfo__name">
                  <h1>Name</h1>
                  <p>Студент</p>
                </div>
                <button
                  className="user--blocks__block1--userInfo__btn"
                  onClick={handleEditClick}
                >
                  Редактировать
                </button>
              </div>
              {isEditing && (
                <div className="user--blocks__block1--redac">
                  <div className="user--blocks__block1--redac__input">
                    <input type="file" />
                    <input type="text" placeholder="Name" />
                  </div>
                  <button className="user--blocks__block1--redac__btnSave">
                    Сохранить
                  </button>
                </div>
              )}
            </div>
            <div className="user--blocks__block2">
              <div className="user--blocks__block2--btns">
                <button className="user--blocks__block2--btns__btn1">
                  Мои курсы
                </button>
                <button className="user--blocks__block2--btns__btn2">
                  Избранные
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileUser;
