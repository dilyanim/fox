import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Redirect } from "react-router-dom";
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
            <NavLink to={"/aboutCourse"}>Курсы</NavLink>
            <NavLink>Контакты</NavLink>
          </div>

          <div className="header-arrow">
            <NavLink to={"/log"}>Войти</NavLink>
            <NavLink to={"/regis"}>
              <button className="btn">
                Присоединяйся <AiOutlineArrowRight />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
