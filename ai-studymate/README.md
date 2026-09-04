# AI StudyMate

An AI-powered study companion — frontend demo built with React, Vite, Tailwind CSS,
React Router, Lucide icons and Recharts. All AI responses and statistics are mock/local
data; there is no backend, database, or real API key required.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Reusable UI building blocks (Button, Card, Sidebar, QuizCard, ...)
  layouts/      PublicLayout (marketing pages) and DashboardLayout (app shell)
  pages/        One file per route (Landing, Login, Dashboard, AI Assistant, ...)
  data/         mockData.js — all mock content used across the app
```

## Pages

- `/` — Landing page
- `/login`, `/signup` — Auth pages
- `/dashboard` — Stats, today's plan, weekly chart, AI recommendation
- `/assistant` — AI chat (mock responses)
- `/quiz-generator` — Generate and take a mock quiz
- `/notes-summarizer` — Paste notes and get a mock summary
- `/study-planner` — Generate a mock multi-day study plan
- `/progress` — Charts and subject progress
- `/bookmarks`, `/settings`
