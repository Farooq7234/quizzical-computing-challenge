import React, { useState, useEffect } from "react";
import { quizData } from "@/data/quizQuestions";
import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Brain, CheckCircle, LucideBook, Server, Sparkles } from "lucide-react";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>(Array(quizData.length).fill(-1));
  const [quizStarted, setQuizStarted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const totalQuestions = quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // Animation control
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Database Management",
      description: "Test your knowledge of SQL, normalization, and database design principles."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Operating Systems",
      description: "Challenge yourself with concepts like process management, memory allocation, and scheduling algorithms."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Computer Networks",
      description: "Explore your understanding of TCP/IP, OSI model, and network security fundamentals."
    }
  ];

  const testimonials = [
    {
      quote: "This quiz platform helped me prepare for my university exams. The questions are challenging and cover all important topics.",
      author: "Computer Science Student"
    },
    {
      quote: "I use this regularly to brush up my core CS knowledge. It's great for interview preparation too!",
      author: "Software Engineer"
    },
    {
      quote: "The interactive quiz format makes learning complex CS concepts much more engaging and fun.",
      author: "CS Professor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/50 to-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-6 px-6 sm:px-10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">CSQuiz</span>
          </div>
          <ThemeToggle />
        </nav>
        
        {!quizStarted ? (
          <div className={`px-6 sm:px-10 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Hero Section */}
            <section className="py-16 md:py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      CS Knowledge Challenge
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Test Your Computer Science Expertise
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Challenge yourself with questions on Database Management, Operating Systems, and Computer Networks.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={startQuiz}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Start Quiz <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                  <div className="aspect-[4/3] bg-primary/5 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">
                        {totalQuestions} Questions Challenge
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Put your knowledge to the test with our carefully curated questions
                      </p>
                      <div className="flex justify-center gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">DBMS</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">OS</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16 border-t border-border">
              <h2 className="text-3xl font-bold text-center mb-4">Topics Covered</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Our quiz covers fundamental topics that every computer science student and professional should master.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="border border-border bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 border-t border-border">
              <h2 className="text-3xl font-bold text-center mb-4">What Users Say</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                See what others have to say about our Computer Science quiz platform.
              </p>
              <div className="px-4 sm:px-10">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-1/1">
                        <Card className="border border-border">
                          <CardContent className="p-8">
                            <div className="text-lg italic mb-4">"{testimonial.quote}"</div>
                            <div className="text-primary font-medium">— {testimonial.author}</div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4 gap-2">
                    <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
                    <CarouselNext className="relative inset-0 translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 border-t border-border">
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Put your Computer Science fundamentals to the test with our comprehensive quiz covering DBMS, OS, and Computer Networks.
                </p>
                <button
                  onClick={startQuiz}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  Start Quiz Now
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-border text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} CSQuiz • All rights reserved</p>
              <p className="text-sm mt-2">A project created for Computer Science enthusiasts</p>
            </footer>
          </div>
        ) : quizCompleted ? (
          <div className="py-12 px-4">
            <QuizResult 
              score={score} 
              totalQuestions={totalQuestions} 
              onRetry={handleRetry} 
              userAnswers={answers}
            />
          </div>
        ) : (
          <div className="py-12 px-4">
            <QuizCard
              question={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={isLastQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
