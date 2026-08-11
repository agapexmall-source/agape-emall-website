import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';

export const Privacy: React.FC = () => {
  return (
    <div id="privacy-policy-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 max-w-4xl mx-auto">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              Legal Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last Updated: {companyConfig.privacyLastUpdated} | Published by {companyConfig.legalCompanyName}
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm leading-relaxed border-t border-slate-200 pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Introduction</h2>
              <p>
                {companyConfig.legalCompanyName} ("{companyConfig.brandName}", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you about how we handle your personal data when you visit our website ({companyConfig.officialWebsite}) or use our mobile applications on Android and iOS.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Data We Collect</h2>
              <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Identity Data:</strong> Full name, profile photo, merchant business handle.</li>
                <li><strong>Contact Data:</strong> Mobile phone number, email address, physical location/city.</li>
                <li><strong>Listing Data:</strong> Product photos, descriptions, pricing, and category selections.</li>
                <li><strong>Technical & Device Data:</strong> IP address, device model, operating system version, app usage diagnostics.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. How We Use Your Personal Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Create and manage your buyer or seller account profile.</li>
                <li>Facilitate direct buyer-seller messaging and inquiry calls inside the mobile app.</li>
                <li>Verify merchant identities for Silver and Gold verified seller badges.</li>
                <li>Detect and prevent fraud, spam, unauthorized access, and illicit activity.</li>
                <li>Comply with statutory legal obligations in the Republic of Ghana.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Data Sharing & Third Parties</h2>
              <p>
                We do not sell your personal data to third parties. Public information on your listings (such as product title, price, photos, and seller handle) will be displayed to other app users to facilitate marketplace discovery.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">5. Account Deletion & Data Retention</h2>
              <p>
                You have the right to request deletion of your account and associated personal data at any time. You can initiate account deletion inside the mobile app or by visiting our <a href="/account-deletion" className="text-emerald-700 underline font-bold">Account Deletion Request page</a>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">6. Contact Our Privacy Officer</h2>
              <p>
                If you have questions regarding this Privacy Policy or wishes to exercise your data rights, contact us at:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1 font-mono">
                <div>Email: {companyConfig.privacyEmail}</div>
                <div>Address: {companyConfig.businessAddress}</div>
                <div>Entity: {companyConfig.legalCompanyName}</div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};
