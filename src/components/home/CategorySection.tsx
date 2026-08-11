import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { marketplaceCategories } from '../../config/categories';
import {
  Smartphone,
  Tv,
  Laptop,
  Shirt,
  Car,
  Building2,
  Home,
  Sparkles,
  Wheat,
  Briefcase,
  Baby,
  Dumbbell,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6 text-emerald-600" />,
  Tv: <Tv className="w-6 h-6 text-teal-600" />,
  Laptop: <Laptop className="w-6 h-6 text-amber-600" />,
  Shirt: <Shirt className="w-6 h-6 text-emerald-700" />,
  Car: <Car className="w-6 h-6 text-emerald-600" />,
  Building2: <Building2 className="w-6 h-6 text-amber-600" />,
  Home: <Home className="w-6 h-6 text-teal-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-600" />,
  Wheat: <Wheat className="w-6 h-6 text-amber-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-teal-600" />,
  Baby: <Baby className="w-6 h-6 text-emerald-700" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-emerald-600" />,
};

export const CategorySection: React.FC = () => {
  return (
    <section id="marketplace-categories" className="py-20 bg-white border-b border-slate-200">
      <Container>
        <SectionHeader
          badge="Browse Marketplace"
          title="Explore 13 Primary Commerce Categories"
          subtitle="Everything you need to buy, sell, or trade is organized intuitively inside the Agape Mall mobile app."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {marketplaceCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 hover:bg-white hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                  {iconMap[cat.iconName] || <Smartphone className="w-6 h-6 text-emerald-600" />}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>Browse in App</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors"
          >
            <span>Open Agape Mall App to View All Listings</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
