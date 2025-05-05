
import React from "react";
import QuizPage from "@/components/QuizPage";
import { dbmsQuizData } from "@/data/quizQuestions";
import { Database } from "lucide-react";

const DBMSQuiz: React.FC = () => {
  return (
    <QuizPage 
      quizData={dbmsQuizData} 
      subjectName="Database Management Systems" 
      subjectIcon={<Database className="h-6 w-6" />}
    />
  );
};

export default DBMSQuiz;
