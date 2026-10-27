import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig, DemoProject } from '../config/site';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Eye, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { FinalCta } from '../components/home/FinalCta';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Our Work & Live Concept Demos"
        description="Explore realistic website concepts and lead generation setups built by BuilderBob for Indian interior designers, salons, home repair, and gyms."
        keywords={[
          "website portfolio Bangalore",
          "concept demo websites",
          "interior design website mockup",
          "salon booking demo",
          "home repair service website",
          "gym website demo India"
        ]}
      />

      <div className="pt-32 pb-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mt-2 mb-6">
              Our Work & Concept Demos
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore interactive prototypes built to demonstrate high-converting layout architecture, WhatsApp workflows, and speed benchmarks.
            </p>
          </div>

          {/* Transparency Statement Banner */}
          <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 mb-12 flex items-start gap-4 max-w-4xl mx-auto">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h3 className="font-bold text-white text-base mb-1">
                BuilderBob’s Transparency Promise
              </h3>
              <p>
                Unlike many agencies that display counterfeit client logos, stock photo testimonials, or fake revenue figures, we clearly label all sample projects as <strong className="text-amber-400">Concept Demos</strong> until they represent live, verified client installations. You can interact with each demo to test its UX, forms, and mobile flow.
              </p>
            </div>
          </div>

          {/* Demos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {siteConfig.demoProjects.map((project: DemoProject) => (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
              >
                {/* Visual Top Bar */}
                <div className="p-6 sm:p-8 bg-slate-950/80 border-b border-slate-800/80">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
                      {project.type}
                    </span>
                    <span className="text-xs text-slate-400">
                      Industry: <strong className="text-slate-300">{project.industry}</strong>
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Conversion Architecture:
                    </span>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benchmark Indicators */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                    {project.metricsPreview.map((m, i) => (
                      <div key={i} className="px-1">
                        <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                        <div className="text-xs font-semibold text-white truncate mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-400" />
                      {project.demoContent.location.split(',')[0]}
                    </span>

                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Launch Interactive Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FinalCta />
    </>
  );
};
