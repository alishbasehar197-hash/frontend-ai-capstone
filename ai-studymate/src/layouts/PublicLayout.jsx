import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { GraduationCap } from 'lucide-react';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                <GraduationCap size={18} />
              </span>
              <span className="font-bold text-slate-900 text-[15px]">AI StudyMate</span>
            </div>
            <p className="text-sm text-slate-500">Your AI-powered study companion.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-3">Product</p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/#features" className="hover:text-brand-700">Features</a></li>
              <li><a href="/#pricing" className="hover:text-brand-700">Pricing</a></li>
              <li><a href="/#how-it-works" className="hover:text-brand-700">How It Works</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-3">Company</p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/#about" className="hover:text-brand-700">About</a></li>
              <li><a href="#" className="hover:text-brand-700">Careers</a></li>
              <li><a href="#" className="hover:text-brand-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-700">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-700">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} AI StudyMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
