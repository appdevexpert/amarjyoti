import { About } from "@/app/components/about"
import { SectionTitle } from "@/app/components/section-title"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-16">
      <SectionTitle
          eyebrow="About Us"
          title="Shri Om Plywood Pvt. Ltd."
          subtitle="From timber trading in the early 1990s to a trusted plywood brand since 1995 — we’ve grown by delivering exactly what we promise."
          align="center"
        />
        <About />
      </div>
    </div>
  )
}
