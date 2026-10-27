import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Target, 
  Bot, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { siteConfig, ServiceItem } from '../../config/site';
import { useLeadModal } from '../../context/LeadModalContext';

export const ServicesSection: React.FC = () => {
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
    <section id="services" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Full-Suite Growth Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-3 mb-4">
              Modern Web & Automation Services Built to Scale.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              From fast, mobile-friendly business websites to direct WhatsApp lead capture and automated routing, we provide everything needed to win more customers.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors self-start md:self-end"
          >
            <span>View Detailed Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service: ServiceItem) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-brand-500/40 hover:bg-slate-900/80 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-brand-300 bg-brand-950/60 border border-brand-500/20 px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2.5 group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-8">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    {service.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="text-slate-500 block">Starting from</span>
                    <span className="font-semibold text-white">{service.startingPrice || 'Flexible'}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openDemoModal({ service: service.title })}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
                    >
                      Get a Quote
                    </button>
                    <Link
                      to={`/services#${service.slug}`}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="Learn More"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
