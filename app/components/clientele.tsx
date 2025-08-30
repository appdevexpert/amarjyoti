import { SectionTitle } from "./section-title"
import Image from "next/image"

export function Clientele() {
  return (
    <section id="clientele" className="bg-[#FAFAF9]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle
          eyebrow="Clientele"
          title="Trusted by OEMs and dealer networks"
          subtitle="Strong presence across Tier 2 and Tier 3 cities and in the Delhi NCR region."
        />
        <div className="mt-8 grid sm:grid-cols-2 gap-6 items-center">
          <div className="rounded-md border bg-white p-4">
            <h3 className="font-medium">Why Choose Us</h3>
            <ul className="mt-2 text-sm text-neutral-700 space-y-1 list-disc pl-4">
              <li>Premium wood quality: Poplar & Eucalyptus</li>
              <li>Custom sizes & thickness across a wide range</li>
              <li>Promise of delivery: never over-promise, never under-deliver</li>
              <li>OEM trusted with a strong dealer network</li>
              <li>ISI approved quality at fair pricing</li>
              <li>Sustainable manufacturing with solar power</li>
              <li>Fast & flexible service</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/logos/shri-om-logo.jpeg"
              alt="Shri Om Plywood logo"
              width={260}
              height={120}
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
