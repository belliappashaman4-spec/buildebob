export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
  iconName: string;
  badge?: string;
  startingPrice?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  keyNeeds: string[];
  recommendedPackage: string;
  iconName: string;
  accentColor: string;
}

export interface DemoProject {
  id: string;
  slug: string;
  name: string;
  category: string;
  type: string;
  tagline: string;
  description: string;
  isConceptDemo: boolean;
  industry: string;
  highlights: string[];
  metricsPreview: { label: string; value: string }[];
  features: string[];
  demoContent: {
    heroHeading: string;
    heroSubheading: string;
    primaryCta: string;
    servicesOffered: { title: string; price?: string; desc: string }[];
    aboutExcerpt: string;
    location: string;
    whatsappMessage: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceRaw: number;
  cadence: string;
  tagline: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  turnaroundTime: string;
  revisions: string;
  suitableFor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'timeline' | 'technical' | 'commercial' | 'features';
}

// Global Site Configuration
export const siteConfig = {
  name: "BuilderBob",
  legalName: "BuilderBob Digital Growth Services",
  domain: "builderbob.in",
  tagline: "We Build. You Grow.",
  location: "Bengaluru, Karnataka, India",
  fullLocation: "Indiranagar / Koramangala Tech Corridor, Bengaluru, Karnataka 560038, India",
  
  // Configurable contact details
  contact: {
    email: "hello@builderbob.in",
    supportEmail: "support@builderbob.in",
    // Configurable official WhatsApp number.
    // Replace with your real business WhatsApp number in international format without '+' or spaces (e.g., '919876543210')
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919482300930",
    whatsappDisplay: "+91 94823 00930",
    phone: "+91 94823 00930",
    defaultWhatsAppMessage: "Hi BuilderBob, I'm interested in building a website for my business. Please share the details.",
    hours: "Monday – Saturday: 9:30 AM – 7:00 PM IST",
  },

  socials: {
    linkedin: "https://linkedin.com/company/builderbob-in",
    instagram: "https://instagram.com/builderbob.in",
    twitter: "https://twitter.com/builderbob_in",
    github: "https://github.com/builderbob-in",
  },

  seo: {
    defaultTitle: "BuilderBob — We Build. You Grow. | Digital Growth Agency Bengaluru",
    defaultDescription: "BuilderBob builds modern, high-converting business websites, WhatsApp lead capture systems, and AI-powered enquiry automations for Indian SMBs and local businesses in Bengaluru and beyond.",
    keywords: [
      "website development for small businesses in Bengaluru",
      "affordable business website development",
      "website design for interior designers",
      "website development for local businesses",
      "WhatsApp lead generation website",
      "AI automation for small businesses in India",
      "digital growth agency Bangalore",
      "local business website builder India"
    ],
  },

  pricingDisclaimer: "Final pricing depends on scope, integrations, content, hosting, and project requirements. Domain, hosting, paid third-party tools, messaging charges, and ongoing maintenance may be billed separately. Packages are starting baselines, not fixed quotes.",

  services: [
    {
      id: "service-1",
      slug: "business-website-development",
      title: "Business Website Development",
      shortDescription: "Modern, clean, mobile-first websites designed to showcase your offerings and build trust with prospective clients.",
      fullDescription: "Your website is your 24/7 digital storefront. We create tailored, lightweight websites that load in under a second, look exceptional across every smartphone and desktop, and clearly guide visitors to take action.",
      iconName: "Globe",
      badge: "Core Foundation",
      startingPrice: "₹15,999",
      idealFor: "Local shops, service providers, interior designers, clinics, and professional practices looking for a dependable digital presence.",
      features: [
        "Modern, mobile-friendly responsive design",
        "Dedicated service, gallery, and portfolio sections",
        "Integrated contact forms and WhatsApp instant button",
        "Clear, conversion-focused calls to action across every page",
        "Fast-loading clean code with zero bloat",
        "Basic on-page SEO setup & metadata configuration"
      ],
      deliverables: [
        "Custom responsive frontend (React / modern stack)",
        "Mobile-first testing across iOS and Android viewports",
        "SSL certificate guidance and deployment setup",
        "One-on-one handover walkthrough & documentation"
      ]
    },
    {
      id: "service-2",
      slug: "lead-generation-websites",
      title: "Lead Generation Websites",
      shortDescription: "High-impact landing pages built specifically to turn cold clicks into qualified phone calls and WhatsApp messages.",
      fullDescription: "Traffic is useless without conversions. Our lead-focused websites combine direct-response copywriting structures, frictionless multi-step or single-step enquiry forms, and instant click-to-WhatsApp triggers.",
      iconName: "Target",
      badge: "High Conversion",
      startingPrice: "₹20,999",
      idealFor: "Businesses running Google Ads, Meta Ads, local campaigns, or seeking maximum enquiry volume per visitor.",
      features: [
        "Conversion-focused landing page architecture",
        "Lead capture forms with real-time validation",
        "Click-to-call and WhatsApp smart CTAs",
        "Enquiry tracking and analytics setup",
        "Mobile-optimized tap targets and quick forms",
        "Speed-optimized hero sections with instant value hooks"
      ],
      deliverables: [
        "High-converting landing page layout",
        "Direct lead delivery to email and WhatsApp",
        "Google Tag / Meta Pixel preparation",
        "A/B test friendly structure"
      ]
    },
    {
      id: "service-3",
      slug: "ai-and-business-automation",
      title: "AI and Business Automation",
      shortDescription: "Intelligent enquiry acknowledgments, instant WhatsApp routing, and booking automations so you never lose a customer to delay.",
      fullDescription: "Local customers evaluate 3 to 4 competitors simultaneously. The first business to respond almost always wins the job. We wire up lightweight AI and webhook automations that answer common questions, collect visitor intent, and notify you instantly.",
      iconName: "Bot",
      badge: "Smart Workflows",
      startingPrice: "₹34,999",
      idealFor: "Busy business owners who cannot answer WhatsApp or phone calls immediately during consultations or off-hours.",
      features: [
        "Automated enquiry acknowledgements on WhatsApp/Email",
        "Lead routing and instant owner notification workflows",
        "Appointment and consultation enquiry scheduling workflows",
        "Integration with supported third-party tools (Google Sheets, Notion, Webhooks)",
        "FAQ bot logic for instant pricing or availability prompts",
        "Clean error handling with fallback to manual notification"
      ],
      deliverables: [
        "Automation workflow map and webhook triggers",
        "WhatsApp Business API or smart link automation setup",
        "Google Sheets live enquiry dashboard sync",
        "Full test run and operational guide"
      ]
    },
    {
      id: "service-4",
      slug: "local-seo",
      title: "Local SEO & Visibility",
      shortDescription: "On-page SEO, Google Business Profile foundations, and localized content to help local customers find you in your city.",
      fullDescription: "When people in your locality search for 'interior designers near me' or 'physiotherapy clinic in Indiranagar', your business must show up. We configure on-page schema, localized landing page architecture, and metadata.",
      iconName: "MapPin",
      badge: "Local Reach",
      startingPrice: "Add-on / Included in Growth",
      idealFor: "Neighborhood businesses, clinics, gyms, salons, contractors, and retail studios.",
      features: [
        "On-page SEO foundations (title tags, meta descriptions, semantic headings)",
        "Location-specific landing pages and schema markup",
        "Google Business Profile optimization assistance",
        "Technical SEO basics: sitemaps, robots.txt, fast Core Web Vitals",
        "Keyword research tailored to Bengaluru and Indian tier-1/2 markets",
        "Local citation and directory readiness guidance"
      ],
      deliverables: [
        "Optimized sitemap.xml and robots.txt",
        "Structured LocalBusiness JSON-LD schema",
        "Google Business Profile checklist & recommendations",
        "Initial search console verification support"
      ]
    },
    {
      id: "service-5",
      slug: "website-maintenance",
      title: "Website Maintenance & Support",
      shortDescription: "Ongoing technical checks, content updates, backups, and security monitoring so you can focus on running your business.",
      fullDescription: "A great website is not a one-and-done deliverable. As your prices, projects, and team evolve, we keep your website fresh, safe, and lightning fast with prompt turnaround on updates.",
      iconName: "ShieldCheck",
      badge: "Peace of Mind",
      startingPrice: "Monthly / Retainer",
      idealFor: "Growing businesses that need regular updates, image additions, and technical reliability without hiring an internal developer.",
      features: [
        "Prompt content and image updates",
        "Periodic technical and link health checks",
        "Backup and security check support where supported",
        "Ongoing speed and mobile responsiveness checks",
        "WhatsApp/Email direct developer support line",
        "Monthly uptime and performance summary"
      ],
      deliverables: [
        "Monthly maintenance checklist completion",
        "Dedicated revision turnarounds",
        "Domain & DNS renewal reminders",
        "Security header monitoring"
      ]
    },
    {
      id: "service-6",
      slug: "custom-digital-solutions",
      title: "Custom Digital Solutions",
      shortDescription: "Tailored landing flows, business workflow improvements, and custom API integrations for unique business models.",
      fullDescription: "When off-the-shelf templates and rigid website builders fall short, we build bespoke digital experiences designed specifically around your operational flow, booking system, or client intake pipeline.",
      iconName: "Cpu",
      badge: "Tailored Engineering",
      startingPrice: "Custom Scope",
      idealFor: "Startups, multi-branch service chains, franchised studios, and bespoke consulting firms.",
      features: [
        "Custom interactive landing pages & calculators",
        "Specialized customer intake workflows",
        "Custom API integrations based on your tools (CRMs, ERPs, Payment Gateways)",
        "Multi-location business directories",
        "Performance-critical web architectures",
        "Flexible scalable codebase built on modern TypeScript"
      ],
      deliverables: [
        "Architecture plan and milestone breakdown",
        "Custom source code with clean modular structure",
        "API integration testing in staging environment",
        "Dedicated deployment pipeline setup"
      ]
    }
  ] as ServiceItem[],

  industries: [
    {
      id: "ind-1",
      slug: "interior-designers",
      name: "Interior Designers & Architects",
      description: "Visual portfolio galleries, consultation booking, and project estimate enquiry flows tailored for luxury and residential interior studios.",
      keyNeeds: ["High-res portfolio showcase", "Floorplan/style consultation form", "WhatsApp enquiry button"],
      recommendedPackage: "Business Growth Website",
      iconName: "Palette",
      accentColor: "#F59E0B"
    },
    {
      id: "ind-2",
      slug: "home-improvement",
      name: "Home Improvement & Services",
      description: "Electricians, plumbers, modular kitchen fabricators, painting contractors, and waterproofing specialists who need urgent incoming calls.",
      keyNeeds: ["Instant click-to-call", "Pin code service checker", "Urgent request WhatsApp dispatch"],
      recommendedPackage: "Starter or Business Growth",
      iconName: "Wrench",
      accentColor: "#3B82F6"
    },
    {
      id: "ind-3",
      slug: "salons-and-spas",
      name: "Salons, Spas & Wellness",
      description: "Service menu presentation, transparent treatment pricing, stylist profiles, and WhatsApp-driven appointment scheduling.",
      keyNeeds: ["Visual treatment menu", "Slot booking enquiry", "Google maps integration for walk-ins"],
      recommendedPackage: "Business Growth Website",
      iconName: "Sparkles",
      accentColor: "#EC4899"
    },
    {
      id: "ind-4",
      slug: "gyms-and-fitness",
      name: "Gyms & Fitness Studios",
      description: "Crossfit boxes, yoga centers, personal trainers, and MMA studios looking to book free trial passes and show batch schedules.",
      keyNeeds: ["Free trial pass booking", "Class timetable display", "Membership inquiry routing"],
      recommendedPackage: "Growth Automation Package",
      iconName: "Dumbbell",
      accentColor: "#10B981"
    },
    {
      id: "ind-5",
      slug: "restaurants-and-cafes",
      name: "Restaurants & Cafes",
      description: "Digital QR menus, table reservation enquiry flows, private party booking, and localized direction guides for food lovers.",
      keyNeeds: ["Mobile-first digital menu", "Table reservation request", "Party/catering enquiry form"],
      recommendedPackage: "Starter Website",
      iconName: "Utensils",
      accentColor: "#EF4444"
    },
    {
      id: "ind-6",
      slug: "real-estate",
      name: "Real Estate & Property Advisors",
      description: "Property showcase pages, brochure download lead gates, site visit scheduling, and WhatsApp direct agent connectivity.",
      keyNeeds: ["Site visit scheduling", "Brochure capture form", "Verified property specs"],
      recommendedPackage: "Growth Automation Package",
      iconName: "Building2",
      accentColor: "#6366F1"
    },
    {
      id: "ind-7",
      slug: "clinics-and-consultants",
      name: "Clinics, Doctors & Consultants",
      description: "Dentists, dermatologists, physiotherapists, chartered accountants, and legal advisors building patient and client trust.",
      keyNeeds: ["Doctor credentials & clinic hours", "Appointment request form", "Local area search presence"],
      recommendedPackage: "Business Growth Website",
      iconName: "Stethoscope",
      accentColor: "#14B8A6"
    },
    {
      id: "ind-8",
      slug: "other-local-businesses",
      name: "Other Local Businesses & Startups",
      description: "B2B suppliers, boutique retailers, training institutes, logistics providers, and unique regional businesses across India.",
      keyNeeds: ["Trust-building design", "Custom inquiry flow", "Clear value proposition"],
      recommendedPackage: "Custom / Configurable Package",
      iconName: "Briefcase",
      accentColor: "#8B5CF6"
    }
  ] as IndustryItem[],

  pricingTiers: [
    {
      id: "starter",
      name: "Starter Website",
      price: "₹15,999",
      priceRaw: 15999,
      cadence: "onwards",
      tagline: "Ideal for new businesses establishing their initial professional web presence.",
      highlighted: false,
      turnaroundTime: "5 – 7 Working Days",
      revisions: "1 Revision Round included",
      suitableFor: "Solo practitioners, newly registered service providers, local shops.",
      features: [
        "Single-page high-impact business website",
        "Mobile-responsive design optimized for smartphones",
        "Direct Contact & WhatsApp click-to-chat buttons",
        "Basic on-page SEO foundations (title, meta, keywords)",
        "One enquiry capture form with email notification",
        "One revision round to fine-tune copy and visuals",
        "Clean, lightweight code with fast load times"
      ]
    },
    {
      id: "business-growth",
      name: "Business Growth Website",
      price: "₹20,999",
      priceRaw: 20999,
      cadence: "onwards",
      tagline: "Our most popular multi-page package for established local businesses ready to win more customers.",
      badge: "Most Popular",
      highlighted: true,
      turnaroundTime: "10 – 14 Working Days",
      revisions: "2 Revision Rounds included",
      suitableFor: "Interior designers, clinics, salons, contractors, gyms, and regional firms.",
      features: [
        "Multi-page business website (up to 5 standard pages: Home, Services, About, Work, Contact)",
        "WhatsApp enquiry integration with custom pre-filled message",
        "High-converting lead capture form with instant delivery",
        "Portfolio showcase or interactive service gallery",
        "Basic local SEO setup & Google Business Profile alignment",
        "Two structured revision rounds",
        "Speed optimization & social share preview (Open Graph)"
      ]
    },
    {
      id: "growth-automation",
      name: "Growth Automation Package",
      price: "₹34,999",
      priceRaw: 34999,
      cadence: "onwards",
      tagline: "Comprehensive digital growth system with automated enquiry handling and lead routing.",
      badge: "Best Value for Growth",
      highlighted: false,
      turnaroundTime: "14 – 20 Working Days",
      revisions: "2 Revision Rounds included",
      suitableFor: "Growing businesses handling high enquiry volumes seeking to automate lead follow-up.",
      features: [
        "Everything in Business Growth Website",
        "Lead capture and routing setup (Google Sheets / Webhook)",
        "Supported enquiry automation (instant acknowledgment triggers)",
        "Appointment/consultation enquiry workflow where applicable",
        "Basic Google Analytics & search tracking setup",
        "Comprehensive local SEO metadata across all pages",
        "Two revision rounds and post-launch technical check"
      ]
    }
  ] as PricingTier[],

  demoProjects: [
    {
      id: "demo-interior",
      slug: "aura-living-interiors",
      name: "Aura Living Design Studio",
      category: "Interior Design & Architecture",
      type: "Concept Demo",
      tagline: "Contemporary Residential & Commercial Interior Architecture in Bengaluru",
      description: "A luxury portfolio website concept built for an interior design practice in Indiranagar, featuring curated project galleries, design philosophy, and a 60-second design consultation request form.",
      isConceptDemo: true,
      industry: "Interior Designers",
      highlights: [
        "Interactive room-by-room filterable project gallery",
        "Instant consultation booking form with budget selector",
        "Pre-formatted WhatsApp chat for quick site visits"
      ],
      metricsPreview: [
        { label: "Concept Target", value: "High-ticket villas & 3BHKs" },
        { label: "Conversion Trigger", value: "Consultation Request" },
        { label: "Average Form Time", value: "45 seconds" }
      ],
      features: [
        "Visual design showcase with high-res responsive imagery",
        "Interactive step-by-step room selector",
        "Direct WhatsApp link with pre-filled interior enquiry",
        "Client walkthrough schedule trigger"
      ],
      demoContent: {
        heroHeading: "Designing Spaces That Inspire Daily Living.",
        heroSubheading: "Bespoke interior architecture for modern apartments and private villas in Bengaluru.",
        primaryCta: "Book a Complimentary Design Call",
        servicesOffered: [
          { title: "Complete Home Interiors", price: "From ₹8 Lakhs", desc: "Turnkey design, modular woodwork, lighting & execution." },
          { title: "Modular Kitchen & Storage", price: "From ₹3.5 Lakhs", desc: "Ergonomic, anti-termite acrylic and PU finished setups." },
          { title: "Commercial & Studio Spaces", price: "Custom Quote", desc: "Productivity-first workspace aesthetics for startups." }
        ],
        aboutExcerpt: "With over 8 years of architectural excellence, Aura Living transforms empty concrete into warm, tactile homes using natural teak, muted palettes, and smart storage.",
        location: "100ft Road, Indiranagar, Bengaluru",
        whatsappMessage: "Hi Aura Living, I am planning interiors for my 3BHK flat in Bengaluru. Would love to discuss consultation availability."
      }
    },
    {
      id: "demo-salon",
      slug: "velvet-and-vibe-salon",
      name: "Velvet & Vibe Wellness & Salon",
      category: "Salon, Spa & Personal Care",
      type: "Concept Demo",
      tagline: "Premium Organic Hair, Skin & Therapeutic Spa Experiences",
      description: "A chic, mobile-first salon website concept designed for an upscale beauty studio in Koramangala. Features an interactive treatment catalog, transparent pricing menu, and one-tap WhatsApp appointment bookings.",
      isConceptDemo: true,
      industry: "Salons and Spas",
      highlights: [
        "Mobile-first menu with transparent service pricing",
        "One-tap stylist appointment booking on WhatsApp",
        "Embedded Google Maps guide for easy walk-ins"
      ],
      metricsPreview: [
        { label: "Primary Action", value: "Slot Booking via WhatsApp" },
        { label: "Mobile Share", value: "85% smartphone visitors" },
        { label: "Menu Clarity", value: "Zero hidden charges" }
      ],
      features: [
        "Clean tabbed service categories (Hair, Skin, Spa, Bridal)",
        "Transparent price indicators and duration estimates",
        "Floating WhatsApp booking pill with pre-selected service",
        "Hygiene & organic product guarantee trust badges"
      ],
      demoContent: {
        heroHeading: "Glow From Within. Pamper Your Senses.",
        heroSubheading: "Crafted treatments, expert hair artisans, and soothing organic therapies in Koramangala.",
        primaryCta: "Reserve Your Treatment Slot",
        servicesOffered: [
          { title: "Artisan Hair Styling & Balayage", price: "₹2,499+", desc: "Customized color framing, scalp detox & blowouts." },
          { title: "HydraGlow Skin Therapy", price: "₹1,899+", desc: "Deep ultrasonic pore cleansing and peptide infusion." },
          { title: "Aromatherapy Full Body Ritual", price: "₹2,999+", desc: "60 mins of botanical essential oils & stress relief." }
        ],
        aboutExcerpt: "Velvet & Vibe is an oasis away from the city buzz. Our trained therapists use dermatologically certified organic botanicals to rejuvenate your hair, skin, and spirit.",
        location: "5th Block, Koramangala, Bengaluru",
        whatsappMessage: "Hi Velvet & Vibe, I would like to book an appointment for hair styling this weekend. What slots are open?"
      }
    },
    {
      id: "demo-homeservices",
      slug: "quickfix-pro-services",
      name: "QuickFix Pro Home Services",
      category: "Home Maintenance & Repair",
      type: "Concept Demo",
      tagline: "Fast, Reliable Electrical, Plumbing & AC Repair at Your Doorstep",
      description: "A high-conversion service website concept for a multi-trade repair company in Bengaluru, built with an urgent click-to-call hero, service pincode checker, and upfront diagnostic charges.",
      isConceptDemo: true,
      industry: "Home Improvement Businesses",
      highlights: [
        "Direct emergency click-to-call telephone and WhatsApp buttons",
        "Pincode availability checker widget",
        "Clear upfront pricing and verified technician badges"
      ],
      metricsPreview: [
        { label: "Primary CTA", value: "Call Now / Dispatch Tech" },
        { label: "Response Window", value: "Within 60 Minutes" },
        { label: "Conversion Rate", value: "Designed for immediate need" }
      ],
      features: [
        "Urgent service call triggers with instant dialer link",
        "Interactive service selector (AC repair, electrical, plumbing)",
        "Trust badges: Police-verified, background-checked staff",
        "Transparent 30-day post-service warranty banner"
      ],
      demoContent: {
        heroHeading: "Certified Technicians at Your Door in 60 Minutes.",
        heroSubheading: "Transparent rates, verified technicians, and dependable repairs for homes across Bengaluru.",
        primaryCta: "Book Immediate Service",
        servicesOffered: [
          { title: "AC Service & Gas Recharge", price: "₹599+", desc: "Complete filter cleaning, jet wash, and cooling check." },
          { title: "Plumbing Leakages & Piping", price: "₹299+", desc: "Tap repairs, blockages, concealed line fixing." },
          { title: "Electrical Wiring & MCB Fixes", price: "₹249+", desc: "Short circuit detection, switchboard overhaul & rewiring." }
        ],
        aboutExcerpt: "QuickFix Pro was established to replace unreliable local handymen with vetted, punctual professionals who arrive on time with genuine spare parts and fixed rate cards.",
        location: "Serving all major zones across Bengaluru",
        whatsappMessage: "Hi QuickFix Pro, I need an urgent plumber visit at HSR Layout today. Please dispatch availability."
      }
    },
    {
      id: "demo-fitness",
      slug: "ironpulse-fitness-hub",
      name: "IronPulse Strength & Fitness Lab",
      category: "Gym & Functional Training",
      type: "Concept Demo",
      tagline: "High-Performance Strength, Conditioning & Personal Training",
      description: "An energetic gym website concept for a fitness facility in HSR Layout, featuring batch timetables, trainer profiles, a 1-day free trial workout pass passbook, and membership enquiry routing.",
      isConceptDemo: true,
      industry: "Gyms and Fitness Studios",
      highlights: [
        "Free 1-Day Trial Pass claim modal with instant confirmation",
        "Live weekly batch schedule and trainer credentials",
        "WhatsApp chat trigger for customized diet & training inquiries"
      ],
      metricsPreview: [
        { label: "Lead Magnets", value: "Free 1-Day Trial Pass" },
        { label: "Visitor Goal", value: "Visit Gym & Experience Equipment" },
        { label: "Batch Clarity", value: "Real-time slots shown" }
      ],
      features: [
        "Bold athletic design with high-contrast motivational accents",
        "Interactive timetable for Strength, CrossFit, and HIIT",
        "1-Day free trial pass instant claim form",
        "Personal coaching vs general membership tier comparison"
      ],
      demoContent: {
        heroHeading: "Build Real Strength. Train Without Excuses.",
        heroSubheading: "World-class Olympic barbells, functional turf, and passionate coaches in HSR Layout.",
        primaryCta: "Claim Your Free 1-Day Workout Pass",
        servicesOffered: [
          { title: "Strength & Hypertrophy Lab", price: "₹2,200/mo", desc: "Unrestricted gym floor access, free weights, and power racks." },
          { title: "Cross-Functional HIIT Batches", price: "₹3,500/mo", desc: "Small-group high intensity workouts led by certified trainers." },
          { title: "1-on-1 Transformation Coaching", price: "Custom Plan", desc: "Customized nutrition tracking, body composition check & workouts." }
        ],
        aboutExcerpt: "IronPulse rejects commercial gym fluff. We focus on evidence-based strength training, posture correction, and supportive community energy that keeps you consistent.",
        location: "Sector 2, HSR Layout, Bengaluru",
        whatsappMessage: "Hi IronPulse Fitness, I'd like to claim my free 1-day trial workout pass. Are morning slots available?"
      }
    }
  ] as DemoProject[],

  faqs: [
    {
      id: "faq-1",
      question: "How long does it take to build a website?",
      answer: "A standard Starter Website is typically completed in 5 to 7 working days once we have your brand assets and content. A multi-page Business Growth website usually takes 10 to 14 working days, while custom projects or packages with advanced automations take around 2 to 3 weeks depending on the complexity of integrations and feedback turnaround.",
      category: "timeline"
    },
    {
      id: "faq-2",
      question: "Can you build a website for my specific business?",
      answer: "Yes! We specialize in websites for Indian SMBs, local service providers, interior designers, salons, clinics, gyms, real estate firms, and retail businesses. Every layout, copy structure, and enquiry flow is tailored specifically to how your target customers make buying decisions.",
      category: "features"
    },
    {
      id: "faq-3",
      question: "Will the website work on mobile?",
      answer: "Absolutely. In India, over 75% to 85% of local business traffic comes from smartphones. We follow a strict mobile-first engineering approach: all pages, buttons, phone call triggers, WhatsApp buttons, and forms are thoroughly tested across modern iOS and Android screen sizes for effortless tapping and rapid loading.",
      category: "technical"
    },
    {
      id: "faq-4",
      question: "Can customers contact me through WhatsApp?",
      answer: "Yes. Every website we build includes seamless WhatsApp integration. We set up floating chat buttons and click-to-chat triggers with pre-configured messages (e.g., 'Hi, I saw your website and would like a quote for...'). When a visitor clicks, it immediately opens WhatsApp with your number ready to chat.",
      category: "features"
    },
    {
      id: "faq-5",
      question: "Do you provide domain and hosting?",
      answer: "We assist you in selecting and configuring your domain (such as .in or .com) and cloud hosting. To maintain full transparency and business ownership, we recommend clients register domain names and hosting in their own name with our step-by-step guidance. If you prefer a managed setup, we can recommend dependable hosting providers and handle deployment.",
      category: "commercial"
    },
    {
      id: "faq-6",
      question: "Can you automate customer enquiries?",
      answer: "Yes! With our Growth Automation package or as an add-on, we connect your enquiry forms to automated workflows. We can route enquiries straight to your Google Sheets, send instant auto-acknowledgements to the customer via WhatsApp or email, notify your team instantly, or trigger calendar booking links.",
      category: "features"
    },
    {
      id: "faq-7",
      question: "Do you offer website maintenance?",
      answer: "Yes, we provide ongoing maintenance services. Our maintenance plans cover regular technical checks, content and price updates, image additions, security checks, and mobile responsiveness audits so your site continues performing smoothly without you having to manage code.",
      category: "features"
    },
    {
      id: "faq-8",
      question: "What payment methods do you accept?",
      answer: "We accept payments via standard Indian banking channels, including UPI (Google Pay, PhonePe, Paytm), IMPS/NEFT bank transfers, and standard business invoices. Projects are usually initiated with an upfront milestone deposit, with the remaining balance due upon website review and pre-launch approval.",
      category: "commercial"
    },
    {
      id: "faq-9",
      question: "How do revisions work?",
      answer: "Each package includes dedicated revision rounds (1 round for Starter, 2 rounds for Business Growth and Automation). During a revision round, you review the staging website and submit feedback on text, images, or layout adjustments. We implement all agreed edits before finalizing the website for public launch.",
      category: "timeline"
    },
    {
      id: "faq-10",
      question: "Can I request a custom package?",
      answer: "Certainly. Our three starter packages serve as helpful transparent baselines, but every business has unique requirements. If you need additional pages, multi-location branches, bilingual languages (e.g. English and Kannada or Hindi), or specialized API integrations, we will provide a clear, customized proposal with milestone timelines.",
      category: "commercial"
    }
  ] as FaqItem[],

  processSteps: [
    {
      step: "01",
      title: "Discover",
      subtitle: "Understanding your business and goals",
      description: "We begin with a focused consultation call to learn about your services, target customers, local competitors, and preferred enquiry channels (phone, WhatsApp, or form)."
    },
    {
      step: "02",
      title: "Design",
      subtitle: "Tailored concept & content structure",
      description: "We prepare a modern website concept and layout tailored to your brand identity, pairing clear headlines with persuasive calls to action."
    },
    {
      step: "03",
      title: "Build",
      subtitle: "Clean code & rigorous testing",
      description: "We develop the site on a high-performance modern tech stack, wire up WhatsApp and lead forms, configure SEO foundations, and test thoroughly across mobile devices."
    },
    {
      step: "04",
      title: "Launch & Grow",
      subtitle: "Publishing and continuous improvement",
      description: "We connect your domain, publish the website, verify search engine readiness, and support you with ongoing improvements to grow your business."
    }
  ],

  trustValuePillars: [
    {
      title: "Look Professional",
      description: "Build immediate credibility with a modern, beautifully designed digital presence that sets you apart from amateur competitors.",
      icon: "Sparkles",
      metric: "First Impressions Matter"
    },
    {
      title: "Get More Enquiries",
      description: "Make it effortless for customers to contact you through streamlined lead capture forms and frictionless click-to-WhatsApp CTAs.",
      icon: "MessageSquare",
      metric: "Conversion-First Design"
    },
    {
      title: "Respond Faster",
      description: "Simplify enquiries with smart routing and automated alerts so you never leave a high-intent prospect waiting.",
      icon: "Zap",
      metric: "Zero Lost Leads"
    },
    {
      title: "Get Found Locally",
      description: "Improve your online visibility across Bengaluru and your local service area with robust on-page SEO and metadata foundations.",
      icon: "MapPin",
      metric: "Targeted Local Reach"
    }
  ]
};
