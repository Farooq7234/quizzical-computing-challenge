
import React, { useState } from "react";
import { quizData } from "@/data/quizQuestions";
import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";

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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">CSE Quiz Challenge</h1>
          <p className="text-gray-600">Test your knowledge of Computer Science fundamentals</p>
        </header>

        {!quizStarted ? (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mx-auto text-center p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to test your CSE knowledge?</h2>
            <p className="text-gray-600 mb-6">
              This quiz contains {totalQuestions} questions covering core Computer Science subjects
              including Database Management Systems, Operating Systems, and Computer Networks.
            </p>
            <button
              onClick={startQuiz}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-200"
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
