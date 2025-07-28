import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../lib/translations';

/**
 * Navigation bar component.
 *
 * Displays links to the main pages of the site and a language toggle. On
 * mobile viewports a hamburger button is used to toggle the mobile menu.
 * Uses the language context and translation definitions to render labels
 * appropriately for the selected language.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const nav = translations[language].nav;

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            ALEXANDRE LEONARDO
          </Link>
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink
                to="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {nav.home}
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {nav.about}
              </NavLink>
              <NavLink
                to="/projects"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {nav.projects}
              </NavLink>
              <NavLink
                to="/framework"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {nav.framework}
              </NavLink>
              <NavLink
                to="/blog"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {nav.blog}
              </NavLink>
            </div>
          </div>
          {/* Desktop right actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
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
      {/* Mobile navigation */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white/90 backdrop-blur-sm border-b border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.home}
          </NavLink>
          <NavLink
            to="/about"
            className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.about}
          </NavLink>
          <NavLink
            to="/projects"
            className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.projects}
          </NavLink>
          <NavLink
            to="/framework"
            className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.framework}
          </NavLink>
          <NavLink
            to="/blog"
            className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.blog}
          </NavLink>
          {/* Language toggle in mobile menu */}
          <button
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            className="block w-full text-left text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </nav>
  );
}