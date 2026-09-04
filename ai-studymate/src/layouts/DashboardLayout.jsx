import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import { Bell, Menu, Search } from 'lucide-react';
import { currentUser } from '../data/mockData.js';

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-100 sticky top-0 z-30 flex items-center gap-4 px-4 sm:px-6">
          <button
            className="lg:hidden text-slate-500"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <div className="flex-1 max-w-md relative hidden sm:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics, quizzes, notes..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-sm outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition-base"
              aria-label="Search"
            />
          </div>

          <div className="flex-1 sm:hidden" />

          <button
            className="relative text-slate-500 hover:text-brand-600 transition-base"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-600" />
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-100">
            <span className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-semibold">
              {currentUser.avatarInitials}
            </span>
            <span className="hidden sm:block text-sm font-medium text-slate-700">
              {currentUser.name}
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
