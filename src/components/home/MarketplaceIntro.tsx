import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { ShoppingBag, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const MarketplaceIntro: React.FC = () => {
  const introPoints = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#0C3229]" />,
      title: 'Vibrant Local Marketplace',
      description:
        'Discover thousands of authentic items listed daily by individuals and trusted merchants across Accra, Kumasi, Takoradi, and every region of Ghana.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#D3B15F]" />,
      title: 'Direct Buyer-Seller Chat',
      description:
        'Negotiate prices, inspect product details, ask questions, and schedule physical inspect-and-pay meetings directly via in-app instant messaging or calls.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0C3229]" />,
      title: 'Instant Free Product Posting',
      description:
        'Turn unused items or commercial inventory into cash within minutes. Upload photos, write a quick description, set your price in GHS, and go live instantly.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D3B15F]" />,
      title: 'Verified Merchant Profiles',
      description:
        'Shop with confidence. Verified merchant badges, user ratings, and community moderation keep the Agape Mall marketplace safe and trustworthy for everyone.',
    },
  ];

  return (
    <section id="marketplace-intro" className="py-20 bg-[#F7F6F2] border-b border-slate-200">
      <Container>
        <SectionHeader
          badge="Welcome to Agape Mall"
          title="Ghana's Premier Digital Marketplace Experience"
          subtitle="Agape Mall connects millions of buyers and sellers, empowering local commerce with speed, transparency, and trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {introPoints.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#0C3229] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7F6F2] flex items-center justify-center border border-slate-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#171A18] tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
