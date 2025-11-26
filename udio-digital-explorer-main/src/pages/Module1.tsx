import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const Module1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Módulo 1 — O que é Som?</h1>
            <p className="text-lg text-muted-foreground">
              Som é um movimento de partículas no ar que nossos ouvidos interpretam como variações de pressão. 
              Neste módulo mostramos representações visuais (formas de onda), ouviremos um tom puro e veremos 
              uma animação da onda em movimento.
            </p>
          </div>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Conceitos Fundamentais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                O som é causado por vibrações que se propagam em um meio (como o ar). As duas características 
                principais são:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Frequência (Hz)</h3>
                  <p className="text-sm">
                    Medida em Hertz, determina o tom do som. Quanto maior a frequência, mais agudo é o som.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Amplitude</h3>
                  <p className="text-sm">
                    Determina o volume percebido. Quanto maior a amplitude, mais alto é o som.
                  </p>
                </div>
              </div>

              <p>
                Uma forma de onda representa essas variações ao longo do tempo, mostrando graficamente como 
                a pressão do ar varia durante a propagação do som.
              </p>
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
              <Link to="/modulos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos Módulos
              </Link>
            </Button>
            <Button asChild variant="default">
              <Link to="/modulo/2">
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

export default Module1;
