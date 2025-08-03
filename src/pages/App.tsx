import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
// Framework and Blog pages estão temporariamente ocultas. As importações
// são removidas para evitar que os bundles gerem rotas para estas páginas.
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Ensure the page scrolls to top on route change */}
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            {/* Framework e Blog são páginas em revisão e portanto não são registadas nas rotas. */}
            {/* Catch‑all route for 404 pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;