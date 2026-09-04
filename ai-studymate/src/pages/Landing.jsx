import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bot,
  ListChecks,
  FileText,
  CalendarDays,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const features = [
  {
    icon: Bot,
    title: 'AI Assistant',
    desc: 'Get instant answers and explanations for any topic.',
  },
  {
    icon: ListChecks,
    title: 'Quiz Generator',
    desc: 'Generate quizzes instantly on any topic.',
  },
  {
    icon: FileText,
    title: 'Notes Summarizer',
    desc: 'Summarize long notes into key points.',
  },
  {
    icon: CalendarDays,
    title: 'Study Planner',
    desc: 'Get a personalized study plan with AI.',
  },
];

const steps = [
  { n: '1', title: 'Enter your topic', desc: 'Tell AI StudyMate what you want to learn or revise.' },
  { n: '2', title: 'Let AI help you', desc: 'Get explanations, quizzes, summaries and plans in seconds.' },
  { n: '3', title: 'Learn and track your progress', desc: 'Study with a plan and watch your progress grow.' },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    features: ['5 AI chats per day', 'Basic quiz generator', '1 study plan', 'Progress tracking'],
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    highlight: true,
    features: [
      'Unlimited AI chats',
      'Unlimited quizzes',
      'Unlimited study plans',
      'Notes summarizer',
      'Priority support',
    ],
  },
  {
    name: 'Team',
    price: '$29',
    period: '/month',
    features: ['Everything in Pro', 'Up to 10 members', 'Shared study plans', 'Team progress dashboard'],
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <Sparkles size={14} /> Powered by AI
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Your AI-Powered Study Companion
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Learn smarter, not harder. Get instant help, summaries, quizzes and
              personalized study plans with AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" icon={ArrowRight} iconPosition="right" onClick={() => navigate('/signup')}>
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-brand-600" /> No credit card required
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-brand-600" /> Free forever plan
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl2 bg-white border border-brand-100 shadow-card p-6 max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                  <Bot size={16} />
                </span>
                <p className="font-semibold text-slate-900 text-sm">AI Study Assistant</p>
              </div>
              <div className="space-y-3">
                <div className="bg-brand-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 ml-8">
                  Explain Operating System in simple words.
                </div>
                <div className="bg-brand-50 text-slate-700 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 mr-4">
                  An OS is system software that bridges the user and the hardware —
                  managing memory, CPU, files and devices.
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Quizzes Taken</p>
                  <p className="text-lg font-bold text-slate-900">18</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Study Streak</p>
                  <p className="text-lg font-bold text-slate-900">7 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Powerful Features</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to study more effectively, all in one place.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="hover:shadow-card transition-base hover:-translate-y-0.5">
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <f.icon size={20} />
              </span>
              <h3 className="font-semibold text-slate-900 mb-1.5">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-brand-50/50 py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600">Three simple steps to a smarter study routine.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {s.n}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade anytime as your study needs grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 border ${
                p.highlight
                  ? 'border-brand-300 bg-white shadow-card ring-2 ring-brand-100'
                  : 'border-slate-100 bg-white shadow-soft'
              }`}
            >
              {p.highlight && (
                <span className="inline-block text-xs font-semibold text-brand-700 bg-brand-100 px-2.5 py-1 rounded-full mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 mb-4">
                <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                <span className="text-slate-500 text-sm">{p.period}</span>
              </p>
              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-brand-600 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={p.highlight ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => navigate('/signup')}
              >
                Choose {p.name}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About AI StudyMate</h2>
          <p className="text-slate-600">
            AI StudyMate was built to make studying feel less overwhelming. By combining an
            AI assistant, quiz generator, notes summarizer and study planner in one clean
            workspace, students can spend less time organizing and more time actually
            learning.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
        <div className="rounded-2xl2 bg-brand-600 text-white text-center px-8 py-14 rounded-3xl">
          <h2 className="text-3xl font-bold mb-3">Ready to study smarter?</h2>
          <p className="text-brand-100 mb-8 max-w-md mx-auto">
            Join thousands of students already learning faster with AI StudyMate.
          </p>
          <Button
            size="lg"
            className="bg-white !text-brand-700 hover:bg-brand-50"
            onClick={() => navigate('/signup')}
          >
            Start Learning
          </Button>
        </div>
      </section>
    </div>
  );
}
