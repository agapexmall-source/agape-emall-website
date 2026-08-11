import React from 'react';
import { Hero } from '../components/home/Hero';
import { MarketplaceIntro } from '../components/home/MarketplaceIntro';
import { HowItWorks } from '../components/home/HowItWorks';
import { BuyerBenefits } from '../components/home/BuyerBenefits';
import { SellerBenefits } from '../components/home/SellerBenefits';
import { CategorySection } from '../components/home/CategorySection';
import { WhyAgapeMall } from '../components/home/WhyAgapeMall';
import { AppShowcase } from '../components/home/AppShowcase';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <div id="home-page-container">
      <Hero />
      <MarketplaceIntro />
      <HowItWorks />
      <BuyerBenefits />
      <SellerBenefits />
      <CategorySection />
      <WhyAgapeMall />
      <AppShowcase />
      <FinalCTA />
    </div>
  );
};
