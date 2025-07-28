import React from "react";



export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t mt-8 p-4 flex flex-col items-center justify-center text-center dark:border-gray-700 dark:bg-gray-900">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {year} Alexandre Leonardo. Todos os direitos reservados.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="mailto:contact@alexandreleonardo.pt"
          className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
          Contacto
        </a>
        <a
          href="https://www.linkedin.com/in/alexandreleonardo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AlexandreLeonardo12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
