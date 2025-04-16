import React from "react";
import "./Header.css";

const Header = () => (
  <div className="menu">
    <a href="#">Обо мне</a>
    <a href="#">Услуги</a>
    <a href="#">Портфолио</a>
    <a href="#">Отзывы</a>
    <a href="#">Гарантии</a>

    <button className="btn">Связаться</button>
  </div>
);

export default Header;
