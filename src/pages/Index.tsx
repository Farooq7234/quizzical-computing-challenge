
import React, { useState } from "react";
import { quizData } from "@/data/quizQuestions";
import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>(Array(quizData.length).fill(-1));
  const [quizStarted, setQuizStarted] = useState(false);

  const totalQuestions = quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

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

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/50 to-background py-12 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">
            CSE Quiz Challenge
          </h1>
          <p className="text-muted-foreground">Test your knowledge of Computer Science fundamentals</p>
        </header>

        {!quizStarted ? (
          <div className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mx-auto text-center p-8 animate-fade-in border border-border">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to test your CSE knowledge?</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              This quiz contains {totalQuestions} questions covering core Computer Science subjects
              including Database Management Systems, Operating Systems, and Computer Networks.
            </p>
            <button
              onClick={startQuiz}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              Start Quiz
            </button>
          </div>
        ) : quizCompleted ? (
          <QuizResult score={score} totalQuestions={totalQuestions} onRetry={handleRetry} />
        ) : (
          <QuizCard
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={isLastQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
