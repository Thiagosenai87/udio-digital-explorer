import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Waves, BookOpen, FlaskConical, GraduationCap, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Áudio Digital para Sistemas Multimídia
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Um protótipo interativo para aprender como o som vira dados digitais
            </p>
            
            <Card className="bg-card/80 backdrop-blur border-border/50 shadow-card">
              <CardContent className="p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Bem-vindo ao protótipo "Áudio Digital para Sistemas Multimídia". Aqui você encontrará 
                  explicações interativas, exemplos sonoros, vídeos e um quiz para testar o seu conhecimento. 
                  Use o menu para navegar entre os módulos — ou comece pelo botão Iniciar para seguir a 
                  sequência recomendada.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/modulos">Iniciar</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/quiz">Fazer Quiz</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/modulos" className="group">
            <Card className="h-full hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-foreground">Módulos</h3>
                <p className="text-sm text-muted-foreground">Aprenda passo a passo</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/laboratorio" className="group">
            <Card className="h-full hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <FlaskConical className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-foreground">Laboratório</h3>
                <p className="text-sm text-muted-foreground">Exemplos práticos</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/quiz" className="group">
            <Card className="h-full hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-foreground">Quiz</h3>
                <p className="text-sm text-muted-foreground">Teste seus conhecimentos</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/creditos" className="group">
            <Card className="h-full hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-foreground">Créditos</h3>
                <p className="text-sm text-muted-foreground">Sobre o projeto</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
