import React, { useState } from "react";
import imgProf from "../../../img/profileUser.png";
import imgAvatar from "../../../img/AvatarUser.png";
import Curs from "../MyCurs/MyCurs";

const ProfileUser = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("Curs");
  const [name, setName] = useState("Имя пользователя"); //! Имя пользователя
  const [selectedImage, setSelectedImage] = useState(null);
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleSaveClick = () => {
  
    setIsEditing(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
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
                  {isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <h1>{name}</h1>
                  )}
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
                  <button
                    onClick={handleSaveClick}
                    className="user--blocks__block1--redac__btnSave"
                  >
                    Сохранить
                  </button>
                </div>
              )}
            </div>
            <div className="user--blocks__block2">
              <div className="user--blocks__block2--btns">
                
                <button
                  className={`user--blocks__block2--btns__btn1 ${
                    activeTab === "Curs" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Curs")}
                >
                  Мои курсы
                </button>
                <button
                  className={`user--blocks__block2--btns__btn2 ${
                    activeTab === "Favorites" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Favorites")}
                >
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
