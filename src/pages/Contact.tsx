import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network connection issue. Please check your connection and try again.');
    }
  };

  return (
    <div id="contact-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <SectionHeader
          badge="Get in Touch"
          title="Contact Agape Mall Support & Corporate Team"
          subtitle="We're here to answer your questions, assist with merchant accounts, and resolve technical issues."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">Corporate Contact</h3>
                <p className="text-xs text-slate-400 mt-1">Official headquarters and support channels</p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Physical Address</div>
                    <p className="text-slate-400">{companyConfig.businessAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Customer Helpline</div>
                    <p className="text-slate-400">{companyConfig.businessPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Support Email</div>
                    <p className="text-slate-400">{companyConfig.supportEmail}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                <span className="font-bold text-emerald-400">Business Hours:</span> Monday – Saturday, 8:00 AM – 6:00 PM GMT
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900">Send Us a Direct Message</h3>

            {status === 'success' ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 space-y-2">
                <div className="flex items-center gap-2 font-extrabold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Message Sent Successfully!
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you for reaching out to Agape Mall. Our support team will review your inquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-bold text-emerald-700 underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwame Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="kwame@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (Optional)</label>
                    <input
                      type="text"
                      placeholder="+233 20 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject Topic *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Merchant Verification">Merchant Verification & Badges</option>
                      <option value="Listing Support">Listing & Ad Boosts</option>
                      <option value="Safety & Fraud Report">Safety & Fraud Report</option>
                      <option value="Account Issue">Account Issue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your question or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
