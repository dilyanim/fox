import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAuth } from "../../hooks/use-auth";
import imgAva from "../../img/AvatarUser.png";





const Header = () => {
  const { isAuth, name } = useAuth();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <NavLink to={"/"}>Logo</NavLink>
          </div>
          <div className="header-nav">
            <NavLink to={"/"}> Главная</NavLink>
            <NavLink to={"/aboutUs"}> О нас</NavLink>
            <NavLink to={"/aboutCourse"}>Курсы</NavLink>
            <NavLink>Контакты</NavLink>
          
          </div>
          <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
       
    <ul class="menu__box">
      <NavLink  to={"/"} className="menu__item" href="#">Главная</NavLink>
			<NavLink  to={"/aboutUs"} className="menu__item" href="#"> О нас</NavLink>
			<NavLink  to={"/aboutCourse"} className="menu__item" href="#">Курсы</NavLink>
			<NavLink className="menu__item" href="#">Контакты</NavLink>
      <div className="header-burger">
            {isAuth ? (
              <NavLink to={"/profile"}>
                <img
                  src={imgAva}
                  alt=""
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "160px",
                  }}
                />
              </NavLink>
            ) : (
              <>
                <NavLink to={"/reg"}>Войти</NavLink>
                <NavLink to={"/register"}>
                  <button className="btn-burger">
                    Присоединяйся <AiOutlineArrowRight />
                  </button>
                </NavLink>
              </>
            )}
          </div>
    </ul>
  
  </div>

          <div className="header-arrow">
            {isAuth ? (
              <NavLink to={"/profile"}>
                <img
                  src={imgAva}
                  alt=""
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "160px",
                  }}
                />
              </NavLink>
            ) : (
              <>
                <NavLink to={"/reg"}>Войти</NavLink>
                <NavLink to={"/register"}>
                  <button className="btn">
                    Присоединяйся <AiOutlineArrowRight />
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
