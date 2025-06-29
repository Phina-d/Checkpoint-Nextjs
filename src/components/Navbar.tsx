"use client";

import { useState } from "react";
import Link from "next/link"; // <-- Import de Link
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mon Portfolio</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`flex-col sm:flex-row sm:flex space-y-4 sm:space-y-0 sm:space-x-6 items-center absolute sm:static top-full left-0 right-0 bg-white dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent p-4 sm:p-0 transition-transform duration-300 ease-in-out
          ${isOpen ? "flex" : "hidden sm:flex"}`}
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            Accueil
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            À propos
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            Projets
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            Contact
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
