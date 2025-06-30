import './globals.css'; // Import des styles globaux (fichier CSS commun à toute l’application)
import Navbar from '@/components/Navbar'; // Import de la barre de navigation
import Footer from '@/components/Footer'; // Import du pied de page
import { ReactNode } from 'react'; // Type pour les enfants React (nécessaire pour typer le `children`)

export const metadata = {
  title: 'Mon Portfolio', // Titre affiché dans l’onglet du navigateur
  description: 'Bienvenue sur mon portfolio Next.js', // Description utilisée par les moteurs de recherche
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar /> {/* Barre de navigation affichée en haut de toutes les pages */}
        <main className="flex-grow px-4 py-6 max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
