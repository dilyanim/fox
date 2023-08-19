import React, { useEffect, useState } from "react";
import imageGoogle from "../../../img/google.svg";
import imageFacebook from "../../../img/fasebook.svg";
import { AiOutlineEye, } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { setUser } from "../../../store/userSlice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isEmail":
          const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          reg.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
      }
    }
  }, [value]);
  useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, emailError]);
  return {
    isEmpty,
    minLengthError,
    emailError,
    setInputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const Register = () => {
  const name = useInput("", { isEmpty: true, minLength: 3 });
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 5 });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [emaill, setEmail] = useState("");
  const [passwordd, setPass] = useState("");
  const [namee, setName] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleRegister = (emaill, passwordd, namee) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emaill, passwordd, namee)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: user.displayName,
          })
        );
        Navigate("/");
      })
      .catch(console.error);
  };
  return (
    <div id="register">
      <div className="container">
        <div className="register">
          <div className="register--text">
            <h1>Регистрация</h1>
          </div>
          <div className="register--content">
            <div className="register--content__blockInp">
              <div className="register--content__blockInp--inp1">
                <h5>Имя</h5>
                {name.isDirty && name.isEmpty && (
                  <div style={{ color: "red" }}>
                    {" "}
                    Поле не может быть пустым!{" "}
                  </div>
                )}
                <input
                  onChange={(e) => {
                    name.onChange(e);
                    setName(e.target.value);
                  }}
                  onBlur={(e) => name.onBlur(e)}
                  type="text"
                  placeholder="Введите свое имя"
                  value={namee}
                />
              </div>
              <div className="register--content__blockInp--inp2">
                <h5>Почта</h5>
                {email.isDirty && email.isEmpty && (
                  <div style={{ color: "red" }}>
                    {" "}
                    Поле не может быть пустым!{" "}
                  </div>
                )}
                {email.isDirty && email.emailError && (
                  <div style={{ color: "red" }}> Не корректный email! </div>
                )}
                <input
                  onChange={(e) => {
                    email.onChange(e);
                    setEmail(e.target.value);
                  }}
                  onBlur={(e) => email.onBlur(e)}
                  type="text"
                  placeholder="Введите свое имя"
                  value={emaill}
                />
              </div>
              <div className="register--content__blockInp--inp3">
                <h5>Пароль*</h5>
                {password.isDirty && password.isEmpty && (
                  <div style={{ color: "red" }}>
                    {" "}
                    Поле не может быть пустым!{" "}
                  </div>
                )}
                {password.isDirty && password.minLengthError && (
                  <div style={{ color: "red" }}> Не корректная длинна </div>
                )}
                <div className="register--content__blockInp--inp3__inpPassword">
                  <input
                    onChange={(e) => {
                      password.onChange(e);
                      setPass(e.target.value);
                    }}
                    onBlur={(e) => password.onBlur(e)}
                    type="text"
                    placeholder="Введите свое имя"
                    value={passwordd}
                  />
                  <AiOutlineEyeInvisible
                    onClick={togglePasswordVisibility}
                    className="register--content__blockInp--inp3__inpPassword--icon"
                  />
                </div>
              </div>
            </div>
            <div className="register--content__checkbox">
              <input type="checkbox" />
              <h5>Согласен с Условиями</h5>
            </div>
            <button
              disabled={
                !name.inputValid || !email.inputValid || !password.inputValid
              }
              onClick={() => handleRegister(emaill, passwordd, namee)}
            >
              Регистрация
            </button>
            <div className="register--content__or">
              <div className="register--content__or--linea"></div>
              <h6>Или</h6>
              <div className="register--content__or--linea"></div>
            </div>
            <div className="register--content__googleAndFacebook">
              <div className="register--content__googleAndFacebook--google">
                <img src={imageGoogle} alt="" />
                <p>Google </p>
              </div>
              <div className="register--content__googleAndFacebook--facebook">
                <img src={imageFacebook} alt="" />
                <p>Fasebook </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
