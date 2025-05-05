'use client';

import { useState } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'es', label: 'ES', flag: '/flags/es.svg' },
  { code: 'en', label: 'EN', flag: '/flags/gb.svg' },
  { code: 'fr', label: 'FR', flag: '/flags/fr.svg' },
  { code: 'de', label: 'DE', flag: '/flags/de.svg' },
  { code: 'it', label: 'IT', flag: '/flags/it.svg' },
  { code: 'jp', label: 'JP', flag: '/flags/jp.svg' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]); // idioma por defecto: español

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Aquí más adelante se integrará el cambio real de idioma
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botón visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 hover:bg-gray-800 rounded"
      >
        <Image src={currentLang.flag} alt={currentLang.label} width={20} height={20} />
        <span className="text-sm">{currentLang.code.toUpperCase()}</span>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-28 bg-white text-black rounded shadow-lg overflow-hidden">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className="flex items-center w-full px-2 py-2 hover:bg-gray-100 gap-2"
            >
              <Image src={lang.flag} alt={lang.label} width={20} height={20} />
              <span className="text-sm">{lang.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
