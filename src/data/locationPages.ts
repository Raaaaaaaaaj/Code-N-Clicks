import { LucideIcon, Code2, Rocket, Component, Users, ShoppingCart, Hotel, LayoutDashboard, Palette, Search, Megaphone, Terminal, Cpu, CheckSquare } from "lucide-react";

export interface CityProfile {
  slug: string;
  name: string;
  state: string;
  hubs: string[];
  industries: string[];
  landmark: string;
  nearbyAreas: string[];
  businessExample: string;
  regionalChallenge: string;
  localTerm: string;
}

export interface ServiceProfile {
  slug: string;
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  primaryKeyword: string;
  deliverablesTemplate: string[];
}

export const cities: CityProfile[] = [
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    hubs: ["Salt Lake Sector V", "Rajarhat New Town", "Park Street", "Camac Street", "Dalhousie"],
    industries: ["IT Services", "MSME Manufacturing", "Tea & Logistics", "Education", "Healthcare"],
    landmark: "Howrah Bridge",
    nearbyAreas: ["Howrah", "Bidhannagar", "Hooghly", "Dunlop", "Behala"],
    businessExample: "MSME units in Howrah or IT exports in Sector V",
    regionalChallenge: "traditional brick-and-mortar setups transitioning slowly, dependence on offline distributor pipelines, and high customer acquisition overhead",
    localTerm: "Kolkata business sector",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    hubs: ["Bandra Kurla Complex (BKC)", "Nariman Point", "Lower Parel", "Andheri East", "Powai"],
    industries: ["Financial Services", "Media & Entertainment", "Real Estate", "Fintech Startups", "Logistics"],
    landmark: "Gateway of India",
    nearbyAreas: ["Thane", "Navi Mumbai", "Vashi", "Bandra", "Borivali"],
    businessExample: "fintech startups in Powai or financial brokerages in BKC",
    regionalChallenge: "extreme search competition, high user churn rates, strict data security and compliance requirements, and latency issues in high-traffic portals",
    localTerm: "Mumbai commercial market",
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "NCR",
    hubs: ["Connaught Place", "Okhla Industrial Area", "Nehru Place", "Saket", "Dwarka"],
    industries: ["Corporate Trade", "Logistics", "Retail Brands", "Education", "Real Estate"],
    landmark: "India Gate",
    nearbyAreas: ["Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    businessExample: "retail businesses in Connaught Place or export units in Okhla",
    regionalChallenge: "unorganized lead acquisition pipelines, high cost of online advertisement, legacy administration systems, and intense local competition",
    localTerm: "Delhi-NCR corporate landscape",
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    hubs: ["Koramangala", "Indiranagar", "HSR Layout", "Whitefield", "Electronic City"],
    industries: ["SaaS & Software", "E-commerce Startups", "Biotechnology", "Tech R&D", "Logistics"],
    landmark: "Vidhana Soudha",
    nearbyAreas: ["Jayanagar", "Malleswaram", "Yelahanka", "Marathahalli"],
    businessExample: "early-stage SaaS startups in Koramangala or deep-tech R&D units in Whitefield",
    regionalChallenge: "rapid MVP scoping schedules, developer-ready TypeScript handovers, scalable microservices migration, and complex database performance bottlenecks",
    localTerm: "Bengaluru startup ecosystem",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    hubs: ["HITEC City", "Gachibowli", "Madhapur", "Kondapur", "Jubilee Hills"],
    industries: ["IT/ITeS", "Pharmaceuticals", "Biotechnology", "Hospitality", "Education"],
    landmark: "Charminar",
    nearbyAreas: ["Secunderabad", "Begumpet", "Kukatpally", "Banjara Hills"],
    businessExample: "pharma laboratories in Gachibowli or luxury stays in Banjara Hills",
    regionalChallenge: "enterprise scalability hurdles, HIPAA/security compliance for healthcare data, slow guest booking engine performance, and legacy ERP bottlenecks",
    localTerm: "Hyderabad tech scene",
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    hubs: ["Old Mahabalipuram Road (OMR)", "T. Nagar", "Guindy", "Nungambakkam", "Ambattur"],
    industries: ["Automobile Manufacturing", "SaaS Enterprises", "Healthcare & Tourism", "Textiles"],
    landmark: "Marina Beach",
    nearbyAreas: ["Velachery", "Adyar", "Anna Nagar", "Tambaram"],
    businessExample: "auto component plants in Guindy or healthcare providers in Nungambakkam",
    regionalChallenge: "multi-lingual localization requirements, legacy manual guest scheduling systems, and high database queries latency in patient record systems",
    localTerm: "Chennai business community",
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    hubs: ["Hinjewadi", "Kharadi", "Kothrud", "Kalyani Nagar", "Hadapsar"],
    industries: ["Automotive Manufacturing", "IT/ITeS Services", "Higher Education", "Engineering"],
    landmark: "Shaniwar Wada",
    nearbyAreas: ["Pimpri-Chinchwad", "Viman Nagar", "Baner", "Aundh"],
    businessExample: "precision engineering plants in Pimpri or IT consulting agencies in Hinjewadi",
    regionalChallenge: "supply-chain inventory delays, manual order reconciliation, student enrollment friction, and agency resource management overhead",
    localTerm: "Pune industrial market",
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    hubs: ["SG Highway", "Ashram Road", "CG Road", "Prahlad Nagar", "Satellite"],
    industries: ["Textile Manufacturing", "Pharmaceuticals", "Trading & Finance", "Chemicals"],
    landmark: "Sabarmati Ashram",
    nearbyAreas: ["Gandhinagar", "Bapunagar", "Ghatlodia", "Maninagar"],
    businessExample: "textile merchants on Ashram Road or pharmaceutical units on SG Highway",
    regionalChallenge: "family-run businesses transitioning slowly to cloud portals, manual inventory accounting, and low visibility in regional search results",
    localTerm: "Ahmedabad trade hub",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    hubs: ["C-Scheme", "Malviya Nagar", "Mansarovar", "MI Road", "Sitapura Industrial Area"],
    industries: ["Hospitality & Stays", "Handicrafts & Gems", "Education", "Real Estate"],
    landmark: "Hawa Mahal",
    nearbyAreas: ["Vaishali Nagar", "Raja Park", "Sanganer", "Jhotwara"],
    businessExample: "heritage boutique hotels in C-Scheme or handicraft exporters in Sitapura",
    regionalChallenge: "high OTA booking commission fees, lack of localized search visibility, slow mobile booking experiences, and manual room allocation friction",
    localTerm: "Jaipur tourism corridor",
  },
  {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    hubs: ["Ring Road", "Varachha", "Katargam", "Adajan", "Sachin GIDC"],
    industries: ["Diamond Polishing", "Textile Weaving", "Silk Trade", "Logistics"],
    landmark: "Surat Fort",
    nearbyAreas: ["Bhatar", "Vesu", "Rander", "Udhna"],
    businessExample: "diamond trading firms in Katargam or textile looms in Sachin GIDC",
    regionalChallenge: "lack of online B2B ordering portals, manual catalog sharing, export documentation delays, and fragmented dealer communication",
    localTerm: "Surat commerce center",
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    hubs: ["MP Nagar", "Arera Colony", "Mandideep Industrial Area", "Indrapuri"],
    industries: ["Electrical Engineering", "Education", "Logistics", "Food Processing"],
    landmark: "Upper Lake",
    nearbyAreas: ["Bairagarh", "Kolar", "Govindpura"],
    businessExample: "industrial manufacturers in Mandideep or educational consultancies in MP Nagar",
    regionalChallenge: "offline administrative workflows, poor local search performance, and difficulty building user trust in digital portals",
    localTerm: "Bhopal service sector",
  },
  {
    slug: "patna",
    name: "Patna",
    state: "Bihar",
    hubs: ["Fraser Road", "Exhibition Road", "Dak Bunglow Crossing", "Kankarbagh"],
    industries: ["Retail Trading", "Education Coaching", "Healthcare Stays", "Agriculture"],
    landmark: "Golghar",
    nearbyAreas: ["Danapur", "Patliputra", "Phulwari Sharif"],
    businessExample: "coaching institutes on Fraser Road or agricultural traders in Patna",
    regionalChallenge: "coaching student enrollment management, lack of mobile-first student web apps, and low localized organic brand reach",
    localTerm: "Patna retail hub",
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    hubs: ["Hazratganj", "Gomti Nagar", "Aliganj", "Aminabad"],
    industries: ["Handicrafts (Chikan)", "Education", "Hospitality & Stays", "Logistics"],
    landmark: "Bara Imambara",
    nearbyAreas: ["Indira Nagar", "Charbagh", "Chowk"],
    businessExample: "handicraft workshops in Chowk or boutique hotels in Hazratganj",
    regionalChallenge: "manual order entry for chikan embroidery exports, high commissions from travel aggregators, and slow loading catalog templates",
    localTerm: "Lucknow trading market",
  },
  {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    hubs: ["Vijay Nagar", "Palasia", "Bhawarkua", "Sanwer Road Industrial Area"],
    industries: ["IT Services", "Food Trading", "Pharmaceuticals", "Education"],
    landmark: "Rajwada Palace",
    nearbyAreas: ["Annapurna", "Dewas Naka", "Rau"],
    businessExample: "IT startups in Vijay Nagar or confectionery traders on Sanwer Road",
    regionalChallenge: "software product scoping delays, lack of scalable lead pipelines, and outdated inventory management sheets",
    localTerm: "Indore commercial belt",
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    hubs: ["Infocity", "Chandrasekharpur", "Saheed Nagar", "Mancheswar GIDC"],
    industries: ["IT Services", "Education", "Metallurgy", "Healthcare"],
    landmark: "Lingaraj Temple",
    nearbyAreas: ["Patia", "Nayapalli", "Cuttack"],
    businessExample: "IT solution providers in Infocity or education academies in Patia",
    regionalChallenge: "limited local search traffic activation, slow loading corporate sites, and manual customer ticket routing",
    localTerm: "Bhubaneswar IT corridor",
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    hubs: ["Kakkanad SmartCity", "Edappally", "Kadavanthra", "MG Road"],
    industries: ["Hospitality & Tourism", "Spices Export", "IT Services", "Marine Trade"],
    landmark: "Chinese Fishing Nets",
    nearbyAreas: ["Fort Kochi", "Aluva", "Tripunithura"],
    businessExample: "boutique homestays in Fort Kochi or maritime exports near the port",
    regionalChallenge: "high dependency on travel agencies, slow booking processing systems, and lack of direct international payment options",
    localTerm: "Kochi trade circle",
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Punjab & Haryana",
    hubs: ["Sector 17", "Sector 35", "IT Park", "Phase 8 Industrial Area"],
    industries: ["IT Services", "Professional Consultancies", "Real Estate", "Education"],
    landmark: "Rock Garden",
    nearbyAreas: ["Mohali", "Panchkula", "Zirakpur"],
    businessExample: "corporate agencies in Sector 17 or software exporters in IT Park",
    regionalChallenge: "sluggish client user interface performance, lack of organized Figma designs, and inefficient manual billing",
    localTerm: "Chandigarh business circle",
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    hubs: ["Sadar", "Dharampeth", "MIDC Hingna", "Butibori GIDC"],
    industries: ["Logistics & Warehousing", "Healthcare", "Food Processing", "Trading"],
    landmark: "Deekshabhoomi",
    nearbyAreas: ["Kamptee", "Wardha Road", "Wadi"],
    businessExample: "warehousing firms in Hingna MIDC or multi-specialty hospitals in Dharampeth",
    regionalChallenge: "supply chain shipping bottlenecks, paper-based patient intake, and offline booking friction",
    localTerm: "Nagpur transport center",
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    hubs: ["Avinashi Road", "Gandhipuram", "RS Puram", "Peelamedu"],
    industries: ["Textile Machinery", "Pump Manufacturing", "IT Parks", "Agro Industries"],
    landmark: "Adiyogi Shiva",
    nearbyAreas: ["Singanallur", "Saravanampatti", "Pollachi"],
    businessExample: "industrial pump factories in Peelamedu or engineering teams in Saravanampatti",
    regionalChallenge: "disconnected billing spreadsheets, manual distributor pricing setups, and low visibility in export markets",
    localTerm: "Coimbatore industrial belt",
  },
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    hubs: ["VIP Road", "Dwarakanagar", "Siripuram", "Sheela Nagar GIDC"],
    industries: ["Maritime Shipping", "Steel & Metals", "Pharma SEZ", "IT Services"],
    landmark: "Kailasagiri",
    nearbyAreas: ["Gajuwaka", "Madhurawada", "Anakapalle"],
    businessExample: "shipping logistics operators in Sheela Nagar or IT hubs in Madhurawada",
    regionalChallenge: "untracked customer quote request flows, cargo sheet inventory errors, and poor search performance in trade queries",
    localTerm: "Vizag trade port",
  },
];

export const services: ServiceProfile[] = [
  {
    slug: "web-development",
    title: "Website Development",
    eyebrow: "Custom Web Engineering",
    icon: Code2,
    primaryKeyword: "Website Development Company",
    deliverablesTemplate: [
      "Mobile-responsive HTML5/React website layouts",
      "Dynamic admin panel & headless CMS integrations",
      "Page speed loading audits (sub-2s targets)",
      "Technical SEO structures, semantic tags & sitemap.xml",
      "Google Analytics 4 event conversion setups",
      "Typesafe React code handover with Git repository",
    ],
  },
  {
    slug: "web-designing",
    title: "Web Design",
    eyebrow: "Premium UI/UX Design",
    icon: Palette,
    primaryKeyword: "Web Designing Services",
    deliverablesTemplate: [
      "Custom responsive visual website interfaces",
      "Interactive Figma mockup design blueprints",
      "Organized design systems, tokens & components",
      "User journey maps & CTA wireframe plans",
      "Developer-ready design files with typography keys",
      "30-day post-launch layout QA adjustments",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    eyebrow: "Search Engine Optimization",
    icon: Search,
    primaryKeyword: "SEO Company",
    deliverablesTemplate: [
      "Detailed organic audit & competitor gap reports",
      "Page-level title, heading, and description fixes",
      "Google Business Profile setup and local citations",
      "Contextual semantic internal linking architecture",
      "JSON-LD LocalBusiness & product schema code",
      "Monthly search keyword rank tracking insights",
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    eyebrow: "Pay-Per-Click Marketing",
    icon: Megaphone,
    primaryKeyword: "Google Ads Management",
    deliverablesTemplate: [
      "Targeted local search ad campaign setups",
      "Commercial keywords selection & match type filters",
      "Ad copywriting, assets, and conversion tests",
      "High-converting landing page copywriting",
      "Negative keywords optimization to save budget",
      "Monthly ROI reporting & conversion tracking",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Growth & Lead Generation",
    icon: Megaphone,
    primaryKeyword: "Digital Marketing Agency",
    deliverablesTemplate: [
      "Multi-channel advertising campaigns & social ads",
      "Targeted lead acquisition landing pages",
      "Customer retention marketing templates",
      "Conversion rate optimization (CRO) audits",
      "CRM systems syncing for automated lead follow-up",
      "Clear attribution dashboard showing monthly pipelines",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "iOS & Android Applications",
    icon: Rocket,
    primaryKeyword: "App Development Company",
    deliverablesTemplate: [
      "Cross-platform React Native app frameworks",
      "Secure backend database APIs & user systems",
      "Real-time push notifications & chat widgets",
      "Subscription billing and payment gateway runs",
      "Play Store and App Store submission guides",
      "100% full source ownership with Git repository",
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    eyebrow: "Custom Sales CRM Systems",
    icon: Users,
    primaryKeyword: "CRM Development Company",
    deliverablesTemplate: [
      "Custom sales lead pipeline interfaces",
      "Automated WhatsApp and email follow-up triggers",
      "Role-based staff security permissions (RBAC)",
      "Contact form and landing page lead routing",
      "Clear sales velocity and analytics reports",
      "Database schema configuration & spreadsheet migration",
    ],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    eyebrow: "Enterprise Resource Planning",
    icon: Cpu,
    primaryKeyword: "ERP Software Development",
    deliverablesTemplate: [
      "Inventory tracking and procurement modules",
      "Multi-warehouse stocks management modules",
      "Automated purchase order billing templates",
      "Account reconciliation dashboards & reports",
      "Staff attendance & payroll loggers",
      "Secure system deployment on private clouds",
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    eyebrow: "Typesafe Software Engineering",
    icon: Terminal,
    primaryKeyword: "Custom Software Development",
    deliverablesTemplate: [
      "High-performance client portal frontends",
      "Robust API integration schemas & database schemas",
      "Legacy software migrations & cloud migrations",
      "Row-level database security audits",
      "Swagger API developer document directories",
      "Zero-downtime container configuration scripts",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    eyebrow: "Product Visual Design",
    icon: Palette,
    primaryKeyword: "UI UX Design Agency",
    deliverablesTemplate: [
      "Responsive high-fidelity Figma visual designs",
      "User onboarding journeys & interactive blueprints",
      "Reusable UI components & hover states",
      "Figma design system tokens & autolayout controls",
      "Interactive click-through user testing prototypes",
      "Developer-ready visual code specification assets",
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    eyebrow: "High-Performance Online Stores",
    icon: ShoppingCart,
    primaryKeyword: "Ecommerce Website Development",
    deliverablesTemplate: [
      "WooCommerce, Shopify, or custom e-commerce pages",
      "Mobile-first product search and category layouts",
      "Lightweight payment checkout forms (UPI-ready)",
      "Automated stock level tracking & shipping webhooks",
      "Structured product JSON-LD schema integrations",
      "Abandoned cart follow-up triggers",
    ],
  },
  {
    slug: "hotel-management-software",
    title: "Hotel Management Software",
    eyebrow: "Hospitality Reservation Systems",
    icon: Hotel,
    primaryKeyword: "Hotel Management Software Company",
    deliverablesTemplate: [
      "Room inventory management panels",
      "Front-desk check-in guest calendar calendars",
      "Automated guest invoice generators with local taxes",
      "Housekeeping logs & room status databases",
      "Customer contact logs (guest CRM)",
      "Local cloud backup and security controls",
    ],
  },
  {
    slug: "booking-engine-development",
    title: "Booking Engine Development",
    eyebrow: "Direct Reservation Engines",
    icon: Hotel,
    primaryKeyword: "Booking Engine Development",
    deliverablesTemplate: [
      "Direct room reservation calendar modules",
      "Mobile-friendly date picker room selection layouts",
      "Promo code coupon discount validators",
      "Stripe or Razorpay payment integrations",
      "Instant email and WhatsApp booking confirmations",
      "Channel Manager compatibility API hooks",
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    eyebrow: "Workflow & Process Automation",
    icon: CheckSquare,
    primaryKeyword: "Business Process Automation",
    deliverablesTemplate: [
      "Automated lead capture & CRM synchronization",
      "WhatsApp API and email campaign templates",
      "System webhook API connectors",
      "Google Sheets & database synchronizers",
      "Automated invoice and PDF generators",
      "Process optimization & training guides",
    ],
  },
];

export function getCityProfile(citySlug: string): CityProfile | undefined {
  return cities.find((c) => c.slug === citySlug);
}

export function getServiceProfile(serviceSlug: string): ServiceProfile | undefined {
  return services.find((s) => s.slug === serviceSlug);
}

// Generate highly-localized, semantic copy dynamically to avoid "thin content" or Google "doorway page" penalties.
export function generateLocalPageContent(citySlug: string, serviceSlug: string) {
  const city = getCityProfile(citySlug);
  const service = getServiceProfile(serviceSlug);

  if (!city || !service) return null;

  const keyword = `${service.primaryKeyword} in ${city.name}`;
  const title = `${service.title} Company in ${city.name} | CodeNClicks Solutions`;
  const seoTitle = `${service.title} in ${city.name} | CodeNClicks IT Solutions`;
  const metaDescription = `Looking for a professional ${service.title.toLowerCase()} company in ${city.name}? CodeNClicks builds fast, SEO-friendly web systems for ${city.name} teams. Get a free quote.`;
  const h1 = `${service.title} Company in ${city.name}`;

  // Custom Localized copywriting paragraphs
  const introParagraph = `CodeNClicks is a premium ${service.title.toLowerCase()} partner providing custom solutions built for the local ${city.name} business ecosystem. Operating across major commercial hubs like ${city.hubs.slice(0, 3).join(", ")}, we understand that ${city.name} businesses require high-performance tech to stand out. Whether you manage ${city.businessExample}, our teams align code with your specific user acquisition goals, eliminating bottlenecks and building long-term digital authority.`;

  const localizedWhyChooseUs = `Businesses in ${city.name} trust CodeNClicks because we do not offer rigid templates or outsource execution. Our team works contextually to resolve regional constraints like ${city.regionalChallenge}. By combining custom frontend design, secure database architectures, and search engine optimization, we help teams in ${city.name} and neighboring areas like ${city.nearbyAreas.slice(0, 3).join(", ")} reduce manual operations and scale their sales volumes without licensing limits.`;

  const painPoints = [
    `Struggling to acquire qualified regional leads due to poor local search rankings and high competition in the ${city.localTerm}.`,
    `Losing customer conversions because legacy portals or websites are slow, hard to navigate on mobile devices, or freeze on local cellular networks.`,
    `Paying expensive, recurring monthly software licensing fees for rigid CRM/ERP tools that do not fit local workflows or operational pipelines.`,
    `Experiencing bottlenecks like ${city.regionalChallenge} which restrict sales operations and create database sync errors.`,
  ];

  const benefits = [
    {
      title: "Engineered for Conversion",
      desc: `We construct intuitive user flows and clear calls-to-action tailored to the buying habits of customers in ${city.name}.`,
    },
    {
      title: "Zero Licensing Limits",
      desc: "Our custom software, CRMs, and reservation systems have no per-user monthly subscription fees, allowing you to grow your local staff freely.",
    },
    {
      title: "Localized Search Authority",
      desc: `We build technical SEO, schema data, and local citation coordinates into the core code to help you outrank competitors in ${city.name} searches.`,
    },
    {
      title: "Direct Regional Support",
      desc: `Our software engineers support your teams in ${city.nearbyAreas.slice(0, 2).join(" and ")} directly, ensuring fast updates and smooth operation.`,
    },
  ];

  const faqs = [
    {
      q: `Why should our ${city.name}-based business choose CodeNClicks over a freelance developer?`,
      a: `Freelance developers often deliver simple template code and disappear post-launch. CodeNClicks acts as a full-service technical partner for ${city.name} companies. We provide custom Figma design systems, typesafe backend coding, local SEO schema, GA4 conversions tracking, and dedicated technical support to guarantee long-term stability.`,
    },
    {
      q: `Do you work with businesses in ${city.nearbyAreas.slice(0, 2).join(" and ")}?`,
      a: `Yes! While our primary projects are concentrated in hubs like ${city.hubs[0]} and ${city.hubs[1]}, we actively support businesses in neighboring areas including ${city.nearbyAreas.join(", ")}, providing onsite scoping and remote technical delivery.`,
    },
    {
      q: `How long does it take to launch a custom ${service.title.toLowerCase()} project in ${city.name}?`,
      a: `Timeline depends on project scope. A targeted marketing website or local booking engine can be designed and coded in 10 to 15 working days. Complex multi-tenant software, custom CRM integrations, or complete ERP setups take from 4 to 8 weeks depending on database depth and API requirements.`,
    },
    {
      q: `Will our custom system validate on Google search Console?`,
      a: `Absolutely. Every web application, e-commerce store, and custom portal we build is structured with semantic HTML5 tags, optimized with JSON-LD local schema, and preloaded for sub-2 second load speeds, which are critical search ranking signals for the ${city.localTerm}.`,
    },
  ];

  return {
    city,
    service,
    title,
    seoTitle,
    metaDescription,
    h1,
    introParagraph,
    localizedWhyChooseUs,
    painPoints,
    benefits,
    faqs,
    deliverables: service.deliverablesTemplate,
    canonical: `/locations/${citySlug}/${serviceSlug}`,
    ogUrl: `https://codenclicksit.in/locations/${citySlug}/${serviceSlug}`,
  };
}
