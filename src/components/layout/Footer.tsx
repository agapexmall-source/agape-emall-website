import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '../common/Container';
import { companyConfig } from '../../config/company';

export const Footer: React.FC = () => {
  return (
    <footer
      id="agape-main-footer"
      className="border-t border-[#D3B15F]/20 bg-[#062019] pb-12 pt-16 text-slate-300"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-[#D3B15F]/20 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link
              to="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D3B15F]"
              aria-label="Agape e-Mall home"
            >
              <img
                src="/brand/logo.png"
                alt="AGAPE e-MALL"
                className="h-16 w-16 rounded-2xl object-contain"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Agape e-Mall empowers buyers to discover great local
              deals and gives sellers direct access to thousands
              of daily active customers across Ghana.
            </p>

            <div className="flex flex-col gap-2.5 pt-2 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D3B15F]" />
                <span>
                  {companyConfig.businessAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D3B15F]" />
                <span>
                  {companyConfig.businessPhone}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D3B15F]" />
                <span>
                  {companyConfig.businessEmail}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 border-b border-[#D3B15F]/20 pb-2 text-xs font-extrabold uppercase tracking-wider text-[#D3B15F]">
              Marketplace
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  About Agape e-Mall
                </Link>
              </li>

              <li>
                <Link
                  to="/buyers"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  For Buyers
                </Link>
              </li>

              <li>
                <Link
                  to="/sellers"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  For Sellers &amp; Merchants
                </Link>
              </li>

              <li>
                <Link
                  to="/download"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Download Mobile App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-[#D3B15F]/20 pb-2 text-xs font-extrabold uppercase tracking-wider text-[#D3B15F]">
              Support &amp; Help
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/support"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Frequently Asked Questions
                </Link>
              </li>

              <li>
                <Link
                  to="/safety"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Safety &amp; Anti-Fraud Tips
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Contact Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-[#D3B15F]/20 pb-2 text-xs font-extrabold uppercase tracking-wider text-[#D3B15F]">
              Legal &amp; Policies
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  to="/account-deletion"
                  className="transition-colors hover:text-[#D3B15F]"
                >
                  Account Deletion Request
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-slate-400 md:flex-row md:items-center">
          <div className="flex items-start gap-2">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#D3B15F]" />

            <span>
              © {new Date().getFullYear()}{' '}
              {companyConfig.legalCompanyName}. All rights
              reserved. Registered under Reg. No.{' '}
              {companyConfig.companyRegistrationNumber}.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#D3B15F]" />
              Official Agape e-Mall Portal
            </span>

            <span>
              Ghana Jurisdiction (
              {companyConfig.jurisdiction})
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};