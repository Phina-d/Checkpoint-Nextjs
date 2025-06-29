import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400 transition">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>© 2025 Mon Portfolio. Tous droits réservés.</p>
    </footer>
  );
}
