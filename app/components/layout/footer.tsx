import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/logos/amarjyoti-logo.jpeg"
                alt="Amarjyoti Ply"
                className="h-12 w-auto"
              />
           
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium plywood, block boards, and flush doors made in India with
              quality and sustainability at our core.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/sustainability" className="block text-gray-300 hover:text-white transition-colors">
                Sustainability
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <nav className="space-y-2">
              <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">
                Plywood
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">
                Block Boards
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">
                Flush Doors
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">
                Veneers
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@amarjyotiply.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Industrial Area, Gujarat, India
                </span>
              </div>
            </div>
            <Button asChild className="w-full bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">
            © 2024 Shri Om Plywood Pvt. Ltd. All rights reserved. | Made in India
          </p>
        </div>
      </div>
    </footer>
  )
}
