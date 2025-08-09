import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
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
  const { theme, toggleTheme } = useTheme();
  const nav = translations[language].nav;

  return (
    <nav
      aria-label="Main navigation"
      // Use design tokens for navbar colors and borders
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-foreground">
            ALEXANDRE LEONARDO
          </Link>
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink
                to="/"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {nav.home}
              </NavLink>
              <NavLink
                to="/about"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {nav.about}
              </NavLink>
              <NavLink
                to="/projects"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {nav.projects}
              </NavLink>
              {/* Links para Framework e Blog removidos temporariamente */}
            </div>
          </div>
          {/* Desktop right actions */}
          <div className="hidden md:flex items-center space-x-4">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              >
                {theme === 'dark' ? (
                  // Sun icon for light mode
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m9-11h-2m-14 0H1m16.95-7.95l-1.414 1.414M5.343 18.657l-1.414 1.414m14.95 0l-1.414-1.414M5.343 5.343L3.929 3.929" />
                  </svg>
                ) : (
                  // Moon icon for dark mode
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
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
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-background/90 backdrop-blur-sm border-b border-border`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className="block text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.home}
          </NavLink>
          <NavLink
            to="/about"
            className="block text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.about}
          </NavLink>
          <NavLink
            to="/projects"
            className="block text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.projects}
          </NavLink>
          {/* Links para Framework e Blog removidos temporariamente no menu móvel */}
          {/* Language toggle in mobile menu */}
          <button
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            className="block w-full text-left text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
            {/* Theme toggle in mobile menu */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? '☀︎' : '☾'}
            </button>
        </div>
      </div>
    </nav>
  );
}