import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";

const Module4 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Módulo 4 — MIDI e Áudio Sintetizado</h1>
            <p className="text-lg text-muted-foreground">
              O MIDI não armazena áudio — armazena instruções musicais (notas, duração, velocidade). 
              Synths geram áudio a partir dessas instruções.
            </p>
          </div>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">O Protocolo MIDI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                <strong>MIDI (Musical Instrument Digital Interface)</strong> é um protocolo que descreve 
                eventos musicais sem armazenar áudio real. Em vez disso, ele contém:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Mensagens de Nota</h3>
                  <p className="text-sm">
                    Note On/Off, pitch (altura da nota), velocity (intensidade com que a nota é tocada)
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Controles</h3>
                  <p className="text-sm">
                    Mudanças de programa (patch/timbre), pedal, volume, pan, modulação, pitch bend
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Canais</h3>
                  <p className="text-sm">
                    16 canais independentes, permitindo controlar múltiplos instrumentos simultaneamente
                  </p>
                </div>
              </div>

              <p className="pt-2">
                Um arquivo MIDI pode ser reproduzido por diferentes timbres (piano, guitarra, sintetizador), 
                pois ele apenas diz <em>o que</em> tocar, não <em>como</em> soa.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Síntese Sonora</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                A síntese sonora cria áudio do zero usando componentes eletrônicos ou digitais:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Osciladores</h3>
                  <p className="text-sm">
                    Geram formas de onda básicas (senoidal, quadrada, triangular, dente de serra) que 
                    formam a base do som
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Filtros</h3>
                  <p className="text-sm">
                    Modificam o conteúdo harmônico, removendo ou enfatizando certas frequências
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Envelopes (ADSR)</h3>
                  <p className="text-sm">
                    Controlam como o som evolui no tempo: Attack (ataque), Decay (decaimento), 
                    Sustain (sustentação), Release (liberação)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="mt-6 p-4 bg-white rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Demonstração Multimídia</h3>

                <p className="text-sm text-gray-600 mb-2">Áudio Gravado:</p>
                <audio controls className="w-full mb-4">
                  <source src="/media/audio/comentario.mp3" type="audio/mpeg" />
                </audio>

                <p className="text-sm text-gray-600 mb-2">Música MIDI:</p>
                <audio controls className="w-full mb-4">
                  <source src="/media/audio/emotional-piano-438664.mp3" type="audio/mpeg" />
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
              <Link to="/modulo/3">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo Anterior
              </Link>
            </Button>
            <Button asChild variant="hero">
              <Link to="/quiz">
                Fazer o Quiz
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4;
