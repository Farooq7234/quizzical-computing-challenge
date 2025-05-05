
import React from "react";
import QuizPage from "@/components/QuizPage";
import { osQuizData } from "@/data/quizQuestions";
import { Server } from "lucide-react";

const OSQuiz: React.FC = () => {
  return (
    <QuizPage 
      quizData={osQuizData} 
      subjectName="Operating Systems" 
      subjectIcon={<Server className="h-6 w-6" />}
    />
  );
};

export default OSQuiz;
