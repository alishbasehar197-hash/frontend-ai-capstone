import React from 'react';
import { Sparkles, User } from 'lucide-react';

export default function AIMessage({ role, text }) {
  const isAI = role === 'ai';
  return (
    <div className={`flex items-start gap-3 ${isAI ? '' : 'flex-row-reverse'}`}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
          isAI ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'
        }`}
      >
        {isAI ? <Sparkles size={16} /> : <User size={16} />}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAI
            ? 'bg-brand-50 text-slate-800 rounded-tl-sm'
            : 'bg-brand-600 text-white rounded-tr-sm'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
