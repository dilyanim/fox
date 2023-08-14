import React, { useState } from "react";
import image from "../../img/reg.png";
import imageGoogle from "../../img/google.svg";
import imageFacebook from "../../img/fasebook.svg";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form } from "../reg/Form";
import { setUser } from "../../store/userSlice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Reg = () => {
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    "";
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <div id="reg">
      <div className="container">
        <div className="reg">
          <img src={image} alt="img" />
          <div className="reg--content">
            <NavLink to={"/"}>
              <RxCross2
                style={{
                  cursor: "pointer",
                  marginTop: "80px",
                  marginBottom: "20px",
                  fontSize: "40px",
                  marginLeft: "550px",
                }}
              />
            </NavLink>
            <div className="reg--content__welcome">
              <h1>Добро пожаловать</h1>
            </div>
            <div className="reg--content__inp">
              <input
                className="reg--content__inp--input1"
                type="text"
                placeholder="Почта"
              />
              <input
                className="reg--content__inp--input2"
                type="password"
                placeholder="Пароль "
              />
              <NavLink to={"/zapylParol"}>
                <p> Забыли пароль?</p>
              </NavLink>
              <button>Ввойти</button>
              <h5>
                У вас нет аккаунта?{" "}
                <NavLink to={"/register"}>
                  <span>Зарегистрироваться</span>
                </NavLink>
              </h5>
              <div className="reg--content__inp--gAndf">
                <div className="reg--content__inp--gAndf__linea"></div>
                <h6>Или</h6>
                <div className="reg--content__inp--gAndf__linea"></div>
              </div>
              <div className="reg--content__inp--googleAndFasebook">
                <div className="reg--content__inp--googleAndFasebook__google">
                  <img src={imageGoogle} alt="img" />
                  <h3>Google </h3>
                </div>
                <div className="reg--content__inp--googleAndFasebook__fasebook">
                  <img src={imageFacebook} alt="img" />
                  <h3>Fasebook </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
