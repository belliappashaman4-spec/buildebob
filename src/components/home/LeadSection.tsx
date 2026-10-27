import React from 'react';
import { LeadForm } from '../common/LeadForm';
import { ShieldCheck, Sparkles, CheckCircle, Clock } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const LeadSection: React.FC = () => {
  return (
    <section id="contact-form" className="py-24 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Get Started in Minutes
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white leading-tight">
              Let’s Build a Website for Your Business.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Tell us a little about your business. We’ll understand your requirements and discuss the right solution.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">No-Obligation Consultation</h4>
                  <p className="text-xs text-slate-400">We analyze your requirements and explain exactly what will work best for your locality.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Rapid 24-Hour Review</h4>
                  <p className="text-xs text-slate-400">You'll hear back from an experienced digital strategist within one business day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Honest Scope & Fixed Milestones</h4>
                  <p className="text-xs text-slate-400">Transparent pricing in INR with zero hidden surprises or recurring entrapment.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span className="text-white font-medium block mb-1">Prefer an instant conversation?</span>
              Reach our Bengaluru line via WhatsApp at{' '}
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline font-semibold"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold font-display text-white">
                Request Your Free Website Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below. All fields marked with * are required.
              </p>
            </div>

            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};
