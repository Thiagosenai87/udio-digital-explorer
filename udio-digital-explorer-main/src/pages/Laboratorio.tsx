import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const Laboratorio = () => {
  const experiments = [
    {
      title: "Comparação de Taxas de Amostragem",
      description: "Compare o mesmo áudio em diferentes sample rates",
      files: [
        { name: "44.1 kHz / 16 bits", placeholder: "lab_44k_16b.wav" },
        { name: "48 kHz / 24 bits", placeholder: "lab_48k_24b.wav" },
      ]
    },
    {
      title: "Qualidade de Compressão MP3",
      description: "Ouça a diferença entre diferentes bitrates",
      files: [
        { name: "MP3 64 kbps", placeholder: "lab_mp3_64.mp3" },
        { name: "MP3 320 kbps", placeholder: "lab_mp3_320.mp3" },
      ]
    },
    {
      title: "Análise Espectral",
      description: "Visualize as diferenças no espectro de frequências",
      files: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Laboratório Interativo</h1>
            <p className="text-lg text-muted-foreground">
              Experimente com diferentes formatos e configurações de áudio. Compare taxas de amostragem, 
              bit depths e formatos de compressão.
            </p>
          </div>

          <div className="space-y-6">
            {experiments.map((experiment, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-foreground">{experiment.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{experiment.description}</p>
                </CardHeader>
                <CardContent>
                  {experiment.files.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experiment.files.map((file, fileIndex) => (
                        <div key={fileIndex} className="p-4 bg-secondary/20 rounded-lg">
                          <h4 className="font-semibold mb-3 text-foreground">{file.name}</h4>
                          <div className="flex gap-2">
                            <Button variant="default" size="sm" className="flex-1">
                              <Play className="h-4 w-4 mr-2" />
                              Reproduzir
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">[{file.placeholder}]</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">
                        [Placeholder: Gráfico de espectro comparativo]
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Controles Avançados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-foreground min-w-24">Volume:</label>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="70"
                      className="flex-1 h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-foreground min-w-24">Balance:</label>
                    <input 
                      type="range" 
                      min="-50" 
                      max="50" 
                      defaultValue="0"
                      className="flex-1 h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratorio;
