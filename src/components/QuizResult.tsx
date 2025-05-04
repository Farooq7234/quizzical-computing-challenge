
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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
    resultColorClass = "text-green-600 dark:text-green-400";
  } else if (percentage >= 70) {
    resultMessage = "Great job! You have solid knowledge!";
    resultColorClass = "text-green-500 dark:text-green-300";
  } else if (percentage >= 50) {
    resultMessage = "Good effort! Keep studying!";
    resultColorClass = "text-yellow-500 dark:text-yellow-300";
  } else {
    resultMessage = "Keep practicing! You'll improve!";
    resultColorClass = "text-orange-500 dark:text-orange-300";
  }
  
  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden w-full max-w-md mx-auto text-center animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
        <h2 className="text-3xl font-bold mb-2">Quiz Results</h2>
        <p className="text-primary-foreground/80">Here's how you performed</p>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <div className="mb-6">
            <Progress value={percentage} className="h-3 mb-2" />
            <p className="text-sm text-muted-foreground text-right">{percentage}%</p>
          </div>
          
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
            <span className="text-4xl font-bold text-primary">{percentage}%</span>
          </div>
          <h3 className={`text-xl font-medium mb-2 ${resultColorClass}`}>
            {resultMessage}
          </h3>
          <p className="text-muted-foreground mb-6">
            You answered <span className="font-medium text-foreground">{score} out of {totalQuestions}</span> questions correctly.
          </p>
        </div>
        
        <Button
          onClick={onRetry}
          className="w-full py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
          size="lg"
        >
          <RefreshCcw className="w-4 h-4 mr-2" /> Try Again
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;
