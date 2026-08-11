import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div id="not-found-page" className="pt-32 pb-20 bg-slate-50 min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <div className="max-w-md mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-black text-2xl">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Page Not Found</h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              The page you are looking for may have been moved, updated, or does not exist on our web portal.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
