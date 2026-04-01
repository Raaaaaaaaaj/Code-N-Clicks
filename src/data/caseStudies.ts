export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  techUsed: string[];
  results: { metric: string; value: string }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  status: "completed" | "in-development";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "Anime Paradise — Anime Product Ecom Platform",
    title: "Anime Paradise — Anime Product Ecom Platform",
    client: "Anime Paradise",
    industry: "Ecommerce",
    category: "E-commerce Development",
    challenge: "Anime Paradise needed a dedicated platform for their anime merchandise store. They required a seamless shopping experience with advanced search, inventory management, and a robust payment system.",
    solution: "We developed a feature-rich e-commerce platform tailored for anime fans, featuring personalized recommendations, social sharing options, and a streamlined checkout process. The platform supports multiple languages and currencies for global reach.",
    techUsed: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Stripe", "Algolia"],
    results: [
      { metric: "Lead Generation", value: "+340%" },
      { metric: "Page Load Time", value: "0.8s" },
      { metric: "Bounce Rate", value: "-62%" },
      { metric: "Monthly Visitors", value: "180K+" },
    ],
    testimonial: "CodeNClicks transformed our digital presence completely. The new platform generates more qualified leads in a week than our old site did in a month.",
    testimonialAuthor: "James Morrison",
    testimonialRole: "CEO, Luxe Realty Group",
    status: "completed",
  },
  {
    slug: "Ritu Ivy Hotel — Hotel Website",
    title: "Ritu Ivy Hotel — Hotel Website",
    client: "Ritu Ivy Hotel",
    industry: "Hospitality",
    category: "Web Development",
    challenge: "Ritu Ivy Hotel needed a modern, responsive website that could showcase their amenities, facilitate online bookings, and provide a seamless user experience across all devices.",
    solution: "We created a visually appealing and highly functional hotel website with an intuitive booking system, detailed room descriptions, and integrated review management. The site features mobile optimization and search engine visibility to attract more guests.",
    techUsed: ["React", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    results: [
      { metric: "Online Bookings", value: "+150%" },
      { metric: "User Engagement", value: "+120%" },
      { metric: "Conversion Rate", value: "+85%" },
      { metric: "Mobile Traffic", value: "60%" },
    ],
    testimonial: "The new website has significantly improved our online presence and booking conversions. It's exactly what we needed to attract more guests.",
    testimonialAuthor: "Ritu Sharma",
    testimonialRole: "General Manager, Ritu Ivy Hotel",
    status: "completed",
  },
  {
    slug: "Chitralekha Boutique Resort - Dehradun — Hotel Website",
    title: "Chitralekha Boutique Resort - Dehradun — Hotel Website",
    client: "Chitralekha Boutique Resort",
    industry: "Hospitality",
    category: "Web Development",
    challenge: "Chitralekha Boutique Resort needed a modern, responsive website that could showcase their amenities, facilitate online bookings, and provide a seamless user experience across all devices.",
    solution: "We created a visually appealing and highly functional hotel website with an intuitive booking system, detailed room descriptions, and integrated review management. The site features mobile optimization and search engine visibility to attract more guests.",
    techUsed: ["React", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    results: [
      { metric: "Online Bookings", value: "+150%" },
      { metric: "User Engagement", value: "+120%" },
      { metric: "Conversion Rate", value: "+85%" },
      { metric: "Mobile Traffic", value: "60%" },
    ],
    testimonial: "The new website has significantly improved our online presence and booking conversions. It's exactly what we needed to attract more guests.",
    testimonialAuthor: "Chitralekha Sharma",
    testimonialRole: "General Manager, Chitralekha Boutique Resort",
    status: "completed",
  },
  {
    slug: "Abhijit Realtors — Real Estate Software",
    title: "Abhijit Realtors — Real Estate Software",
    client: "Abhijit Realtors",
    industry: "Real Estate",
    category: "Custom Software",
    challenge: "Abhijit Realtors needed a custom real estate software solution that could streamline property listings, facilitate online transactions, and provide a seamless user experience for both agents and clients.",
    solution: "We designed and developed a comprehensive real estate management platform with property search and filtering, virtual tours, client communication tools, and integrated payment processing. The system also includes analytics and reporting features to help agents make data-driven decisions.",
    techUsed: ["Angular", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    results: [
      { metric: "Patient Wait Time", value: "-75%" },
      { metric: "Admin Efficiency", value: "+200%" },
      { metric: "Revenue Growth", value: "+85%" },
      { metric: "Patient Satisfaction", value: "4.9/5" },
    ],
    testimonial: "The platform has revolutionized how we serve our patients. The telemedicine feature alone has been a game-changer for our practice.",
    testimonialAuthor: "Dr. Sarah Chen",
    testimonialRole: "Medical Director, MediFlow Health",
    status: "completed",
  },
  {
    slug: "Kebun Nuts — Nut Butter SKU",
    title: "Kebun Nuts — Nut Butter SKU",
    client: "Kebun Nuts",
    industry: "Food & Beverage",
    category: "Branding & Packaging",
    challenge: "Kebun Nuts needed a unique branding and packaging strategy for their nut butter products to stand out in a competitive market.",
    solution: "We developed a cohesive brand identity with distinctive packaging designs that highlight the natural ingredients and health benefits of their products. The packaging features vibrant colors and clear nutritional information to attract health-conscious consumers.",
    techUsed: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "3D Mockup Software"],
    results: [
      { metric: "Revenue Growth", value: "+210%" },
      { metric: "Avg Order Value", value: "+45%" },
      { metric: "Return Rate", value: "-30%" },
      { metric: "Global Markets", value: "12 Countries" },
    ],
    testimonial: "Our online revenue has more than tripled since launching the new platform. The AI recommendations are incredibly effective.",
    testimonialAuthor: "Elena Vasquez",
    testimonialRole: "COO, Nova Fashion Inc.",
    status: "completed",
  },
  {
    slug: "Pranabananda Textiles - CRM System",
    title: "Pranabananda Textiles - CRM System",
    client: "Pranabananda Textiles",
    industry: "Textiles",
    category: "CRM Development",
    challenge: "Pranabananda Textiles needed a custom CRM solution to manage their sales pipeline, track customer interactions, and provide insights into their business performance.",
    solution: "We developed a comprehensive CRM system tailored to the needs of the textile industry. The platform includes features for lead management, customer relationship management, and detailed analytics to support data-driven decision-making.",
    techUsed: ["React", "Node.js", "PostgreSQL", "OpenAI API", "SendGrid", "Chart.js"],
    results: [
      { metric: "Sales Cycle", value: "-40%" },
      { metric: "Lead Conversion", value: "+65%" },
      { metric: "Team Productivity", value: "+150%" },
      { metric: "Revenue Impact", value: "+$2.4M" },
    ],
    testimonial: "This CRM has completely transformed our sales process. The AI lead scoring alone has paid for the entire project ten times over.",
    testimonialAuthor: "David Kim",
    testimonialRole: "VP Sales, Apex Solutions",
    status: "completed",
  },
  {
    slug: "Namita Textiles - Sarees E-commerce Platform",  
    title: "Namita Textiles - Sarees E-commerce Platform",
    client: "Namita Textiles",
    industry: "Textiles",
    category: "E-commerce Development",
    challenge: "Namita Textiles needed a robust e-commerce platform to showcase their traditional sarees and provide a seamless shopping experience for customers.",
    solution: "We built a feature-rich e-commerce website with intuitive navigation, secure payment processing, and personalized product recommendations. The platform supports multiple payment methods and integrates with inventory management systems.",
    techUsed: ["React", "Node.js", "MongoDB", "Stripe API", "Cloudinary"],
    results: [
      { metric: "Conversion Rate", value: "+55%" },
      { metric: "Average Order Value", value: "+30%" },
      { metric: "Customer Retention", value: "+40%" },
      { metric: "Sales Growth", value: "+180%" },
    ],
    testimonial: "The new e-commerce platform has revolutionized our online presence. Sales have increased significantly, and customer satisfaction has never been higher.",
    testimonialAuthor: "Priya Sharma",
    testimonialRole: "CEO, Namita Textiles",
    status: "completed",
  }
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find(cs => cs.slug === slug);
