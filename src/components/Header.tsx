import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Projetos', path: '/projects' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-sm">AL</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block">
              Alexandre Leonardo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative',
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button size="sm" asChild>
              <a href="mailto:alexandreleonardo.pt@gmail.com">
                Contacto
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'block px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button size="sm" className="w-full" asChild>
                <a href="mailto:alexandreleonardo.pt@gmail.com">
                  Contacto
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;