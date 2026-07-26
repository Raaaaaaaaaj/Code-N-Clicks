export type SectionType =
  | "hero"
  | "summary"
  | "introduction"
  | "problem"
  | "statistics"
  | "why-matters"
  | "step-guide"
  | "real-example"
  | "mistakes"
  | "comparison-table"
  | "checklist"
  | "faqs"
  | "conclusion"
  | "cta"
  | "related-articles";

export interface BlogSection {
  id: string;
  type: SectionType;
  title: string;
  isEnabled: boolean;
  content: any;
}

export interface BlogContentStructure {
  version: "2026.1";
  metadata: {
    imageAltText?: string;
    readingTime: number;
    isFeatured: boolean;
    robots: {
      index: boolean;
      follow: boolean;
    };
    focusKeyword?: string;
    secondaryKeywords?: string[];
    semanticKeywords?: string[];
    schemaSettings: {
      article: boolean;
      faq: boolean;
      breadcrumb: boolean;
      howto: boolean;
      softwareApplication: boolean;
      organization: boolean;
      localBusiness: boolean;
    };
    relatedArticleIds: string[];
  };
  sections: BlogSection[];
}

export function isBlockContent(content: string): boolean {
  if (!content) return false;
  try {
    const parsed = JSON.parse(content);
    return parsed && parsed.version === "2026.1" && Array.isArray(parsed.sections);
  } catch {
    return false;
  }
}

export function parseBlogContent(content: string): BlogContentStructure {
  if (isBlockContent(content)) {
    return JSON.parse(content) as BlogContentStructure;
  }
  
  // Legacy / fallback format
  return {
    version: "2026.1",
    metadata: {
      imageAltText: "",
      readingTime: Math.max(1, Math.ceil((content || "").split(/\s+/).length / 200)),
      isFeatured: false,
      robots: { index: true, follow: true },
      schemaSettings: {
        article: true,
        faq: false,
        breadcrumb: false,
        howto: false,
        softwareApplication: false,
        organization: false,
        localBusiness: false,
      },
      relatedArticleIds: [],
    },
    sections: [
      {
        id: "legacy-intro",
        type: "introduction",
        title: "Introduction",
        isEnabled: true,
        content: { text: content || "" },
      },
    ],
  };
}

export function getRawTextFromSections(sections: BlogSection[]): string {
  let text = "";
  sections.forEach((sec) => {
    if (!sec.isEnabled) return;
    if (sec.type === "introduction" || sec.type === "conclusion") {
      text += " " + (sec.content.text || "");
    } else if (sec.type === "hero") {
      text += " " + (sec.content.title || "") + " " + (sec.content.subtitle || "");
    } else if (sec.type === "summary") {
      text += " " + (sec.content.points || []).join(" ");
    } else if (sec.type === "problem") {
      text += " " + (sec.content.problemText || "");
    } else if (sec.type === "why-matters") {
      text += " " + (sec.content.points || []).map((p: any) => `${p.title} ${p.desc}`).join(" ");
    } else if (sec.type === "step-guide") {
      text += " " + (sec.content.steps || []).map((s: any) => `${s.title} ${s.instruction}`).join(" ");
    } else if (sec.type === "real-example") {
      text += " " + (sec.content.title || "") + " " + (sec.content.desc || "");
    } else if (sec.type === "mistakes") {
      text += " " + (sec.content.mistakes || []).map((m: any) => `${m.title} ${m.desc}`).join(" ");
    } else if (sec.type === "comparison-table") {
      text += " " + (sec.content.headers || []).join(" ");
      (sec.content.rows || []).forEach((row: string[]) => {
        text += " " + row.join(" ");
      });
    } else if (sec.type === "checklist") {
      text += " " + (sec.content.items || []).map((i: any) => i.text).join(" ");
    } else if (sec.type === "faqs") {
      text += " " + (sec.content.faqs || []).map((f: any) => `${f.question} ${f.answer}`).join(" ");
    } else if (sec.type === "cta") {
      text += " " + (sec.content.title || "") + " " + (sec.content.description || "");
    }
  });
  return text;
}

export function calculateReadingTime(sections: BlogSection[]): number {
  const text = getRawTextFromSections(sections);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export interface SeoAuditItem {
  id: string;
  label: string;
  passed: boolean;
  impact: "high" | "medium" | "low";
  feedback: string;
}

export function calculateSeoScore(params: {
  title: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  imageAltText: string;
  schemaSettings: Record<string, boolean>;
  relatedArticleIds: string[];
  sections: BlogSection[];
}) {
  const { title, seoTitle, metaDescription, focusKeyword, imageAltText, schemaSettings, relatedArticleIds, sections } = params;
  const audits: SeoAuditItem[] = [];
  
  // 1. Title Length Audit
  const titleLen = title.length;
  audits.push({
    id: "title-length",
    label: "H1 Title Length",
    passed: titleLen >= 30 && titleLen <= 70,
    impact: "medium",
    feedback: titleLen < 30 ? "Title is too short. Aim for at least 30 chars." : titleLen > 70 ? "Title is too long. Keep under 70 chars." : "Ideal title length.",
  });

  // 2. SEO Title Length Audit
  const seoTitleLen = seoTitle.length;
  audits.push({
    id: "seo-title-length",
    label: "Meta Title Length",
    passed: seoTitleLen >= 50 && seoTitleLen <= 65,
    impact: "high",
    feedback: seoTitleLen < 50 ? "Meta title is too short (under 50 chars)." : seoTitleLen > 65 ? "Meta title is too long (over 65 chars)." : "Ideal meta title length.",
  });

  // 3. Meta Description Length Audit
  const metaDescLen = metaDescription.length;
  audits.push({
    id: "meta-desc-length",
    label: "Meta Description Length",
    passed: metaDescLen >= 120 && metaDescLen <= 160,
    impact: "high",
    feedback: metaDescLen < 120 ? "Description is too short (under 120 chars)." : metaDescLen > 160 ? "Description is too long (over 160 chars)." : "Ideal description length.",
  });

  const focusKeywordLower = (focusKeyword || "").toLowerCase().trim();
  const rawText = getRawTextFromSections(sections);
  const rawTextLower = rawText.toLowerCase();

  // 4. Focus Keyword in H1
  audits.push({
    id: "keyword-in-h1",
    label: "Focus Keyword in H1 Title",
    passed: focusKeywordLower ? title.toLowerCase().includes(focusKeywordLower) : false,
    impact: "high",
    feedback: focusKeywordLower ? (title.toLowerCase().includes(focusKeywordLower) ? "Focus keyword found in H1 title." : "Focus keyword not found in H1 title.") : "No focus keyword specified.",
  });

  // 5. Focus Keyword in Meta Title
  audits.push({
    id: "keyword-in-meta-title",
    label: "Focus Keyword in Meta Title",
    passed: focusKeywordLower ? seoTitle.toLowerCase().includes(focusKeywordLower) : false,
    impact: "high",
    feedback: focusKeywordLower ? (seoTitle.toLowerCase().includes(focusKeywordLower) ? "Focus keyword found in SEO Title." : "Focus keyword not found in SEO Title.") : "No focus keyword specified.",
  });

  // 6. Focus Keyword in Meta Description
  audits.push({
    id: "keyword-in-meta-desc",
    label: "Focus Keyword in Meta Description",
    passed: focusKeywordLower ? metaDescription.toLowerCase().includes(focusKeywordLower) : false,
    impact: "medium",
    feedback: focusKeywordLower ? (metaDescription.toLowerCase().includes(focusKeywordLower) ? "Focus keyword found in meta description." : "Focus keyword not found in meta description.") : "No focus keyword specified.",
  });

  // 7. Focus Keyword Density
  let density = 0;
  let wordCount = rawText.split(/\s+/).filter(Boolean).length;
  if (focusKeywordLower && wordCount > 0) {
    const matches = rawTextLower.split(focusKeywordLower).length - 1;
    density = (matches / wordCount) * 100;
  }
  audits.push({
    id: "keyword-density",
    label: "Focus Keyword Density",
    passed: focusKeywordLower ? density >= 0.5 && density <= 2.5 : false,
    impact: "medium",
    feedback: focusKeywordLower ? `Density is ${density.toFixed(2)}%. Target: 0.5% - 2.5%.` : "No focus keyword specified.",
  });

  // 8. Image Alt Text
  audits.push({
    id: "image-alt",
    label: "Featured Image Alt Text",
    passed: !!imageAltText,
    impact: "medium",
    feedback: imageAltText ? "Alt text provided for featured image." : "Add Alt text to your featured image to support SEO image indexing.",
  });

  // 9. Schema Status
  const schemaCount = Object.values(schemaSettings).filter(Boolean).length;
  audits.push({
    id: "schema-status",
    label: "Structured Data Schemas",
    passed: schemaCount > 0,
    impact: "medium",
    feedback: schemaCount > 0 ? `${schemaCount} schemas selected for search engine markup.` : "Select at least one schema to output rich-results snippet markup.",
  });

  // 10. Internal Links
  audits.push({
    id: "internal-links",
    label: "Internal Linking Status",
    passed: relatedArticleIds.length > 0,
    impact: "low",
    feedback: relatedArticleIds.length > 0 ? `${relatedArticleIds.length} related articles linked.` : "Link to other internal articles to improve site architecture.",
  });

  // 11. Word Count & Reading Time
  audits.push({
    id: "word-count",
    label: "Total Word Count",
    passed: wordCount >= 600,
    impact: "medium",
    feedback: wordCount >= 600 ? `Article has ${wordCount} words.` : `Content is too thin (${wordCount} words). Aim for 600+ words.`,
  });

  // Calculate Score
  const passedCount = audits.filter((a) => a.passed).length;
  const score = Math.round((passedCount / audits.length) * 100);

  // Estimate Reading Ease (mock grade level)
  let readingLevel = "Standard (Grade 7-8)";
  if (wordCount > 0) {
    // Simple mock heuristic
    const avgWordLen = rawText.length / wordCount;
    if (avgWordLen > 5.5) {
      readingLevel = "Advanced (College Graduate)";
    } else if (avgWordLen > 5.0) {
      readingLevel = "Fairly Difficult (Grade 10-12)";
    } else {
      readingLevel = "Easy (Grade 7-8)";
    }
  }

  return {
    score,
    audits,
    wordCount,
    readingTime: Math.max(1, Math.ceil(wordCount / 200)),
    readingLevel,
  };
}

export async function ensureDemoBlogExists(prisma: any) {
  const demoSlug = "ultimate-guide-hotel-management-software-indian-hotels-2026";
  
  try {
    const existing = await prisma.blogPost.findUnique({
      where: { slug: demoSlug }
    });

    if (existing) {
      return existing;
    }

    const demoContent: BlogContentStructure = {
      version: "2026.1",
      metadata: {
        imageAltText: "Premium modern hotel lobby in India",
        readingTime: 6,
        isFeatured: true,
        robots: { index: true, follow: true },
        focusKeyword: "hotel management software",
        secondaryKeywords: ["PMS system", "cloud hotel software", "channel manager"],
        semanticKeywords: ["reservation system", "guest management", "hospitality software"],
        schemaSettings: {
          article: true,
          faq: true,
          breadcrumb: true,
          howto: true,
          softwareApplication: true,
          organization: true,
          localBusiness: false
        },
        relatedArticleIds: []
      },
      sections: [
        {
          id: "hero-demo",
          type: "hero",
          title: "The Ultimate Guide to Hotel Management Software for Indian Hotels in 2026",
          isEnabled: true,
          content: {
            title: "The Ultimate Guide to Hotel Management Software for Indian Hotels in 2026",
            subtitle: "Discover how top Indian boutique resorts and business hotels are automating check-ins, syncing OTA rates in real-time, and slashing channel commissions by 25%.",
            ctaText: "Request Operational Audit",
            ctaUrl: "/contact",
            bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
          }
        },
        {
          id: "summary-demo",
          type: "summary",
          title: "Executive Summary",
          isEnabled: true,
          content: {
            title: "Executive Summary",
            points: [
              "Cloud-based Property Management Systems (PMS) are replacing legacy desktop software due to hybrid sync capabilities and multi-property management.",
              "Integrating a real-time Channel Manager cuts double-bookings down to zero and maximizes occupancy across Booking.com, Agoda, and MakeMyTrip.",
              "Direct booking engines powered by WhatsApp confirmation templates can reduce OTA commission leaks by 15-20%."
            ]
          }
        },
        {
          id: "intro-demo",
          type: "introduction",
          title: "Introduction",
          isEnabled: true,
          content: {
            text: "<p>The Indian hospitality sector is undergoing a massive digital transformation. In 2026, running a hotel on desktop Excel sheets or localized legacy servers is no longer a viable strategy. Modern travelers expect instant digital check-ins, automated WhatsApp billing, and real-time room availability across all booking platforms.</p><p>This comprehensive guide details the core software architectures required to run a high-occupancy hotel in India, focusing on local payment integrations, OTA channels, and cloud automation.</p>"
          }
        },
        {
          id: "problem-demo",
          type: "problem",
          title: "The OTA Commission Trap",
          isEnabled: true,
          content: {
            problemText: "<p><strong>The Commission Trap:</strong> Many Indian independent hoteliers pay up to 25% in commissions to online travel agencies (OTAs). Without automated channel sync, managing room rates manually across multiple booking portals results in high rates of double-booking errors and missed revenues during peak seasons.</p>",
            calloutType: "warning"
          }
        },
        {
          id: "stats-demo",
          type: "statistics",
          title: "2026 Hospitality Statistics",
          isEnabled: true,
          content: {
            stats: [
              { number: "74%", label: "Direct Bookings Boost", desc: "For hotels using automated WhatsApp follow-up triggers." },
              { number: "0%", label: "Overbooking Rate", desc: "Achieved via real-time channel manager synchronization." },
              { number: "18 Min", label: "Saved Per Guest Check-in", desc: "By deploying digital pre-arrival registration portals." },
              { number: "₹4.5L", label: "Average Monthly Savings", desc: "In OTA commission leakage for a 50-room hotel." }
            ]
          }
        },
        {
          id: "why-matters-demo",
          type: "why-matters",
          title: "Why Indian Hotels Need Tailored Solutions",
          isEnabled: true,
          content: {
            points: [
              { title: "UPI & Local Payment Integrations", desc: "Support instant payments via PhonePe, GPay, and Paytm to secure non-refundable bookings instantly." },
              { title: "GST & Indian Tax Compliance", desc: "Automate calculation of SGST, CGST, and generating corporate GST tax invoices for business clients." },
              { title: "Housekeeping Mobile Silos", desc: "Allow staff to mark rooms clean via mobile web apps, instantly updating front-desk status." }
            ]
          }
        },
        {
          id: "step-guide-demo",
          type: "step-guide",
          title: "Step-by-Step Modernization Guide",
          isEnabled: true,
          content: {
            steps: [
              { title: "Audit Your Current OTA Commissions", instruction: "<p>Calculate exactly how much revenue is lost to OTAs. Identify if your front desk manually updates rates or if you have basic automated linkages.</p>", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop" },
              { title: "Choose a Cloud-native PMS System", instruction: "<p>Select a Property Management System that has built-in support for Indian GST, multi-currency bills, and integration with local channel managers.</p>", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" },
              { title: "Set Up a Direct WhatsApp Booking Funnel", instruction: "<p>Integrate a booking engine that lets guest book directly on your site and receive a secure payment link via WhatsApp to bypass OTA fees entirely.</p>", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop" }
            ]
          }
        },
        {
          id: "example-demo",
          type: "real-example",
          title: "Success Story: Udaipur Heritage Haveli",
          isEnabled: true,
          content: {
            title: "How a Heritage Haveli Resort in Udaipur Cut OTA Fees by 30%",
            desc: "<p>By implementing a cloud-based PMS with direct booking templates and integrating UPI payment QR codes in guest reservation emails, this 35-room hotel shifted 40% of their business to direct channels. They lowered administrative checkout overheads and achieved zero double-bookings during the Diwali peak holiday season.</p>",
            metrics: "₹3.8L Saved / Month"
          }
        },
        {
          id: "mistakes-demo",
          type: "mistakes",
          title: "Critical Operational Mistakes",
          isEnabled: true,
          content: {
            mistakes: [
              { title: "Ignoring Localized Payment Intents", desc: "Forcing Indian customers to enter credit card details instead of offering fast UPI/NetBanking scan options." },
              { title: "Relying on Manual Room Updates", desc: "Updating booking portals manually leading to overbooking penalties during peak holiday weekends." },
              { title: "Operating Without Offline Backups", desc: "Cloud PMS systems that do not have local offline cache or hybrid sync to survive connectivity failures." }
            ]
          }
        },
        {
          id: "comparison-demo",
          type: "comparison-table",
          title: "PMS Technology Comparison",
          isEnabled: true,
          content: {
            headers: ["Core Metric", "Modern Cloud PMS", "Legacy Server Software"],
            rows: [
              ["GST Invoicing", "Instant & Automatic", "Requires Manual Billing Sheets"],
              ["OTA Channel Sync Speed", "Under 5 Seconds (Real-time)", "15-30 Minutes (Manual Update)"],
              ["Remote Multi-property View", "Yes, from any device", "No, local server access only"],
              ["Upfront License Cost", "₹0 (SaaS Monthly Subscription)", "₹1.5 Lakhs One-time License"]
            ]
          }
        },
        {
          id: "checklist-demo",
          type: "checklist",
          title: "Migration Readiness Checklist",
          isEnabled: true,
          content: {
            items: [
              { text: "Confirm cloud vendor provides Indian GST invoice compliance", checked: true },
              { text: "Verify channel manager supports 2-way real-time syncing", checked: true },
              { text: "Set up UPI Payment link integrations (Razorpay / PineLabs)", checked: true },
              { text: "Configure digital check-in registration forms for foreign nationals (Form C)", checked: false }
            ]
          }
        },
        {
          id: "faqs-demo",
          type: "faqs",
          title: "Frequently Asked Questions",
          isEnabled: true,
          content: {
            faqs: [
              { question: "Do cloud PMS systems work during internet outages?", answer: "Yes, modern enterprise PMS solutions feature hybrid-sync desktop applications that continue running offline and automatically synchronize data back to the cloud database once connection is restored." },
              { question: "Is GST calculation supported automatically?", answer: "Absolutely. Our recommended configuration calculates 12% GST for rooms below ₹7,500 and 18% GST for rooms above ₹7,500 automatically." },
              { question: "How does the Form C automation work?", answer: "The PMS collects government-required passport, visa, and arrival details during the digital pre-arrival check-in, generating the official Form C export file for easy submission to the Indian Bureau of Immigration." }
            ]
          }
        },
        {
          id: "conclusion-demo",
          type: "conclusion",
          title: "Conclusion",
          isEnabled: true,
          content: {
            title: "Transitioning to a Modern Hospitality Stack",
            text: "<p>Choosing the right hotel management software is a high-ROI operational upgrade. By adopting a modern cloud-native stack tailored to Indian operational challenges—from GST compliance to UPI payments—hoteliers can reclaim control over their distribution and improve guest satisfaction in 2026.</p>"
          }
        },
        {
          id: "cta-demo",
          type: "cta",
          title: "Book Audit",
          isEnabled: true,
          content: {
            title: "Ready to Automate Your Hotel Operations?",
            description: "Schedule a free 20-minute operational assessment with our CodeNClicks tech architects to see how you can migrate your properties safely.",
            buttonText: "Book Operational Audit",
            buttonUrl: "/contact"
          }
        }
      ]
    };

    const newPost = await prisma.blogPost.create({
      data: {
        slug: demoSlug,
        title: "The Ultimate Guide to Hotel Management Software for Indian Hotels in 2026",
        category: "Hospitality",
        author: "CodeNClicks Team",
        featuredImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop",
        seoTitle: "Ultimate Guide to Indian Hotel PMS Software (2026)",
        metaDescription: "Learn how modern Indian hotels automate check-ins, calculate GST, accept UPI, and slash OTA commissions by 25% in 2026 using cloud property management software.",
        canonicalUrl: `https://codenclicksit.in/blog/${demoSlug}`,
        ogImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop",
        ogTitle: "Modernizing Indian Hotel Operations (2026 Guide)",
        ogDescription: "A complete tech stack blueprint for Indian independent hoteliers looking to automate PMS, channel manager, and UPI direct bookings.",
        targetKeywords: "hotel management software, property management system, pms, channel manager",
        isPublished: true,
        content: JSON.stringify(demoContent)
      }
    });

    console.log("Demo blog post seeded successfully.");
    return newPost;
  } catch (error) {
    console.error("Failed to seed demo blog post:", error);
    return null;
  }
}
