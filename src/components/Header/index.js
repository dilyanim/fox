import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <NavLink>Logo</NavLink>
          </div>
          <div className="header-nav">
            <NavLink to={"/"}> Главная</NavLink>
            <NavLink to={"/aboutUs"}> О нас</NavLink>
            <NavLink>Курсы</NavLink>
            <NavLink>Контакты</NavLink>
          </div>

          <div className="header-arrow">
            <NavLink>Войти</NavLink>
            <button className="btn">
              Присоединяйся <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
