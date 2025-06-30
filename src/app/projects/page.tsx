'use client'; // Directive obligatoire dans Next.js App Router pour activer le rendu côté client (useState, etc.)

import { useState } from 'react'; // Hook React pour gérer l'état local
import Image from 'next/image';  // Composant Image optimisé de Next.js
import { motion } from 'framer-motion'; // Bibliothèque pour les animations

// Liste des projets à afficher
const projects = [
  {
    title: 'Portfolio Développeur',
    description: 'Un portfolio pour présenter mes projets et compétences.',
    image: '/images/portfolio.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'React'],
    github: 'https://github.com/Phina-d/Checkpoint-Nextjs.git',
    demo: ' https://checkpoint-nextjs-git-master-phina-ds-projects.vercel.app/',
  },
  {
    title: 'Bootstrap Galerie',
    description: 'Site vitrine responsive utilisant Bootstrap.',
    image: '/images/recettes.jpg',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Manipulation du DOM',
    description: 'Projet JavaScript pur sur les événements et le DOM.',
    image: '/images/dom-project.jpg',
    technologies: ['JavaScript', 'DOM'],
  },
  {
    title: 'Accessoires React',
    description: 'Transmission de props et composants enfants.',
    image: '/images/mbappe.jpg',
    technologies: ['React'],
  },
  {
    title: "Gestion d'état React",
    description: 'useState et useEffect avec composants dynamiques.',
    image: '/images/victor-hugo.jpg',
    technologies: ['React'],
  },
  {
    title: 'Application ToDo',
    description: 'Une application pour gérer les tâches quotidiennes.',
    image: '/images/todo-app.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
];

// Extraction unique de toutes les technologies utilisées dans les projets
const allTechnologies = Array.from(
  new Set(projects.flatMap(p => p.technologies || []))
);

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3; // Nombre de projets à afficher par page

  // Filtrage des projets selon la technologie sélectionnée (ou tous si aucun filtre)
  const filteredProjects = selectedTech
    ? projects.filter(p => p.technologies?.includes(selectedTech))
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
        Mes Projets
      </h1>

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {allTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => {
              setSelectedTech(tech === selectedTech ? null : tech);
              setCurrentPage(1); // Revenir à la première page lors du filtrage
            }}
            className={`px-4 py-1 text-sm rounded-full border transition-all ${
              selectedTech === tech
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:scale-[1.02]"
          >
            {/* Image du projet */}
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>

            {/* Technologies utilisées */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

         {/* Liens vers GitHub et démo */}
              <div className="flex gap-4 mt-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    🔗 Code source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline dark:text-green-400"
                  >
                    🌐 Démo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
          >
            ◀ Précédent
          </button>
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
          >
            Suivant ▶
          </button>
        </div>
      )}
    </section>
  );
}