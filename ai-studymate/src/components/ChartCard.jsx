import React from 'react';
import Card from './Card.jsx';

export default function ChartCard({ title, subtitle, action, children }) {
  return (
    <Card>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="w-full h-64">{children}</div>
    </Card>
  );
}
