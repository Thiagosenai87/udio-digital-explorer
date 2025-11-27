import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const Module3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Módulo 3 — Qualidade do Áudio</h1>
            <p className="text-lg text-muted-foreground">
              Como bit depth e sample rate influenciam a qualidade; diferenças entre formatos sem/com perda.
            </p>
          </div>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Fatores que Afetam a Qualidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <div className="space-y-3">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Bit Depth (Profundidade de Bits)</h3>
                  <p className="text-sm mb-2">
                    Define a resolução vertical — a dinâmica entre os sons mais silenciosos e mais altos. 
                    Quanto maior o bit depth, menor o ruído de quantização.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-2">
                    <li>8 bits: ~48 dB de faixa dinâmica</li>
                    <li>16 bits: ~96 dB (qualidade CD)</li>
                    <li>24 bits: ~144 dB (qualidade profissional)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Sample Rate (Taxa de Amostragem)</h3>
                  <p className="text-sm mb-2">
                    Define a resolução temporal — a capacidade de reproduzir frequências altas. 
                    Pelo Teorema de Nyquist, pode-se capturar frequências até metade da taxa de amostragem.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-2">
                    <li>44.1 kHz: até ~22 kHz (padrão CD)</li>
                    <li>48 kHz: até ~24 kHz (vídeo/broadcast)</li>
                    <li>96 kHz+: qualidade Hi-Res</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Formatos de Áudio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <div className="space-y-3">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Sem Compressão (Lossless)</h3>
                  <p className="text-sm">
                    <strong>WAV, AIFF:</strong> Armazenam o áudio sem perda de qualidade, mas ocupam muito espaço. 
                    Ideal para edição e masterização.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Compressão Sem Perdas</h3>
                  <p className="text-sm">
                    <strong>FLAC, ALAC:</strong> Reduzem o tamanho do arquivo sem perder qualidade. 
                    Descomprimem para o áudio original idêntico.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Compressão Com Perdas (Lossy)</h3>
                  <p className="text-sm">
                    <strong>MP3, AAC, OGG:</strong> Removem informações consideradas menos perceptíveis ao ouvido humano. 
                    Arquivos muito menores, mas com perda irreversível de qualidade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="mt-6 p-4 bg-white rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Demonstração Multimídia</h3>

                <p className="text-sm text-gray-600 mb-2">Musica 22050 Hz:</p>
                <audio controls className="w-full mb-4">
                  <source src="/media/audio/comentario3.1.mp3" type="audio/mpeg" />
                </audio>

                <p className="text-sm text-gray-600 mb-2">Música 8000 Hz:</p>
                <audio controls className="w-full mb-4">
                  <source src="/media/audio/comentario3.mp3" type="audio/mpeg" />
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
              <Link to="/modulo/2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo Anterior
              </Link>
            </Button>
            <Button asChild variant="default">
              <Link to="/modulo/4">
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

export default Module3;
