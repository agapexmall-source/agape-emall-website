import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldCheck, Smartphone, Users, Zap, CheckCircle2, Lock } from 'lucide-react';

export const WhyAgapeMall: React.FC = () => {
  const pillars = [
    {
      title: 'Hyper-Local Ghana Focus',
      description: 'Engineered specifically for Ghanaian buyers and local merchants with regional filtering across all 16 regions.',
      icon: <Users className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Real-Time In-App Messaging',
      description: 'No middleman delay. Instantly chat, send photos, negotiate prices, or coordinate meetings within the app.',
      icon: <Smartphone className="w-6 h-6 text-amber-600" />,
    },
    {
      title: 'Zero Hidden Transaction Fees',
      description: 'Buyers pay exact agreed item costs directly to sellers. No unexpected platform commissions on standard deals.',
      icon: <Zap className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Built-in Security & Safety Warnings',
      description: 'Automated fraud detection checks, seller verification badges, and explicit inspect-before-paying guidelines.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
    },
  ];

  return (
    <section id="why-agape-mall" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <Container>
        <SectionHeader
          badge="Marketplace Trust"
          title="Why Millions Choose Agape Mall"
          subtitle="We combine intuitive mobile technology with strict community safety protocols to make local commerce seamless."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-950/60 border border-emerald-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-base font-extrabold text-white">Your Privacy & Security Protected</div>
              <div className="text-xs text-slate-300">
                All account data and communications are handled in full compliance with Ghana Data Protection Act requirements.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" /> Official Verified Portal
          </div>
        </div>
      </Container>
    </section>
  );
};
