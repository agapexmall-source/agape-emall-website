import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';
import { db } from '../lib/firebase';
import { validateContactForm } from '../lib/validation/contact';

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'submitting') {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const cleanedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim() || 'General Inquiry',
      message: formData.message.trim(),
    };

    const validation = validateContactForm({
      name: cleanedData.name,
      email: cleanedData.email,
      message: cleanedData.message,
    });

    if (!validation.isValid) {
      const validationErrors = Object.values(validation.errors || {});
      const firstError = validationErrors.length
        ? String(validationErrors[0])
        : 'Please check the information you entered.';

      setStatus('error');
      setErrorMessage(firstError);
      return;
    }

    try {
      await addDoc(collection(db, 'website_contact_messages'), {
        name: cleanedData.name,
        email: cleanedData.email,
        phone: cleanedData.phone,
        subject: cleanedData.subject,
        message: cleanedData.message,
        source: 'website',
        status: 'new',
        createdAt: serverTimestamp(),
      });

      setStatus('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);

      setStatus('error');
      setErrorMessage(
        'We could not send your message at this time. Please try again.'
      );
    }
  };

  const handleSendAnotherMessage = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div
      id="contact-page"
      className="pt-28 pb-20 bg-[#F7F6F2] min-h-screen"
    >
      <Container>
        <SectionHeader
          badge="Get in Touch"
          title="Contact Agape e-Mall Support & Corporate Team"
          subtitle="We're here to answer your questions, assist with merchant accounts, and resolve technical issues."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0C3229] text-white p-8 rounded-3xl border border-[#D3B15F]/30 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Corporate Contact
                </h3>

                <p className="text-xs text-slate-300 mt-1">
                  Official headquarters and support channels
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-200">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#062019] text-[#D3B15F] flex items-center justify-center shrink-0 mt-0.5 border border-[#D3B15F]/30">
                    <MapPin className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="font-bold text-white">
                      Address
                    </div>

                    <p className="text-slate-300">
                      {companyConfig.businessAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#062019] text-[#D3B15F] flex items-center justify-center shrink-0 mt-0.5 border border-[#D3B15F]/30">
                    <Phone className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="font-bold text-white">
                      Customer Helpline
                    </div>

                    <p className="text-slate-300">
                      {companyConfig.businessPhone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#062019] text-[#D3B15F] flex items-center justify-center shrink-0 mt-0.5 border border-[#D3B15F]/30">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="font-bold text-white">
                      Support Email
                    </div>

                    <p className="text-slate-300">
                      {companyConfig.supportEmail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D3B15F]/20 text-[11px] text-slate-300">
                <span className="font-bold text-[#D3B15F]">
                  Business Hours:
                </span>{' '}
                Monday – Saturday, 8:00 AM – 6:00 PM GMT
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-extrabold text-[#171A18]">
              Send Us a Direct Message
            </h3>

            {status === 'success' ? (
              <div
                className="p-6 bg-[#F7F6F2] border border-[#0C3229]/20 rounded-2xl text-[#0C3229] space-y-2"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-2 font-extrabold text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#0C3229]" />

                  <span>Message Sent Successfully!</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  Thank you for reaching out to Agape e-Mall. Our support
                  team will review your inquiry and respond within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={handleSendAnotherMessage}
                  className="mt-2 text-xs font-bold text-[#0C3229] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Message */}
                {status === 'error' && (
                  <div
                    className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs flex items-center gap-2"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />

                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name / Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={100}
                      placeholder="e.g. Kwame Mensah"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-[#F7F6F2] border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3229]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      maxLength={200}
                      placeholder="kwame@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-[#F7F6F2] border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3229]"
                    />
                  </div>
                </div>

                {/* Phone / Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Phone Number (Optional)
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={50}
                      placeholder="+233 20 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full bg-[#F7F6F2] border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3229]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Subject Topic *
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      className="w-full bg-[#F7F6F2] border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3229]"
                    >
                      <option value="General Inquiry">
                        General Inquiry
                      </option>

                      <option value="Merchant Verification">
                        Merchant Verification & Badges
                      </option>

                      <option value="Listing Support">
                        Listing & Ad Boosts
                      </option>

                      <option value="Safety & Fraud Report">
                        Safety & Fraud Report
                      </option>

                      <option value="Account Issue">
                        Account Issue
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    minLength={5}
                    maxLength={5000}
                    placeholder="Provide details about your question or inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-[#F7F6F2] border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3229] resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0C3229] hover:bg-[#062019] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 text-[#D3B15F]" />

                  <span>
                    {status === 'submitting'
                      ? 'Sending Message...'
                      : 'Send Message'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};