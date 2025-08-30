
import { SectionTitle } from "@/app/components/section-title"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 lg:mb-20">
          <SectionTitle
            eyebrow="Contact Us"
            title="Contact Us"
            subtitle="Ready to discuss your plywood requirements? We're here to help."
            align="center"
          />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-20 items-start">
          {/* Contact Form */}
          <div className="order-2 xl:order-1">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">First Name *</label>
                    <Input placeholder="Enter your first name" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                    <Input placeholder="Enter your last name" required className="h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <Input placeholder="your.email@example.com" type="email" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                  <Input placeholder="+91 123 456 7890" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Company (Optional)</label>
                  <Input placeholder="Your company name" className="h-11" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Product Interest</label>
                  <select className="w-full h-11 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white">
                    <option>Select a product</option>
                    <option>Plywood</option>
                    <option>Block Boards</option>
                    <option>Flush Doors</option>
                    <option>Veneers</option>
                    <option>Custom Solutions</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Message *</label>
                  <Textarea placeholder="Tell us about your requirements..." rows={5} required className="resize-none" />
                </div>
                <Button className="w-full h-12 bg-amber-600 hover:bg-amber-700 text-white font-medium">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 order-1 xl:order-2">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 mb-1">Phone Numbers</p>
                    <p className="text-gray-600">+91 123 456 7890</p>
                    <p className="text-gray-600">+91 987 654 3210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600">info@amarjyotiply.com</p>
                    <p className="text-gray-600">sales@amarjyotiply.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600 leading-relaxed">
                      Industrial Area, Gujarat, India<br />
                      Near Highway, Main Road<br />
                      Gujarat - 382001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

        

            <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Why Choose Amarjyoti Ply?</h3>
                <ul className="space-y-3 text-sm text-amber-800">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    Premium quality plywood products
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    Custom sizes and specifications
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    Timely delivery across India
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    Expert technical support
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    Competitive pricing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

       
      </div>
    </div>
  )
}
