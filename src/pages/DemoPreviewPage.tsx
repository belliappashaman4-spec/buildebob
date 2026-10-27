import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig, DemoProject } from '../config/site';
import { useLeadModal } from '../context/LeadModalContext';
import { 
  ArrowLeft, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  MessageSquare, 
  MapPin, 
  CheckCircle, 
  PhoneCall, 
  Calendar,
  X,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const DemoPreviewPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openDemoModal } = useLeadModal();
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isDemoEnquiryOpen, setIsDemoEnquiryOpen] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  // Form inputs for the simulated demo website
  const [demoClientName, setDemoClientName] = useState('');
  const [demoClientPhone, setDemoClientPhone] = useState('');
  const [demoClientService, setDemoClientService] = useState('');

  const project: DemoProject | undefined = siteConfig.demoProjects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoClientName || !demoClientPhone) return;
    setEnquirySuccess(true);
    setTimeout(() => {
      // Keep success message visible
    }, 500);
  };

  const demoWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(project.demoContent.whatsappMessage)}`;

  return (
    <>
      <SeoHead
        title={`${project.name} (Live Concept Demo)`}
        description={`Interactive website concept and conversion architecture for ${project.name} — engineered by BuilderBob.`}
      />

      {/* Top Demo Toolbar */}
      <div className="fixed top-0 inset-x-0 z-50 bg-[#090D16] border-b border-slate-800 text-white px-4 py-3 flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-3">
          <Link
            to="/portfolio"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <img src="/logo-icon.png" alt="BuilderBob Icon" className="w-4 h-4 object-contain" />
            <span>Back to BuilderBob</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-semibold text-amber-300 uppercase tracking-wider text-[11px]">
              Concept Demo: {project.name}
            </span>
          </div>
        </div>

        {/* Viewport switch: Desktop / Mobile preview */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 p-1 rounded-lg">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              deviceMode === 'desktop' ? 'bg-brand-600 text-white font-medium' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop View</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              deviceMode === 'mobile' ? 'bg-brand-600 text-white font-medium' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile Preview</span>
          </button>
        </div>

        {/* BuilderBob Primary Callout */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => openDemoModal({ service: `Custom Website like ${project.name}` })}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold shadow-md transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-200" />
            <span>Get a Website Like This</span>
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className={`min-h-screen pt-16 pb-12 transition-all ${deviceMode === 'mobile' ? 'bg-slate-950 flex justify-center py-20' : 'bg-slate-950'}`}>
        <div className={deviceMode === 'mobile' ? 'w-full max-w-[420px] rounded-[40px] border-8 border-slate-800 shadow-2xl overflow-hidden my-6 bg-slate-900 min-h-[750px] relative' : 'w-full min-h-screen bg-slate-900'}>
          
          {/* Simulated Website Content */}
          <div className="relative text-slate-100 min-h-screen flex flex-col justify-between">
            {/* Mock Header */}
            <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-bold text-white text-sm shadow">
                  {project.name.charAt(0)}
                </div>
                <div>
                  <h1 className="font-bold text-white text-sm sm:text-base leading-tight">
                    {project.name}
                  </h1>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-brand-400" />
                    {project.demoContent.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={demoWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsDemoEnquiryOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium text-xs shadow"
                >
                  Enquire
                </button>
              </div>
            </header>

            {/* Mock Hero */}
            <main className="flex-1 p-6 sm:p-12 max-w-5xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
                  {project.category}
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  {project.demoContent.heroHeading}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.demoContent.heroSubheading}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setIsDemoEnquiryOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>{project.demoContent.primaryCta}</span>
                  </button>

                  <a
                    href={demoWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Service Catalog Showcase */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">Our Core Services & Transparent Rates</h3>
                  <p className="text-xs text-slate-400">Clear offerings make it easier for local customers to commit.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.demoContent.servicesOffered.map((serv, i) => (
                    <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white text-sm">{serv.title}</h4>
                          {serv.price && (
                            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                              {serv.price}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{serv.desc}</p>
                      </div>

                      <button
                        onClick={() => {
                          setDemoClientService(serv.title);
                          setIsDemoEnquiryOpen(true);
                        }}
                        className="w-full py-2 rounded-lg bg-slate-900 hover:bg-brand-600 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 transition-colors"
                      >
                        Select & Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* About & Trust Section */}
              <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-2">
                  <h3 className="text-lg font-bold text-white">About {project.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.demoContent.aboutExcerpt}
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="font-semibold text-white">Trust Highlights:</div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" /> 100% Punctual Execution
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Local Team
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" /> Direct WhatsApp Support
                  </div>
                </div>
              </div>
            </main>

            {/* Mock Footer */}
            <footer className="bg-slate-950 border-t border-slate-800 p-6 text-center text-xs text-slate-500 space-y-2">
              <p>© {new Date().getFullYear()} {project.name}. All rights reserved.</p>
              <p className="text-[11px] text-amber-400 font-medium">
                💡 This is a live concept demonstration engineered by BuilderBob to showcase high-converting website design for {project.industry}.
              </p>
            </footer>

            {/* Simulated Floating WhatsApp Button */}
            <a
              href={demoWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-6 right-6 p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
              title="Chat with business on WhatsApp"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>
      </div>

      {/* Simulated Interactive Enquiry Modal */}
      {isDemoEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-6 text-white shadow-2xl">
            <button
              onClick={() => {
                setIsDemoEnquiryOpen(false);
                setEnquirySuccess(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {enquirySuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">Simulated Enquiry Sent!</h3>
                <p className="text-xs text-slate-300">
                  In a live deployment by BuilderBob, this enquiry instantly triggers a WhatsApp notification to the owner, emails the client, and records into a central dashboard.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsDemoEnquiryOpen(false);
                      setEnquirySuccess(false);
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold"
                  >
                    Close Demo Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-400" />
                  {project.demoContent.primaryCta}
                </h3>
                <p className="text-xs text-slate-400">
                  Simulated local client enquiry form for {project.name}.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Babu"
                    value={demoClientName}
                    onChange={e => setDemoClientName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98450 12345"
                    value={demoClientPhone}
                    onChange={e => setDemoClientPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Selected Service</label>
                  <select
                    value={demoClientService}
                    onChange={e => setDemoClientService(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  >
                    <option value="">Select a service...</option>
                    {project.demoContent.servicesOffered.map(s => (
                      <option key={s.title} value={s.title}>{s.title} ({s.price})</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 font-semibold text-xs text-white shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Demo Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
