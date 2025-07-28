# Alexandre Leonardo – Professional Portfolio

This repository contains the source code for **Alexandre Leonardo's** professional portfolio website.  
The site showcases Alexandre's experience, certifications and projects using a clean, modern design with a horizontal scrolling timeline component.

## Project Overview

This application is built using modern web technologies to deliver a fast and responsive user experience:

* **Framework**: [Vite](https://vitejs.dev/) with React 18 for lightning‑fast builds and hot‑module reloading.
* **UI library**: [shadcn/ui](https://ui.shadcn.com/) components combined with Tailwind CSS provide a utility‑first styling system.
* **State & data loading**: [React Query](https://tanstack.com/query) handles asynchronous data fetching and caching.
* **Routing**: Client‑side routing is powered by [`react-router-dom`](https://reactrouter.com/) for seamless page transitions.
* **TypeScript**: Strong typing throughout the codebase improves reliability and developer experience.

All branding, assets and copy contained in this repository are the intellectual property of **Alexandre Leonardo**.  
There are no external SaaS dependencies; everything runs locally or on your chosen hosting platform.

## Features

* **Interactive timeline** – A horizontally scrollable timeline that dynamically loads data from `public/data/certifications.json`. It displays both completed and upcoming certifications/training with clear visual differentiation.
* **Responsive design** – The layout adapts seamlessly to mobile, tablet and desktop viewports.
* **Accessible UI** – Components and navigation follow accessibility best practices, including keyboard navigation and ARIA labelling.
* **Modular architecture** – Components, pages and hooks are well organised to facilitate future expansion (for example, adding new sections or pages).
* **Smooth animations** – Subtle animations and transitions enhance the user experience without sacrificing performance.

## Folder Structure

```
timeline-evolution/
├── public/                 # Static assets served as‑is
│   └── data/
│       └── certifications.json   # Timeline data used on the About page
├── src/
│   ├── components/         # Reusable UI components (Navbar, Timeline, Card, etc.)
│   ├── hooks/              # Custom React hooks (e.g. useMediaQuery)
│   ├── pages/              # Route components for each page
│   │   ├── Index.tsx       # Landing page (Home)
│   │   ├── About.tsx       # About page with timeline and "Prontos para o próximo desafio?" CTA
│   │   ├── Projects.tsx    # Projects page
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # Main application component that sets up routing and providers
│   ├── index.css           # Tailwind base styles and custom variables
│   └── main.tsx            # Entry point for React
├── docs/                   # Project documentation
│   └── TIMELINE_STRUCTURE.md  # JSON structure explanation for timeline data
├── package.json            # Project metadata and scripts
└── README.md               # This file
```

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/AlexandreLeonardo12/timeline-evolution.git
   cd timeline-evolution
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   By default the site will be available at [http://localhost:5173](http://localhost:5173).

4. **Build for production**

   ```bash
   npm run build
   ```

   The compiled files will be output to the `dist` directory.

## Updating the Timeline

Timeline events are defined in `public/data/certifications.json`. Each entry follows the structure documented in [`docs/TIMELINE_STRUCTURE.md`](docs/TIMELINE_STRUCTURE.md).  
Update this file to add or edit items on the timeline. The site will automatically reflect the changes after rebuilding.

## Scroll to Top on Navigation

The application includes a `ScrollToTop` component (see `src/components/ScrollToTop.tsx`) that ensures the window scrolls back to the top whenever the route changes. This behaviour improves navigation consistency across pages.

## Contributing

At this time, contributions are not accepted as this project is personal to Alexandre Leonardo.  
If you encounter any issues or have suggestions, please get in touch directly.

---

© Alexandre Leonardo. All rights reserved.
