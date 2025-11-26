import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import quizData from "@/data/quiz.json";

interface Question {
  id: number;
  q: string;
  choices: string[];
  answer: number;
  explain: string;
}

const Quiz = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    const shuffled = [...quizData.questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);
    setSelectedQuestions(selected);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(0);
    setQuizComplete(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === selectedQuestions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  if (selectedQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <p className="text-muted-foreground">Carregando quiz...</p>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = (score / selectedQuestions.length) * 100;
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-foreground">Quiz Completo!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="p-8 bg-secondary/20 rounded-lg">
                  <div className="text-6xl font-bold text-primary mb-4">
                    {score}/{selectedQuestions.length}
                  </div>
                  <p className="text-xl text-foreground mb-2">
                    Você acertou {percentage.toFixed(0)}% das questões
                  </p>
                  <p className="text-muted-foreground">
                    {percentage >= 80 && "Excelente trabalho! 🎉"}
                    {percentage >= 60 && percentage < 80 && "Muito bom! Continue estudando! 📚"}
                    {percentage < 60 && "Continue praticando! Você pode melhorar! 💪"}
                  </p>
                </div>
                
                <Button onClick={startQuiz} variant="hero" size="lg">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Tentar Novamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const question = selectedQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.answer;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Quiz — Teste seus conhecimentos</h1>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-4">
                <p className="text-sm text-foreground">
                  <strong>Regras:</strong> Serão escolhidas 5 perguntas aleatórias entre 15. 
                  Ao final mostra pontuação e feedback.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Questão {currentQuestion + 1} de {selectedQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              Pontuação: {score}/{answeredQuestions}
            </span>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{question.q}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup 
                value={selectedAnswer?.toString()} 
                onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                disabled={showExplanation}
              >
                {question.choices.map((choice, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-4 rounded-lg transition-colors ${
                      showExplanation
                        ? index === question.answer
                          ? "bg-green-500/20 border-2 border-green-500"
                          : index === selectedAnswer
                          ? "bg-red-500/20 border-2 border-red-500"
                          : "bg-secondary/20"
                        : selectedAnswer === index
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-secondary/20 hover:bg-secondary/40"
                    }`}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer text-foreground"
                    >
                      {choice}
                    </Label>
                    {showExplanation && index === question.answer && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                    {showExplanation && index === selectedAnswer && index !== question.answer && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                ))}
              </RadioGroup>

              {showExplanation && (
                <Card className={`${isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"}`}>
                  <CardContent className="p-4">
                    <p className="font-semibold mb-2 text-foreground">
                      {isCorrect ? "✓ Correto!" : "✗ Incorreto"}
                    </p>
                    <p className="text-sm text-foreground">{question.explain}</p>
                  </CardContent>
                </Card>
              )}

              <div className="flex gap-4">
                {!showExplanation ? (
                  <Button 
                    onClick={handleSubmitAnswer} 
                    disabled={selectedAnswer === null}
                    variant="hero"
                    className="flex-1"
                  >
                    Confirmar Resposta
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNextQuestion}
                    variant="default"
                    className="flex-1"
                  >
                    {currentQuestion < selectedQuestions.length - 1 ? "Próxima Questão" : "Ver Resultado"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
