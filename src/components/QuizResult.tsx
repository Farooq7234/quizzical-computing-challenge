
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Check, X, Award, BookOpen, Search, BookCheck, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizData } from "@/data/quizQuestions";
import ReactConfetti from "react-confetti";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

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
  const [windowDimension, setWindowDimension] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });
  const [expandedSection, setExpandedSection] = useState<string | null>("summary");
  const { toast } = useToast();
  
  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", handleResize);
    
    // Start confetti if score is good
    if (percentage >= 70) {
      setConfettiActive(true);
      const timer = setTimeout(() => setConfettiActive(false), 5000);
      
      // Show toast notification for good score
      toast({
        title: "Well done! 🎉",
        description: percentage >= 90 ? "Excellent performance!" : "Great job on the quiz!",
        variant: "default",
      });
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
      };
    } else {
      // Show encouraging toast for lower scores
      toast({
        title: "Quiz completed",
        description: percentage >= 40 ? "Good effort! Try again to improve." : "Keep practicing to improve your score!",
        variant: "default",
      });
    }
    
    return () => window.removeEventListener("resize", handleResize);
  }, [percentage, toast]);
  
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
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  // Get subject list and background classes for each subject
  const subjects = Object.keys(subjectGroups);
  const subjectColorClasses = {
    "Database Management": "bg-blue-500/80 text-white",
    "Operating Systems": "bg-purple-500/80 text-white",
    "Computer Networks": "bg-green-500/80 text-white",
    // Default if subject doesn't match
    "default": "bg-primary/80 text-primary-foreground"
  };
  
  const getSubjectColorClass = (subject: string) => {
    return subjectColorClasses[subject] || subjectColorClasses.default;
  };
  
  // Calculate stats per subject
  const subjectStats = subjects.map(subject => {
    const questionsInSubject = subjectGroups[subject].length;
    const correctAnswers = subjectGroups[subject].filter(q => 
      q.userAnswer === q.correctAnswer
    ).length;
    
    return {
      subject,
      questionsInSubject,
      correctAnswers,
      percentage: Math.round((correctAnswers / questionsInSubject) * 100)
    };
  });
  
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {confettiActive && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={700}
          tweenDuration={8000}
          colors={['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4']}
        />
      )}
      
      <Card className="bg-card relative overflow-hidden rounded-xl border shadow-lg animate-fade-in">
        {/* Decorative top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ring-4 ring-primary/20">
                {resultIcon}
              </div>
              <div>
                <h2 className="text-3xl font-bold">Quiz Results</h2>
                <p className="text-muted-foreground">Completed on {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Badge key={subject} variant="outline" className={`${getSubjectColorClass(subject)} px-3 py-1.5 text-sm font-medium`}>
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <CardContent className="p-8 pt-6 space-y-8">
          {/* Score summary section */}
          <div className="rounded-xl bg-card overflow-hidden border shadow-sm">
            <div className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-medium">Your Score</h3>
                  <div className="relative pt-1">
                    <Progress 
                      value={percentage} 
                      className="h-4 rounded-full overflow-hidden bg-secondary" 
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-full p-6 h-32 w-32 flex flex-col items-center justify-center ring-4 ring-primary/10">
                    <span className="text-4xl font-bold text-primary">{score}</span>
                    <span className="text-lg text-muted-foreground">out of {totalQuestions}</span>
                  </div>
                </div>
              </div>
              
              <h3 className={`text-2xl font-semibold ${resultColorClass}`}>
                {resultMessage}
              </h3>
            </div>
          </div>
          
          {/* Subject breakdown */}
          <div className="rounded-xl bg-card overflow-hidden border shadow-sm">
            <div 
              className="p-6 flex items-center justify-between cursor-pointer bg-gradient-to-r from-primary/5 to-transparent"
              onClick={() => toggleSection('subjects')}
            >
              <h3 className="text-xl font-medium flex items-center gap-2">
                <BookCheck className="h-5 w-5 text-primary" /> 
                Performance by Subject
              </h3>
              {expandedSection === 'subjects' ? 
                <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              }
            </div>
            
            {expandedSection === 'subjects' && (
              <div className="p-6 pt-0 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {subjectStats.map((stat) => (
                  <div key={stat.subject} className="p-4 border rounded-lg bg-card/50">
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.subject}
                    </div>
                    <div className="text-2xl font-bold">
                      {stat.correctAnswers}/{stat.questionsInSubject}
                    </div>
                    <Progress 
                      value={stat.percentage} 
                      className="h-2 mt-2" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Answer summary */}
          <div className="rounded-xl bg-card overflow-hidden border shadow-sm">
            <div 
              className="p-6 flex items-center justify-between cursor-pointer bg-gradient-to-r from-primary/5 to-transparent"
              onClick={() => toggleSection('summary')}
            >
              <h3 className="text-xl font-medium flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" /> 
                Answer Summary
              </h3>
              {expandedSection === 'summary' ? 
                <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              }
            </div>
            
            {expandedSection === 'summary' && (
              <div className="p-0 sm:p-6 pt-0">
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[50px] font-medium">#</TableHead>
                        <TableHead className="font-medium">Question</TableHead>
                        <TableHead className="font-medium">Your Answer</TableHead>
                        <TableHead className="font-medium">Correct Answer</TableHead>
                        <TableHead className="w-[80px] font-medium">Result</TableHead>
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
                          <TableRow 
                            key={qIndex} 
                            className={
                              isCorrect 
                                ? "bg-green-50/40 dark:bg-green-900/20 hover:bg-green-50/60 dark:hover:bg-green-900/30" 
                                : "bg-red-50/40 dark:bg-red-900/20 hover:bg-red-50/60 dark:hover:bg-red-900/30"
                            }
                          >
                            <TableCell className="font-medium">{qIndex + 1}</TableCell>
                            <TableCell className="max-w-[300px] truncate">
                              <div className="flex items-start gap-2">
                                <Badge variant="outline" className={`${getSubjectColorClass(question.subject)} px-1.5 py-0.5 text-xs`}>
                                  {question.subject.split(' ')[0]}
                                </Badge>
                                <span>{question.question}</span>
                              </div>
                            </TableCell>
                            <TableCell className={userAnswer === -1 ? "text-muted-foreground italic" : ""}>
                              {userAnswerText}
                            </TableCell>
                            <TableCell className="font-medium">{correctAnswerText}</TableCell>
                            <TableCell>
                              {isCorrect ? (
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30">
                                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                              ) : (
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30">
                                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              onClick={onRetry}
              className="w-full sm:w-auto py-6 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] text-lg gap-3 bg-primary/90 hover:bg-primary shadow-md hover:shadow-lg"
              size="lg"
            >
              <RefreshCcw className="w-5 h-5" /> Try Again
            </Button>
            
            <Button
              onClick={() => window.open("/", "_self")}
              className="w-full sm:w-auto py-6 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] text-lg gap-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-md hover:shadow-lg"
              size="lg"
              variant="secondary"
            >
              Back to Home <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizResult;
