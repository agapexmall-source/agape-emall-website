import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Download, Search, MessageSquare, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      icon: <Download className="w-6 h-6 text-[#0C3229]" />,
      title: 'Download & Register',
      description: 'Get the free Agape e-Mall app on Android or iOS. Create your account using your mobile phone number or email.',
    },
    {
      stepNumber: '02',
      icon: <Search className="w-6 h-6 text-[#D3B15F]" />,
      title: 'Discover or Post Items',
      description: 'Search for laptops, vehicles, smartphones, and fashion, or tap Post to list your own items for sale in seconds.',
    },
    {
      stepNumber: '03',
      icon: <MessageSquare className="w-6 h-6 text-[#0C3229]" />,
      title: 'Connect & Negotiate',
      description: 'Chat directly with sellers, make custom price offers, ask questions, or request additional high-res product photos.',
    },
    {
      stepNumber: '04',
      icon: <CheckCircle2 className="w-6 h-6 text-[#D3B15F]" />,
      title: 'Inspect & Complete Deal',
      description: 'Meet in a safe public location, inspect the product in hand, and make your secure payment directly to the seller.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <Container>
        <SectionHeader
          badge="Simple & Direct"
          title="How Agape e-Mall Works for You"
          subtitle="Whether you're shopping for bargains or listing your business inventory, getting started takes under two minutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#F7F6F2] p-6 rounded-2xl border border-slate-200 hover:border-[#0C3229] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-[#D3B15F] tracking-wider">
                  {step.stepNumber}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-[#171A18] mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
