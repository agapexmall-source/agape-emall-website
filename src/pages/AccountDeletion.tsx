import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';
import { Trash2, ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';

export const AccountDeletion: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div id="account-deletion-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Data Protection Rights</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Account Deletion Request
              </h1>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            In accordance with Google Play Store and Apple App Store user data privacy policies, you can request permanent deletion of your {companyConfig.brandName} account and associated data using this form or inside the mobile app under Settings {'>'} Account Security.
          </p>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-900 space-y-3">
              <div className="flex items-center gap-2 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Deletion Request Received
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Thank you. We have received your deletion request for account linked to <strong>{phone || email}</strong>. Your request will be processed within 14 business days, and you will receive a confirmation message once completed.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Registered Mobile Phone Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +233 20 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Registered Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Help us improve. Why are you requesting account deletion?"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" /> Important Notice
                </div>
                <p>
                  Account deletion is permanent. Once completed, your seller listings, saved items, chat messages, and merchant badges cannot be restored.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md transition-colors cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Submitting Request...' : 'Submit Deletion Request'}
              </button>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
};
