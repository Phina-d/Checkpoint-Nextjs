/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // Liste des fichiers que Tailwind doit analyser pour générer uniquement les classes utilisées (purge CSS)
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Tous les fichiers dans /src/app (App Router)
    './src/pages/**/*.{js,ts,jsx,tsx}', // Tous les fichiers dans /src/pages
    './src/components/**/*.{js,ts,jsx,tsx}', // Tous les composants réutilisables
  ],
  // Extension de la configuration de base du thème Tailwind (couleurs, polices, animations, etc.)
  theme: { extend: {} },
  plugins: [],
};
