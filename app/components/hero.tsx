"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Beautiful Plywood for Beautiful Homes",
      subtitle: "Plywood for your home beauty - Get fashion for your interiors",
      description: "Premium plywood, block boards, and flush doors crafted with poplar and eucalyptus wood — trusted quality, customizable sizes, and timely delivery.",
      image: "/images/photos/plywood-1.jpeg",
      cta1: "Explore Products",
      cta2: "Learn More"
    },
    {
      title: "Enrich your Interior",
      subtitle: "Modern ply for modern home - Beautify your home with strength and durability",
      description: "Transform your living spaces with our premium plywood solutions. Quality that lasts and designs that inspire.",
      image: "/luxury-living-room-with-wood-furniture.png",
      cta1: "View Gallery",
      cta2: "Get Quote"
    },
    {
      title: "King of the PlyWood",
      subtitle: "A choice of smart people - Perfect for interior applications and perfection in every experience",
      description: "Experience the finest quality plywood that professionals trust. Made in India with international standards.",
      image: "/modern-interior-wood-shelves.png",
      cta1: "Our Products",
      cta2: "Contact Us"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section aria-label="Hero" className="relative isolate h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 -z-10">
            <img src={slide.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
          </div>

          <div className="mx-auto max-w-6xl px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400">{slide.subtitle}</p>
              <h1 className="mt-3 font-serif text-pretty text-3xl font-semibold leading-tight text-white md:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-200 md:text-base">
                {slide.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="#products"
                  className="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 transition-colors"
                >
                  {slide.cta1}
                </Link>
                <Link
                  href="#about"
                  className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                >
                  {slide.cta2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-amber-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
