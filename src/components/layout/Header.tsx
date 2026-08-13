import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { Container } from '../common/Container';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'For Buyers', path: '/buyers' },
    { name: 'For Sellers', path: '/sellers' },
    { name: 'Download App', path: '/download' },
    { name: 'Support & FAQ', path: '/support' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      id="agape-main-header"
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/90 bg-white/95 py-2 shadow-md backdrop-blur-md'
          : 'border-[#D3B15F]/25 bg-[#F7F6F2]/95 py-3 backdrop-blur-sm'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex shrink-0 items-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D3B15F] focus-visible:ring-offset-2"
            aria-label="Agape e-Mall home"
          >
            <img
              src="/brand/logo.png"
              alt="AGAPE e-MALL"
              className="h-11 w-11 rounded-xl object-contain sm:h-12 sm:w-12"
            />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex xl:gap-2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0C3229] text-white shadow-sm ring-1 ring-[#0C3229]/10'
                      : 'text-[#27342F] hover:bg-[#0C3229]/7 hover:text-[#0C3229]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 sm:flex">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0C3229] px-4 py-2.5 text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:bg-[#062019] hover:shadow-lg"
            >
              <Download className="h-4 w-4 text-[#D3B15F]" />
              <span>Get Mobile App</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-xl border border-[#0C3229]/15 bg-white p-2 text-[#0C3229] shadow-sm transition-colors hover:border-[#D3B15F]/50 hover:bg-[#F7F6F2] lg:hidden"
            aria-label={
              isMobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="mt-3 flex flex-col gap-1.5 border-t border-slate-200 pb-2 pt-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-semibold transition-colors ${
                    isActive
                      ? 'border border-[#0C3229]/10 bg-[#0C3229] text-white'
                      : 'text-[#27342F] hover:bg-[#F7F6F2] hover:text-[#0C3229]'
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#D3B15F]" />
                  )}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-slate-200 pt-3 sm:hidden">
              <Link
                to="/download"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0C3229] py-3 text-base font-extrabold text-white shadow-md"
              >
                <Download className="h-5 w-5 text-[#D3B15F]" />
                <span>Download App</span>
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};
