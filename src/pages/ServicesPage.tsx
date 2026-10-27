import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig, ServiceItem } from '../config/site';
import { useLeadModal } from '../context/LeadModalContext';
import { 
  Globe, 
  Target, 
  Bot, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  Zap,
  Clock
} from 'lucide-react';
import { FinalCta } from '../components/home/FinalCta';

export const ServicesPage: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return Globe;
      case 'Target': return Target;
      case 'Bot': return Bot;
      case 'MapPin': return MapPin;
      case 'ShieldCheck': return ShieldCheck;
      case 'Cpu': return Cpu;
      default: return Globe;
    }
  };

  return (
    <>
      <SeoHead
        title="Digital Growth Services"
        description="Explore BuilderBob's full suite of services: Business Websites, WhatsApp Lead Generation, AI Automation, Local SEO, and Maintenance for Indian SMBs."
        keywords={[
          "business website development Bengaluru",
          "lead generation websites India",
          "AI customer enquiry automation",
          "local SEO services Bangalore",
          "website maintenance packages"
        ]}
      />

      <div className="pt-32 pb-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Engineered for Business Impact
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mt-4 mb-6">
              Our Digital Growth Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We don’t just deliver static code. We engineer high-converting digital assets designed to attract local clients, capture high-intent enquiries, and streamline follow-ups.
            </p>
          </div>

          {/* Service Deep Dives */}
          <div className="space-y-16">
            {siteConfig.services.map((service: ServiceItem, idx: number) => {
              const Icon = getServiceIcon(service.iconName);
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 hover:border-slate-700 transition-all shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : ''} space-y-6`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-600/15 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        {service.badge && (
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                        {service.title}
                      </h2>

                      <p className="text-slate-300 text-base leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
                        <strong className="text-white block mb-1">Ideal For:</strong>
                        {service.idealFor}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex items-center gap-4">
                        <button
                          onClick={() => openDemoModal({ service: service.title })}
                          className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-md transition-all flex items-center gap-2"
                        >
                          <span>Get Started with {service.title.split(' ')[0]}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Deliverables Card */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-brand-400" />
                          Key Deliverables
                        </h3>

                        <div className="space-y-3 pt-2">
                          {service.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-md bg-brand-500/20 text-brand-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                                0{dIdx + 1}
                              </span>
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                          <span className="text-slate-400">Baseline Pricing:</span>
                          <span className="font-bold text-emerald-400 text-sm">{service.startingPrice || 'Custom Scope'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FinalCta />
    </>
  );
};
