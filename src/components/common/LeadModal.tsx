import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import { LeadForm } from './LeadForm';

export const LeadModal: React.FC = () => {
  const { isOpen, closeDemoModal, preselectedData } = useLeadModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={closeDemoModal} />

      <div className="relative w-full max-w-2xl bg-[#0B1120] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeDemoModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Get Your Free Website Demo & Consultation
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Let's Build Something Great for Your Business.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Share a few details below. We'll examine your requirement and propose the most effective website and lead structure.
          </p>
        </div>

        <LeadForm
          initialService={preselectedData.service}
          initialBudget={preselectedData.budget}
          onSuccess={() => {
            // Modal stays open with confirmation screen
          }}
          isCompact={true}
        />
      </div>
    </div>
  );
};
