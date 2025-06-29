"use client"; // Indique que ce composant s'exécute côté client (Next.js App Router)

import { useState } from "react";

export default function Contact() {
  // État local pour gérer si le message a été soumis ou non
  const [submitted, setSubmitted] = useState(false);

  // Fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // ✅ Ici, on pourrait envoyer les données vers une API ou un service email (ex: EmailJS)

    // Affiche le message de remerciement
    setSubmitted(true);

    // Cache le message de remerciement après 5 secondes (optionnel)
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10 mb-20">
      {/* Titre du formulaire */}
      <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
        Contactez-moi
      </h2>

      {/* Sous-titre du formulaire */}
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Vous avez un projet ou une question ? Envoyez-moi un message !
      </p>

      {/* Affiche un message de succès si le formulaire est soumis */}
      {submitted ? (
        <p className="text-green-500 text-center font-semibold animate-pulse">
          ✅ Merci pour votre message ! Je vous répondrai bientôt.
        </p>
      ) : (
        // Formulaire
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Champ : Nom */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Nom
            </label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Champ : Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Champ : Téléphone */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Ex: +221 77 123 45 67"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              pattern="^\+?\d{6,15}$" // Optionnel : validation simple du numéro
            />
          </div>

          {/* Champ : Objet */}
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Objet
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Sujet de votre message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Champ : Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Votre message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold 
            hover:bg-blue-700 transition transform hover:scale-105 duration-200"
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}
