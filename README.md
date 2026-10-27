# BuilderBob — Digital Growth Agency Website

> **“We Build. You Grow.”**  
> Official website for **BuilderBob** (`builderbob.in`) — a modern digital growth partner for Indian small and medium businesses, local business owners, startups, and service providers headquartered in Bengaluru, Karnataka, India.

---

## 🚀 Key Features Built

- **Premium SaaS & Modern Agency UI/UX**:
  - Deep navy/near-black theme (`#090D16`, `#0B1120`), electric blue and vibrant orange accents, clean borders, glassmorphism, and subtle typography.
  - Interactive hero with a 3-way toggle showing a live local business website, lead capture form, lead pipeline dashboard, and WhatsApp bot automation.
- **Conversion Optimization**:
  - Global `LeadModal` triggerable from any "Get Your Free Demo" or "Request Custom Quote" button.
  - Dedicated lead generation form with client-side validation, business type selector, service multi-selector, budget selector, and honest development fallback.
  - Floating WhatsApp button with pre-filled message (`Hi BuilderBob, I'm interested in building a website for my business. Please share the details.`).
  - Pre-filled custom quote CTAs on all 3 pricing tiers.
- **Transparent Pricing in INR**:
  - **Starter Website**: ₹15,999 onwards
  - **Business Growth Website**: ₹20,999 onwards (Highlighted)
  - **Growth Automation Package**: ₹34,999 onwards
  - Clear scope, billing transparency, and revision terms.
- **Dedicated Interactive Concept Demos**:
  - **Aura Living Design Studio** (Interior Design & Architecture)
  - **Velvet & Vibe Wellness & Salon** (Salon, Spa & Personal Care)
  - **QuickFix Pro Home Services** (Home Maintenance & Electrical/Plumbing)
  - **IronPulse Strength & Fitness Lab** (Gym & Functional Training)
  - Dedicated preview mode with **Desktop / Mobile preview toggle**, interactive simulated booking, and return bar.
- **Full Route Architecture**:
  - `/` (Home)
  - `/services` (Detailed breakdown of all 6 core services)
  - `/industries` (Specific solutions for 8 Indian local business verticals)
  - `/portfolio` (Full showcase of Concept Demos with transparency promise)
  - `/portfolio/:slug` (Dedicated live concept demo simulator pages)
  - `/pricing` (Pricing tiers, comparison matrix, and billing guidelines)
  - `/about` (Honest agency mission, operating values, Bengaluru location)
  - `/contact` (Direct communication channels, consultation form, response SLA)
  - `/privacy-policy` (DPDP & Indian IT Act compliant privacy policy)
  - `/terms` (Clear terms, revision rounds, milestone payments, intellectual property)
- **Technical & SEO Standards**:
  - React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons.
  - Dynamic `document.title` and Open Graph metadata per page.
  - `public/robots.txt` and `public/sitemap.xml`.
  - Accessible semantics, zero broken links, responsive across all viewports.

---

## 🛠️ Project Structure

```
.
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LeadForm.tsx
│   │   │   ├── LeadModal.tsx
│   │   │   ├── WhatsAppFloating.tsx
│   │   │   └── SeoHead.tsx
│   │   └── home/
│   │       ├── Hero.tsx
│   │       ├── TrustValue.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── IndustriesSection.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── PortfolioSection.tsx
│   │       ├── PricingSection.tsx
│   │       ├── LeadSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── FaqSection.tsx
│   │       └── FinalCta.tsx
│   ├── config/
│   │   └── site.ts            # Central configuration for brand, WhatsApp, pricing & content
│   ├── context/
│   │   └── LeadModalContext.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── IndustriesPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── DemoPreviewPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   └── TermsPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Configuration & Customization

### 1. Setting Your Official WhatsApp Number
In `src/config/site.ts` or in `.env`:
```bash
VITE_WHATSAPP_NUMBER=919876543210
```
*(Enter in international format without `+` or spaces).*

### 2. Updating Pricing or Services
All service offerings, deliverables, pricing tiers, FAQs, and industry profiles are centrally maintained in [`src/config/site.ts`](file:///Users/shaman/Downloads/builder%20bob%20website%20/src/config/site.ts). Modifying this single file will automatically update cards across the homepage, service pages, pricing tables, and modal selectors.

### 3. Supabase Backend Integration
The project is connected to a dedicated **Supabase** project:
- **Project Name**: `builderbob-website`
- **Project Ref**: `nocfaiidocdahsxejjov`
- **Region**: `ap-south-1` (Mumbai, India — optimal for low-latency in Bengaluru)
- **Table**: `public.inquiries` (with Row Level Security enabled for safe public client insertions and secure authenticated access)
- **Client Configuration**: Handled in [`src/lib/supabase.ts`](file:///Users/shaman/Downloads/builder%20bob%20website%20/src/lib/supabase.ts) and typed with [`src/types/supabase.ts`](file:///Users/shaman/Downloads/builder%20bob%20website%20/src/types/supabase.ts).

All form submissions on the website automatically sync directly into your Supabase database table `public.inquiries` with a unique reference number (e.g. `BB-2026-XXXX`).

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚢 Production Deployment

The website generates a pure static distribution (`dist/`) suitable for instant zero-config deployment on:
- **Vercel**: `vercel deploy`
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`
- **Cloudflare Pages**: Set build command to `npm run build` and output directory to `dist`
