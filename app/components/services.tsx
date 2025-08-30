import { SectionTitle } from "@/app/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Settings, Palette, Package } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Veneer Customization",
      description: "We provide customized veneer according to customer specifications. Our range includes various sizes and finishes to deliver flawless results that meet your exact requirements.",
      icon: Palette,
      image: "/veneer-customization.png"
    },
    {
      title: "Complete Interiors Solution",
      description: "We provide complete interior solutions with fully equipped infrastructure, latest tools and equipment. We are appreciated by clients for fine finish of interior decoration.",
      icon: Settings,
      image: "/modern-interior-wood-shelves.png"
    },
    {
      title: "Multiple Products",
      description: "We have a wide range of products including commercial face veneer, decorative veneer, and more. Our products can give any surface a perfect finish and rich experience.",
      icon: Package,
      image: "/kitchen-wood-cabinets.png"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive solutions for all your plywood needs"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <service.icon className="h-6 w-6 text-amber-600" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
