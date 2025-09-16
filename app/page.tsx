"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  MapPin,
  Mail,
  Factory,
  Truck,
  Users,
  Award,
  Leaf,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Menu,
  X,
  TreePine,
  Hammer,
  Building,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "Plywood",
      description: "Durable plywood made from eucalyptus & poplar wood",
      sizes: ["8x4", "8x3", "7x4", "7x3", "6x4", "6x3"],
      thicknesses: ["4mm", "6mm", "8mm", "9mm", "10mm", "12mm", "15mm", "18mm"],
      grades: ["MR", "Commercial", "Packing", "Furniture"],

      image: "/1.jpeg",
    },
    {
      name: "Block Boards",
      description: "High dimensional stability & warp resistance",
      features: ["Furniture", "Partitions", "Paneling"],

      image: "/5.jpeg",
    },
    {
      name: "Flush Doors",
      description: "ISI-approved, termite resistant, and long-lasting",
      features: ["Home Use", "Commercial Use", "Strong & Elegant"],

      image: "/3.jpeg",
    },
  ];

  const advantages = [
    {
      icon: Factory,
      title: "Uses Only Plantation Poplar Wood And Eucalyptus Wood Timber",
      description: "Consistent quality control",
    },
    {
      icon: Leaf,
      title: "Solar-Powered Operations",
      description: "Reducing environmental footprint",
    },
    {
      icon: Award,
      title: "Premium Raw Materials",
      description: "Sourced from China, Indonesia, Burma, and Laos",
    },
    {
      icon: CheckCircle,
      title: "Rigorous Quality Checks",
      description: "Flexibility in sizes for customer needs",
    },
  ];

  const whyChooseUs = [
    "Premium Wood Quality: Poplar & Eucalyptus",
    "Custom Sizes & Thickness: Wide range of options",
    "Promise of Delivery: Never over-promise, never under-deliver",
    "OEM Trusted: Preferred partner for Original Equipment Manufacturers",
    "Strong Dealer Network: Across Tier 2, Tier 3 cities & Delhi NCR",
    "ISI Approved Quality: Long-term durability at fair pricing",
    "Sustainable Manufacturing: Solar power & Technical Grade Resins used for plywood",
    "Fast & Flexible Service: Quick turnaround and tailored solutions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="8.jpeg"
                alt="Amarjyoti Ply"
                width={200}
                height={200}
              />

              {/* <div>
                <h1 className="text-xl font-bold text-gray-900">Amarjyoti Ply </h1>
                <p className="text-xs text-amber-600 font-medium">Ply Jo Amar Rahe</p>
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Products
              </a>
              <a
                href="#manufacturing"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Manufacturing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1 font-medium"
                >
                  About
                </a>
                <a
                  href="#products"
                  className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1 font-medium"
                >
                  Products
                </a>
                <a
                  href="#manufacturing"
                  className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1 font-medium"
                >
                  Manufacturing
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1 font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        {/* Subtle gradient overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-slate-800/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                <TreePine className="w-12 h-12 text-white" />
              </div>
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Amarjyoti Ply
              <span className="block text-2xl md:text-3xl text-gray-200 font-medium mt-2">
                Ply Jo Amar Rahe
              </span>
            </h1>
            {/* <p className="text-xl md:text-2xl text-amber-200 font-semibold mb-8 drop-shadow-md">
              Shri Om Plywood Pvt. Ltd.
            </p> */}
            <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              A proud legacy since the 1990s, delivering premium plywood
              solutions with unwavering commitment to quality, sustainability,
              and customer satisfaction. From timber trading to manufacturing
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-800 to-slate-800 hover:from-gray-900 hover:to-slate-900 text-white px-8 py-3 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </a>
              <a href="#products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  View Products
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                30+
              </div>
              <div className="text-gray-600">Years of Legacy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                50+
              </div>
              <div className="text-gray-600">Trucks Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                200+
              </div>
              <div className="text-gray-600">Skilled Personnel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                100%
              </div>
              <div className="text-gray-600">Customer Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 scroll-mt-24 bg-gradient-to-br from-gray-50 to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-slate-800 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Shri Om Plywood Pvt. Ltd. carries a proud legacy that began with
                timber trading. Founded by our grandfather, father, and uncle,
                the company laid its foundation in the early 1990s with a focus
                on supplying quality timber to the plywood industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In 1995, we expanded into plywood manufacturing, turning our
                experience and vision into a trusted brand. From the very
                beginning, our guiding principle has been simple yet powerful:
                we deliver what we promise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We never over-commit and under-deliver, a value that has earned
                us the trust of clients who have stayed with us since the start.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-gray-800">
                    <Star className="w-5 h-5 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To build a proudly Made in India plywood brand that is
                    accessible to all - delivering high performance,
                    long-lasting quality, and trust at a fair price.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Manufacture plywood that balances quality and
                      affordability
                    </li>
                    <li>• Offer customizable sizes and timely delivery</li>
                    <li>
                      • Build long-term customer relationships through
                      transparency
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 scroll-mt-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-slate-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality products crafted with precision and care, designed
              to meet diverse construction and furniture needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Product Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Product name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {product.name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="p-6 bg-white">
                  {product.sizes && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                        Available Sizes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100"
                          >
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.thicknesses && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                        Available Thicknesses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.thicknesses.map((thickness, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100"
                          >
                            {thickness}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.grades && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Quality Grades
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.grades.map((grade, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-amber-300 text-orange-700 bg-orange-50 hover:bg-orange-100"
                          >
                            {grade}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.features && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Ideal Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-amber-300 text-orange-700 bg-orange-50 hover:bg-orange-100"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section
        id="manufacturing"
        className="py-20 scroll-mt-30 bg-gradient-to-br from-gray-50 to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing & Sustainability
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-slate-800 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We have grown from humble beginnings to a large-scale operation.
                From dispatching just 10 trucks a month, we now scale to over 50
                trucks every month, reflecting the trust and demand our products
                have earned.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our strength is powered by a dedicated core team of 30+
                employees along with 200+ skilled personnel, ensuring smooth
                operations from manufacturing to delivery.
              </p>

              <div className="flex items-center space-x-6 text-center">
                <div className="flex items-center space-x-2">
                  <Truck className="w-8 h-8 text-gray-700" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Trucks/Month</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-8 h-8 text-gray-700" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-600">Personnel</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <advantage.icon className="w-10 h-10 text-gray-700 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-slate-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by OEMs and dealers across India for our commitment to
              quality, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 scroll-mt-top bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-slate-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Get in touch with us for all your plywood needs. We're here to
              help you find the perfect solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Factory address -> Google Map */}
              <div className="overflow-hidden rounded-lg aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=28.7595538,76.7915432&z=16&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  loading="lazy"
                  title="Factory location map"
                ></iframe>
              </div>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Phone className="w-6 h-6 mr-3" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a
                      href="tel:+919716192739"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9716192739
                    </a>
                    <a
                      href="tel:+919716192738"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9716192738
                    </a>
                    <a
                      href="tel:+919310079445"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9310079445
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Whether you're an OEM, dealer, or individual customer, we're
                committed to delivering exactly what we promise. Contact us
                today to discuss your plywood requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-200">ISI Approved Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-200">
                    Timely Delivery Guaranteed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-200">
                    Sustainable Manufacturing
                  </span>
                </div>
              </div>

              <Button
                className="w-full mt-8 bg-white text-gray-800 hover:bg-gray-50 font-semibold"
                size="lg"
                onClick={() => {
                  window.open("tel:+919716192739", "_blank");
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="7.jpeg"
                  alt="Amarjyoti Ply"
                  width={150}
                  height={150}
                />
                <div>
                  <h3 className="text-lg font-bold">
                    Shri Om Plywood Pvt. Ltd.
                  </h3>
                  <p className="text-sm text-amber-400">
                    Amarjyoti Ply - Ply Jo Amar Rahe
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A legacy of trust and quality since the 1990s, delivering
                premium plywood solutions across India.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#products"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
                <a
                  href="#manufacturing"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Manufacturing
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p className="font-medium">Factory:</p>
                    <p className="text-sm">
                      48 Km Stone, Village Sampla, Haryana - 124501
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p className="font-medium">Office:</p>
                    <p className="text-sm">
                      Room 201, Vardhman Plaza Corner, Peeragarhi, Delhi -
                      110041
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>
              &copy; 2025 Amarjyoti Ply - Ply Jo Amar Rahe. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Delivering what we promise - Never over-commit, never
              under-deliver
            </p>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                Website developed by{" "}
                <a
                  href="https://appeneure.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  Appeneure Technologies (P) Ltd
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
