import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Layout, 
  Sliders, 
  TrendingUp, 
  PhoneCall, 
  Smartphone,
  Laptop,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import { siteConfig } from '../../config/site';

export const Hero: React.FC = () => {
  const { openDemoModal } = useLeadModal();
  const [activeTab, setActiveTab] = useState<'website' | 'dashboard' | 'whatsapp'>('website');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-accent-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Location & Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Digital Growth Partner for Bengaluru & Indian SMBs</span>
            <span className="text-slate-500">•</span>
            <span className="text-brand-400 font-semibold">{siteConfig.tagline}</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12] mb-6">
            Your Business Deserves <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-300 to-accent-400">
              More Than Just a Website.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We build professional websites, lead generation systems, and AI-powered automations that help local businesses attract customers and grow with confidence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => openDemoModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-xl shadow-brand-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5 text-brand-200" />
              <span>Get Your Free Demo</span>
              <ArrowRight className="w-5 h-5 text-white/80" />
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>

          {/* Three Concise Benefit Labels */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Built for Your Business</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4 text-brand-400" />
              <span>Designed to Generate Enquiries</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4 text-accent-400" />
              <span>Ready to Grow With You</span>
            </div>
          </div>
        </div>

        {/* Realistic Interactive Website & Lead System Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glass Browser Frame */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Top Browser Bar */}
            <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                  demo.builderbob.in/preview/local-business
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('website')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'website' 
                      ? 'bg-brand-600 text-white font-medium shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Website & Lead Form</span>
                </button>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-brand-600 text-white font-medium shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Lead Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'whatsapp' 
                      ? 'bg-emerald-600 text-white font-medium shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Automation</span>
                </button>
              </div>
            </div>

            {/* Mockup Canvas */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-[#0B1120] to-[#090D16]">
              {activeTab === 'website' && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Mock Site Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center font-bold text-white text-xs">
                        AL
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Aura Living Interiors</div>
                        <div className="text-[10px] text-slate-400">Indiranagar, Bengaluru</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <Clock className="w-3 h-3" /> Available This Week
                      </span>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp Us</span>
                      </a>
                    </div>
                  </div>

                  {/* Mock Site Hero & Lead Form */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 space-y-4 text-left">
                      <span className="text-[11px] font-semibold text-brand-400 uppercase tracking-wider">
                        Premium Living & Modular Aesthetics
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                        Modern 3BHK & Villa Interiors in Bengaluru with Fixed Turnkey Timelines.
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Zero subcontracting markup, 10-year woodwork warranty, and transparent price milestones.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1 text-xs">
                        <span className="bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                          📐 Free 3D Floorplan Design
                        </span>
                        <span className="bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                          ⚡ 45-Day Delivery Promise
                        </span>
                      </div>
                    </div>

                    {/* Mock Quick Enquiry Card */}
                    <div className="md:col-span-5 bg-slate-900/90 border border-brand-500/30 rounded-xl p-4 shadow-xl text-left">
                      <div className="text-xs font-semibold text-white mb-1 flex items-center justify-between">
                        <span>Instant Consultation Request</span>
                        <span className="text-[10px] text-brand-400">Free Estimate</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mb-3">
                        Tell us your project scope for instant callback.
                      </p>
                      <div className="space-y-2 text-xs">
                        <input
                          type="text"
                          readOnly
                          value="Suresh Kumar (Koramangala)"
                          className="w-full bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 text-xs"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            readOnly
                            value="3BHK Apartment"
                            className="w-full bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 text-xs"
                          />
                          <input
                            type="text"
                            readOnly
                            value="₹12L - ₹18L"
                            className="w-full bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 text-xs"
                          />
                        </div>
                        <button
                          type="button"
                          className="w-full py-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 shadow"
                        >
                          <span>Get Free 3D Concept Call</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dashboard' && (
                <div className="space-y-4 text-left animate-fadeIn">
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-brand-400" />
                        Live Business Lead Pipeline
                      </h4>
                      <p className="text-xs text-slate-400">
                        Real-time visitor enquiries routed directly to your phone and Google Sheets
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 bg-emerald-500/15 text-emerald-400 rounded-md font-medium border border-emerald-500/20">
                        ⚡ Auto-Notification: Active
                      </span>
                    </div>
                  </div>

                  {/* Sample Stream of Local Leads */}
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Ananya Verma • 3BHK Renovation</div>
                          <div className="text-slate-400 text-[11px]">HSR Layout, Bengaluru • Budget: ₹15L - ₹20L</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                          WhatsApp Sent
                        </span>
                        <span className="text-slate-400 text-[11px]">2 mins ago</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-brand-400 flex items-center justify-center font-bold">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Karthik Reddy • Commercial Office Fitout</div>
                          <div className="text-slate-400 text-[11px]">Indiranagar 100ft Rd • Looking for Site Visit</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-semibold">
                          Consultation Booked
                        </span>
                        <span className="text-slate-400 text-[11px]">18 mins ago</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Dr. Priya Nair • Clinic Website & SEO</div>
                          <div className="text-slate-400 text-[11px]">Whitefield • Package: Business Growth</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-semibold">
                          Enquiry Logged
                        </span>
                        <span className="text-slate-400 text-[11px]">42 mins ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'whatsapp' && (
                <div className="space-y-4 text-left animate-fadeIn max-w-xl mx-auto">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30 space-y-3">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>BuilderBob WhatsApp Automation</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        </div>
                        <div className="text-[10px] text-slate-400">Instant Customer Acknowledgment</div>
                      </div>
                    </div>

                    {/* Chat Bubble: Visitor */}
                    <div className="flex justify-end">
                      <div className="bg-emerald-900/50 text-emerald-100 border border-emerald-700/50 rounded-2xl rounded-tr-none px-3.5 py-2 text-xs max-w-xs shadow">
                        <p>Hi, I saw your website and would like a consultation for clinic website design in Bengaluru.</p>
                        <span className="text-[9px] text-emerald-400 text-right block mt-1">11:42 AM ✓✓</span>
                      </div>
                    </div>

                    {/* Chat Bubble: Auto Bot Response */}
                    <div className="flex justify-start">
                      <div className="bg-slate-900 text-slate-200 border border-slate-800 rounded-2xl rounded-tl-none px-3.5 py-2 text-xs max-w-sm shadow space-y-1.5">
                        <p className="font-semibold text-brand-300">
                          Hello! Welcome to BuilderBob Growth Support. 🚀
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Thank you for reaching out! We've received your clinic website enquiry. Would you like to:
                        </p>
                        <div className="space-y-1 text-[11px] pt-1">
                          <div className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800 text-brand-400 font-medium">
                            1️⃣ View Healthcare Demo Websites
                          </div>
                          <div className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800 text-brand-400 font-medium">
                            2️⃣ Schedule a 15-Min Discovery Call
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-500 block mt-1">Instant Auto-Reply • 11:42 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
