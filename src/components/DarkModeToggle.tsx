'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  // État local pour savoir si le thème actuel est sombre
  const [isDark, setIsDark] = useState(false);

  // Au chargement initial, on applique le thème en fonction des préférences ou du localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer le thème"
      className="flex items-center space-x-2 text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isDark ? <FaSun /> : <FaMoon />}
      <span className="text-sm">{isDark ? 'Clair' : 'Sombre'}</span>
    </button>
  );
}
