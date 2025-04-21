import React, { useState, useEffect } from "react";
import "./ThemeSwitch.css";
import whiteSun from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
    
    // Также можно добавить/удалить класс для всего документа
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`switch ${theme}`} onClick={toggleTheme}>
      <img
        src={whiteSun}
        alt="Light theme"
        className={`icon sun ${theme === "light" ? "active" : ""}`}
      />
      <img
        src={moonIcon}
        alt="Dark theme"
        className={`icon moon ${theme === "dark" ? "active" : ""}`}
      />
    </div>
  );
};

export default ThemeSwitch;