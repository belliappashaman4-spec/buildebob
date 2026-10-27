import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig } from '../config/site';
import { LeadForm } from '../components/common/LeadForm';
import { 
  MapPin, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMessage)}`;

  return (
    <>
      <SeoHead
        title="Contact BuilderBob — Bengaluru Digital Growth Agency"
        description="Get in touch with BuilderBob in Bengaluru. Request a free website consultation, discuss custom integrations, or chat with us directly on WhatsApp."
        keywords={[
          "contact BuilderBob",
          "website developer Bengaluru phone number",
          "digital agency contact Bangalore",
          "WhatsApp website consultation India"
        ]}
      />

      <div className="pt-32 pb-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Let's Connect
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mt-4 mb-6">
              Start Your Project With BuilderBob
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Have questions about your project scope, timeline, or pricing? Fill out the consultation form below or connect instantly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left Column: Direct Info & Location */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <h2 className="text-xl font-bold font-display text-white">
                  Get in Touch Directly
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* WhatsApp */}
                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-emerald-300 block text-xs uppercase tracking-wider mb-0.5">
                        WhatsApp (Fastest Response)
                      </span>
                      <p className="text-slate-300 text-xs mb-2">
                        Reach out for quick queries, demo requests, and preliminary quotes.
                      </p>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block text-xs uppercase tracking-wider mb-0.5">
                        Email Inquiries
                      </span>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-400 hover:underline text-xs sm:text-sm font-medium">
                        {siteConfig.contact.email}
                      </a>
                      <p className="text-slate-500 text-[11px] mt-0.5">Support: {siteConfig.contact.supportEmail}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block text-xs uppercase tracking-wider mb-0.5">
                        Operating Location
                      </span>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {siteConfig.fullLocation}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block text-xs uppercase tracking-wider mb-0.5">
                        Working Hours
                      </span>
                      <p className="text-slate-300 text-xs">
                        {siteConfig.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>We reply to all qualified project enquiries within 24 business hours.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
                  Free Consultation Form
                </span>
                <h2 className="text-2xl font-bold font-display text-white mt-3">
                  Tell Us About Your Project
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your requirements below. We will analyze your sector and get in touch with actionable recommendations.
                </p>
              </div>

              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
