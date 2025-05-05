
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: string;
}

// DBMS Questions
export const dbmsQuizData: QuizQuestion[] = [
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
    id: 3,
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
    id: 4,
    question: "Which normal form deals with removing transitive dependencies?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Fourth Normal Form (4NF)"
    ],
    correctAnswer: 2,
    subject: "DBMS"
  },
  {
    id: 5,
    question: "What is a foreign key in a relational database?",
    options: [
      "A key that can be used to uniquely identify a row in another table",
      "A key used for encryption of sensitive data",
      "A key that must be unique for each record",
      "A key imported from another database system"
    ],
    correctAnswer: 0,
    subject: "DBMS"
  },
  {
    id: 6,
    question: "Which SQL statement is used to retrieve data from a database?",
    options: [
      "GET",
      "OPEN",
      "SELECT",
      "EXTRACT"
    ],
    correctAnswer: 2,
    subject: "DBMS"
  },
  {
    id: 7,
    question: "What is an SQL injection attack?",
    options: [
      "A physical attack on database servers",
      "A method of optimizing SQL queries",
      "Inserting malicious SQL code into queries via input data",
      "A tool for database administrators"
    ],
    correctAnswer: 2,
    subject: "DBMS"
  },
  {
    id: 8,
    question: "Which of these is NOT a type of database model?",
    options: [
      "Relational model",
      "Network model",
      "Sequential model",
      "Hierarchical model"
    ],
    correctAnswer: 2,
    subject: "DBMS"
  },
  {
    id: 9,
    question: "What is denormalization in databases?",
    options: [
      "The process of removing redundant data",
      "The process of adding redundancy to improve query performance",
      "The process of creating database indexes",
      "The process of encrypting database tables"
    ],
    correctAnswer: 1,
    subject: "DBMS"
  },
  {
    id: 10,
    question: "Which of the following is an example of an ACID property in databases?",
    options: [
      "Authentication",
      "Atomicity",
      "Authorization",
      "Assembly"
    ],
    correctAnswer: 1,
    subject: "DBMS"
  },
  {
    id: 11,
    question: "What is a database transaction?",
    options: [
      "A financial payment for database usage",
      "A unit of work performed within a DBMS against a database",
      "The process of moving data between tables",
      "A database error notification"
    ],
    correctAnswer: 1,
    subject: "DBMS"
  },
  {
    id: 12,
    question: "What does SQL stand for?",
    options: [
      "Structured Question Language",
      "System Query Language",
      "Structured Query Language",
      "Standard Query Language"
    ],
    correctAnswer: 2,
    subject: "DBMS"
  },
  {
    id: 13,
    question: "What is a database index?",
    options: [
      "A list of all tables in a database",
      "A data structure that improves the speed of data retrieval operations",
      "A security mechanism for database access",
      "A backup copy of a database"
    ],
    correctAnswer: 1,
    subject: "DBMS"
  },
  {
    id: 14,
    question: "Which of the following is a NoSQL database?",
    options: [
      "MySQL",
      "Oracle",
      "MongoDB",
      "PostgreSQL"
    ],
    correctAnswer: 2,
    subject: "DBMS"
  },
  {
    id: 15,
    question: "What is a composite key in a relational database?",
    options: [
      "A key that changes automatically",
      "A key made up of multiple columns",
      "A key that references another table",
      "A key used for database encryption"
    ],
    correctAnswer: 1,
    subject: "DBMS"
  }
];

// Operating System Questions
export const osQuizData: QuizQuestion[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    question: "What is virtual memory?",
    options: [
      "Physical memory that appears to be larger than it actually is",
      "A memory management technique that provides an illusion of having more physical memory than is actually available",
      "A fast memory used by the CPU",
      "Memory used for storing virtual machines"
    ],
    correctAnswer: 1,
    subject: "OS"
  },
  {
    id: 5,
    question: "Which of the following is not an operating system?",
    options: [
      "Windows",
      "Linux",
      "Oracle",
      "macOS"
    ],
    correctAnswer: 2,
    subject: "OS"
  },
  {
    id: 6,
    question: "What is the purpose of paging in an operating system?",
    options: [
      "To increase the execution speed of programs",
      "To allocate memory to processes in fixed-size blocks",
      "To store program instructions",
      "To facilitate inter-process communication"
    ],
    correctAnswer: 1,
    subject: "OS"
  },
  {
    id: 7,
    question: "What is a process in the context of an operating system?",
    options: [
      "A program in execution",
      "A thread of execution",
      "A program stored on disk",
      "A single processor core"
    ],
    correctAnswer: 0,
    subject: "OS"
  },
  {
    id: 8,
    question: "What is thrashing in an operating system?",
    options: [
      "When the CPU utilization is very high",
      "When a system spends more time swapping pages than executing application code",
      "When multiple processes are executing simultaneously",
      "When a system crashes due to hardware failure"
    ],
    correctAnswer: 1,
    subject: "OS"
  },
  {
    id: 9,
    question: "Which scheduling algorithm is designed especially for time-sharing systems?",
    options: [
      "First-Come, First-Served",
      "Shortest Job First",
      "Round Robin",
      "Priority Scheduling"
    ],
    correctAnswer: 2,
    subject: "OS"
  },
  {
    id: 10,
    question: "What is the purpose of a semaphore in operating systems?",
    options: [
      "To allocate memory to processes",
      "To facilitate file access",
      "To control access to shared resources",
      "To speed up processor operations"
    ],
    correctAnswer: 2,
    subject: "OS"
  },
  {
    id: 11,
    question: "Which of the following is an example of a real-time operating system?",
    options: [
      "Windows 10",
      "macOS",
      "VxWorks",
      "Ubuntu Linux"
    ],
    correctAnswer: 2,
    subject: "OS"
  },
  {
    id: 12,
    question: "What is a context switch in operating systems?",
    options: [
      "Changing from user mode to kernel mode",
      "Switching between different user interfaces",
      "The process of saving and loading the state when switching between processes",
      "Switching between different file systems"
    ],
    correctAnswer: 2,
    subject: "OS"
  },
  {
    id: 13,
    question: "What is the main advantage of a microkernel architecture?",
    options: [
      "Better performance",
      "Easier to extend and modify the OS",
      "Larger memory footprint",
      "Compatibility with more hardware devices"
    ],
    correctAnswer: 1,
    subject: "OS"
  },
  {
    id: 14,
    question: "What is the purpose of the scheduler in an operating system?",
    options: [
      "To allocate memory to processes",
      "To decide which process runs next",
      "To manage file systems",
      "To handle I/O operations"
    ],
    correctAnswer: 1,
    subject: "OS"
  },
  {
    id: 15,
    question: "Which of the following best describes a zombie process?",
    options: [
      "A process that consumes excessive CPU resources",
      "A process that has terminated but its entry remains in the process table",
      "A process that is waiting for I/O operations",
      "A process that can't be killed by normal means"
    ],
    correctAnswer: 1,
    subject: "OS"
  }
];

// Computer Networks Questions
export const cnQuizData: QuizQuestion[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    question: "What is the function of a router in computer networks?",
    options: [
      "To connect devices within a LAN",
      "To provide wireless connectivity",
      "To forward data packets between computer networks",
      "To encrypt network traffic"
    ],
    correctAnswer: 2,
    subject: "CN"
  },
  {
    id: 4,
    question: "What is the maximum length of an IPv4 address?",
    options: [
      "32 bits",
      "64 bits",
      "128 bits",
      "256 bits"
    ],
    correctAnswer: 0,
    subject: "CN"
  },
  {
    id: 5,
    question: "Which protocol is used for transferring emails?",
    options: [
      "SMTP",
      "HTTP",
      "FTP",
      "SSH"
    ],
    correctAnswer: 0,
    subject: "CN"
  },
  {
    id: 6,
    question: "What is DNS in computer networks?",
    options: [
      "Data Network Service",
      "Domain Name System",
      "Dynamic Network System",
      "Digital Naming Service"
    ],
    correctAnswer: 1,
    subject: "CN"
  },
  {
    id: 7,
    question: "Which layer of the TCP/IP model corresponds to the Transport layer of the OSI model?",
    options: [
      "Network Interface",
      "Internet",
      "Transport",
      "Application"
    ],
    correctAnswer: 2,
    subject: "CN"
  },
  {
    id: 8,
    question: "What is the purpose of the ARP protocol?",
    options: [
      "To map IP addresses to MAC addresses",
      "To provide reliable data transfer",
      "To route packets across networks",
      "To assign IP addresses dynamically"
    ],
    correctAnswer: 0,
    subject: "CN"
  },
  {
    id: 9,
    question: "Which of the following is not a valid IP address?",
    options: [
      "192.168.1.1",
      "256.0.0.1",
      "10.0.0.1",
      "172.16.0.1"
    ],
    correctAnswer: 1,
    subject: "CN"
  },
  {
    id: 10,
    question: "What is a subnet mask used for?",
    options: [
      "To encrypt data packets",
      "To identify the network and host portions of an IP address",
      "To filter unwanted network traffic",
      "To boost network signal strength"
    ],
    correctAnswer: 1,
    subject: "CN"
  },
  {
    id: 11,
    question: "Which protocol operates at the Transport layer and provides connection-oriented, reliable service?",
    options: [
      "IP",
      "UDP",
      "TCP",
      "ICMP"
    ],
    correctAnswer: 2,
    subject: "CN"
  },
  {
    id: 12,
    question: "What is a firewall in computer networks?",
    options: [
      "A device that prevents power surges",
      "A system designed to prevent unauthorized access to or from a private network",
      "A protocol for secure data transmission",
      "A backup system for network data"
    ],
    correctAnswer: 1,
    subject: "CN"
  },
  {
    id: 13,
    question: "Which of the following is not a type of network topology?",
    options: [
      "Star",
      "Ring",
      "Pyramid",
      "Mesh"
    ],
    correctAnswer: 2,
    subject: "CN"
  },
  {
    id: 14,
    question: "What does DHCP stand for in networking?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Domain Host Control Program",
      "Digital Host Communication Protocol",
      "Distributed Host Computing Process"
    ],
    correctAnswer: 0,
    subject: "CN"
  },
  {
    id: 15,
    question: "What is the purpose of NAT in networking?",
    options: [
      "To encrypt data packets",
      "To translate private IP addresses to public IP addresses",
      "To allocate IP addresses dynamically",
      "To filter network traffic"
    ],
    correctAnswer: 1,
    subject: "CN"
  }
];

// Object-Oriented Programming Questions
export const oopsQuizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is encapsulation in OOP?",
    options: [
      "The process of hiding the implementation details of an object",
      "The process of creating multiple instances of a class",
      "The ability of a class to inherit from another class",
      "The ability to take different forms"
    ],
    correctAnswer: 0,
    subject: "OOPS"
  },
  {
    id: 2,
    question: "Which OOP concept allows a class to inherit properties and behaviors from another class?",
    options: [
      "Encapsulation",
      "Polymorphism",
      "Inheritance",
      "Abstraction"
    ],
    correctAnswer: 2,
    subject: "OOPS"
  },
  {
    id: 3,
    question: "What is polymorphism in OOP?",
    options: [
      "The ability to hide implementation details",
      "The ability of an object to take many forms",
      "The process of creating objects from a class",
      "The process of bundling data and methods together"
    ],
    correctAnswer: 1,
    subject: "OOPS"
  },
  {
    id: 4,
    question: "What is a constructor in OOP?",
    options: [
      "A method used to destroy objects",
      "A special method that is automatically called when an object is created",
      "A method used to access private variables",
      "A method that returns the class type"
    ],
    correctAnswer: 1,
    subject: "OOPS"
  },
  {
    id: 5,
    question: "What is method overriding in OOP?",
    options: [
      "Creating multiple methods with the same name but different parameters",
      "Hiding the implementation details of a method",
      "Implementing a method in a subclass that is already defined in its superclass",
      "Creating a private method in a class"
    ],
    correctAnswer: 2,
    subject: "OOPS"
  },
  {
    id: 6,
    question: "What is the purpose of the 'static' keyword in Java?",
    options: [
      "To create objects without a class",
      "To make a variable or method belong to the class rather than instances",
      "To prevent a class from being inherited",
      "To ensure that a variable can only be initialized once"
    ],
    correctAnswer: 1,
    subject: "OOPS"
  },
  {
    id: 7,
    question: "Which of the following is not one of the four main principles of OOP?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Compilation",
      "Polymorphism"
    ],
    correctAnswer: 2,
    subject: "OOPS"
  },
  {
    id: 8,
    question: "What is an abstract class in OOP?",
    options: [
      "A class that cannot be instantiated",
      "A class with only private methods",
      "A class that has only static methods",
      "A class that has no methods"
    ],
    correctAnswer: 0,
    subject: "OOPS"
  },
  {
    id: 9,
    question: "What is method overloading in OOP?",
    options: [
      "Creating multiple methods with the same name but different parameters",
      "Implementing a method in a subclass that is already defined in its superclass",
      "Creating a method that can perform multiple operations",
      "Creating a method that overrides system functions"
    ],
    correctAnswer: 0,
    subject: "OOPS"
  },
  {
    id: 10,
    question: "What is the concept of 'this' keyword in OOP?",
    options: [
      "It refers to the current class",
      "It refers to the parent class",
      "It refers to the current object",
      "It refers to the main method"
    ],
    correctAnswer: 2,
    subject: "OOPS"
  },
  {
    id: 11,
    question: "What is a pure virtual function in C++?",
    options: [
      "A function that has no implementation",
      "A function that cannot be overridden",
      "A function that is declared private",
      "A function that returns void"
    ],
    correctAnswer: 0,
    subject: "OOPS"
  },
  {
    id: 12,
    question: "What does the 'final' keyword mean in Java when applied to a class?",
    options: [
      "The class must be initialized before use",
      "The class cannot be instantiated",
      "The class cannot be inherited from",
      "The class has only final methods"
    ],
    correctAnswer: 2,
    subject: "OOPS"
  },
  {
    id: 13,
    question: "What is the concept of composition in OOP?",
    options: [
      "A way to achieve multiple inheritance",
      "A relationship where one class contains objects of another class as its members",
      "A way to override parent class methods",
      "A type of constructor"
    ],
    correctAnswer: 1,
    subject: "OOPS"
  },
  {
    id: 14,
    question: "What is an interface in OOP?",
    options: [
      "A class with all private methods",
      "A collection of abstract methods and constants",
      "A class that cannot be inherited",
      "A graphical user interface component"
    ],
    correctAnswer: 1,
    subject: "OOPS"
  },
  {
    id: 15,
    question: "What is the purpose of a destructor in OOP?",
    options: [
      "To create objects of a class",
      "To destroy objects and free up resources",
      "To inherit from a base class",
      "To restrict access to class members"
    ],
    correctAnswer: 1,
    subject: "OOPS"
  }
];

// Combined quiz data for the original 10-question quiz
export const quizData: QuizQuestion[] = [
  // Selected questions from each subject to maintain the original 10 question quiz
  ...dbmsQuizData.slice(0, 3),
  ...osQuizData.slice(0, 3),
  ...cnQuizData.slice(0, 3),
  ...oopsQuizData.slice(0, 1)
];

