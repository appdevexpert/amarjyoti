import { SectionTitle } from "@/app/components/section-title"
import { Card, CardContent } from "@/app/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Arvind Kumar Mishra",
      role: "Interior Designer",
      content: "Prompt and excellent service rendered by Amarjyoti Ply. Quality and prices of materials are very competitive. Highly recommended for all plywood needs.",
      rating: 5
    },
    {
      name: "Suraj Kumar Maurya",
      role: "Contractor",
      content: "Amarjyoti Ply is 100% trustworthy and reliable to business with. They have good range of products with exclusive collection at very reasonable prices.",
      rating: 5
    },
    {
      name: "Sahabe Alam",
      role: "Architect",
      content: "The plywood quality and thickness are really good. Range of the products is enormous. Love to use Amarjyoti Ply products. Keep it up!",
      rating: 5
    }
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Testimonials from satisfied clients"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
