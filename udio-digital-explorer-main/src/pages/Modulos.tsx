import { Header } from "@/components/Header";
import { ModuleCard } from "@/components/ModuleCard";
import { Waves, Radio, Settings, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const Modulos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Módulos de Aprendizagem</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore os conceitos fundamentais do áudio digital através de módulos interativos.
          </p>

          <Card className="mb-8 bg-secondary/30 border-primary/20">
            <CardContent className="p-6 flex gap-4">
              <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="text-sm text-foreground">
                <p className="font-medium mb-2">Instruções de Navegação</p>
                <p>
                  Use o menu para acessar qualquer módulo a qualquer momento. Botões "Voltar" e "Avançar" 
                  estão disponíveis em cada página. O Quiz seleciona 5 perguntas por tentativa aleatoriamente 
                  a partir de uma base de 15.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModuleCard
              title="Módulo 1 — O que é Som?"
              description="Entenda as características fundamentais do som: frequência, amplitude e formas de onda."
              icon={<Waves className="h-10 w-10" />}
              href="/modulo/1"
            />
            
            <ModuleCard
              title="Módulo 2 — Áudio Analógico x Digital"
              description="Descubra como ocorre a transformação do som analógico para digital através de amostragem."
              icon={<Radio className="h-10 w-10" />}
              href="/modulo/2"
            />
            
            <ModuleCard
              title="Módulo 3 — Qualidade do Áudio"
              description="Aprenda sobre bit depth, sample rate e formatos de compressão de áudio."
              icon={<Settings className="h-10 w-10" />}
              href="/modulo/3"
            />
            
            <ModuleCard
              title="Módulo 4 — MIDI e Áudio Sintetizado"
              description="Explore o protocolo MIDI e como sons são criados através de síntese sonora."
              icon={<Music className="h-10 w-10" />}
              href="/modulo/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulos;
