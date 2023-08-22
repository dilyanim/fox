import React, { useEffect, useState } from "react";
import imgProf from "../../../img/profileUser.png";
import AvatarUser from "../../../img/AvatarUser.png";
import Curs from "../MyCurs/MyCurs";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserImage,
  updateName,
} from "../../../store/userSlice/userSlice";
const ProfileUser = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("Curs");

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const dispatch = useDispatch();
  const userImage = useSelector((state) => state.user.userImage);
  const userName = useSelector((state) => state.user.name);
  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
      dispatch(updateUserImage(storedImage));
    }
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateUserImage(reader.result));
        localStorage.setItem("userImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
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
                {userImage ? (
                  <img
                    className="user--blocks__block1--userInfo__imgAva"
                    src={userImage}
                    alt=""
                  />
                ) : (
                  <>
                    <img src={AvatarUser} alt="" />
                  </>
                )}

                <div className="user--blocks__block1--userInfo__name">
                  {isEditing ? (
                    <input type="text" value={userName} />
                  ) : (
                    <h1>{userName}</h1>
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
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "block" }}
                    />
                    <input value={userName} type="text" placeholder="Name" />
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
