import React from 'react';
import Timeline from '@/components/Timeline';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre mim
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              O meu nome é Alexandre Leonardo, atualmente trabalho como consultor em transformação digital e inovação estratégica na EY. Ao longo dos últimos anos, tenho trabalhado com organizações que enfrentam o desafio de modernizar os seus processos e serviços, contribuindo para transformar modelos operacionais com soluções digitais simples, eficazes e com impacto real.
            </p>
            
            <p>
              Acredito que a transformação não é apenas tecnológica — é feita por pessoas, para pessoas. O meu foco está em redesenhar processos de forma inteligente, com base em dados, sistemas robustos e equipas comprometidas com a mudança. Isso implica compreender a complexidade de cada organização, saber onde intervir e ter coragem para assumir que gerar valor sustentável envolve risco - mas que o risco faz parte de qualquer evolução positiva. O que me move é transformar ideias em soluções concretas, ajudar equipas a trabalhar melhor, e garantir que cada entrega melhora de forma tangível a vida das pessoas e o funcionamento da organização.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Valores-Chave
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Princípios que orientam a minha abordagem à transformação digital
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Card className="relative h-full border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-3xl transition-all duration-500 hover:shadow-[0_20px_25px_-5px_hsl(var(--primary)/0.1)] hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-background/60">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 rounded-full bg-white/90" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        Simplicidade Estratégica
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Simplifico processos complexos, desenhando soluções intuitivas e centradas nas pessoas - com planos concretos e garantindo que as entregas são úteis e dentro dos prazos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-timeline-completed/10 to-timeline-completed/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Card className="relative h-full border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-3xl transition-all duration-500 hover:shadow-[0_20px_25px_-5px_hsl(var(--timeline-completed)/0.1)] hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-background/60">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-timeline-completed to-timeline-completed/80 flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 rounded-full bg-white/90" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-timeline-completed transition-colors duration-300">
                        Arquitetura de negócio flexível
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Concebo soluções com visão de longo prazo, com impacto real e mensurável no dia a dia - respeitando as especificidades do negócio mas adaptáveis ao crescimento e a inovação contínua.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Card className="relative h-full border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-3xl transition-all duration-500 hover:shadow-[0_20px_25px_-5px_hsl(var(--accent)/0.1)] hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-background/60">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 rounded-full bg-white/90" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        Equilíbrio entre rigor e agilidade
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Compreendo rapidamente estruturas organizacionais, alinho stakeholders e antecipo obstáculos antes de se tornarem problemas. Integro frameworks sólidas com metodologias ágeis, ajustando a abordagem à maturidade e realidade de cada contexto.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Formação e Certificações
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Percurso de aprendizagem contínua e desenvolvimento profissional, com foco em transformação digital e gestão estratégica
              </p>
            </div>
            
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;