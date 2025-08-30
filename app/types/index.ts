export interface NavigationItem {
  name: string
  href: string
}

export interface Product {
  title: string
  img: string
  features: string[]
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
}

export interface BusinessHours {
  day: string
  hours: string
}

export interface Metadata {
  title: string
  description: string
  keywords?: string[]
}
