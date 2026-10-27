import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Target, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#090D16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-brand-500/30 p-2.5 flex items-center justify-center mb-6 shadow-lg">
                <img src="/logo-icon.png" alt="BuilderBob Logo Icon" className="w-full h-full object-contain" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 block mb-2">
                Digital Growth Partner
              </span>
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                BuilderBob
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Based out of Bengaluru, Karnataka, we work with ambitious local entrepreneurs across India to establish modern websites, lead generation flows, and customer enquiry automations.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>Headquartered in Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Focused on Indian SMBs, contractors & service firms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-400 flex-shrink-0" />
                  <span>Zero fabricated awards or vanity numbers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              About BuilderBob
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white leading-tight">
              We Build Digital Experiences That Help Businesses Move Forward.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Most local businesses in India struggle with two extremes: expensive digital agencies that speak in confusing jargon and charge exorbitant retainers, or cheap freelancers who disappear after delivering a broken template.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              BuilderBob was founded to bridge that gap. We operate as an honest, dependable digital growth partner. We build websites that load in the blink of an eye on mobile data, connect smoothly with WhatsApp, and make it effortless for your local customers to enquire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  Direct Communication
                </h4>
                <p className="text-xs text-slate-400">
                  You work directly with the developers and designers building your project. No intermediaries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  India-First Architecture
                </h4>
                <p className="text-xs text-slate-400">
                  Built specifically around WhatsApp, mobile responsiveness, and localized search intent.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                <span>Read our full agency mission & values</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
