import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles, ArrowRight, CheckCircle2, Eye } from 'lucide-react';
import { siteConfig, DemoProject } from '../../config/site';

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Concept Demonstrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Explore Our Live Demo Projects.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We create practical, industry-tailored concepts showcasing realistic conversion structures. Clearly designated as <strong className="text-amber-400">Concept Demos</strong> to maintain absolute transparency.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors self-start md:self-end"
          >
            <span>View All Showcase Demos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.demoProjects.map((project: DemoProject) => (
            <div
              key={project.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Card Header & Visual Preview Banner */}
              <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-gradient-to-r from-slate-950/80 to-slate-900/60">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Conversion Architecture:
                  </div>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics / Strategy Preview Grid */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                  {project.metricsPreview.map((m, i) => (
                    <div key={i} className="px-1">
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                      <div className="text-xs font-semibold text-white truncate mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Card CTA: Opens dedicated Interactive Demo Page */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Location: <strong className="text-slate-300">{project.demoContent.location.split(',')[0]}</strong>
                  </span>
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Live Demo Page</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
