export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  { name: "Sudipa Ghosh", role: "Bakery owner", company: "SG Bakery", content: "I take SEO service from Code N Clicks IT Solution, and seriously result was amazing. My website now start coming on top in Google, which I not expected so fast. The team always update me and explain everything properly. Really happy with their work, totally worth it!", rating: 4 },
  { name: "Arti Mondal", role: "Owner", company: "Turfello", content: "The team at Code N Clicks IT Solution has been instrumental in growing our business. Their approach is both strategic and practical, ensuring we get the best results.", rating: 5 },
  { name: "Elena Vasquez", role: "COO", company: "Nova Fashion Inc.", content: "Our online revenue has more than tripled since launching the new platform. The AI recommendations are incredibly effective. Best investment we've made.", rating: 5 },
  { name: "David Kim", role: "VP Sales", company: "Apex Solutions", content: "This CRM has completely transformed our sales process. The AI lead scoring alone has paid for the entire project ten times over. Exceptional work.", rating: 5 },
  { name: "Lisa Park", role: "Managing Director", company: "Zenith Digital", content: "We used to spend 20 hours a week on reporting. Now it's automated and our clients love the real-time dashboards. CodeNClicks delivers beyond expectations.", rating: 5 },
  { name: "Robert Chang", role: "CEO", company: "Atlas Hospitality", content: "Our direct booking revenue has skyrocketed. The virtual tours have significantly increased conversion rates. A premium team delivering premium results.", rating: 5 },
  { name: "Prof. Michael Torres", role: "Dean", company: "Greenfield Academy", content: "The platform has made online learning feel as engaging as being in a classroom. Our students love it. CodeNClicks understood our vision perfectly.", rating: 5 },
  { name: "Raj Patel", role: "CTO", company: "Quantum Technologies", content: "CodeNClicks has been an exceptional development partner. Their technical expertise is unmatched. They don't just build - they engineer solutions.", rating: 5 },
  { name: "Amanda Foster", role: "Marketing Director", company: "Bloom Skincare", content: "The SEO and digital marketing strategy completely transformed our online visibility. We went from page 5 to dominating page 1 in just 4 months.", rating: 5 },
  { name: "Marcus Webb", role: "Founder", company: "TechVault Startups", content: "As a startup founder, every dollar counts. CodeNClicks delivered a product that looked like it cost 10x what we paid. Incredible value and quality.", rating: 5 },
  { name: "Sophie Williams", role: "Brand Manager", company: "Artisan & Co.", content: "The brand identity and website they created for us is stunning. We constantly get compliments from clients and partners. Truly premium design.", rating: 4 },
  { name: "Nathan Brooks", role: "Operations Head", company: "SwiftLogistics", content: "The custom software they built has reduced our operational costs by 40%. Their understanding of complex business processes is remarkable.", rating: 5 },
];
