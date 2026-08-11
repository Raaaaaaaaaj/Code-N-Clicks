export interface Testimonial {
  id?: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  initials?: string;
  date?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    name: "Amrita Dutta",
    role: "Influencer",
    company: "Instagram",
    content: "CodeNClicks is handling my digital marketing work and I am happy with the service. They manage my ads, social media and also helped in improving my Google presence. I started getting more messages and inquiries after working with them. The team explains everything in simple language and keeps me updated about the work. They are friendly, supportive and really try to grow your business, not just run ads. Good team for digital marketing services.",
    rating: 4.7,
    initials: "AD",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Pritam Paul",
    role: "Cafe Owner",
    company: "Paul & Sons",
    content: "My website made within 5 days. They took 7 days initially when we done meeting, but the completed their task before time that was very goo of them. Damn open minded tea, always approachable, and low on budget . Give it a try",
    rating: 5,
    initials: "PP",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Arti Mondal",
    role: "Influencer",
    company: "Arti's Day",
    content: "I took SEO services from them. Everything was good, my website is ranking and getting a good amount of traffic. But the only issue was they lack a proper process of doing things. They do not provide monthly reports which would be better to understand the growth. Otherwise, everything was good.",
    rating: 3.5,
    initials: "AM",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Moumita Roy",
    role: "Manager",
    company: "Namita textiles",
    content: "We wanted a online store and CodeNClicks team did the full setup. Payment, product everything they managed. Good support and friendly team.",
    rating: 3.7,
    initials: "MR",
    verified: true,
  },
];
