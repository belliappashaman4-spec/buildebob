import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig } from '../config/site';
import { FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Terms & Conditions"
        description="BuilderBob's Terms and Conditions governing website design, digital growth services, milestones, revisions, and client deliverables."
      />

      <div className="pt-32 pb-24 bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
              Legal Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-3 mb-2">
              Terms and Conditions
            </h1>
            <p className="text-xs text-slate-400">
              Effective Date: October 2026 | Last Updated: October 27, 2026
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-slate-300 text-sm leading-relaxed shadow-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-400" />
                1. Acceptance of Terms
              </h2>
              <p>
                By engaging {siteConfig.legalName} ("BuilderBob", "we", "us") for website design, digital growth services, local SEO setup, or business automation, you ("Client", "you") agree to be bound by the terms set forth herein.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                2. Project Proposals & Scope of Work
              </h2>
              <p>
                All project scopes, deliverables, timelines, and commercial figures are explicitly specified in written proposals or milestone statements. Any features, pages, or integrations not documented in the agreed scope will be evaluated as separate change requests and billed accordingly.
              </p>
              <p className="text-slate-400 text-xs">
                {siteConfig.pricingDisclaimer}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                3. Revision Policy
              </h2>
              <p>
                To maintain scheduled project turnaround times, packages include structured revision rounds:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li><strong className="text-white">Starter Website:</strong> Includes one (1) consolidated revision round following initial staging preview.</li>
                <li><strong className="text-white">Business Growth & Automation Packages:</strong> Includes two (2) structured revision rounds.</li>
                <li>Revisions encompass adjustments to layout, typography, visual hierarchy, and copy corrections within the agreed structural outline. Completely altering core business models or redesigning after approval constitutes extra scope.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                4. Client Responsibilities
              </h2>
              <p>
                Timely project delivery depends upon client cooperation. The Client agrees to provide necessary brand assets (logos, high-res photos, text copy, service menus) within 5 business days of project kickoff. Delays in furnishing required materials may proportionately adjust delivery timelines.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                5. Third-Party Costs & Subscriptions
              </h2>
              <p>
                Fees paid to BuilderBob cover custom website engineering, design, and integration labor. Direct costs for domain name registration (.in, .com), cloud hosting infrastructure, third-party WhatsApp Business API fees, or premium third-party plugins are billed directly to the Client or paid by the Client to the respective providers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white">
                6. Intellectual Property & Ownership
              </h2>
              <p>
                Upon final invoice clearance and full project settlement, the Client owns all custom frontend design, written copy, and bespoke assets created specifically for the project. BuilderBob reserves the right to display the completed project as a portfolio showcase case study.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                7. Limitation of Liability & No Guaranteed Business Results
              </h2>
              <p>
                BuilderBob creates high-converting digital foundations following proven design and conversion best practices. However, because customer purchasing decisions depend upon client pricing, offline salesmanship, competitor activity, and broader market conditions, <strong className="text-white">BuilderBob does not guarantee specific lead volumes, customer sales, or revenue figures.</strong>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-400" />
                8. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Bengaluru, Karnataka, India</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
