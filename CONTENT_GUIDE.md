# Content Customization Guide

This guide will help you add your specific content from the Google Doc to the landing page.

## 📋 Content Sections

### 1. Hero Section (`components/hero-section.tsx`)

**Current placeholder:**
- Title: "Ringfence"
- Subtitle: "Building the future of secure and intelligent systems"

**To customize:**
```typescript
<h1 className="text-5xl md:text-7xl font-bold tracking-tight">
  Your Main Title Here
</h1>
<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
  Your tagline or description here
</p>
```

---

### 2. About Section (`components/about-section.tsx`)

**Current placeholder:**
- Generic company description

**To customize:**
Replace the paragraphs in the `space-y-6` div with your actual content:

```typescript
<div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
  <p>Your first paragraph about the company...</p>
  <p>Your second paragraph...</p>
  <p>Add more paragraphs as needed...</p>
</div>
```

---

### 3. Values Section (`components/values-section.tsx`)

**Current placeholders:**
- Innovation First
- User-Centric Design
- Transparency & Trust
- Continuous Learning

**To customize:**
Update the `values` array at the top of the file:

```typescript
const values: Value[] = [
  {
    title: "Your Value Title",
    description: "Description of this value and what it means to your company.",
  },
  // Add more values...
];
```

You can add or remove values as needed. The grid will automatically adjust.

---

### 4. Join Section (`components/join-section.tsx`)

**Current placeholder:**
- Generic hiring message

**To customize:**
```typescript
<h2 className="text-3xl md:text-4xl font-bold">Join Us</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Your custom message about careers and opportunities
</p>
```

Update the button links:
```typescript
<a href="#careers">View Open Positions</a>
<a href="#contact">Get in Touch</a>
```

---

### 5. Header Navigation (`components/header.tsx`)

**To customize:**
- Update the logo/brand name
- Add or remove navigation links
- Change link destinations

```typescript
<Link href="/" className="text-xl font-bold">
  YOUR BRAND
</Link>
```

---

### 6. Footer (`components/footer.tsx`)

**To customize:**
- Update copyright text
- Add social media links
- Update legal links

---

## 🎨 Adding New Sections

If you need additional sections (e.g., Features, Team, Testimonials):

1. **Create a new component:**
   ```bash
   # Create file: components/your-section.tsx
   ```

2. **Use this template:**
   ```typescript
   "use client";
   
   import { motion } from "framer-motion";
   import { useInView } from "framer-motion";
   import { useRef } from "react";
   
   export function YourSection() {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true, margin: "-100px" });
   
     return (
       <section ref={ref} className="py-20 px-6">
         <div className="max-w-4xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
             transition={{ duration: 0.8 }}
             className="space-y-8"
           >
             <h2 className="text-3xl md:text-4xl font-bold">Section Title</h2>
             {/* Your content here */}
           </motion.div>
         </div>
       </section>
     );
   }
   ```

3. **Add to main page (`app/page.tsx`):**
   ```typescript
   import { YourSection } from "@/components/your-section";
   
   // In the main component:
   <main className="pt-16">
     <HeroSection />
     <AboutSection />
     <YourSection />  {/* Add here */}
     <ValuesSection />
     <JoinSection />
   </main>
   ```

---

## 🖼️ Adding Images

1. **Add images to `public/` folder:**
   ```
   public/
   ├── logo.svg
   ├── hero-image.jpg
   └── team/
       ├── person1.jpg
       └── person2.jpg
   ```

2. **Use in components:**
   ```typescript
   import Image from "next/image";
   
   <Image
     src="/logo.svg"
     alt="Company Logo"
     width={200}
     height={50}
     priority
   />
   ```

---

## 🎯 Common Customizations

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);  /* Change primary color */
  --background: oklch(1 0 0);   /* Change background */
  /* etc. */
}
```

### Change Fonts

Edit `app/layout.tsx` to import different Google Fonts:

```typescript
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

### Add Smooth Scrolling

Add to `app/globals.css`:

```css
html {
  scroll-behavior: smooth;
}
```

---

## 📱 Responsive Design

All components are already responsive. Key breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

Example:
```typescript
className="text-2xl md:text-4xl lg:text-6xl"
```

---

## 🔗 Adding Links

### Internal Links (same page):
```typescript
<a href="#section-id">Link Text</a>
```

### External Links:
```typescript
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Link Text
</a>
```

### Next.js Links (different pages):
```typescript
import Link from "next/link";

<Link href="/about">About Page</Link>
```

---

## 🎬 Animation Customization

### Change animation duration:
```typescript
transition={{ duration: 1.2 }}  // Slower
transition={{ duration: 0.4 }}  // Faster
```

### Change animation delay:
```typescript
transition={{ duration: 0.8, delay: 0.2 }}
```

### Disable animations:
Remove the `motion` wrapper and use regular HTML elements.

---

## 📞 Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Framer Motion Documentation](https://www.framer.com/motion/)
- Check the [shadcn/ui Documentation](https://ui.shadcn.com/)
- Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)

