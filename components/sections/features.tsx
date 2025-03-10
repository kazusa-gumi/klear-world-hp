"use client";

import { Building2, Globe2, Clock, BadgeCheck, PiggyBank, Languages } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Building2,
    title: "20 Years of Real Estate Expertise",
    description: "Our veteran real estate professionals bring two decades of experience in the Japanese property market, ensuring you find the perfect property.",
    href: "/about",
    cta: "Meet our team",
    className: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    Icon: BadgeCheck,
    title: "Visa Specialist CEO",
    description: "Our CEO specializes in visa acquisition, making your transition to life in Japan smooth and hassle-free.",
    href: "/services",
    cta: "Learn about visas",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Languages,
    title: "Full English Support",
    description: "Complete English language support throughout your property journey - no Japanese language skills required.",
    href: "/contact",
    cta: "Contact us",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Clock,
    title: "Free Consultation",
    description: "Schedule a free consultation to discuss your property needs and investment goals in Japan.",
    href: "/consultation",
    cta: "Book now",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    Icon: PiggyBank,
    title: "Investment Guidance",
    description: "Expert advice on property investment opportunities and market trends in Japan's major cities.",
    href: "/investment",
    cta: "Explore opportunities",
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1",
  }
];

export function Features() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Global Estates Japan?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We combine decades of real estate expertise with specialized knowledge in Japanese immigration to provide a comprehensive service for international buyers.
        </p>
      </div>
      
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.title} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}