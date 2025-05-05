
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Book, BookOpen, Brain, CheckCircle, Code, Database, Network, Server, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  // Animation control
  useEffect(() => {
    setMounted(true);
  }, []);

  const subjectQuizzes = [
    {
      name: "Database Management",
      description: "Test your knowledge of SQL, normalization, and database design principles.",
      icon: <Database className="h-8 w-8 text-primary" />,
      path: "/quiz/dbms",
      color: "bg-blue-500/80",
      questions: 15
    },
    {
      name: "Operating Systems",
      description: "Challenge yourself with concepts like process management, memory allocation, and scheduling algorithms.",
      icon: <Server className="h-8 w-8 text-primary" />,
      path: "/quiz/os",
      color: "bg-purple-500/80",
      questions: 15
    },
    {
      name: "Computer Networks",
      description: "Explore your understanding of TCP/IP, OSI model, and network security fundamentals.",
      icon: <Network className="h-8 w-8 text-primary" />,
      path: "/quiz/cn",
      color: "bg-green-500/80",
      questions: 15
    },
    {
      name: "Object-Oriented Programming",
      description: "Test your knowledge of classes, inheritance, polymorphism, and other OOP concepts.",
      icon: <Code className="h-8 w-8 text-primary" />,
      path: "/quiz/oops",
      color: "bg-orange-500/80",
      questions: 15
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
                  Challenge yourself with questions on Database Management, Operating Systems, Computer Networks, and Object-Oriented Programming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/quiz/dbms">
                    <button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2 w-full"
                    >
                      Start Quiz <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                <div className="aspect-[4/3] bg-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      4 Subject Areas
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Specialized quizzes with 15 questions each
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 dark:bg-blue-500/30 rounded-full text-sm">DBMS</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-400 dark:bg-purple-500/30 rounded-full text-sm">OS</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 dark:bg-green-500/30 rounded-full text-sm">CN</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-600 dark:text-orange-400 dark:bg-orange-500/30 rounded-full text-sm">OOPS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Subject Quizzes Section */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl font-bold text-center mb-4">Choose Your Subject</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Select a specific area to test your knowledge with our subject-focused quizzes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subjectQuizzes.map((quiz, index) => (
                <Link to={quiz.path} key={index} className="block">
                  <div 
                    className="border border-border bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] h-full flex flex-col"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                      {quiz.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{quiz.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{quiz.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`${quiz.color} text-white px-2 py-1 rounded text-xs font-medium`}>
                        {quiz.questions} Questions
                      </span>
                      <span className="text-primary flex items-center gap-1">
                        Start <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
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
                Put your Computer Science fundamentals to the test with our comprehensive quizzes covering DBMS, OS, Computer Networks, and OOP.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {subjectQuizzes.map((quiz, index) => (
                  <Link to={quiz.path} key={index}>
                    <button
                      className={`bg-${quiz.color.split('/')[0]} hover:bg-${quiz.color.split('/')[0]}/90 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center gap-2`}
                      style={{backgroundColor: `var(--${quiz.color.split('/')[0]}-500)`}}
                    >
                      {quiz.name.split(' ')[0]}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-border text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} CSQuiz • All rights reserved</p>
            <p className="text-sm mt-2">A project created for Computer Science enthusiasts</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
