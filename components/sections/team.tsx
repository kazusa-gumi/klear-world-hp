"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Team() {
  const teamMembers = [
    {
      quote: "With over 20 years of experience in Japanese real estate, I've helped countless international clients find their perfect property. My deep understanding of the market, combined with extensive networks across Japan's major cities, ensures we find the best opportunities for our clients.",
      name: "Takashi Yamamoto",
      designation: "Senior Real Estate Advisor",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
    },
    {
      quote: "As a visa specialist and CEO, I've dedicated my career to helping international clients navigate Japan's immigration system. My expertise ensures a smooth transition for property buyers, handling both real estate and visa requirements seamlessly.",
      name: "Ken Tanaka",
      designation: "CEO & Visa Specialist",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60",
    },
    {
      quote: "Having facilitated numerous property transactions for international clients, I understand the unique challenges they face. My role is to ensure clear communication and transparency throughout the entire purchase process.",
      name: "Sarah Wilson",
      designation: "International Client Relations Manager",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
    },
    {
      quote: "My background in both Japanese and international law allows me to provide comprehensive legal support for property transactions. I ensure all documentation and contracts are properly handled, giving our clients peace of mind.",
      name: "Yuki Sato",
      designation: "Legal Advisor",
      src: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced professionals combine deep real estate knowledge with visa expertise to provide comprehensive support for international buyers.
          </p>
        </div>
        <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />
      </div>
    </section>
  );
}