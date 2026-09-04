import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Bot,
  ListChecks,
  FileText,
  CalendarDays,
  TrendingUp,
  Bookmark,
  Settings as SettingsIcon,
  LogOut,
  GraduationCap,
  X,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/assistant', label: 'AI Assistant', icon: Bot },
  { to: '/quiz-generator', label: 'Quiz Generator', icon: ListChecks },
  { to: '/notes-summarizer', label: 'Notes Summarizer', icon: FileText },
  { to: '/study-planner', label: 'Study Planner', icon: CalendarDays },
  { to: '/progress', label: 'Progress', icon: TrendingUp },
  { to: '/bookmarks', label: 'Bookmarks', icon: Bookmark },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
];

export default function Sidebar({ mobileOpen, onCloseMobile }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onCloseMobile?.();
    navigate('/login');
  };

  const content = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
        <NavLink to="/dashboard" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center">
            <GraduationCap size={18} />
          </span>
          <span className="font-bold text-slate-900 text-[15px]">AI StudyMate</span>
        </NavLink>
        <button
          className="lg:hidden text-slate-400 hover:text-slate-700"
          onClick={onCloseMobile}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onCloseMobile}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-base ${
                isActive
                  ? 'bg-brand-600 text-white shadow-soft'
                  : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-slate-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-base"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 border-r border-slate-100 bg-white h-screen sticky top-0">
        {content}
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-card animate-in slide-in-from-left duration-200">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
