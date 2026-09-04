import React from 'react';
import { Bookmark, Bot, FileText, ListChecks } from 'lucide-react';
import Card from '../components/Card.jsx';
import { bookmarks } from '../data/mockData.js';

const typeIcons = { Summary: FileText, Quiz: ListChecks, Chat: Bot };

export default function Bookmarks() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Bookmarks</h1>
        <p className="text-slate-500 mt-1">Everything you've saved for later.</p>
      </div>

      {bookmarks.length === 0 ? (
        <Card className="text-center py-16">
          <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 mx-auto">
            <Bookmark size={24} />
          </span>
          <h3 className="font-semibold text-slate-900 mb-1.5">No bookmarks yet</h3>
          <p className="text-sm text-slate-500 max-w-xs mx-auto">
            Save chats, quizzes and summaries to find them here later.
          </p>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {bookmarks.map((b) => {
            const Icon = typeIcons[b.type] || Bookmark;
            return (
              <Card key={b.id} className="flex items-start gap-3 hover:shadow-card transition-base">
                <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800">{b.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{b.type}</p>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
