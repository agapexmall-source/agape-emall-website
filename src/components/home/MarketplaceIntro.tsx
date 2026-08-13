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
        'Shop with confidence. Verified merchant badges, user ratings, and community moderation keep the Agape e-Mall marketplace safe and trustworthy for everyone.',
    },
  ];

  return (
    <section id="marketplace-intro" className="border-b border-slate-200 bg-white py-20">
      <Container>
        <SectionHeader
          badge="Welcome to Agape e-Mall"
          title="Ghana's Premier Digital Marketplace Experience"
          subtitle="Agape e-Mall connects millions of buyers and sellers, empowering local commerce with speed, transparency, and trust."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {introPoints.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-[#F7F6F2] p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#D3B15F]/60 hover:bg-white hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D3B15F]/20 bg-white shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#171A18]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
