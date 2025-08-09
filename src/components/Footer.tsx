import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../lib/translations";

/**
 * Footer component.
 *
 * Displays copyright information and simple links to contact and LinkedIn.
 * The link labels are translated according to the current language context.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="w-full border-t mt-8 p-4 flex flex-col items-center justify-center text-center dark:border-gray-700 dark:bg-gray-900">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {year} Alexandre Leonardo. Todos os direitos reservados.
      </p>
      <div className="mt-2 space-x-4">
            {/* Contact link points to the contact page instead of a mailto link */}
            <Link
              to="/contact"
              className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              {t.contact}
            </Link>
            <a
              href="https://www.linkedin.com/in/alexandre-leonardo-976830151"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              {t.linkedin}
            </a>
            {/* Removed GitHub link as requested */}
      </div>
    </footer>
  );
}