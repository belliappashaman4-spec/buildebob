import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, MessageSquare, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <BrandLogo variant="light" imgClassName="h-10 sm:h-12 w-auto" />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              BuilderBob is a dedicated digital growth agency in Bengaluru, India. We partner with local business owners, service professionals, and startups to build high-converting websites, WhatsApp lead systems, and business automations.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Concept Demos</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Pricing Packages</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link 
                    to={`/services#${service.slug}`} 
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center gap-1">
                  View All Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Target Industries */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.industries.slice(0, 5).map(ind => (
                <li key={ind.id}>
                  <Link 
                    to={`/industries#${ind.slug}`} 
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center gap-1">
                  Explore All Industries <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Config / Compliance Notice Banner */}
        <div className="border-t border-slate-900 pt-6 pb-6 text-xs text-slate-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-brand-400 flex-shrink-0" />
            <span>
              Transparent Growth Partner: BuilderBob operates without false claims or fake testimonials. All showcase work is clearly designated as concept demos or verified client engagements.
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {siteConfig.legalName} ({siteConfig.domain}). All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Engineered in Bengaluru with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Indian SMBs.
          </p>
        </div>
      </div>
    </footer>
  );
};
