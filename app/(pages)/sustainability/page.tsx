import { Sustainability } from "@/app/components/sustainability"
import { SectionTitle } from "@/app/components/section-title"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-16">
        <SectionTitle
          title="Sustainability"
          subtitle="Our commitment to environmental responsibility and sustainable practices"
        />
        <Sustainability />
      </div>
    </div>
  )
}
