
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Check, X, Award, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizData } from "@/data/quizQuestions";
import ReactConfetti from "react-confetti";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  userAnswers?: number[];
}

const QuizResult: React.FC<QuizResultProps> = ({
  score,
  totalQuestions,
  onRetry,
  userAnswers = [],
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const [confettiActive, setConfettiActive] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", handleResize);
    
    // Start confetti if score is good
    if (percentage >= 70) {
      setConfettiActive(true);
      const timer = setTimeout(() => setConfettiActive(false), 5000);
      return () => clearTimeout(timer);
    }
    
    return () => window.removeEventListener("resize", handleResize);
  }, [percentage]);
  
  // Determine result message based on score percentage
  let resultMessage = "";
  let resultColorClass = "";
  let resultIcon = null;
  
  if (percentage >= 90) {
    resultMessage = "🎓 Excellent! You're a CSE Champ!";
    resultColorClass = "text-green-600 dark:text-green-400";
    resultIcon = <Award className="h-8 w-8 text-yellow-500" />;
  } else if (percentage >= 70) {
    resultMessage = "🔥 Great Job! Keep it up!";
    resultColorClass = "text-green-500 dark:text-green-300";
    resultIcon = <Award className="h-8 w-8 text-green-500" />;
  } else if (percentage >= 40) {
    resultMessage = "📚 Good effort. Try again to improve.";
    resultColorClass = "text-yellow-500 dark:text-yellow-300";
    resultIcon = <BookOpen className="h-8 w-8 text-yellow-500" />;
  } else {
    resultMessage = "💡 Don't worry. Practice makes perfect.";
    resultColorClass = "text-orange-500 dark:text-orange-300";
    resultIcon = <BookOpen className="h-8 w-8 text-orange-500" />;
  }
  
  // Group questions by subject
  const subjectGroups = {};
  quizData.forEach((question, index) => {
    if (!subjectGroups[question.subject]) {
      subjectGroups[question.subject] = [];
    }
    subjectGroups[question.subject].push({
      ...question,
      userAnswer: userAnswers[index] !== undefined ? userAnswers[index] : -1,
      index,
    });
  });
  
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {confettiActive && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      
      <Card className="bg-card text-card-foreground shadow-lg border-t-4 border-t-primary overflow-hidden animate-fade-in">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                {resultIcon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">Quiz Results</h2>
                <p className="text-muted-foreground text-sm">Here's how you performed</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary px-3 py-1.5 text-sm">
              {Object.keys(subjectGroups).join(", ")}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="mb-2">
                  <Progress value={percentage} className="h-3" />
                  <p className="text-sm text-muted-foreground text-right mt-1">{percentage}%</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-4 h-24 w-24 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{score}/{totalQuestions}</span>
                </div>
              </div>
            </div>
            
            <h3 className={`text-xl font-medium ${resultColorClass}`}>
              {resultMessage}
            </h3>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Answer Summary
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>Question</TableHead>
                    <TableHead>Your Answer</TableHead>
                    <TableHead>Correct Answer</TableHead>
                    <TableHead className="w-[100px]">Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quizData.map((question, qIndex) => {
                    const userAnswer = userAnswers[qIndex];
                    const isCorrect = userAnswer === question.correctAnswer;
                    const userAnswerText = userAnswer !== undefined && userAnswer !== -1 
                      ? question.options[userAnswer] 
                      : "No answer";
                    const correctAnswerText = question.options[question.correctAnswer];
                    
                    return (
                      <TableRow key={qIndex} className={isCorrect ? "bg-green-50/30 dark:bg-green-900/10" : "bg-red-50/30 dark:bg-red-900/10"}>
                        <TableCell className="font-medium">{qIndex + 1}</TableCell>
                        <TableCell className="max-w-[300px] truncate">{question.question}</TableCell>
                        <TableCell className={userAnswer === -1 ? "text-muted-foreground" : ""}>
                          {userAnswerText}
                        </TableCell>
                        <TableCell>{correctAnswerText}</TableCell>
                        <TableCell>
                          {isCorrect ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={onRetry}
              className="w-full max-w-md py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              size="lg"
            >
              <RefreshCcw className="w-4 h-4 mr-2" /> Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizResult;
