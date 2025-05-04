
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is normalization in Database Management Systems?",
    options: [
      "A process of organizing data to minimize redundancy",
      "A method to increase data redundancy",
      "A backup technique",
      "A query optimization strategy"
    ],
    correctAnswer: 0,
    subject: "DBMS"
  },
  {
    id: 2,
    question: "Which scheduling algorithm is non-preemptive?",
    options: [
      "Round Robin",
      "Shortest Job First",
      "Priority Scheduling",
      "All of the above"
    ],
    correctAnswer: 1,
    subject: "OS"
  },
  {
    id: 3,
    question: "Which layer of the OSI model is responsible for logical addressing?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer"
    ],
    correctAnswer: 2,
    subject: "CN"
  },
  {
    id: 4,
    question: "What is a deadlock in an operating system?",
    options: [
      "When a system crashes",
      "When a process continues to execute indefinitely",
      "When two or more processes are unable to proceed because each is waiting for resources held by another",
      "When CPU utilization is at 100%"
    ],
    correctAnswer: 2,
    subject: "OS"
  },
  {
    id: 5,
    question: "Which of the following is NOT a type of SQL join?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "PARALLEL JOIN",
      "CROSS JOIN"
    ],
    correctAnswer: 2,
    subject: "DBMS"
  },
  {
    id: 6,
    question: "What is the time complexity of binary search algorithm?",
    options: [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    correctAnswer: 1,
    subject: "Algorithms"
  },
  {
    id: 7,
    question: "Which protocol is used for secure web browsing?",
    options: [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    correctAnswer: 2,
    subject: "CN"
  },
  {
    id: 8,
    question: "What is the primary function of a DBMS?",
    options: [
      "Ensuring network security",
      "Managing and organizing data",
      "Optimizing CPU performance",
      "Creating user interfaces"
    ],
    correctAnswer: 1,
    subject: "DBMS"
  },
  {
    id: 9,
    question: "Which of the following is a page replacement algorithm?",
    options: [
      "FCFS",
      "SJF",
      "LRU",
      "Priority Scheduling"
    ],
    correctAnswer: 2,
    subject: "OS"
  },
  {
    id: 10,
    question: "What is the function of a router in computer networks?",
    options: [
      "To connect devices within a LAN",
      "To provide wireless connectivity",
      "To forward data packets between computer networks",
      "To encrypt network traffic"
    ],
    correctAnswer: 2,
    subject: "CN"
  }
];
