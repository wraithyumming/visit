import React from "react";
import "./Header.css";
import tgIcon from '../../assets/icons/tg50.png';
import instIcon from '../../assets/icons/inst48.png';
import whiteSun from '../../assets/icons/sun.png'
import moonIcon from '../../assets/icons/moon.png'

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
      <button className="btn">Связаться</button>
      <a href="https://t.me/deuceich" target="_blank">
        <img src={tgIcon} alt="Telegram" className="icon" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src={instIcon} alt="Instagram" className="icon" />
      </a>
    </div>

    <div className="switch">
        <img src={whiteSun} alt="White theme" className="light" />
        <img src={moonIcon} alt="Black theme" className="black" />
    </div>


  </div>
);

export default Header;
