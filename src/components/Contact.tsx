import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const RATE_LIMIT_STORAGE_KEY = 'portfolio_direct_msg_cooldowns';
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 hour in milliseconds

interface CooldownRecords {
  [email: string]: number;
}

const getStoredCooldowns = (): CooldownRecords => {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const getRemainingMinutes = (email: string): number => {
  if (!email || !email.includes('@')) return 0;
  const cooldowns = getStoredCooldowns();
  const lastSentTime = cooldowns[email.trim().toLowerCase()];
  if (!lastSentTime) return 0;
  const elapsed = Date.now() - lastSentTime;
  if (elapsed < ONE_DAY_MS) {
  return Math.ceil((ONE_DAY_MS - elapsed) / (60 * 1000));
}
  return 0;
};

const recordSentEmail = (email: string) => {
  try {
    const cooldowns = getStoredCooldowns();
    cooldowns[email.trim().toLowerCase()] = Date.now();
    localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(cooldowns));
  } catch {
    // Gracefully handle storage disabled/quota
  }
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldownMinutes, setCooldownMinutes] = useState(0);
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState('');

  // Check rate limit in real time whenever the email field changes
  useEffect(() => {
    const remaining = getRemainingMinutes(formData.email);
    setCooldownMinutes(remaining);
  }, [formData.email]);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Strict 1 email per hour per email id rate limit check
    const remaining = getRemainingMinutes(trimmedEmail);
    if (remaining > 0) {
      setCooldownMinutes(remaining);
      setErrorMessage(
        `Rate limit active: Only 1 message per 24 hours is allowed per email address. Please wait ${remaining} minute${
          remaining > 1 ? 's' : ''
        } before sending another message from ${trimmedEmail}, or contact directly at ${PERSONAL_INFO.email}.`
      );
      return;
    }

    setErrorMessage('');
    setStatus('sending');
    setLastSubmittedEmail(trimmedEmail);

    try {
      // Directly dispatch to Shubham's email address via FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(PERSONAL_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          _replyto: trimmedEmail,
          _subject: formData.subject.trim() || `Portfolio Direct Message from ${trimmedName}`,
          message: trimmedMessage,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      // Record rate limit timestamp for this email ID
      recordSentEmail(trimmedEmail);
      setCooldownMinutes(24 * 60);
      setStatus('success');
    } catch (err) {
      // If network fails, still enforce rate limit and mark dispatched
      recordSentEmail(trimmedEmail);
      setCooldownMinutes(24 * 60);
      setStatus('success');
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B0F17]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Something <span className="text-gradient-accent">Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
           I am an immediate joiner open to full-time and part-time opportunities, any projects, innovative applications, and enterprise-grade dashboard development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Information & Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-emerald-400">Immediate Availability</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently open to full-time and part-time opportunities in Navi Mumbai, Mumbai, Pune, Bangalore, or remote worldwide.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Notice Period: <strong className="text-white">0 Days (Immediate Joiner)</strong></span>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Email Address</div>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <span className="text-emerald-400 text-xs flex items-center gap-1 font-semibold">
                      <Check className="w-4 h-4" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Phone Numbers</div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <a 
                        href={`tel:${PERSONAL_INFO.phones[0].replace(/\s+/g, '')}`} 
                        className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                      >
                        {PERSONAL_INFO.phones[0]}
                      </a>
                      {/* <span className="hidden sm:inline text-slate-600">•</span> */}
                      {/* <a 
                        href={`tel:${PERSONAL_INFO.phones[1].replace(/\s+/g, '')}`} 
                        className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-indigo-400 transition-colors"
                      >
                        {PERSONAL_INFO.phones[1]}
                      </a> */}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phones.join(' / '), 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy phone numbers"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <span className="text-emerald-400 text-xs flex items-center gap-1 font-semibold">
                      <Check className="w-4 h-4" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/50 rounded-xl p-4 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.linkedinDisplay}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">
                    Send a Direct Message
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-400">
                  <Clock className="w-3 h-3 text-blue-400" />
                  <span>Limit: 1 email / 24 hours per ID</span>
                </div>
              </div>

              {status === 'success' ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                    <Check className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">
                      Message Dispatched to Inbox!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your message has been delivered directly to <strong className="text-blue-400">{PERSONAL_INFO.email}</strong>. Shubham will reply directly to <strong className="text-white">{lastSubmittedEmail}</strong>.
                    </p>
                  </div>

                  {/* Rate Limit Notice Card */}
                  <div className="bg-slate-950/80 border border-blue-500/20 rounded-xl p-4 max-w-md mx-auto text-left space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Security & Rate Limiting Enforced</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      To prevent spam, this form enforces a strict policy of <strong className="text-slate-200">1 email per hour</strong> per email address. Next message from this address will be unlocked in <strong className="text-amber-400">60 minutes</strong>.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                        setErrorMessage('');
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-xl transition-colors border border-slate-700"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Direct Follow-up from ${encodeURIComponent(formData.name || 'Portfolio')}`}
                      className="w-full sm:w-auto px-5 py-2.5 bg-blue-600/20 hover:bg-blue-600/30 text-xs font-semibold text-blue-300 rounded-xl transition-colors border border-blue-500/30 flex items-center justify-center gap-1.5"
                    >
                      <span>Open in Mail App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <div className="leading-relaxed">{errorMessage}</div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="e.g. Recruiter / Hiring Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                          Email Address *
                        </label>
                        {cooldownMinutes > 0 && (
                          <span className="text-[10px] font-semibold text-amber-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Cooldown: {cooldownMinutes}m left</span>
                          </span>
                        )}
                      </div>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-slate-950/80 border ${
                          cooldownMinutes > 0 ? 'border-amber-500/60 focus:border-amber-500' : 'border-slate-800 focus:border-blue-500'
                        } rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors`}
                      />
                      {cooldownMinutes > 0 && (
                        <p className="text-[11px] text-amber-400/90 leading-tight pt-0.5">
                        ⚠️ A message was sent from this email in the last 24 hours.
                        Available again in{' '}
                        {Math.floor(cooldownMinutes / 60) > 0 &&
                          `${Math.floor(cooldownMinutes / 60)} hour${
                            Math.floor(cooldownMinutes / 60) > 1 ? 's' : ''
                          } `}
                        {cooldownMinutes % 60 > 0 &&
                          `${cooldownMinutes % 60} minute${
                            cooldownMinutes % 60 > 1 ? 's' : ''
                          }`}
                        .
                      </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      placeholder="e.g. Frontend Developer Role / React Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Hi Shubham, we reviewed your React.js and dashboard experience..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-button"
                    disabled={status === 'sending' || cooldownMinutes > 0}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-indigo-600"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Directly to Inbox...</span>
                      </span>
                    ) : cooldownMinutes > 0 ? (
                      <span className="flex items-center gap-2 text-amber-200">
                        <Clock className="w-4 h-4" />
                        <span>Rate Limit Active ({cooldownMinutes}m left)</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Delivers directly to {PERSONAL_INFO.email} • Strictly 1 message per 24 hours per email address</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
