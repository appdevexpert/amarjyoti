import { SectionTitle } from "./section-title"

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle
          eyebrow="Manufacturing & Sustainability"
          title="Scaling with quality — responsibly"
          subtitle="From 10 to 50+ trucks per month with in-house resin, solar power, and premium raw materials from China, Indonesia, Burma, and Laos."
          align="left"
        />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <ul className="text-sm text-neutral-700 leading-relaxed space-y-2 list-disc pl-4">
            <li>In-house resin production for consistent quality</li>
            <li>Solar-powered operations, reducing environmental footprint</li>
            <li>Premium raw material sourcing and rigorous quality checks</li>
            <li>Flexible sizes for customer-specific needs</li>
            <li>Core team of 30+ and 200+ skilled personnel forces</li>
          </ul>
          <div className="rounded-md border p-4 bg-[#F6FFF7]">
            <h3 className="font-medium text-[#2E7D32]">Key Advantages</h3>
            <ul className="mt-2 text-sm space-y-1 list-disc pl-4">
              <li>Reliable scale — 50+ trucks/month</li>
              <li>Sustainable solar-powered manufacturing</li>
              <li>Stringent checks from raw material to dispatch</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
