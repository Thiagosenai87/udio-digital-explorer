import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { scaleLog } from "d3-scale";

const frequencyData = [
  { freq: 20, amp: 5 },
  { freq: 50, amp: 12 },
  { freq: 100, amp: 25 },
  { freq: 200, amp: 40 },
  { freq: 500, amp: 60 },
  { freq: 1000, amp: 80 },
  { freq: 8000, amp: 65 },
  { freq: 22050, amp: 40 },
  { freq: 44100, amp: 20 },
];

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
          
          {/* TITULO */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Laboratório Interativo</h1>
            <p className="text-lg text-muted-foreground">
              Experimente com diferentes formatos e configurações de áudio. Compare taxas de amostragem, 
              bit depths e formatos de compressão.
            </p>
          </div>

          {/* EXPERIMENTOS */}
          <div className="space-y-6">
            {experiments.map((experiment, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
                
                <CardHeader>
                  <CardTitle className="text-foreground">{experiment.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{experiment.description}</p>
                </CardHeader>

                <CardContent>
                  {experiment.files.length > 0 ? (

                    // LISTA DE ARQUIVOS
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

                    // 📊 GRÁFICO LOGARÍTMICO DE FREQUÊNCIA
                    <div className="w-full h-64 bg-muted rounded-lg p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={frequencyData}>
                          
                          <XAxis
                            dataKey="freq"
                            scale={scaleLog()}
                            domain={[20, 44100]}
                            ticks={[20, 100, 1000, 8000, 22050, 44100]}
                            tickFormatter={(v) => `${v} Hz`}
                            tick={{ fontSize: 11 }}
                            label={{ value: "Frequência (Hz)", position: "insideBottom", offset: -5 }}
                          />

                          <YAxis
                            tick={{ fontSize: 11 }}
                            label={{ value: "Amplitude", angle: -90, position: "insideLeft" }}
                          />

                          <Tooltip />

                          <Line
                            type="monotone"
                            dataKey="amp"
                            stroke="currentColor"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />

                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                  )}
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratorio;
