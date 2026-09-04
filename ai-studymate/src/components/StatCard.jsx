import React from 'react';
import Card from './Card.jsx';

export default function StatCard({ icon: Icon, label, value, delta }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        {Icon && (
          <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Icon size={18} />
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      {delta && <div className="text-xs font-medium text-emerald-600">{delta}</div>}
    </Card>
  );
}
