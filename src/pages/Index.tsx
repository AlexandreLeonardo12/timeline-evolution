import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Alexandre Leonardo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gestor de Programa | Transformação Digital e Inovação Estratégica
          </p>
          <p className="text-lg text-muted-foreground">
            Tornar as experiências digitais mais simples, ágeis e centradas nas pessoas
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about">
            <Button size="lg" className="group">
              Sobre mim
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            Ver Projetos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
