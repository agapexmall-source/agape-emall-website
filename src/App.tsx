import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Buyers } from './pages/Buyers';
import { Sellers } from './pages/Sellers';
import { Download } from './pages/Download';
import { Support } from './pages/Support';
import { FAQ } from './pages/FAQ';
import { Safety } from './pages/Safety';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { AccountDeletion } from './pages/AccountDeletion';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/download" element={<Download />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/account-deletion" element={<AccountDeletion />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
