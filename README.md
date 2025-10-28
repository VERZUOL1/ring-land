# Ringfence Landing Page

A modern, animated landing page built with Next.js, shadcn/ui, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Framer Motion** - Animation library

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

The project is already set up! Just run:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) with your browser to see the result.

### Build

Build the production application:

```bash
npm run build
```

### Production

Run the production build:

```bash
npm start
```

## 📁 Project Structure

```
ringfence-landing-ai/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero-section.tsx    # Hero section
│   ├── about-section.tsx   # About section
│   ├── values-section.tsx  # Values/principles section
│   ├── join-section.tsx    # Join/careers section
│   └── footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Customization

### Update Content

To customize the content, edit the respective component files in the `components/` directory:

- **Hero Section**: `components/hero-section.tsx`
- **About Section**: `components/about-section.tsx`
- **Values Section**: `components/values-section.tsx`
- **Join Section**: `components/join-section.tsx`

### Add More Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`

### Styling

The project uses Tailwind CSS v4. Customize colors and theme in:

- `app/globals.css` - CSS variables for colors
- Tailwind classes directly in components

### Add shadcn/ui Components

Add new shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

## 🎭 Animations

The landing page uses Framer Motion for smooth animations:

- Fade-in effects on scroll
- Staggered animations for lists
- Smooth transitions

Customize animations in each component's `motion` props.

## 📝 Next Steps

1. **Add your content** from the Google Doc to the respective sections
2. **Customize colors** in `app/globals.css`
3. **Add more sections** as needed
4. **Add images/assets** to the `public/` folder
5. **Configure SEO** in `app/layout.tsx`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

MIT
