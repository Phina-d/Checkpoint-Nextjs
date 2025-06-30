"use client"; // Indique que ce composant utilise le rendu côté client (obligatoire avec App Router si on utilise des hooks ou certaines fonctionnalités du navigateur)

import React from "react";
import Image from "next/image"; // Composant optimisé pour les images dans Next.js
import Link from "next/link"; // Composant pour les liens internes avec optimisation de chargement

// Composant principal pour la page À propos
export default function About() {
  return (
    // Conteneur principal avec largeur maximale, marges, fond, coins arrondis et ombre
    <main className="max-w-4xl mx-auto p-6 mt-10 mb-20 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            {/* Section photo de profil centrée */}
      <div className="flex justify-center mb-6">
        <Image
          src="/profile.jpg"
          alt="Photo de profil"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg"
        />
      </div>

       {/* Titre principal */}
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-600 dark:text-blue-400">
        À propos de moi
      </h1>

      {/* Présentation en paragraphes */}
      <section className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        <p>
          Bonjour ! Je suis une développeuse passionnée spécialisée dans le développement web moderne. J&apos;aime créer des applications élégantes, performantes et accessibles.
        </p>
        <p>
          Débutante dans les technologies comme React, Next.js, et Tailwind CSS, j&apos;aime travailler sur des projets qui ont un vrai impact.
        </p>
        <p>
          En dehors du code, j&apos;aime apprendre de nouvelles technologies, contribuer à des projets open source, et partager mes connaissances avec la communauté.
        </p>
      </section>

       {/* Liste des compétences */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Compétences clés
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Développement frontend (React, Next.js, Tailwind CSS)</li>
          <li>JavaScript / TypeScript moderne</li>
          <li>Conception responsive et accessibilité</li>
          <li>Déploiement et optimisation des performances</li>
        </ul>
      </section>

      {/* Section contact avec lien vers la page Contact */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Me contacter
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          N&apos;hésitez pas à m&apos;envoyer un message via la page{" "}
          <Link href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
            Contact
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
