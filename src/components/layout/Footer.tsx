import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { companyConfig } from '../../config/company';

export const Footer: React.FC = () => {
  return (
    <footer id="agape-main-footer" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-white tracking-tight">
                  {companyConfig.brandName}
                </span>
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  Ghana's Trusted Digital Marketplace
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Agape Mall empowers buyers to discover great local deals and gives sellers direct access to thousands of daily active customers across Ghana.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{companyConfig.businessAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{companyConfig.businessPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{companyConfig.businessEmail}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Marketplace
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  About Agape Mall
                </Link>
              </li>
              <li>
                <Link to="/buyers" className="hover:text-emerald-400 transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="hover:text-emerald-400 transition-colors">
                  For Sellers & Merchants
                </Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-emerald-400 transition-colors">
                  Download Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Support & Help
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/support" className="hover:text-emerald-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-emerald-400 transition-colors">
                  Safety & Anti-Fraud Tips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Account */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Legal & Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/account-deletion" className="hover:text-emerald-400 transition-colors">
                  Account Deletion Request
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              © {new Date().getFullYear()} {companyConfig.legalCompanyName}. All rights reserved. Registered under Reg. No. {companyConfig.companyRegistrationNumber}.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified App Portal
            </span>
            <span>Ghana Jurisdiction ({companyConfig.jurisdiction})</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
