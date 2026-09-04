import React, { useState } from 'react';
import { Copy, Download, FileText, Upload, Sparkles, Check } from 'lucide-react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import { sampleNotesText, mockSummary } from '../data/mockData.js';

export default function NotesSummarizer() {
  const [tab, setTab] = useState('paste');
  const [text, setText] = useState(sampleNotesText);
  const [summarizing, setSummarizing] = useState(false);
  const [summary, setSummary] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSummarize = () => {
    if (!text.trim()) return;
    setSummarizing(true);
    setTimeout(() => {
      setSummary(mockSummary);
      setSummarizing(false);
    }, 900);
  };

  const handleCopy = async () => {
    if (!summary) return;
    const content = [
      summary.mainIdea,
      '',
      'Important points:',
      ...summary.points.map((p) => `- ${p}`),
      '',
      `Key terms: ${summary.keyTerms.join(', ')}`,
    ].join('\n');
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard may be unavailable in some environments; fail silently
    }
  };

  const handleDownload = () => {
    if (!summary) return;
    const content = [
      'AI StudyMate — Notes Summary',
      '',
      summary.mainIdea,
      '',
      'Important points:',
      ...summary.points.map((p) => `- ${p}`),
      '',
      `Key terms: ${summary.keyTerms.join(', ')}`,
    ].join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes-summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Notes Summarizer</h1>
        <p className="text-slate-500 mt-1">Summarize your notes into key points.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex gap-2 mb-4 bg-slate-100 rounded-xl p-1 w-fit">
            <button
              onClick={() => setTab('paste')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-base ${
                tab === 'paste' ? 'bg-white text-brand-700 shadow-soft' : 'text-slate-500'
              }`}
            >
              Paste Text
            </button>
            <button
              onClick={() => setTab('upload')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-base ${
                tab === 'upload' ? 'bg-white text-brand-700 shadow-soft' : 'text-slate-500'
              }`}
            >
              Upload File
            </button>
          </div>

          {tab === 'paste' ? (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={14}
              placeholder="Paste your notes here..."
              className="w-full rounded-xl border border-slate-200 p-4 text-sm leading-relaxed outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition-base resize-none"
            />
          ) : (
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl h-72 cursor-pointer hover:border-brand-300 hover:bg-brand-50/40 transition-base"
            >
              <Upload size={28} className="text-slate-400 mb-3" />
              <p className="text-sm font-medium text-slate-600">Click to upload a file</p>
              <p className="text-xs text-slate-400 mt-1">.txt, .pdf, .docx (demo — no upload processing)</p>
              <input id="file-upload" type="file" className="hidden" />
            </label>
          )}

          <Button
            className="w-full mt-4"
            size="lg"
            icon={Sparkles}
            onClick={handleSummarize}
            disabled={summarizing}
          >
            {summarizing ? 'Summarizing…' : 'Summarize'}
          </Button>
        </Card>

        <Card className="min-h-[24rem]">
          {!summary && !summarizing && (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <FileText size={24} />
              </span>
              <h3 className="font-semibold text-slate-900 mb-1.5">No summary yet</h3>
              <p className="text-sm text-slate-500 max-w-xs">
                Your summary will appear here once you click "Summarize".
              </p>
            </div>
          )}

          {summarizing && (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-8 h-8 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-4" />
              <p className="text-sm text-slate-500">Reading through your notes…</p>
            </div>
          )}

          {summary && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Summary</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    aria-label="Copy summary"
                    className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-300 transition-base"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                  <button
                    onClick={handleDownload}
                    aria-label="Download summary"
                    className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-300 transition-base"
                  >
                    <Download size={15} />
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1.5">Main Idea</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{summary.mainIdea}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1.5">Important Points</p>
                  <ul className="space-y-1.5">
                    {summary.points.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <span className="text-brand-500 mt-0.5">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1.5">Key Terms</p>
                  <div className="flex flex-wrap gap-2">
                    {summary.keyTerms.map((t) => (
                      <span key={t} className="text-xs font-medium bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
