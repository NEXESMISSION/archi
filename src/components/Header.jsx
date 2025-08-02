import React, { useState } from 'react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="border-b border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
             <h1 className="text-2xl font-medium tracking-widest uppercase">Archios</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors duration-300">Accueil</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors duration-300">Projets</button>
            <button onClick={() => scrollToSection('dream-building')} className="text-gray-400 hover:text-white transition-colors duration-300">Services</button>
            <button onClick={() => scrollToSection('cta')} className="text-gray-400 hover:text-white transition-colors duration-300">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-gray-800/50">
          <div className="px-2 pt-4 pb-3 space-y-2 sm:px-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900">Accueil</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900">Projets</button>
            <button onClick={() => scrollToSection('dream-building')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900">Services</button>
            <button onClick={() => scrollToSection('cta')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 