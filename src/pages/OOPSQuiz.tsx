
import React from "react";
import QuizPage from "@/components/QuizPage";
import { oopsQuizData } from "@/data/quizQuestions";
import { Code } from "lucide-react";

const OOPSQuiz: React.FC = () => {
  return (
    <QuizPage 
      quizData={oopsQuizData} 
      subjectName="Object-Oriented Programming" 
      subjectIcon={<Code className="h-6 w-6" />}
    />
  );
};

export default OOPSQuiz;
