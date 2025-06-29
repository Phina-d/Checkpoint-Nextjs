"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-600 dark:text-blue-400">
          Bienvenue sur mon portfolio
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Découvrez mes projets récents, mes compétences et mes expériences en développement web. 
          Je crée des applications performantes, accessibles et modernes.
        </p>
        <Link href="/projects" passHref>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Voir mes projets
          </button>
        </Link>
      </section>

      <section className="mt-20 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600 dark:text-blue-400">
          Aperçu des projets
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Projet A</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une application web responsive utilisant React et Next.js.
            </p>
            <Link href="/projects#projet-a" className="text-blue-600 hover:underline dark:text-blue-400">
              En savoir plus →
            </Link>
          </article>

          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Projet B</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un site e-commerce développé avec Tailwind CSS et API REST.
            </p>
            <Link href="/projects#projet-b" className="text-blue-600 hover:underline dark:text-blue-400">
              En savoir plus →
            </Link>
          </article>

          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Projet C</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Une application mobile cross-platform avec React Native.
            </p>
            <Link href="/projects#projet-c" className="text-blue-600 hover:underline dark:text-blue-400">
              En savoir plus →
            </Link>
          </article>
        </div>
      </section>

      {/* Section compétences */}
      <section className="mt-20 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600 dark:text-blue-400">
          Compétences
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-bold mb-2">React.js</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Composants, Hooks, Router</p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Next.js</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">SSR, SSG, API Routes</p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Styles modernes, Responsive</p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-bold mb-2">TypeScript</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Typage statique, Interfaces</p>
          </div>
        </div>
      </section>
      <section className="mt-20 w-full max-w-3xl">
  <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600 dark:text-blue-400">
    Expériences
  </h2>
  <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6">
    {/* Expérience 1 */}
    <div className="mb-10">
      <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
      <h3 className="text-xl font-bold">Développeur Frontend - Freelance</h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">2024 - Aujourd’hui</span>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Création d’interfaces web modernes et responsives avec React, Next.js et Tailwind CSS.
      </p>
    </div>

    {/* Expérience 2 */}
    <div className="mb-10">
      <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
      <h3 className="text-xl font-bold">Stagiaire Développeur Web - GOMYCODE</h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">Janv. 2024 - Juin 2024</span>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Participation à la création d’un projet MERN Stack, intégration d’API REST et gestion du state avec Redux.
      </p>
    </div>

    {/* Expérience 3 */}
    <div>
      <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
      <h3 className="text-xl font-bold">Formation Développement Web - GOMYCODE</h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">2023 - 2024</span>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Apprentissage approfondi de HTML, CSS, JavaScript, React.js, Node.js et MongoDB.
      </p>
    </div>
  </div>
</section>

    </main>
  );
}
