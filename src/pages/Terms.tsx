import React from 'react';
import { Container } from '../components/common/Container';
import { companyConfig } from '../config/company';

export const Terms: React.FC = () => {
  return (
    <div id="terms-of-service-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 max-w-4xl mx-auto">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              User Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last Updated: {companyConfig.termsLastUpdated} | Governed by laws of {companyConfig.jurisdiction}
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm leading-relaxed border-t border-slate-200 pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Agreement to Terms</h2>
              <p>
                By accessing or using the {companyConfig.brandName} mobile application or website, you agree to be bound by these Terms of Service and all applicable laws and regulations in the Republic of Ghana.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Marketplace Platform Role</h2>
              <p>
                {companyConfig.brandName} operates as a venue connecting independent buyers and third-party sellers. Unless explicitly stated, {companyConfig.brandName} does not manufacture, store, or hold title to listed products.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Prohibited Content & Listings</h2>
              <p>Users are strictly forbidden from posting:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Counterfeit, stolen, or illegal goods.</li>
                <li>Firearms, explosives, weapons, or controlled dangerous substances.</li>
                <li>Fraudulent or misleading product claims.</li>
                <li>Hate speech, harassing content, or non-consensual imagery.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Merchant Subscriptions</h2>
              <p>
                Optional merchant subscriptions (Silver/Gold Verified Store) provide enhanced promotional features. Subscriptions auto-renew monthly unless cancelled inside app settings prior to the billing date.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, {companyConfig.legalCompanyName} shall not be liable for indirect, incidental, or consequential damages resulting from user transactions conducted outside platform safety protocols.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">6. Contact Information</h2>
              <p>
                For questions concerning these Terms of Service, contact {companyConfig.supportEmail}.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};
