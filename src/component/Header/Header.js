import React from "react";
import "./Header.css";
import tgIcon from '../Header/assets/tg50.png';
import instIcon from '../Header/assets/inst48.png';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'
import ModalWindowComponent from './ModalWindow/ModalWindowComponent'
import ModalWindowVisible from "./ModalWindow/ModalWindowVisible";


const Header = () => (
  <div className="menu">
    <div className="menu-links">
    <a href="/about">О нас</a>
      <a href="/services">Услуги</a>
      <a href="/portfolio">Портфолио</a>
      <a href="/reviews">Отзывы</a>
      <a href="/guarantees">Гарантии</a>
    </div>

    <ModalWindowComponent />
    <ModalWindowVisible />

    <div className="menu-actions">


      <a href="https://t.me/deuceich" target="_blank" rel="noopener noreferrer">
        <img src={tgIcon} alt="Telegram" className="icons" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src={instIcon} alt="Instagram" className="icons" />
      </a>
      <ThemeSwitch />
    </div>

  </div>
);

export default Header;
