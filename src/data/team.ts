export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  { name: "Arjun Mehta", role: "Founder & CEO", bio: "15+ years in digital strategy. Former tech lead at a Fortune 500 consultancy. Passionate about building products that move the needle." },
  { name: "Priya Sharma", role: "Creative Director", bio: "Award-winning designer with a portfolio spanning global brands. Believes every pixel should earn its place." },
  { name: "Daniel Carter", role: "CTO", bio: "Full-stack architect with deep expertise in scalable systems. Led engineering teams at multiple successful startups." },
  { name: "Aisha Khan", role: "Head of Marketing", bio: "Data-driven marketer who's managed $20M+ in ad spend. Specializes in growth strategies for B2B and D2C brands." },
  { name: "Marcus Lee", role: "Lead Developer", bio: "Open-source contributor and React expert. Obsessed with performance optimization and clean architecture." },
  { name: "Sofia Rodriguez", role: "UX Lead", bio: "Human-centered design advocate. 8+ years crafting intuitive experiences for healthcare, fintech, and e-commerce." },
];
