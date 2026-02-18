# Namtech Solutions - Premium SaaS Website

A high-end, enterprise-grade SaaS website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + TypeScript (strict mode)
- **Premium Design**: Inspired by Stripe, Linear, Vercel, and Framer
- **Dark/Light Mode**: Full theme support with system preference detection
- **Fully Responsive**: Mobile-first design with tablet and desktop optimizations
- **Smooth Animations**: Floating cards, fade-ins, and scroll effects
- **Production Ready**: Clean architecture, TypeScript strict mode, optimized performance

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
 ├─ assets/          # Images, icons, etc.
 ├─ components/
 │   ├─ ui/         # Reusable UI primitives
 │   ├─ layout/     # Header, Footer, etc.
 │   └─ sections/   # Page sections
 ├─ context/        # React contexts (Theme)
 ├─ hooks/          # Custom React hooks
 ├─ styles/         # Global styles
 ├─ App.tsx         # Main app component
 └─ main.tsx        # Entry point
```

## 🎨 Design System

The project uses CSS variables for theming:

- **Primary Color**: `#2563eb` (Blue)
- **Secondary Color**: `#f97316` (Orange)
- **Theme Variables**: Defined in `globals.css` for light/dark modes

## 🧩 Key Components

### UI Primitives
- `Button` - Primary, secondary, and outline variants
- `Card` - With hover and glassmorphism options
- `Badge` - Multiple variants (default, success, warning, info)
- `GradientText` - Text with gradient effect
- `StatCard` - Floating stat cards with animations

### Layout
- `Header` - Sticky header with theme toggle
- `SubHeader` - Trust indicators bar
- `Footer` - Multi-column footer with links

### Sections
- `Hero` - Premium hero with floating cards
- `Services` - Service grid
- `Stats` - Statistics showcase
- `WhyChooseUs` - Feature highlights
- `Testimonials` - Client testimonials
- `CTASection` - Call-to-action section

## 🎯 Customization

### Colors
Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #f97316;
  /* ... */
}
```

### Content
Update content in respective section components:
- `src/components/sections/Hero.tsx`
- `src/components/sections/Services.tsx`
- etc.

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ⚡ Performance

- Lazy loading ready
- Optimized animations
- Minimal re-renders with React.memo where needed
- Clean component structure

## 🔧 Development

The project uses:
- **TypeScript** in strict mode
- **ESLint** for code quality
- **Tailwind CSS** for styling
- **PostCSS** for CSS processing

## 📄 License

All rights reserved - Namtech Solutions
