import React, { useState } from 'react';
import { CalendarDays, Clock, Sparkles, X } from 'lucide-react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import { plannerSubjectsSample, mockStudyPlan } from '../data/mockData.js';

export default function StudyPlanner() {
  const [examDate, setExamDate] = useState('');
  const [dailyTime, setDailyTime] = useState('2');
  const [subjects, setSubjects] = useState(plannerSubjectsSample);
  const [subjectInput, setSubjectInput] = useState('');
  const [generating, setGenerating] = useState(false);
  const [plan, setPlan] = useState(null);

  const addSubject = () => {
    const val = subjectInput.trim();
    if (val && !subjects.includes(val)) {
      setSubjects([...subjects, val]);
      setSubjectInput('');
    }
  };

  const removeSubject = (s) => setSubjects(subjects.filter((x) => x !== s));

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerating(true);
    setTimeout(() => {
      setPlan(mockStudyPlan);
      setGenerating(false);
    }, 900);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">AI Study Planner</h1>
        <p className="text-slate-500 mt-1">Get a personalized study plan with AI.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 h-fit">
          <form onSubmit={handleGenerate} className="space-y-4">
            <Input
              label="Exam Date"
              type="date"
              icon={CalendarDays}
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
            />
            <Input
              label="Daily Study Time (hours)"
              type="number"
              min={1}
              max={12}
              icon={Clock}
              value={dailyTime}
              onChange={(e) => setDailyTime(e.target.value)}
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Subjects / Topics
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  value={subjectInput}
                  onChange={(e) => setSubjectInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addSubject();
                    }
                  }}
                  placeholder="Add a subject..."
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition-base"
                />
                <Button type="button" variant="secondary" onClick={addSubject}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {subjects.map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1.5 text-xs font-medium bg-brand-50 text-brand-700 px-2.5 py-1.5 rounded-full"
                  >
                    {s}
                    <button
                      onClick={() => removeSubject(s)}
                      aria-label={`Remove ${s}`}
                      className="hover:text-brand-900"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" icon={Sparkles} disabled={generating}>
              {generating ? 'Generating…' : 'Generate Plan'}
            </Button>
          </form>
        </Card>

        <div className="lg:col-span-2">
          <Card>
            <h3 className="font-semibold text-slate-900 mb-5">Your Study Plan</h3>

            {!plan && !generating && (
              <div className="text-center py-16">
                <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 mx-auto">
                  <CalendarDays size={24} />
                </span>
                <h4 className="font-semibold text-slate-900 mb-1.5">No plan yet</h4>
                <p className="text-sm text-slate-500 max-w-xs mx-auto">
                  Fill in your exam date and subjects, then generate your plan.
                </p>
              </div>
            )}

            {generating && (
              <div className="text-center py-16">
                <div className="w-8 h-8 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-4 mx-auto" />
                <p className="text-sm text-slate-500">Building your study plan…</p>
              </div>
            )}

            {plan && (
              <ol className="relative border-l-2 border-brand-100 ml-3 space-y-8">
                {plan.map((d, i) => (
                  <li key={d.day} className="ml-6">
                    <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-brand-600 ring-4 ring-white" />
                    <p className="font-semibold text-slate-900 mb-2">{d.day}</p>
                    <div className="space-y-2">
                      {d.tasks.map((t) => (
                        <div
                          key={t.subject + t.topic}
                          className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-2.5"
                        >
                          <div>
                            <p className="text-sm font-medium text-slate-800">{t.subject}</p>
                            <p className="text-xs text-slate-500">{t.topic}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
