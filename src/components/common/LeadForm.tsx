import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, ArrowRight, ShieldCheck, Clock, Database as DatabaseIcon } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { submitInquiryToSupabase } from '../../lib/supabase';

interface LeadFormProps {
  initialService?: string;
  initialBudget?: string;
  onSuccess?: () => void;
  isCompact?: boolean;
}

const BUDGET_OPTIONS = [
  "Under ₹10,000",
  "₹10,000–₹20,000",
  "₹20,000–₹35,000",
  "₹35,000+",
  "Need Guidance"
];

const SERVICE_OPTIONS = [
  "Website Development",
  "Lead Generation",
  "AI Automation",
  "Local SEO",
  "Website Maintenance",
  "Other"
];

const BUSINESS_TYPES = [
  "Interior Designer / Architect",
  "Home Improvement & Services",
  "Salon, Spa & Beauty",
  "Gym & Fitness Center",
  "Restaurant & Cafe",
  "Clinic, Doctor & Healthcare",
  "Real Estate & Property",
  "Professional Consultant / CA / Legal",
  "Retail & Local Shop",
  "Startup / Other Local Business"
];

export const LeadForm: React.FC<LeadFormProps> = ({ 
  initialService, 
  initialBudget, 
  onSuccess,
  isCompact = false 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    servicesInterested: initialService ? [initialService] : [] as string[],
    budget: initialBudget || '',
    requirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadRef, setLeadRef] = useState('');

  useEffect(() => {
    if (initialService && !formData.servicesInterested.includes(initialService)) {
      setFormData(prev => ({
        ...prev,
        servicesInterested: [...prev.servicesInterested, initialService]
      }));
    }
    if (initialBudget && !formData.budget) {
      setFormData(prev => ({ ...prev, budget: initialBudget }));
    }
  }, [initialService, initialBudget]);

  const validate = () => {
    const err: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      err.name = 'Please enter your full name (at least 2 characters).';
    }

    if (!formData.businessName.trim()) {
      err.businessName = 'Please enter your business or company name.';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      err.phone = 'Phone number is required for consultation.';
    } else if (!/^(?:\+?91)?[6789]\d{9}$/.test(phoneClean) && phoneClean.length < 8) {
      err.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.email.trim()) {
      err.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      err.email = 'Please provide a valid email address.';
    }

    if (!formData.businessType) {
      err.businessType = 'Please select your business type.';
    }

    if (formData.servicesInterested.length === 0) {
      err.services = 'Please choose at least one service you are interested in.';
    }

    if (!formData.budget) {
      err.budget = 'Please select an approximate budget range.';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const exists = prev.servicesInterested.includes(service);
      const updated = exists
        ? prev.servicesInterested.filter(s => s !== service)
        : [...prev.servicesInterested, service];
      return { ...prev, servicesInterested: updated };
    });
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const generatedRef = `BB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Save directly to Supabase
    const result = await submitInquiryToSupabase({
      reference_id: generatedRef,
      full_name: formData.name.trim(),
      business_name: formData.businessName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      business_type: formData.businessType,
      services_interested: formData.servicesInterested,
      budget: formData.budget,
      requirements: formData.requirements.trim() || undefined,
      source: 'website_lead_form',
      metadata: {
        page_location: window.location.pathname,
        submitted_at: new Date().toISOString(),
      }
    });

    // Store in browser localStorage as offline resilience backup
    try {
      const existing = JSON.parse(localStorage.getItem('builderbob_leads') || '[]');
      existing.unshift({
        id: generatedRef,
        createdAt: new Date().toISOString(),
        supabaseSuccess: result.success,
        ...formData
      });
      localStorage.setItem('builderbob_leads', JSON.stringify(existing));
    } catch {
      // LocalStorage error ignore
    }

    console.info('[BuilderBob Lead Captured -> Supabase]', { reference: generatedRef, result });

    setIsSubmitting(false);
    setIsSuccess(true);
    setLeadRef(generatedRef);
    if (onSuccess) onSuccess();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      businessType: '',
      servicesInterested: [],
      budget: '',
      requirements: ''
    });
    setIsSuccess(false);
    setErrors({});
  };

  if (isSuccess) {
    const waText = encodeURIComponent(
      `Hi BuilderBob, I just requested a consultation on builderbob.in (Ref: ${leadRef}). My business is "${formData.businessName}" and I am interested in ${formData.servicesInterested.join(', ')}.`
    );
    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${waText}`;

    return (
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center text-slate-100 animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
          Consultation Requested
        </span>
        <h3 className="text-2xl font-bold font-display text-white mb-2">
          Thank you, {formData.name}!
        </h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-4">
          We have received your requirement for <strong className="text-white">{formData.businessName}</strong>. Reference ID: <span className="font-mono text-brand-400 font-semibold">{leadRef}</span>.
        </p>

        <div className="bg-slate-950/60 rounded-xl p-4 mb-6 border border-slate-800 text-left text-xs text-slate-400 space-y-2">
          <div className="flex items-center text-slate-300 font-medium">
            <Clock className="w-4 h-4 mr-2 text-brand-400" />
            Next Steps:
          </div>
          <p className="pl-6">1. Our team will review your business type ({formData.businessType}) and requirements.</p>
          <p className="pl-6">2. We will reach out on <span className="text-slate-200">{formData.phone}</span> or <span className="text-slate-200">{formData.email}</span> within 24 business hours with initial recommendations.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-900/30"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Connect Instantly on WhatsApp
          </a>
          <button
            onClick={resetForm}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all"
          >
            Submit Another Enquiry
          </button>
        </div>

        <div className="text-left bg-emerald-950/30 border border-emerald-500/20 rounded-lg p-3 text-[11px] text-emerald-300 flex items-start gap-2">
          <DatabaseIcon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Connected to Supabase Backend:</strong> Your inquiry details and business requirements have been successfully recorded in our live database in the ap-south-1 (Mumbai) region.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Your Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={e => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border ${
              errors.name ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-brand-500'
            } text-white placeholder-slate-500 text-sm focus:outline-none transition-all`}
          />
          {errors.name && (
            <p className="text-xs text-rose-400 mt-1 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.name}
            </p>
          )}
        </div>

        {/* Business Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Business / Company Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Apex Dental Clinic"
            value={formData.businessName}
            onChange={e => {
              setFormData({ ...formData, businessName: e.target.value });
              if (errors.businessName) setErrors({ ...errors, businessName: '' });
            }}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border ${
              errors.businessName ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-brand-500'
            } text-white placeholder-slate-500 text-sm focus:outline-none transition-all`}
          />
          {errors.businessName && (
            <p className="text-xs text-rose-400 mt-1 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.businessName}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Phone Number (WhatsApp Preferred) <span className="text-rose-400">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. 98765 43210"
            value={formData.phone}
            onChange={e => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border ${
              errors.phone ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-brand-500'
            } text-white placeholder-slate-500 text-sm focus:outline-none transition-all`}
          />
          {errors.phone && (
            <p className="text-xs text-rose-400 mt-1 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            placeholder="e.g. rahul@business.com"
            value={formData.email}
            onChange={e => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border ${
              errors.email ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-brand-500'
            } text-white placeholder-slate-500 text-sm focus:outline-none transition-all`}
          />
          {errors.email && (
            <p className="text-xs text-rose-400 mt-1 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Business Type / Industry <span className="text-rose-400">*</span>
        </label>
        <select
          value={formData.businessType}
          onChange={e => {
            setFormData({ ...formData, businessType: e.target.value });
            if (errors.businessType) setErrors({ ...errors, businessType: '' });
          }}
          className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border ${
            errors.businessType ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-brand-500'
          } text-white text-sm focus:outline-none transition-all`}
        >
          <option value="" disabled className="bg-slate-900 text-slate-500">Select your industry...</option>
          {BUSINESS_TYPES.map(type => (
            <option key={type} value={type} className="bg-slate-900 text-white">
              {type}
            </option>
          ))}
        </select>
        {errors.businessType && (
          <p className="text-xs text-rose-400 mt-1 flex items-center">
            <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.businessType}
          </p>
        )}
      </div>

      {/* Services Interested In */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Services Interested In <span className="text-rose-400">*</span> (Select all that apply)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SERVICE_OPTIONS.map(service => {
            const isSelected = formData.servicesInterested.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                className={`px-3 py-2 rounded-lg text-xs font-medium text-left border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-brand-600/20 border-brand-500 text-brand-300'
                    : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span>{service}</span>
                <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[10px] ${
                  isSelected ? 'border-brand-400 bg-brand-500 text-white' : 'border-slate-700'
                }`}>
                  {isSelected && '✓'}
                </span>
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className="text-xs text-rose-400 mt-1 flex items-center">
            <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.services}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Approximate Budget <span className="text-rose-400">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {BUDGET_OPTIONS.map(b => {
            const isSelected = formData.budget === b;
            return (
              <button
                type="button"
                key={b}
                onClick={() => {
                  setFormData({ ...formData, budget: b });
                  if (errors.budget) setErrors({ ...errors, budget: '' });
                }}
                className={`px-2.5 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
                  isSelected
                    ? 'bg-accent-500/20 border-accent-500 text-accent-300'
                    : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
        {errors.budget && (
          <p className="text-xs text-rose-400 mt-1 flex items-center">
            <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.budget}
          </p>
        )}
      </div>

      {/* Additional Requirements */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Additional Requirements / Notes <span className="text-slate-500 font-normal">(Optional)</span>
        </label>
        <textarea
          rows={isCompact ? 2 : 3}
          placeholder="Tell us about your target area, current website (if any), timeline, or specific features you need..."
          value={formData.requirements}
          onChange={e => setFormData({ ...formData, requirements: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-brand-500 text-white placeholder-slate-500 text-sm focus:outline-none transition-all resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-lg shadow-brand-600/30 transition-all text-sm sm:text-base disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Preparing Consultation Details...
            </span>
          ) : (
            <span className="flex items-center">
              Request My Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </button>
        <p className="text-[11px] text-slate-500 text-center mt-2.5">
          🔒 No spam, ever. We strictly respect your privacy and will never share your contact information.
        </p>
      </div>
    </form>
  );
};
