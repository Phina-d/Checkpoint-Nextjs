'use client'; // Indique que ce composant est exécuté côté client (nécessaire pour utiliser localStorage, useState, etc.)

import { useEffect, useState } from 'react'; // Hooks React
import { FaMoon, FaSun } from 'react-icons/fa'; // Icônes pour clair/sombre (react-icons)

// Composant pour activer/désactiver le mode sombre
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);// État : thème sombre actif ou non

  // useEffect : exécution au chargement du composant (équivalent componentDidMount)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); // Vérifie si un thème est déjà enregistré
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Vérifie la préférence système
    // Applique le thème sombre si enregistré ou si l'utilisateur préfère le sombre
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark'); // Ajoute la classe 'dark' à <html>
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
      html.classList.remove('dark'); // Passe en mode clair
      localStorage.setItem('theme', 'light'); // Sauvegarde le choix
      setIsDark(false);
    } else {
      html.classList.add('dark');  // Passe en mode sombre
      localStorage.setItem('theme', 'dark'); // Sauvegarde le choix
      setIsDark(true);
    }
  };

  return (
    // Bouton pour changer le thème (avec icône et texte)
    <button
      onClick={toggleTheme}
      aria-label="Changer le thème"
      className="flex items-center space-x-2 text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {/* Icône dynamique selon le thème actuel */}
      {isDark ? <FaSun /> : <FaMoon />}
      <span className="text-sm">{isDark ? 'Clair' : 'Sombre'}</span>
    </button>
  );
}
