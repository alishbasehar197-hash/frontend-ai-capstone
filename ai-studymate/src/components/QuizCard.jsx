import React from 'react';
import { Check, X as XIcon } from 'lucide-react';

export default function QuizCard({ question, selectedIndex, onSelect, revealed }) {
  return (
    <div>
      <p className="font-medium text-slate-900 mb-4">{question.question}</p>
      <div className="space-y-2.5">
        {question.options.map((opt, idx) => {
          const isCorrect = idx === question.correctIndex;
          const isSelected = idx === selectedIndex;
          let stateClasses = 'border-slate-200 hover:border-brand-300 hover:bg-brand-50';
          if (revealed) {
            if (isCorrect) stateClasses = 'border-emerald-300 bg-emerald-50 text-emerald-800';
            else if (isSelected && !isCorrect) stateClasses = 'border-red-300 bg-red-50 text-red-700';
            else stateClasses = 'border-slate-200 opacity-60';
          } else if (isSelected) {
            stateClasses = 'border-brand-400 bg-brand-50';
          }
          return (
            <button
              key={idx}
              onClick={() => !revealed && onSelect(idx)}
              disabled={revealed}
              className={`w-full text-left flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-base ${stateClasses}`}
            >
              <span>
                <span className="font-semibold mr-2 text-slate-400">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {opt}
              </span>
              {revealed && isCorrect && <Check size={16} className="text-emerald-600 shrink-0" />}
              {revealed && isSelected && !isCorrect && (
                <XIcon size={16} className="text-red-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
