import React, { useState, useEffect } from "react";
import { QuizQuestion } from "../data/quizQuestions";
import OptionButton from "./OptionButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface QuizCardProps {
  question: QuizQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  onOptionSelect: (index: number) => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  isLastQuestion: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedOption,
  onOptionSelect,
  onNextQuestion,
  onPreviousQuestion,
  isLastQuestion,
}) => {
  const progressPercentage = ((currentQuestionIndex) / (totalQuestions - 1)) * 100;

  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mx-auto border border-border animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-primary/80 py-4 px-5 text-primary-foreground">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h2>
          <div className="flex items-center gap-2">
            <span className="bg-primary-foreground text-primary px-2 py-1 rounded text-sm font-medium">
              {question.subject}
            </span>
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
          </div>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium text-foreground mb-6">
          {question.question}
        </h3>

        <div className="space-y-2 mb-6">
          {question.options.map((option, index) => (
            <OptionButton
              key={index}
              option={option}
              index={index}
              selectedOption={selectedOption}
              onSelect={onOptionSelect}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <Button
            onClick={onPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="transition-all duration-300 hover:scale-[1.02]"
            size="lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Previous
          </Button>

          <Button
            onClick={onNextQuestion}
            disabled={selectedOption === null}
            className="transition-all duration-300 hover:scale-[1.02]"
            size="lg"
          >
            {isLastQuestion ? (
              <>
                Submit <Check className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
