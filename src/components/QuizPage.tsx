
import React, { useState, useEffect } from "react";
import { QuizQuestion } from "@/data/quizQuestions";
import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, ArrowRight, Clock, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface QuizPageProps {
  quizData: QuizQuestion[];
  subjectName: string;
  subjectIcon?: React.ReactNode;
}

const QuizPage: React.FC<QuizPageProps> = ({ quizData, subjectName, subjectIcon }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>(Array(quizData.length).fill(-1));
  const [mounted, setMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const { toast } = useToast();
  const navigate = useNavigate();

  const totalQuestions = quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  
  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Animation control
  useEffect(() => {
    setMounted(true);
  }, []);

  // Timer effect
  useEffect(() => {
    if (quizCompleted) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          toast({
            title: "Time's up!",
            description: "Your quiz has been submitted automatically.",
            variant: "destructive",
          });
          setQuizCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizCompleted, toast]);

  // Warning when 5 minutes and 1 minute remaining
  useEffect(() => {
    if (timeRemaining === 5 * 60) {
      toast({
        title: "5 minutes remaining",
        description: "Please try to complete your quiz soon.",
        variant: "default",
      });
    } else if (timeRemaining === 60) {
      toast({
        title: "1 minute remaining",
        description: "Please submit your quiz now.",
        variant: "destructive",
      });
    }
  }, [timeRemaining, toast]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1] !== -1 ? answers[currentQuestionIndex - 1] : null);
    }
  };

  const handleNextQuestion = () => {
    // Check if the answer is correct before moving to next question
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(answers[currentQuestionIndex + 1] !== -1 ? answers[currentQuestionIndex + 1] : null);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedOption(answers[index] !== -1 ? answers[index] : null);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setAnswers(Array(quizData.length).fill(-1));
    setTimeRemaining(15 * 60);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/50 to-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-6 px-6 sm:px-10">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">CSQuiz</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        {!quizCompleted ? (
          <div className="py-12 px-4 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {subjectName} Quiz
              </h1>
              <p className="text-muted-foreground">
                Test your knowledge with {totalQuestions} questions on {subjectName}
              </p>
              <div className="flex items-center justify-center mt-2">
                <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
                </div>
              </div>
            </div>
            
            {/* Question navigation buttons */}
            <div className="max-w-2xl mx-auto mb-6 flex flex-wrap gap-2 justify-center">
              {quizData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleJumpToQuestion(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    currentQuestionIndex === index
                      ? "bg-primary text-primary-foreground"
                      : answers[index] !== -1
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <div className="flex items-center justify-center mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-1"
              >
                <ArrowLeft className="h-4 w-4" /> Previous
              </Button>
            </div>
            
            <QuizCard
              question={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={isLastQuestion}
            />
          </div>
        ) : (
          <div className="py-12 px-4">
            <QuizResult 
              score={score} 
              totalQuestions={totalQuestions} 
              onRetry={handleRetry} 
              userAnswers={answers}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
