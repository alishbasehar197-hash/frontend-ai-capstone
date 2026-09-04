import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, LogOut, Sun, Moon, Camera } from 'lucide-react';
import Card from '../components/Card.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import { currentUser } from '../data/mockData.js';

function Toggle({ checked, onChange, label }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`w-11 h-6 rounded-full transition-base relative shrink-0 ${
        checked ? 'bg-brand-600' : 'bg-slate-200'
      }`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
          checked ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </button>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [notifications, setNotifications] = useState(true);
  const [emailReminders, setEmailReminders] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account and preferences.</p>
      </div>

      <Card>
        <h3 className="font-semibold text-slate-900 mb-5">Profile</h3>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <span className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center text-xl font-semibold">
              {currentUser.avatarInitials}
            </span>
            <button
              aria-label="Change profile picture"
              className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 transition-base"
            >
              <Camera size={13} />
            </button>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-800">Profile picture</p>
            <p className="text-xs text-slate-400">JPG or PNG, max 2MB (demo only)</p>
          </div>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Name" icon={User} value={name} onChange={(e) => setName(e.target.value)} />
            <Input
              label="Email"
              type="email"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit">{saved ? 'Saved ✓' : 'Save Changes'}</Button>
        </form>
      </Card>

      <Card>
        <h3 className="font-semibold text-slate-900 mb-5">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-800">Notifications</p>
              <p className="text-xs text-slate-500">Get notified about study reminders and updates.</p>
            </div>
            <Toggle checked={notifications} onChange={setNotifications} label="Notifications" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-800">Email Reminders</p>
              <p className="text-xs text-slate-500">Receive daily study reminders via email.</p>
            </div>
            <Toggle checked={emailReminders} onChange={setEmailReminders} label="Email reminders" />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold text-slate-900 mb-5">Appearance</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {darkMode ? <Moon size={18} className="text-brand-600" /> : <Sun size={18} className="text-brand-600" />}
            <div>
              <p className="text-sm font-medium text-slate-800">{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
              <p className="text-xs text-slate-500">AI StudyMate looks best in light mode.</p>
            </div>
          </div>
          <Toggle checked={darkMode} onChange={setDarkMode} label="Dark mode" />
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold text-slate-900 mb-5">Account</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" icon={Lock} className="flex-1 justify-center">
            Change Password
          </Button>
          <Button
            variant="outline"
            icon={LogOut}
            className="flex-1 justify-center text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
            onClick={() => navigate('/login')}
          >
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
}
