import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import { siteConfig } from '../../config/site';

export const FinalCta: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#090D16] to-slate-950 border-t border-slate-800">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Digital Transformation Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-6">
          Ready to Grow Your Business Online?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let’s build a fast, modern digital presence with WhatsApp enquiry capture and smart automations tailored to your local market.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openDemoModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-xl shadow-brand-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5 text-brand-200" />
            <span>Get Your Free Demo</span>
            <ArrowRight className="w-5 h-5 text-white/80" />
          </button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-slate-500 mt-6">
          Serving businesses in Bengaluru and across India • No hidden charges • 100% Honest Delivery
        </p>
      </div>
    </section>
  );
};
