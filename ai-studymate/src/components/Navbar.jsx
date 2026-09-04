import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import Button from './Button.jsx';

const links = [
  { to: '/#features', label: 'Features' },
  { to: '/#how-it-works', label: 'How It Works' },
  { to: '/#pricing', label: 'Pricing' },
  { to: '/#about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center">
            <GraduationCap size={18} />
          </span>
          <span className="font-bold text-slate-900 text-[15px]">AI StudyMate</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-base"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-base px-2"
          >
            Login
          </button>
          <Button size="md" onClick={() => navigate('/signup')}>
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-slate-600"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-600 py-1"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button className="flex-1" onClick={() => navigate('/signup')}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
