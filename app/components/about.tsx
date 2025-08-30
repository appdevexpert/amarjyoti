import { SectionTitle } from "./section-title"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
       
        <div className=" grid md:grid-cols-2 gap-6 items-center justify-center">
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Founded by our grandfather, father, and uncle, we began by supplying quality timber to the plywood
              industry. In 1995, we expanded into manufacturing, turning experience and vision into a reliable brand.
            </p>
            <p>
              Our principle is simple and powerful: deliver what we promise. We never over-commit and under-deliver —
              the reason many of our clients have stayed with us since the start.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Vision</h3>
                <p className="text-sm mt-2">
                  Build a proudly Made in India brand that’s accessible to all — high performance, long-lasting quality,
                  and trust at a fair price.
                </p>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Mission</h3>
                <ul className="text-sm mt-2 list-disc pl-4 space-y-1">
                  <li>Manufacture plywood that balances quality and affordability</li>
                  <li>Offer customizable sizes and timely delivery</li>
                  <li>Uphold our value: deliver what we promise</li>
                  <li>Build long-term relationships through transparency and trust</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <Image
                src="/images/photos/plywood-2.jpeg"
                alt="Amarjyoti ply branding on sheet"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <Image
                src="/images/photos/plywood-3.jpeg"
                alt="Certifications and warranty stamps"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <Image
                src="/images/photos/plywood-4.jpeg"
                alt="Amarjyoti marked plywood panel"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <Image
                src="/images/photos/plywood-6.jpeg"
                alt="Block board stack texture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
