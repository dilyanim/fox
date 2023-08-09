import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai';
// import logo from '../../img/Logo.png'

const Header = () => {
    return (
        <div id='header'>
            <div className='container'>
                <div className="header">
                    <div className='header_logo' ><NavLink>Logo</NavLink></div>
                    <div className="header-nav">
                        <NavLink>Главная</NavLink>
                        <NavLink>О нас</NavLink>
                        <NavLink>Курсы</NavLink>
                        <NavLink>Контакты</NavLink>
                    </div>
                  
                    <div className='header-arrow'>
                        <NavLink>Войти</NavLink>
                        <button className='btn' >Присоединяйся <AiOutlineArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;