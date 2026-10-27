import React, { useState } from 'react';
import { MessageSquare, X, ExternalLink, HelpCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const isConfigured = siteConfig.contact.whatsappNumber && !siteConfig.contact.whatsappNumber.includes('0000000000');
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.defaultWhatsAppMessage)}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Hover/Clickable Prompt Pill */}
        {showTooltip && (
          <div className="mb-2 bg-slate-900 border border-slate-700 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl max-w-xs animate-fadeIn flex items-center gap-2">
            <span>Direct WhatsApp Enquiry with BuilderBob</span>
            <button 
              onClick={() => setShowTooltip(false)} 
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="relative group">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with BuilderBob on WhatsApp"
            onMouseEnter={() => setShowTooltip(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-xl shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95 group"
          >
            <div className="relative flex items-center justify-center">
              <MessageSquare className="w-5 h-5 fill-current" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"></span>
            </div>
            <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
          </a>

          {/* Config indicator button if using placeholder */}
          {!isConfigured && (
            <button
              onClick={() => setIsConfigModalOpen(true)}
              title="WhatsApp configuration guide"
              className="absolute -top-2 -left-2 bg-amber-500 text-slate-950 p-1 rounded-full text-[10px] font-bold shadow hover:bg-amber-400"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* WhatsApp Configuration Explainer Modal */}
      {isConfigModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-6 text-slate-100 shadow-2xl">
            <button
              onClick={() => setIsConfigModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              WhatsApp Setup Guide
            </h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              BuilderBob does not use fake or fabricated phone numbers. Currently, a safe placeholder (<code className="text-amber-400 font-mono">919000000000</code>) is configured in <code className="text-brand-300 font-mono">src/config/site.ts</code>.
            </p>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-400 space-y-2 mb-4 font-mono">
              <p className="text-slate-300"># To set your live WhatsApp number:</p>
              <p className="text-emerald-400">VITE_WHATSAPP_NUMBER=919876543210</p>
              <p className="text-slate-400 text-[11px]">in your <span className="text-white">.env</span> file, or update <span className="text-white">siteConfig.contact.whatsappNumber</span>.</p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsConfigModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold text-white"
              >
                Close
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-semibold text-white"
              >
                Test Link <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
