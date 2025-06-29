"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu pourrais envoyer les données à une API ou un service d'email
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10 mb-20">
      <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
        Contactez-moi
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Vous avez un projet ou une question ? Envoyez-moi un message !
      </p>

      {submitted ? (
        <p className="text-green-500 text-center font-semibold">
          Merci pour votre message ! Je vous répondrai bientôt.
        </p>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Champs du formulaire identiques */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Nom
            </label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Votre message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
              required
            />
          </div>

         <button
  type="submit"
  className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition transform hover:scale-105 duration-200"
>
  Envoyer
</button>
        </form>
      )}
    </div>
  );
}
