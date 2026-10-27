import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig } from '../config/site';
import { 
  ShieldCheck, 
  Target, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  HeartHandshake, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';
import { FinalCta } from '../components/home/FinalCta';

export const AboutPage: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  const values = [
    {
      title: "Radical Transparency",
      description: "We do not invent fake client logos, fabricated awards, or fictional employee headcounts. We tell you exactly what works, what costs, and what timeline to expect.",
      icon: ShieldCheck,
      color: "text-emerald-400"
    },
    {
      title: "Mobile-First for India",
      description: "Indian customers discover local businesses on smartphones via Google Maps and WhatsApp. Every website we build is lightweight, instantaneous on 4G/5G, and effortless to navigate.",
      icon: Zap,
      color: "text-brand-400"
    },
    {
      title: "Conversion over Vanity",
      description: "We don't build heavy art projects that look pretty in design contests but fail to generate calls. Every headline, form, and button has one job: helping you convert visitors into qualified leads.",
      icon: Target,
      color: "text-accent-400"
    },
    {
      title: "Long-Term Growth Partner",
      description: "We are not hit-and-run freelancers. We provide ongoing support, routine backups, performance audits, and workflow improvements as your business expands.",
      icon: HeartHandshake,
      color: "text-blue-400"
    }
  ];

  return (
    <>
      <SeoHead
        title="About BuilderBob — Digital Growth Agency in Bengaluru"
        description="Learn about BuilderBob's mission to help Indian local businesses and SMBs build modern, fast websites and automated lead generation systems."
        keywords={[
          "about BuilderBob",
          "digital growth agency Bengaluru",
          "website development partner Bangalore",
          "small business digital partner India"
        ]}
      />

      <div className="pt-32 pb-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Our Story & Philosophy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mt-4 mb-6 leading-tight">
              We Build Digital Experiences That Help Businesses Move Forward.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              BuilderBob is an agile digital growth agency based in Bengaluru, Karnataka. We are on a mission to bring modern web standards, direct WhatsApp conversions, and AI automation to Indian SMBs.
            </p>
          </div>

          {/* Core Philosophy Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                The Gap in the Indian Web Market
              </h2>
              <p>
                When small business owners in India decide to build a website, they are frequently confronted with a frustrating dilemma:
              </p>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <strong className="text-rose-400 block mb-1">1. Traditional Agencies:</strong>
                  They charge massive monthly retainers, speak in confusing technical acronyms, take three months to deliver, and hand off an overly complex CMS that breaks within a year.
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <strong className="text-amber-400 block mb-1">2. Cheap Freelancers:</strong>
                  They install a bloated, outdated WordPress theme, ignore mobile optimization, fail to configure local SEO, and disappear as soon as you need an update.
                </div>
              </div>
              <p>
                BuilderBob was created to be the alternative: an agile, reliable partner that builds lightning-fast websites engineered specifically for conversion.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-brand-500/30 p-2.5 flex items-center justify-center shadow-lg">
                  <img src="/logo-icon.png" alt="BuilderBob Logo Icon" className="w-full h-full object-contain" />
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  BuilderBob At A Glance
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                    <span>Based in <strong>Bengaluru, Karnataka, India</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Core Focus: <strong>Indian SMBs, Contractors, Clinics & Studios</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent-400 flex-shrink-0" />
                    <span>Delivery: <strong>Fast, milestone-driven turnarounds (5-14 days)</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Values: <strong>Zero fake credentials, honest pricing in INR</strong></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => openDemoModal()}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Discuss Your Project With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Our Core Values Grid */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold font-display text-white mb-3">
                Our Operating Principles
              </h2>
              <p className="text-slate-400 text-sm">
                How we think, communicate, and deliver results for our clients every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(val => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${val.color}`} />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <FinalCta />
    </>
  );
};
