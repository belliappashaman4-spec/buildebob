import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Wrench, 
  Sparkles, 
  Dumbbell, 
  Utensils, 
  Building2, 
  Stethoscope, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { siteConfig, IndustryItem } from '../../config/site';
import { useLeadModal } from '../../context/LeadModalContext';

export const IndustriesSection: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Palette': return Palette;
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      case 'Dumbbell': return Dumbbell;
      case 'Utensils': return Utensils;
      case 'Building2': return Building2;
      case 'Stethoscope': return Stethoscope;
      case 'Briefcase': return Briefcase;
      default: return Briefcase;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
            Tailored Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-3 mb-4">
            Built for How Your Customers Buy.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A gym membership requires a different conversion flow than a luxury interior design studio. We optimize your website specifically for your sector's buying behaviors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.industries.map((ind: IndustryItem) => {
            const Icon = getIndustryIcon(ind.iconName);
            return (
              <div
                key={ind.id}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${ind.accentColor}18`, color: ind.accentColor }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block text-[10px] mb-1">
                      Critical Elements:
                    </span>
                    {ind.keyNeeds.map(need => (
                      <div key={need} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {ind.recommendedPackage}
                  </span>
                  <button
                    onClick={() => openDemoModal({ service: `Website for ${ind.name}` })}
                    className="text-xs font-semibold text-brand-400 hover:text-brand-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
