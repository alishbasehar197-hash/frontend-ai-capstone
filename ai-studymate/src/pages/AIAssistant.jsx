import React, { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import Card from '../components/Card.jsx';
import AIMessage from '../components/AIMessage.jsx';
import { chatSuggestedPrompts, initialChatMessages, getMockAIReply } from '../data/mockData.js';

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialChatMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = { id: Date.now() + 1, role: 'ai', text: getMockAIReply(trimmed) };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">AI Study Assistant</h1>
        <p className="text-slate-500 mt-1">Ask me anything. I'm here to help!</p>
      </div>

      <Card className="flex-1 flex flex-col min-h-0 p-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {messages.map((m) => (
            <AIMessage key={m.id} role={m.role} text={m.text} />
          ))}
          {isTyping && (
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                <Sparkles size={16} />
              </span>
              <div className="bg-brand-50 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-bounce" />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="border-t border-slate-100 p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {chatSuggestedPrompts.map((p) => (
              <button
                key={p}
                onClick={() => sendMessage(p)}
                className="text-xs font-medium text-brand-700 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-full transition-base"
              >
                {p}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              aria-label="Ask AI StudyMate a question"
              className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition-base"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim()}
              className="w-10 h-10 shrink-0 rounded-xl bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 disabled:bg-brand-300 transition-base"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
