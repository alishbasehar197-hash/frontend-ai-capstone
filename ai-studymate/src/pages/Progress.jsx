import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Clock, BookOpen, ListChecks, Target, Activity } from 'lucide-react';
import Card from '../components/Card.jsx';
import StatCard from '../components/StatCard.jsx';
import ChartCard from '../components/ChartCard.jsx';
import SubjectCard from '../components/SubjectCard.jsx';
import { progressStats, weeklyStudyBar, subjects, recentActivity } from '../data/mockData.js';

const statIcons = { time: Clock, topics: BookOpen, quizzes: ListChecks, score: Target };

export default function Progress() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Your Progress</h1>
        <p className="text-slate-500 mt-1">Track your learning journey.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {progressStats.map((s) => (
          <StatCard key={s.id} icon={statIcons[s.id]} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ChartCard title="Weekly Study Time" subtitle="Hours studied per day this week">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyStudyBar} margin={{ left: -20, right: 10, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: '1px solid #f1f5f9', fontSize: 13 }}
                  formatter={(v) => [`${v}h`, 'Study time']}
                  cursor={{ fill: '#f5f3ff' }}
                />
                <Bar dataKey="hours" fill="#7c3aed" radius={[6, 6, 0, 0]} maxBarSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <Card>
            <h3 className="font-semibold text-slate-900 mb-4">Subject Progress</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {subjects.map((s) => (
                <SubjectCard key={s.id} {...s} />
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Activity size={18} className="text-brand-600" />
            <h3 className="font-semibold text-slate-900">Recent Activity</h3>
          </div>
          <ul className="space-y-4">
            {recentActivity.map((a) => (
              <li key={a.id} className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-700">{a.text}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
