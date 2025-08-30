import { NavigationItem, Product, ContactInfo, BusinessHours } from "@/app/types"

export const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
]

export const products: Product[] = [
  {
    title: "Plywood",
    img: "/images/photos/plywood-1.jpeg",
    features: [
      "Sizes: 8x4, 8x3, 7x4, 7x3, 6x4, 6x3",
      "Grades: MR, Commercial, Packing, Furniture",
      "Eucalyptus & poplar wood for durability",
    ],
  },
  {
    title: "Block Boards",
    img: "/images/photos/plywood-6.jpeg",
    features: [
      "High dimensional stability & warp resistance",
      "Ideal for furniture, partitions, and paneling",
    ],
  },
  {
    title: "Flush Doors",
    img: "/images/photos/plywood-3.jpeg",
    features: [
      "ISI‑approved, termite resistant, and long‑lasting",
      "Strong yet elegant for home & commercial use",
    ],
  },
]

export const contactInfo: ContactInfo = {
  phone: "+91 123 456 7890",
  email: "info@amarjyotiply.com",
  address: "Industrial Area, Gujarat, India",
}

export const businessHours: BusinessHours[] = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export const companyInfo = {
  name: "Shri Om Plywood Pvt. Ltd.",
  brand: "Amarjyoti Ply",
  tagline: "Ply Jo Amar Rahe",
  description: "Premium plywood, block boards, and flush doors made in India with quality and sustainability at our core.",
}

export const socialLinks = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
}
