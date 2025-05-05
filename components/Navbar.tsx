'use client';

import { useState } from 'react';
import LanguageSwitcher from "../components/LanguageSwitcher"; // ajusta la ruta según tu estructura

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      {/* Logo / Marca */}
      <div className="text-xl font-bold">Rottomold</div>

      {/* Botón de hamburguesa (móvil) */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`h-1 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`h-1 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-1 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Links de navegación */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-center md:gap-4 absolute md:static bg-gray-900 md:bg-transparent left-0 w-full h-screen md:h-auto px-4 md:px-0 items-center justify-center md:justify-end text-center z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16' : 'top-[-100%]' // Ajuste del margen superior cuando se abre el menú
        }`}
      >
        <a href="#" className="py-4 md:py-0 block hover:text-gray-300 text-lg">Inicio</a>
        <a href="#" className="py-4 md:py-0 block hover:text-gray-300 text-lg">Proyecto</a>
        <a href="#" className="py-4 md:py-0 block hover:text-gray-300 text-lg">Contacto</a>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
