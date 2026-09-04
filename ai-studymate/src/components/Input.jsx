import React from 'react';

export default function Input({ label, icon: Icon, error, className = '', id, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon size={18} />
          </span>
        )}
        <input
          id={inputId}
          className={`w-full rounded-xl border ${
            error ? 'border-red-300 focus:border-red-400' : 'border-slate-200 focus:border-brand-400'
          } bg-white ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-base focus:ring-4 focus:ring-brand-100 ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}
