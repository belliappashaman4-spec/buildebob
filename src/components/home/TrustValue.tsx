import React from 'react';
import { Sparkles, MessageSquare, Zap, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const TrustValue: React.FC = () => {
  const pillars = [
    {
      title: "Look Professional",
      description: "Build immediate credibility with a modern, high-converting digital presence that makes your business look trustworthy from the very first click.",
      icon: Sparkles,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      points: ["Tailored typography & layouts", "Speed-optimized for all phones", "Clean brand identity"]
    },
    {
      title: "Get More Enquiries",
      description: "Make it effortless for prospective customers to contact you through streamlined lead capture forms and frictionless click-to-WhatsApp buttons.",
      icon: MessageSquare,
      iconColor: "text-brand-400",
      bgColor: "bg-brand-500/10",
      borderColor: "border-brand-500/20",
      points: ["Clear calls-to-action", "One-tap WhatsApp triggers", "Zero confusing form bloat"]
    },
    {
      title: "Respond Faster",
      description: "Simplify enquiries with automated alerts and smart lead routing so high-intent prospects receive instant confirmation without waiting.",
      icon: Zap,
      iconColor: "text-accent-400",
      bgColor: "bg-accent-500/10",
      borderColor: "border-accent-500/20",
      points: ["Automated acknowledgments", "Google Sheets & webhook routing", "Never lose a warm prospect"]
    },
    {
      title: "Get Found Locally",
      description: "Improve your online visibility across Bengaluru and your local service area with robust on-page SEO, schema markup, and metadata foundations.",
      icon: MapPin,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      points: ["Localized landing structures", "Google Business Profile readiness", "Semantic HTML & fast Vitals"]
    }
  ];

  return (
    <section className="py-20 bg-[#0B1120] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
            Core Growth Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-3 mb-4">
            Everything You Need to Grow Online.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We focus on the four practical fundamentals that convert local internet searchers into paying clients for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                <div className="text-xs font-mono text-slate-500 mb-1">0{idx + 1}</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                  {item.points.map(pt => (
                    <div key={pt} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
