// components/Navbar.tsx
'use client';

import { useState } from 'react';

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
        <span className={`h-1 w-6 bg-white transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`h-1 w-6 bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-1 w-6 bg-white transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Links de navegación */}
      <div className={`flex-col md:flex md:flex-row md:items-center md:gap-6 absolute md:static bg-gray-900 md:bg-transparent left-0 w-full md:w-auto px-4 md:px-0 ${isOpen ? 'top-14 flex' : 'hidden md:flex'}`}>
        <a href="#" className="py-2 md:py-0 block hover:text-gray-300">Inicio</a>
        <a href="#" className="py-2 md:py-0 block hover:text-gray-300">Proyecto</a>
        <a href="#" className="py-2 md:py-0 block hover:text-gray-300">Contacto</a>
        <button className="py-2 md:py-0 px-3 bg-blue-600 hover:bg-blue-700 rounded text-white">
          Cambiar idioma
        </button>
      </div>
    </nav>
  );
}
