import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { companyConfig } from '../../config/company';

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
          ? 'bg-slate-900/95 backdrop-blur-md text-white shadow-xl py-3 border-b border-slate-800'
          : 'bg-slate-900 text-white py-4 border-b border-slate-800/80'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                {companyConfig.brandName}
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase mt-1">
                Digital Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-slate-800/90'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Download App Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-emerald-900/30 transition-all duration-200"
            >
              <span>Get Mobile App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2 pb-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-300"></span>}
                </Link>
              );
            })}

            <div className="pt-2 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <Link
                to="/download"
                className="w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-base py-3 rounded-xl shadow-md"
              >
                Download App Free
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
