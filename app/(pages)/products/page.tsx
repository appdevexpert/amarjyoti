import { Products } from "@/app/components/products"
import { SectionTitle } from "@/app/components/section-title"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* White top section with title and subtitle */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionTitle
            eyebrow="Products"
            title="Our Products"
            subtitle="Premium Quality Plywood Solutions"
            align="center"
          />
        </div>
      </div>
      
      {/* Dark products section */}
      <Products />
    </div>
  )
}
