import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { BookOpen, ListChecks, Clock, Flame, Sparkles, Check } from 'lucide-react';
import StatCard from '../components/StatCard.jsx';
import Card from '../components/Card.jsx';
import ChartCard from '../components/ChartCard.jsx';
import SubjectCard from '../components/SubjectCard.jsx';
import Button from '../components/Button.jsx';
import {
  dashboardStats,
  todaysPlan,
  weeklyProgress,
  subjects,
  aiRecommendation,
  currentUser,
} from '../data/mockData.js';

const statIcons = { topics: BookOpen, quizzes: ListChecks, time: Clock, streak: Flame };

export default function Dashboard() {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(todaysPlan);

  const toggleTask = (id) => {
    setPlan((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Hello, {currentUser.name.split(' ')[0]} 👋
        </h1>
        <p className="text-slate-500 mt-1">Let's make today productive!</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((s) => (
          <StatCard key={s.id} icon={statIcons[s.id]} label={s.label} value={s.value} delta={s.delta} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ChartCard title="Weekly Progress" subtitle="Hours studied per day this week">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyProgress} margin={{ left: -20, right: 10, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: '1px solid #f1f5f9', fontSize: 13 }}
                  formatter={(v) => [`${v}h`, 'Study time']}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#7c3aed"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#7c3aed' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <Card>
            <h3 className="font-semibold text-slate-900 mb-4">Continue Learning</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {subjects.map((s) => (
                <SubjectCard key={s.id} {...s} />
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="font-semibold text-slate-900 mb-4">Today's Plan</h3>
            <ul className="space-y-3">
              {plan.map((task) => (
                <li key={task.id} className="flex items-start gap-3">
                  <button
                    onClick={() => toggleTask(task.id)}
                    aria-label={task.done ? `Mark ${task.topic} incomplete` : `Mark ${task.topic} complete`}
                    className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-base ${
                      task.done ? 'bg-brand-600 border-brand-600 text-white' : 'border-slate-300 hover:border-brand-400'
                    }`}
                  >
                    {task.done && <Check size={12} />}
                  </button>
                  <div>
                    <p className={`text-sm font-medium ${task.done ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                      {task.topic}
                    </p>
                    <p className="text-xs text-slate-400">{task.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-brand-600 border-none text-white">
            <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center mb-3">
              <Sparkles size={18} />
            </span>
            <h3 className="font-semibold mb-2">AI Recommendation for You</h3>
            <p className="text-sm text-brand-100 mb-4">{aiRecommendation.message}</p>
            <Button
              className="bg-white !text-brand-700 hover:bg-brand-50 w-full"
              onClick={() => navigate('/assistant')}
            >
              {aiRecommendation.cta}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
