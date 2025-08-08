import React from 'react';

/**
 * Projects page
 *
 * This page lists highlighted projects. At the moment it contains
 * placeholder text and can be populated with real project descriptions
 * and links in the future.  It is intentionally kept simple so that
 * additional projects can be added without impacting other parts of the
 * application.
 */

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Projetos</h1>
      <p className="mb-2">Aqui encontrará alguns dos meus projetos de destaque. Esta seção será atualizada em breve com mais detalhes.</p>
    </div>
  );
}
