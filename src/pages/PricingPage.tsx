import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { PricingSection } from '../components/home/PricingSection';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCta } from '../components/home/FinalCta';
import { siteConfig } from '../config/site';
import { useLeadModal } from '../context/LeadModalContext';
import { Check, X, ShieldAlert, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  const comparisonFeatures = [
    { feature: "Target Turnaround Time", starter: "5–7 Days", business: "10–14 Days", auto: "14–20 Days" },
    { feature: "Standard Pages Included", starter: "1 Long Page", business: "Up to 5 Pages", auto: "Up to 7 Pages" },
    { feature: "Mobile-Responsive Layout", starter: true, business: true, auto: true },
    { feature: "WhatsApp Click-to-Chat Button", starter: true, business: true, auto: true },
    { feature: "Lead Capture Form", starter: "1 Form", business: "1-2 Forms", auto: "Multi-Step / Dynamic" },
    { feature: "On-Page SEO Foundations", starter: "Basic", business: "Complete Meta & Headings", auto: "Comprehensive + Local Schema" },
    { feature: "Interactive Portfolio / Service Gallery", starter: "Basic", business: "Filterable Grid", auto: "Full Showcase + Case Studies" },
    { feature: "Structured Revision Rounds", starter: "1 Round", business: "2 Rounds", auto: "2 Rounds + Polish" },
    { feature: "Google Sheets / Webhook Lead Routing", starter: false, business: "Optional Add-on", auto: true },
    { feature: "Automated WhatsApp / Email Acknowledgment", starter: false, business: "Optional Add-on", auto: true },
    { feature: "Appointment Enquiry Workflow", starter: false, business: "Basic Link", auto: "Integrated Scheduling" },
    { feature: "Analytics & Search Console Verification", starter: false, business: "Guidance", auto: true },
  ];

  return (
    <>
      <SeoHead
        title="Transparent Pricing & Starter Packages (INR)"
        description="Clear, upfront pricing packages for Indian local business websites, starting from ₹15,999. No hidden charges or surprise invoices."
        keywords={[
          "affordable business website development India",
          "website pricing Bangalore",
          "small business website cost India",
          "website development packages in INR"
        ]}
      />

      <div className="pt-32 pb-12 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Transparent Investment in INR
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mt-4 mb-6">
              Clear Pricing. No Ambiguity.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every package is designed to deliver immediate digital credibility, frictionless WhatsApp enquiries, and measurable return on investment.
            </p>
          </div>

          {/* Pricing Cards */}
          <PricingSection />

          {/* Detailed Feature Comparison Matrix */}
          <div className="mt-20 max-w-5xl mx-auto bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-8 text-center sm:text-left">
              <h2 className="text-2xl font-bold font-display text-white mb-2">
                Detailed Package Comparison Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Compare side-by-side what is included in each proposed starting tier.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                    <th className="py-4 px-3">Feature / Capability</th>
                    <th className="py-4 px-3 text-center">Starter Website (₹15,999+)</th>
                    <th className="py-4 px-3 text-center text-brand-400 font-bold">Business Growth (₹20,999+)</th>
                    <th className="py-4 px-3 text-center text-accent-400 font-bold">Growth Automation (₹34,999+)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {comparisonFeatures.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 px-3 font-medium text-white">{row.feature}</td>
                      <td className="py-3.5 px-3 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />
                        ) : (
                          <span>{row.starter}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center bg-brand-500/5">
                        {typeof row.business === 'boolean' ? (
                          row.business ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />
                        ) : (
                          <span className="font-semibold text-white">{row.business}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center bg-accent-500/5">
                        {typeof row.auto === 'boolean' ? (
                          row.auto ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />
                        ) : (
                          <span className="font-semibold text-white">{row.auto}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Need a tailored combination or custom integrations?
              </span>
              <button
                onClick={() => openDemoModal()}
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-md"
              >
                Request Custom Proposal
              </button>
            </div>
          </div>
        </div>
      </div>

      <FaqSection />
      <FinalCta />
    </>
  );
};
