
import React from "react";
import QuizPage from "@/components/QuizPage";
import { cnQuizData } from "@/data/quizQuestions";
import { Network } from "lucide-react";

const CNQuiz: React.FC = () => {
  return (
    <QuizPage 
      quizData={cnQuizData} 
      subjectName="Computer Networks" 
      subjectIcon={<Network className="h-6 w-6" />}
    />
  );
};

export default CNQuiz;
