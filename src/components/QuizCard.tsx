
import React from "react";
import { QuizQuestion } from "../data/quizQuestions";
import OptionButton from "./OptionButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface QuizCardProps {
  question: QuizQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  onOptionSelect: (index: number) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedOption,
  onOptionSelect,
  onNextQuestion,
  isLastQuestion,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-3 px-5 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h2>
          <span className="bg-white text-purple-700 px-2 py-1 rounded text-sm font-medium">
            {question.subject}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-800 mb-6">
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
        
        <div className="flex justify-end">
          <Button
            onClick={onNextQuestion}
            disabled={selectedOption === null}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
          >
            {isLastQuestion ? (
              <>
                Submit <Check className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
