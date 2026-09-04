import React from 'react';

export default function ProgressBar({ value = 0, color = '#7c3aed', height = 8, showLabel = false }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full">
      <div
        className="w-full bg-slate-100 rounded-full overflow-hidden"
        style={{ height }}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${clamped}%`, backgroundColor: color }}
        />
      </div>
      {showLabel && <div className="text-xs text-slate-500 mt-1">{clamped}%</div>}
    </div>
  );
}
