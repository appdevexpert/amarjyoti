import { SectionTitle } from "@/app/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export function Brands() {
  const brands = [
    {
      name: "Amarjyoti",
      description: "Our flagship brand offering premium plywood solutions",
      logo: "/images/logos/amarjyoti-logo.jpeg"
    },
    {
      name: "Shri Om",
      description: "Trusted brand for quality block boards and flush doors",
      logo: "/images/logos/shri-om-logo.jpeg"
    },
    {
      name: "Premium Grade",
      description: "High-quality commercial and residential plywood",
      logo: "/placeholder-logo.png"
    },
    {
      name: "Eco-Friendly",
      description: "Sustainable plywood made with responsible forestry practices",
      logo: "/placeholder-logo.png"
    }
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Brands"
          subtitle="Quality brands you can trust"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <CardTitle className="text-lg">{brand.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {brand.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
