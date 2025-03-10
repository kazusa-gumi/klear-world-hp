"use client";

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, Home, Key, Search, UserCheck } from "lucide-react";

export function Process() {
  const timelineData = [
    {
      title: "Free Consultation",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CalendarCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-2">
                Begin your journey with a no-obligation consultation. We'll discuss your:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Budget and financing options</li>
                <li>Preferred locations and property types</li>
                <li>Timeline and requirements</li>
                <li>Visa and immigration needs</li>
              </ul>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      ),
    },
    {
      title: "Property Search",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-2">
                Based on your requirements, we'll:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Create a curated list of properties</li>
                <li>Arrange viewings at your convenience</li>
                <li>Provide detailed property information in English</li>
                <li>Compare options and locations</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&auto=format&fit=crop&q=60"
              alt="Property viewing in Tokyo"
              width={500}
              height={300}
              className="rounded-lg object-cover h-32 w-full"
            />
            <Image
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60"
              alt="Property inspection"
              width={500}
              height={300}
              className="rounded-lg object-cover h-32 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Purchase Support",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <UserCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-2">
                We handle all aspects of the purchase process:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Property inspection accompaniment</li>
                <li>Price negotiation support</li>
                <li>Contract review and explanation</li>
                <li>Legal and documentation assistance</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Move-In Support",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Key className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-2">
                We ensure a smooth transition to your new home:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Key handover coordination</li>
                <li>Utility setup assistance</li>
                <li>Move-in inspection support</li>
                <li>Local area orientation</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="https://images.unsplash.com/photo-1575862924838-c166e3814df7?w=800&auto=format&fit=crop&q=60"
              alt="Key handover"
              width={500}
              height={300}
              className="rounded-lg object-cover h-32 w-full"
            />
            <Image
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=60"
              alt="New home"
              width={500}
              height={300}
              className="rounded-lg object-cover h-32 w-full"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={timelineData} />;
}