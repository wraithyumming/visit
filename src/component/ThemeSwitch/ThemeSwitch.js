import React, { useState, useEffect } from "react";
import "./ThemeSwitch.css";
import whiteSun from "../../assets/icons/sun.png";
import moonIcon from "../../assets/icons/moon.png";

const ThemeSwitch = () => {
  // Инициализируем тему из localStorage или используем light по умолчанию
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Применяем тему к body и сохраняем в localStorage
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