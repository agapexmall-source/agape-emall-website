import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { Container } from '../common/Container';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#062019]/95 backdrop-blur-md text-white shadow-xl py-2.5 border-b border-[#D3B15F]/30'
          : 'bg-[#0C3229] text-white py-3.5 border-b border-[#D3B15F]/20'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Official Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group focus:outline-none">
            <div className="p-1 rounded-xl bg-[#062019] border border-[#D3B15F]/40 shadow-sm group-hover:border-[#D3B15F] transition-all flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="AGAPE e-MALL Logo"
                className="h-9 w-auto max-w-[140px] sm:max-w-[160px] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#D3B15F] bg-[#062019] border border-[#D3B15F]/30 shadow-xs'
                      : 'text-slate-200 hover:text-[#D3B15F] hover:bg-[#062019]/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Download App CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-[#D3B15F] hover:bg-[#CEAE66] text-[#062019] font-extrabold text-sm px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:shadow-[#D3B15F]/20 active:scale-95"
            >
              <Download className="w-4 h-4 text-[#062019]" />
              <span>Get Mobile App</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-[#D3B15F] hover:bg-[#062019] focus:outline-none border border-transparent hover:border-[#D3B15F]/30"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#D3B15F]/20 flex flex-col gap-1.5 pb-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#062019] text-[#D3B15F] font-bold border border-[#D3B15F]/40'
                      : 'text-slate-200 hover:bg-[#062019] hover:text-[#D3B15F]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#D3B15F]"></span>}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#D3B15F]/20 flex flex-col gap-2">
              <Link
                to="/download"
                className="w-full text-center bg-[#D3B15F] hover:bg-[#CEAE66] text-[#062019] font-extrabold text-base py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download App Free</span>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
