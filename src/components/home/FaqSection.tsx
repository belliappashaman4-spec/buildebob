import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteConfig, FaqItem } from '../../config/site';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(siteConfig.faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-24 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
            Got Questions? We Have Answers.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Everything you need to know about working with BuilderBob, project turnarounds, revisions, and WhatsApp integration.
          </p>
        </div>

        <div className="space-y-3">
          {siteConfig.faqs.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-lg bg-slate-800 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/50 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white mb-0.5">Have a question not listed here?</h4>
            <p className="text-xs text-slate-400">Reach out directly and we’ll clarify all details for your project.</p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hi BuilderBob, I have a custom question about your website services.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-md flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
