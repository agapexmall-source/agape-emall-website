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
    <section id="how-it-works" className="border-b border-slate-200 bg-[#F7F6F2] py-20">
      <Container>
        <SectionHeader
          badge="Simple & Direct"
          title="How Agape e-Mall Works for You"
          subtitle="Whether you're shopping for bargains or listing your business inventory, getting started takes under two minutes."
        />

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D3B15F]/60 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-[#F7F6F2] shadow-xs">
                  {step.icon}
                </div>
                <span className="text-2xl font-black tracking-wider text-[#B38F3E]">
                  {step.stepNumber}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-extrabold text-[#171A18]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
