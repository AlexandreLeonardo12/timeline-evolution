import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            ALEXANDRE LEONARDO
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</NavLink>
              <NavLink to="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Sobre</NavLink>
              <NavLink to="/projects" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Projetos</NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Additional nav items or CTA can go here */}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation">
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white/90 backdrop-blur-sm border-b border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Sobre</NavLink>
          <NavLink to="/projects" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Projetos</NavLink>
        </div>
      </div>
    </nav>
  );
}
