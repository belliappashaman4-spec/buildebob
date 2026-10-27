import React from 'react';
import { Check, Sparkles, ArrowRight, HelpCircle, ShieldAlert } from 'lucide-react';
import { siteConfig, PricingTier } from '../../config/site';
import { useLeadModal } from '../../context/LeadModalContext';

export const PricingSection: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  return (
    <section id="pricing" className="py-24 bg-[#090D16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
            Transparent Pricing in INR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-3 mb-4">
            Honest Investment for Meaningful Growth.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            No hidden clauses or surprise invoices. Our configurable starter packages give you clear visibility on investment and turnaround timelines.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {siteConfig.pricingTiers.map((tier: PricingTier) => {
            const isFeatured = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-slate-900 to-[#0B1120] border-2 border-brand-500 shadow-2xl shadow-brand-500/15 lg:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Badge if featured */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-brand-500 shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-display text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="py-4 border-y border-slate-800 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold font-display text-white">
                        {tier.price}
                      </span>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {tier.cadence}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-slate-400 mt-2">
                      <span>⏱️ {tier.turnaroundTime}</span>
                      <span>🔄 {tier.revisions}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Package Inclusions:
                    </span>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => openDemoModal({ packageTier: tier.name, budget: tier.price })}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-lg shadow-brand-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2.5">
                    Best for: {tier.suitableFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Pricing Scope & Billing Transparency Note */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-slate-400 text-xs sm:text-sm leading-relaxed flex items-start gap-4">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">
              Scope & Billing Transparency
            </h4>
            <p>
              {siteConfig.pricingDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
