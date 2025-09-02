# Amarjyoti Ply - Next.js Website

A modern, responsive website for Shri Om Plywood Pvt. Ltd. built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
amarjyoti/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups for pages
│   │   ├── about/               # About page
│   │   ├── products/            # Products page
│   │   ├── sustainability/      # Sustainability page
│   │   └── contact/             # Contact page
│   ├── components/              # Reusable components
│   │   ├── layout/              # Layout components
│   │   │   ├── client-header.tsx # Site header
│   │   │   └── footer.tsx       # Site footer
│   │   ├── ui/                  # UI components (shadcn/ui)
│   │   │   ├── button.tsx       # Button component
│   │   │   ├── card.tsx         # Card component
│   │   │   ├── input.tsx        # Input component
│   │   │   ├── label.tsx        # Label component
│   │   │   ├── separator.tsx    # Separator component
│   │   │   ├── sheet.tsx        # Sheet component
│   │   │   ├── skeleton.tsx     # Skeleton component
│   │   │   └── textarea.tsx     # Textarea component
│   │   ├── hero.tsx             # Hero section
│   │   ├── about.tsx            # About section
│   │   ├── products.tsx         # Products section
│   │   ├── sustainability.tsx   # Sustainability section
│   │   └── section-title.tsx    # Section title component
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   │   └── utils.ts             # Utility functions
│   ├── types/                   # TypeScript type definitions
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/                      # Static assets
│   └── images/                  # Image assets
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Responsive Design** for all devices
- **SEO Optimized** with metadata
- **Performance Optimized** with Next.js optimizations

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amarjyoti
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Adding New Pages

1. Create a new folder in `app/(pages)/` for your page
2. Add a `page.tsx` file with your page component
3. Update navigation in your components as needed

### Adding New Components

1. Create components in `app/components/`
2. Use TypeScript interfaces from `app/types/`
3. Import shared utilities from `app/lib/utils.ts`

### Styling

- Use Tailwind CSS classes for styling
- Follow the existing design system
- Use shadcn/ui components when possible

## 📱 Pages

- **Home** (`/`) - Landing page with hero, about, and products sections
- **About** (`/about`) - Company information and history
- **Products** (`/products`) - Product catalog and specifications
- **Sustainability** (`/sustainability`) - Environmental practices and commitments
- **Contact** (`/contact`) - Contact form and information

## 🎨 Design System

The website uses a consistent design system with:
- **Colors**: Primary amber/gold theme with neutral grays
- **Typography**: Playfair Display for headings, system fonts for body text
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components from shadcn/ui

## 📄 License

This project is proprietary to Shri Om Plywood Pvt. Ltd.
