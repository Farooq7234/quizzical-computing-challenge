
import React, { useState, useEffect } from "react";
import { QuizQuestion } from "@/data/quizQuestions";
import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

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

  const totalQuestions = quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // Animation control
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
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
