import Image from 'next/image';

const projects = [
  {
    title: 'Application ToDo',
    description: 'Une application pour gérer vos tâches quotidiennes.',
    image: '/images/todo-app.jpg',
  },
  {
    title: 'Site de Recettes',
    description: 'Découvrez et partagez vos recettes préférées.',
    image: '/images/recettes.jpg',
  },
  {
    title: 'Portfolio Développeur',
    description: 'Un portfolio pour présenter mes projets et compétences.',
    image: '/images/portfolio.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
        Mes Projets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:scale-105"
          >
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
