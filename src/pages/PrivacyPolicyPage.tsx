import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig } from '../config/site';
import { ShieldCheck, Lock, Mail, MapPin } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy"
        description="BuilderBob's Privacy Policy explaining how we collect, handle, and protect your business contact information and project requirements."
      />

      <div className="pt-32 pb-24 bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-3 mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400">
              Effective Date: October 2026 | Last Updated: October 27, 2026
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-slate-300 text-sm leading-relaxed shadow-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-400" />
                1. Overview & Commitment
              </h2>
              <p>
                {siteConfig.legalName} ("BuilderBob", "we", "us", or "our") operates the website <strong className="text-white">builderbob.in</strong>. We respect your privacy and are committed to safeguarding the personal and commercial information you share with us. This policy details how we collect, store, and utilize your information when you browse our website, request a consultation, or communicate with us via WhatsApp.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                2. Information We Collect
              </h2>
              <p>
                We only collect information that is strictly necessary to evaluate your project requirements and communicate effectively:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li><strong className="text-slate-200">Contact Details:</strong> Your name, business name, phone number, and email address submitted via consultation forms.</li>
                <li><strong className="text-slate-200">Project Requirements:</strong> Your industry vertical, estimated budget, desired features, and project notes.</li>
                <li><strong className="text-slate-200">Technical Logs:</strong> Standard web server logs including IP address, browser type, and operating system for security and site diagnostics.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                3. How We Use Your Information
              </h2>
              <p>Your details are utilized strictly for legitimate business objectives:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Reviewing your business requirements and preparing tailored website proposals.</li>
                <li>Contacting you via phone, WhatsApp, or email to schedule discovery calls or provide project estimates.</li>
                <li>Fulfilling agreed website development, maintenance, and automation services.</li>
                <li>Complying with applicable legal obligations under Indian law (including the Information Technology Act and Digital Personal Data Protection Act).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                4. Absolute No-Spam & No-Resale Guarantee
              </h2>
              <p>
                <strong className="text-white">We never sell, rent, lease, or trade your contact details</strong> to third-party telemarketers, brokers, or advertising networks. Your information remains confidential within BuilderBob.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                5. WhatsApp Communication Policy
              </h2>
              <p>
                When you click our WhatsApp links or opt to receive project updates via WhatsApp, you consent to receive direct business messages from our team regarding your specific enquiry. You may opt out of WhatsApp communications at any time simply by replying "STOP".
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                6. Data Security & Storage
              </h2>
              <p>
                We enforce standard administrative and technical safeguards to protect your submissions from unauthorized access, accidental alteration, or disclosure. All form transmissions are encrypted using standard SSL/TLS protocols.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                7. Contact Information
              </h2>
              <p>
                For questions regarding this Privacy Policy or to request deletion of your submitted consultation details, please contact us:
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1 text-xs">
                <div className="text-white font-semibold">{siteConfig.legalName}</div>
                <div>Email: <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-brand-400 hover:underline">{siteConfig.contact.supportEmail}</a></div>
                <div>Location: {siteConfig.fullLocation}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
