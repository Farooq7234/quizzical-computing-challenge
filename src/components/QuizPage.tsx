import React, { useState, useEffect } from "react";
import { QuizQuestion } from "@/data/quizQuestions";
import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
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
  const { toast } = useToast();
  const navigate = useNavigate();

  const totalQuestions = quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // Animation control
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle option selection
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // Handle previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1] !== -1 ? answers[currentQuestionIndex - 1] : null);
    }
  };

  // Handle next question
  const handleNextQuestion = () => {
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

  // Handle retry functionality
  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setAnswers(Array(quizData.length).fill(-1));
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
            </div>

            {/* Question navigation buttons */}
            <div className="max-w-2xl mx-auto mb-6 flex flex-wrap gap-2 justify-center">
              {quizData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
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

            <QuizCard
              question={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
              onNextQuestion={handleNextQuestion}
              onPreviousQuestion={handlePreviousQuestion}
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
