import React from 'react';
import ProgressBar from './ProgressBar.jsx';
import { BookOpen } from 'lucide-react';

export default function SubjectCard({ name, progress, color }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-5 hover:shadow-card transition-base">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}1A`, color }}
        >
          <BookOpen size={18} />
        </span>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{name}</p>
          <p className="text-xs text-slate-500">{progress}% complete</p>
        </div>
      </div>
      <ProgressBar value={progress} color={color} />
    </div>
  );
}
