import Image from "next/image"

const products = [
  {
    name: "Plywood",
    features: [
      "Sizes: 8x4, 8x3, 7x4, 7x3, 6x4, 6x3",
      "Grades: MR, Commercial, Packing, Furniture",
      "Eucalyptus & poplar wood for durability",
    ],
    image: "/images/photos/plywood-3.jpeg",
  },
  {
    name: "Block Boards",
    features: ["High dimensional stability & warp resistance", "Ideal for furniture, partitions, paneling"],
    image: "/images/photos/plywood-6.jpeg",
  },
  {
    name: "Flush Doors",
    features: ["ISI-approved, termite resistant, long-lasting", "Strong yet elegant for home & commercial use"],
    image: "/images/photos/plywood-1.jpeg",
  },
]

export function Products() {
  return (
    <section id="products" className="bg-[#0B0B0B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] text-amber-600 uppercase font-medium">PRODUCTS</p>
            <h2 className="mt-2 font-serif text-pretty text-2xl md:text-3xl font-semibold text-white">Engineered for performance and trust</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">Premium raw materials, rigorous checks, and flexible sizing to fit your needs.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-8 bg-amber-600" />
              <span className="h-1 w-1 rounded-full bg-amber-600" />
              <span className="h-px w-8 bg-amber-600" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p) => (
            <div key={p.name} className="rounded-lg overflow-hidden border border-neutral-800 bg-[#111111] hover:border-neutral-700 transition-colors duration-300">
              <div className="relative h-48 lg:h-56">
                <Image 
                  src={p.image || "/placeholder.svg"} 
                  alt={p.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-4">{p.name}</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {p.features.map((f, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
