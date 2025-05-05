import { useLayoutEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light'); // Встановлюємо 'light' як значення за замовчуванням

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;