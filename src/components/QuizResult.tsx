
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  score,
  totalQuestions,
  onRetry,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine result message based on score percentage
  let resultMessage = "";
  let resultColorClass = "";
  
  if (percentage >= 90) {
    resultMessage = "Excellent! You're a CSE master!";
    resultColorClass = "text-green-600";
  } else if (percentage >= 70) {
    resultMessage = "Great job! You have solid knowledge!";
    resultColorClass = "text-green-500";
  } else if (percentage >= 50) {
    resultMessage = "Good effort! Keep studying!";
    resultColorClass = "text-yellow-500";
  } else {
    resultMessage = "Keep practicing! You'll improve!";
    resultColorClass = "text-orange-500";
  }
  
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md mx-auto text-center">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">Quiz Results</h2>
        <p className="text-purple-100">Here's how you performed</p>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center p-4 bg-purple-50 rounded-full mb-4">
            <span className="text-4xl font-bold text-purple-700">{percentage}%</span>
          </div>
          <h3 className={`text-xl font-medium mb-2 ${resultColorClass}`}>
            {resultMessage}
          </h3>
          <p className="text-gray-600 mb-6">
            You answered <span className="font-medium">{score} out of {totalQuestions}</span> questions correctly.
          </p>
        </div>
        
        <Button
          onClick={onRetry}
          className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <RefreshCcw className="w-4 h-4 mr-1" /> Try Again
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;
