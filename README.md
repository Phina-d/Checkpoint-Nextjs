# Mon Portfolio - Next.js & Tailwind CSS
Bienvenue sur mon portfolio professionnel créé avec **Next.js** et **Tailwind CSS**.

## Description

Ce projet est un site web portfolio personnel créé avec Next.js et Tailwind CSS.  
Il met en valeur mes compétences, mes projets et mes coordonnées.  
Le site est responsive, avec un mode sombre, des animations, et intègre le routage côté serveur de Next.js.

## Fonctionnalités

- Pages : Accueil, À propos, Projets, Contact  
- Affichage de projets avec images, descriptions, technologies utilisées  
- Filtrage des projets par technologie  
- Pagination sur la liste des projets  
- Mode sombre (dark mode) avec toggle  
- Formulaire de contact stylisé  
- Animations à l’apparition (scroll) avec AOS  
- Responsive design avec Tailwind CSS  

## Technologies utilisées

- Next.js 15.x  
- React  
- Tailwind CSS  
- TypeScript   
- React Icons  

## Installation

npx create-next-app@latest mon-portfolio

## Déploiement
Le projet est prêt à être déployé sur Vercel 
https://checkpoint-nextjs-git-master-phina-ds-projects.vercel.app/

## Structure du projet
/src
├─ app/
│ ├─ page.tsx → Page d’accueil
│ ├─ about/page.tsx → Page À propos
│ ├─ projects/page.tsx → Projets
│ ├─ contact/page.tsx → Contact
├─ components/ → Navbar, Footer, DarkModeToggle
├─ images/ → Images des projets
└─ styles/
└─ globals.css

## Personnalisation
Modifier les projets dans /src/app/projects/page.tsx

Modifier les compétences dans /src/app/about/page.tsx

Modifier les styles Tailwind dans tailwind.config.js

## Contribution
Les contributions sont les bienvenues !
