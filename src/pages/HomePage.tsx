import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { Hero } from '../components/home/Hero';
import { TrustValue } from '../components/home/TrustValue';
import { ServicesSection } from '../components/home/ServicesSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { PricingSection } from '../components/home/PricingSection';
import { LeadSection } from '../components/home/LeadSection';
import { AboutSection } from '../components/home/AboutSection';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCta } from '../components/home/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead />
      <main>
        <Hero />
        <TrustValue />
        <ServicesSection />
        <IndustriesSection />
        <HowItWorks />
        <PortfolioSection />
        <PricingSection />
        <LeadSection />
        <AboutSection />
        <FaqSection />
        <FinalCta />
      </main>
    </>
  );
};
