import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

const Module2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Módulo 2 — Áudio Analógico x Digital</h1>
            <p className="text-lg text-muted-foreground">
              Aqui explicamos como o som analógico é captado e como ocorre a digitalização (A/D): 
              amostragem e quantização.
            </p>
          </div>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">O Processo de Digitalização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                Um sinal analógico é contínuo, representando infinitas variações ao longo do tempo. 
                Para transformar em digital, o conversor A/D realiza dois processos fundamentais:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Amostragem (Sampling)</h3>
                  <p className="text-sm">
                    O sinal é medido em intervalos regulares de tempo. A <strong>taxa de amostragem</strong> 
                    (sample rate) define quantas medições são feitas por segundo. Exemplos: 44.1 kHz (CD), 
                    48 kHz (vídeo profissional).
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Quantização</h3>
                  <p className="text-sm">
                    Cada amostra é convertida em um valor numérico discreto. O <strong>bit depth</strong> 
                    define quantos níveis diferentes podem ser representados. Exemplos: 16 bits (CD), 
                    24 bits (áudio profissional).
                  </p>
                </div>
              </div>

              <Card className="bg-accent/10 border-primary/20">
                <CardContent className="p-4 flex gap-3">
                  <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Exemplo:</strong> 44.1 kHz / 16 bits significa que o som é medido 44.100 vezes 
                    por segundo, e cada medição pode ter um de 65.536 valores diferentes (2^16).
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="mt-6 p-4 bg-white rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Demonstração Multimídia</h3>

                <p className="text-sm text-gray-600 mb-2">44100 Hz:</p>
                <audio controls className="w-full mb-4">
                  <source src="/media/audio/comentario.mp3" type="audio/mpeg" />
                </audio>
                <p className="text-sm text-gray-600 mb-2">Vídeo:</p>
                <video controls className="w-full max-w-[500px] mx-auto rounded-lg shadow">
                  <source src="/media/video/intro.mp4" type="video/mp4" />
                </video>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between gap-4">
            <Button asChild variant="outline">
              <Link to="/modulo/1">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo Anterior
              </Link>
            </Button>
            <Button asChild variant="default">
              <Link to="/modulo/3">
                Próximo Módulo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module2;
