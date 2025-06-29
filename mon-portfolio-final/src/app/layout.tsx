import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DarkModeToggle from '@/components/DarkModeToggle';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Bienvenue sur mon portfolio Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar>
          {/* Si Navbar reçoit des enfants, sinon passe DarkModeToggle dans Navbar directement */}
          <DarkModeToggle />
        </Navbar>
        <main className="flex-grow px-4 py-6 max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
