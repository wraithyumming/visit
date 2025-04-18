import React, {useState} from "react";
import "./Header.css";
import tgIcon from '../Header/assets/tg50.png';
import instIcon from '../Header/assets/inst48.png';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'
import ModalWindowComponent from './ModalWindow/ModalWindowComponent'

const Header = () => (
  <div className="menu">
    <div className="menu-links">
      <a href="#">Обо мне</a>
      <a href="#">Услуги</a>
      <a href="#">Портфолио</a>
      <a href="#">Отзывы</a>
      <a href="#">Гарантии</a>
    </div>

    <div className="menu-actions">
      <ModalWindowComponent />
     
      <a href="https://t.me/deuceich" target="_blank">
        <img src={tgIcon} alt="Telegram" className="icons" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src={instIcon} alt="Instagram" className="icons" />
      </a>
      <ThemeSwitch />
    </div>

  </div>
);

export default Header;
