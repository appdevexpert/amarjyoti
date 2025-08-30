import { SectionTitle } from "@/app/components/section-title"
import { Card, CardContent } from "@/app/components/ui/card"

export function Gallery() {
  const galleryItems = [
    {
      title: "Block Board",
      image: "/images/photos/plywood-6.jpeg",
      category: "Products"
    },
    {
      title: "Flush Doors",
      image: "/images/photos/plywood-3.jpeg",
      category: "Products"
    },
    {
      title: "Plywood Products",
      image: "/images/photos/plywood-1.jpeg",
      category: "Products"
    },
    {
      title: "Interior Solutions",
      image: "/luxury-living-room-with-wood-furniture.png",
      category: "Services"
    },
    {
      title: "Kitchen Cabinets",
      image: "/kitchen-wood-cabinets.png",
      category: "Services"
    },
    {
      title: "Wood Shelves",
      image: "/modern-interior-wood-shelves.png",
      category: "Services"
    }
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Gallery"
          subtitle="Explore our premium plywood products and solutions"
        />
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
