import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';

import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AIAssistant from './pages/AIAssistant.jsx';
import QuizGenerator from './pages/QuizGenerator.jsx';
import NotesSummarizer from './pages/NotesSummarizer.jsx';
import StudyPlanner from './pages/StudyPlanner.jsx';
import Progress from './pages/Progress.jsx';
import Settings from './pages/Settings.jsx';
import Bookmarks from './pages/Bookmarks.jsx';

export default function App() {
  return (
    <Routes>
      {/* Public marketing pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      {/* Auth pages (no navbar/footer chrome) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* App pages behind the sidebar layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assistant" element={<AIAssistant />} />
        <Route path="/quiz-generator" element={<QuizGenerator />} />
        <Route path="/notes-summarizer" element={<NotesSummarizer />} />
        <Route path="/study-planner" element={<StudyPlanner />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
