// All mock/local data used across AI StudyMate.
// No backend, no real API calls — everything here is static/demo data.

export const currentUser = {
  name: 'Alishba Khan',
  email: 'alishba.khan@example.com',
  avatarInitials: 'AK',
};

export const dashboardStats = [
  { id: 'topics', label: 'Topics Studied', value: '24', delta: '+12 this week' },
  { id: 'quizzes', label: 'Quizzes Taken', value: '18', delta: '+7 this week' },
  { id: 'time', label: 'Study Time', value: '14h 30m', delta: '+4h this week' },
  { id: 'streak', label: 'Study Streak', value: '7 Days', delta: 'Keep it up!' },
];

export const todaysPlan = [
  { id: 1, topic: 'Operating System', time: '9:00 AM · 45 min', done: true },
  { id: 2, topic: 'Database Normalization', time: '11:00 AM · 30 min', done: false },
  { id: 3, topic: 'Computer Networks', time: '2:00 PM · 40 min', done: false },
  { id: 4, topic: 'Data Structures', time: '5:00 PM · 50 min', done: false },
];

export const weeklyProgress = [
  { day: 'Mon', hours: 1.5 },
  { day: 'Tue', hours: 2.2 },
  { day: 'Wed', hours: 1.8 },
  { day: 'Thu', hours: 2.6 },
  { day: 'Fri', hours: 1.2 },
  { day: 'Sat', hours: 3.1 },
  { day: 'Sun', hours: 2.1 },
];

export const subjects = [
  { id: 'os', name: 'Operating System', progress: 75, color: '#7c3aed' },
  { id: 'dbms', name: 'DBMS', progress: 60, color: '#a78bfa' },
  { id: 'cn', name: 'Computer Networks', progress: 80, color: '#8b5cf6' },
  { id: 'ds', name: 'Data Structures', progress: 50, color: '#c4b5fd' },
];

export const aiRecommendation = {
  message:
    "You seem to need more practice in Database Normalization. Would you like to study this topic today?",
  cta: "Let's Start",
};

export const chatSuggestedPrompts = [
  'Explain a topic',
  'Give me an example',
  'Summarize this',
  'Create quiz questions',
];

export const initialChatMessages = [
  {
    id: 1,
    role: 'user',
    text: 'Explain Operating System in simple words.',
  },
  {
    id: 2,
    role: 'ai',
    text:
      "An Operating System is system software that acts as a bridge between the user and computer hardware. It manages resources such as CPU, memory, files and devices — so every app you open is really just talking to the OS, which talks to the hardware for it.",
  },
  {
    id: 3,
    role: 'user',
    text: 'Can you give a real-life example of that?',
  },
  {
    id: 4,
    role: 'ai',
    text:
      "Sure! Think of the OS like a hotel manager. Guests (apps) ask the manager for a room (memory) or room service (CPU time). The manager decides who gets what and when, so guests never have to deal with the hotel's plumbing or wiring directly — that's the hardware.",
  },
];

const mockAIResponses = [
  "That's a great question. Let's break it down step by step so it's easy to follow.",
  "Here's a simple way to think about it: focus on the core definition first, then look at a real example.",
  "Good topic to review before your exam. Here's a short explanation with an example.",
  "Let's simplify this. I'll explain the concept, then show how it's typically asked in exams.",
];

export function getMockAIReply(userText) {
  const idx = userText.length % mockAIResponses.length;
  return `${mockAIResponses[idx]} (Regarding: "${userText.slice(0, 60)}${
    userText.length > 60 ? '…' : ''
  }")`;
}

export const quizTopicsSample = [
  'Computer Networks',
  'Operating System',
  'Data Structures',
  'DBMS',
  'Algorithms',
];

export const mockQuiz = {
  topic: 'Computer Networks',
  difficulty: 'Medium',
  questions: [
    {
      id: 1,
      question: 'What is the full form of TCP?',
      options: [
        'Transmission Control Protocol',
        'Transfer Control Protocol',
        'Transmission Communication Protocol',
        'Transform Control Process',
      ],
      correctIndex: 0,
    },
    {
      id: 2,
      question: 'Which layer of the OSI model is responsible for routing?',
      options: ['Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer'],
      correctIndex: 1,
    },
    {
      id: 3,
      question: 'What does DNS stand for?',
      options: [
        'Domain Name System',
        'Data Network Service',
        'Domain Network Server',
        'Digital Naming System',
      ],
      correctIndex: 0,
    },
    {
      id: 4,
      question: 'Which protocol is used to send email?',
      options: ['FTP', 'HTTP', 'SMTP', 'SNMP'],
      correctIndex: 2,
    },
    {
      id: 5,
      question: 'What is the default port number for HTTPS?',
      options: ['21', '80', '443', '8080'],
      correctIndex: 2,
    },
  ],
};

export const sampleNotesText = `Artificial Intelligence (AI) is a branch of computer science focused on building systems capable of performing tasks that normally require human intelligence. These tasks include learning from data, recognizing patterns, understanding language, and making decisions.

AI can be broadly divided into Narrow AI, which is designed for a specific task such as facial recognition or recommendation systems, and General AI, which would have the ability to understand and reason across any domain the way a human can. Most AI systems in use today are examples of Narrow AI.

Machine Learning, a core subfield of AI, allows systems to improve their performance automatically through experience rather than being explicitly programmed for every scenario. Deep Learning, a further subfield of Machine Learning, uses layered neural networks to process large amounts of data and has driven major advances in image recognition, speech processing, and natural language understanding.

AI is now used across industries including healthcare, finance, education, and transportation, and continues to raise important questions around ethics, bias, and the future of work.`;

export const mockSummary = {
  mainIdea:
    'Artificial Intelligence enables computer systems to perform tasks that typically require human intelligence, such as learning, reasoning and understanding language.',
  points: [
    'AI is divided into Narrow AI (task-specific) and General AI (human-like reasoning across domains).',
    'Most AI systems used today are Narrow AI, built for a single specific task.',
    'Machine Learning lets systems improve automatically through experience instead of manual programming.',
    'Deep Learning uses layered neural networks and powers image, speech and language understanding.',
    'AI is widely applied in healthcare, finance, education and transportation.',
  ],
  keyTerms: ['Artificial Intelligence', 'Narrow AI', 'General AI', 'Machine Learning', 'Deep Learning'],
};

export const plannerSubjectsSample = ['Operating System', 'DBMS', 'Computer Networks', 'Data Structures'];

export const mockStudyPlan = [
  {
    day: 'Day 1',
    tasks: [
      { subject: 'Operating System', topic: 'Basics & Definitions' },
      { subject: 'Computer Networks', topic: 'Basics & OSI Model' },
    ],
  },
  {
    day: 'Day 2',
    tasks: [
      { subject: 'DBMS', topic: 'Overview & ER Diagrams' },
      { subject: 'Data Structures', topic: 'Arrays & Strings' },
    ],
  },
  {
    day: 'Day 3',
    tasks: [
      { subject: 'Operating System', topic: 'Processes & Threads' },
      { subject: 'Computer Networks', topic: 'TCP/IP Protocol Suite' },
    ],
  },
  {
    day: 'Day 4',
    tasks: [
      { subject: 'DBMS', topic: 'Normalization (1NF–3NF)' },
      { subject: 'Data Structures', topic: 'Linked Lists' },
    ],
  },
  {
    day: 'Day 5',
    tasks: [
      { subject: 'Operating System', topic: 'Scheduling Algorithms' },
      { subject: 'Computer Networks', topic: 'Routing & Switching' },
    ],
  },
];

export const progressStats = [
  { id: 'time', label: 'Total Study Time', value: '48h 20m' },
  { id: 'topics', label: 'Topics Completed', value: '32' },
  { id: 'quizzes', label: 'Quizzes Taken', value: '42' },
  { id: 'score', label: 'Average Score', value: '78%' },
];

export const weeklyStudyBar = [
  { day: 'Mon', hours: 2 },
  { day: 'Tue', hours: 3.2 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 2.8 },
  { day: 'Fri', hours: 3.6 },
  { day: 'Sat', hours: 4.1 },
  { day: 'Sun', hours: 2.4 },
];

export const recentActivity = [
  { id: 1, text: 'Completed quiz on Computer Networks', time: '2 hours ago' },
  { id: 2, text: 'Summarized notes on Artificial Intelligence', time: '5 hours ago' },
  { id: 3, text: 'Finished Operating System — Scheduling Algorithms', time: 'Yesterday' },
  { id: 4, text: 'Generated a 5-day study plan', time: '2 days ago' },
  { id: 5, text: 'Reviewed Database Normalization flashcards', time: '3 days ago' },
];

export const bookmarks = [
  { id: 1, title: 'TCP/IP Protocol Suite — Notes Summary', type: 'Summary' },
  { id: 2, title: 'Database Normalization — Quiz (8/10)', type: 'Quiz' },
  { id: 3, title: 'Operating System Scheduling — AI Chat', type: 'Chat' },
];
