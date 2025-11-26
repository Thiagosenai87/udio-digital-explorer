import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Users, BookOpen, Mail } from "lucide-react";

const Creditos = () => {
  const team = [
    { name: "Eduardo Branco Ferrario", matricula: "01585198" },
    { name: "Guilherme Branco Ferrario", matricula: "01596391" },
    { name: "Sérgio José de Araújo Junior", matricula: "01590694" },
    { name: "Thiago de Morais Gonçalves", matricula: "01609695" },
    { name: "Willian Barbosa Vasconcelos", matricula: "01611970" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Créditos e Referências</h1>
            <p className="text-lg text-muted-foreground">
              Projeto desenvolvido como parte da disciplina de Sistemas Multimídia.
            </p>
          </div>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">Integrantes do Grupo</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-4">Em ordem alfabética:</p>
                {team.map((member, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="font-medium text-foreground">{member.name}</span>
                    <span className="text-sm text-muted-foreground">Matrícula: {member.matricula}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">Disciplina</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-foreground">
                  <strong>Disciplina:</strong> Sistemas Multimídia
                </p>
                <p className="text-foreground">
                  <strong>Professor:</strong> [Leopoldo]
                </p>
                <p className="text-foreground">
                  <strong>Código:</strong> [6MA]
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Referências</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Manual do Audacity - Documentação oficial sobre edição de áudio digital</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>MIDI Association - Especificações e documentação do protocolo MIDI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Artigos técnicos sobre sample rate e bit depth - Audio Engineering Society</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Documentação sobre formatos de áudio: WAV, MP3, FLAC, OGG</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Arquivo de referência: leopoldo.txt (fornecido pelo grupo)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Download className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">Materiais do Projeto</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Baixe os materiais completos do projeto, incluindo relatório, slides e arquivos de mídia.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Relatório (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Slides (PPTX)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Arquivos de Mídia (ZIP)
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-secondary/30 border-primary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium text-foreground">Entre em contato</p>
                <p className="text-sm text-muted-foreground">
                  Para mais informações sobre o projeto, entre em contato com os integrantes do grupo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Creditos;
