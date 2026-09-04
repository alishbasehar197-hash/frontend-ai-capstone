import React from 'react';

export default function Card({ children, className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`bg-white rounded-2xl border border-slate-100 shadow-soft p-6 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
