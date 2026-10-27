import React from 'react';
import { Compass, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { useLeadModal } from '../../context/LeadModalContext';

export const HowItWorks: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  const stepIcons = [Compass, PenTool, Code2, Rocket];

  return (
    <section className="py-24 bg-[#090D16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
            Our Proven Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-3 mb-4">
            How It Works: Simple, Fast, Transparent.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We respect your time. Our structured four-step process takes you from initial concept to a published, enquiry-ready digital storefront in days, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {siteConfig.processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div 
                key={step.step}
                className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 lg:p-7 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-mono font-extrabold text-slate-700 group-hover:text-brand-500/50 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-1.5">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-400 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                  Phase 0{idx + 1} Delivery
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <button
            onClick={() => openDemoModal()}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-xl shadow-brand-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-slate-500 mt-3">
            Clear timelines • Milestone-based delivery • Zero tech headaches
          </p>
        </div>
      </div>
    </section>
  );
};
