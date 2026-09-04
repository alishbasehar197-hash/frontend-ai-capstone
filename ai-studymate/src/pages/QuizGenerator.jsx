import React, { useState } from 'react';
import { Sparkles, ChevronRight, RotateCcw } from 'lucide-react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import QuizCard from '../components/QuizCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { mockQuiz, quizTopicsSample } from '../data/mockData.js';

export default function QuizGenerator() {
  const [form, setForm] = useState({
    topic: 'Computer Networks',
    type: 'MCQ',
    count: 10,
    difficulty: 'Medium',
  });
  const [generating, setGenerating] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerating(true);
    setTimeout(() => {
      setQuiz(mockQuiz);
      setCurrentIndex(0);
      setAnswers({});
      setRevealed(false);
      setGenerating(false);
    }, 900);
  };

  const question = quiz?.questions[currentIndex];
  const total = quiz?.questions.length || 0;

  const handleSelect = (idx) => {
    setAnswers((prev) => ({ ...prev, [question.id]: idx }));
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setRevealed(false);
    }
  };

  const handleRestart = () => {
    setQuiz(null);
    setCurrentIndex(0);
    setAnswers({});
    setRevealed(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Quiz Generator</h1>
        <p className="text-slate-500 mt-1">Generate quizzes on any topic instantly.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 h-fit">
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <Input
                label="Enter Topic"
                list="topic-suggestions"
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                placeholder="e.g. Computer Networks"
              />
              <datalist id="topic-suggestions">
                {quizTopicsSample.map((t) => (
                  <option key={t} value={t} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Quiz Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition-base bg-white"
              >
                <option>MCQ</option>
                <option>True / False</option>
                <option>Short Answer</option>
              </select>
            </div>

            <Input
              label="Number of Questions"
              type="number"
              min={1}
              max={30}
              value={form.count}
              onChange={(e) => setForm({ ...form, count: e.target.value })}
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Difficulty</label>
              <select
                value={form.difficulty}
                onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition-base bg-white"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <Button type="submit" className="w-full" size="lg" icon={Sparkles} disabled={generating}>
              {generating ? 'Generating…' : 'Generate Quiz'}
            </Button>
          </form>
        </Card>

        <div className="lg:col-span-2">
          {!quiz && !generating && (
            <Card className="h-full flex flex-col items-center justify-center text-center py-16">
              <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </span>
              <h3 className="font-semibold text-slate-900 mb-1.5">No quiz yet</h3>
              <p className="text-sm text-slate-500 max-w-xs">
                Fill in a topic and click "Generate Quiz" to see your questions here.
              </p>
            </Card>
          )}

          {generating && (
            <Card className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-8 h-8 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-4" />
              <p className="text-sm text-slate-500">Generating your quiz…</p>
            </Card>
          )}

          {quiz && question && (
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">
                  {quiz.topic} · {quiz.difficulty}
                </span>
                <span className="text-xs text-slate-400">
                  Question {currentIndex + 1} of {total}
                </span>
              </div>
              <ProgressBar value={((currentIndex + 1) / total) * 100} />

              <div className="mt-6">
                <QuizCard
                  question={question}
                  selectedIndex={answers[question.id]}
                  onSelect={handleSelect}
                  revealed={revealed}
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Button variant="ghost" icon={RotateCcw} onClick={handleRestart}>
                  Restart
                </Button>
                <Button
                  icon={ChevronRight}
                  iconPosition="right"
                  onClick={handleNext}
                  disabled={!revealed || currentIndex === total - 1}
                >
                  {currentIndex === total - 1 ? 'Finished' : 'Next'}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
