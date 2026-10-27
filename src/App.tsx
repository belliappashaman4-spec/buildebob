import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { LeadModalProvider } from './context/LeadModalContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { LeadModal } from './components/common/LeadModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DemoPreviewPage } from './pages/DemoPreviewPage';
import { ArrowLeft, Home } from 'lucide-react';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

// 404 Fallback Page
const NotFoundPage = () => (
  <div className="min-h-screen pt-36 pb-20 flex items-center justify-center text-center px-4">
    <div className="max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
      <div className="text-5xl font-mono font-extrabold text-brand-500">404</div>
      <h1 className="text-2xl font-bold font-display text-white">Page Not Found</h1>
      <p className="text-xs text-slate-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-md transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  </div>
);

export const App: React.FC = () => {
  const location = useLocation();
  const isDemoPreview = location.pathname.startsWith('/portfolio/');

  return (
    <LeadModalProvider>
      <ScrollToTop />
      
      {/* Hide standard navbar & footer on dedicated demo simulator page */}
      {!isDemoPreview && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<DemoPreviewPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!isDemoPreview && <Footer />}
      {!isDemoPreview && <WhatsAppFloating />}
      <LeadModal />
    </LeadModalProvider>
  );
};
