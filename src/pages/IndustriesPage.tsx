import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig, IndustryItem } from '../config/site';
import { useLeadModal } from '../context/LeadModalContext';
import { 
  Palette, 
  Wrench, 
  Sparkles, 
  Dumbbell, 
  Utensils, 
  Building2, 
  Stethoscope, 
  Briefcase,
  ArrowRight,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { FinalCta } from '../components/home/FinalCta';

export const IndustriesPage: React.FC = () => {
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
    <>
      <SeoHead
        title="Industries We Serve"
        description="Tailored website design and digital lead generation for interior designers, home services, salons, gyms, restaurants, real estate, and clinics in Bengaluru."
        keywords={[
          "website design for interior designers",
          "gym website development Bangalore",
          "salon appointment website India",
          "home services lead generation",
          "real estate website Bengaluru",
          "clinic doctor appointment website"
        ]}
      />

      <div className="pt-32 pb-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Specialized Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mt-4 mb-6">
              Industries We Supercharge
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every vertical has unique buyer journeys. We map your prospective clients' intent — whether they want an urgent emergency repair or a high-ticket interior consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {siteConfig.industries.map((ind: IndustryItem) => {
              const Icon = getIndustryIcon(ind.iconName);

              return (
                <div
                  key={ind.id}
                  id={ind.slug}
                  className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ backgroundColor: `${ind.accentColor}20`, color: ind.accentColor }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
                        {ind.recommendedPackage}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-brand-300 transition-colors">
                        {ind.name}
                      </h2>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {ind.description}
                      </p>
                    </div>

                    <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                        Conversion Essentials:
                      </span>
                      {ind.keyNeeds.map(need => (
                        <div key={need} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{need}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Tailored for Bengaluru & Indian SMBs
                    </span>

                    <button
                      onClick={() => openDemoModal({ service: `Website for ${ind.name}` })}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md"
                    >
                      <span>Request Demo for {ind.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
