import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';
import { faqItems } from '../config/faq';
import { Mail, Phone, MessageSquare, Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFAQId, setOpenFAQId] = useState<string | null>('what-is-agape-mall');

  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div id="support-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        {/* Support Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 bg-emerald-950 text-emerald-300 text-xs font-extrabold uppercase tracking-wider rounded-full border border-emerald-500/30">
              Help Center & Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              How Can We Help You Today?
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Search our help library or contact our dedicated customer support team directly.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative max-w-xl">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search help topics (e.g. account deletion, verified badge, safety)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-white placeholder-slate-400 pl-12 pr-4 py-3.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Email Customer Support</h3>
            <p className="text-xs text-slate-500">Send an email inquiry for account or listing assistance.</p>
            <a
              href={`mailto:${companyConfig.supportEmail}`}
              className="inline-block text-xs font-extrabold text-emerald-700 hover:underline pt-1"
            >
              {companyConfig.supportEmail}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Call Business Helpline</h3>
            <p className="text-xs text-slate-500">Mon - Sat: 8:00 AM - 6:00 PM GMT</p>
            <a
              href={`tel:${companyConfig.businessPhone}`}
              className="inline-block text-xs font-extrabold text-emerald-700 hover:underline pt-1"
            >
              {companyConfig.businessPhone}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">In-App Live Chat</h3>
            <p className="text-xs text-slate-500">Reach our team directly inside your mobile app settings.</p>
            <Link to="/download" className="inline-block text-xs font-extrabold text-emerald-700 hover:underline pt-1">
              Open Mobile App
            </Link>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Common Questions & Solutions"
            subtitle="Select a category below to filter questions"
            centered={false}
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200 pb-4">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'General' },
              { id: 'buyers', label: 'Buyers' },
              { id: 'sellers', label: 'Sellers' },
              { id: 'account', label: 'Account & Security' },
              { id: 'safety', label: 'Safety & Trust' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion Items */}
          <div className="space-y-3 pt-2">
            {filteredFAQs.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm">
                No matching questions found for "{searchQuery}". Try searching with different terms or contact support directly.
              </div>
            ) : (
              filteredFAQs.map((faq) => {
                const isOpen = openFAQId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFAQId(isOpen ? null : faq.id)}
                      className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
