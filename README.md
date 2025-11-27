# CRAZY TADKA 🌶️

A modern, premium Indian restaurant website built with React, TypeScript, and Tailwind CSS.

## 🍛 Features

- **Launching Soon Page** - Beautiful countdown timer with glassmorphism effects
- **Full Restaurant Website** - Hero section, Menu with categories, Cart functionality
- **Dark Mode Design** - Stunning dark theme with saffron, turmeric, and chili accents
- **Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Floating particles, gradient animations, and smooth transitions
- **Cart System** - Add items, update quantities, remove items

## 🚀 Tech Stack

- **React 19** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling via CDN
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
crazy-tadka/
├── App.tsx                 # Main app with launch toggle
├── index.html              # Entry HTML with Tailwind config
├── index.tsx               # React entry point
├── types.ts                # TypeScript interfaces
├── constants.ts            # Menu items and categories
├── components/
│   ├── LaunchingSoon.tsx   # Coming soon page with countdown
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Menu.tsx            # Menu with category filters
│   ├── DishCard.tsx        # Individual dish card
│   ├── CartDrawer.tsx      # Shopping cart drawer
│   ├── Footer.tsx          # Footer with contact info
│   └── FloatingParticles.tsx # Background animation
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json             # Vercel deployment config
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/unixta/crazy-tadka.git
cd crazy-tadka

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build
4. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## ⚙️ Configuration

### Launch Toggle

In `App.tsx`, set `IS_LAUNCHED` to control which page is shown:

```typescript
// Set to true to show full website, false for launching soon page
const IS_LAUNCHED = false;
```

### Launch Date

In `components/LaunchingSoon.tsx`, update the launch date:

```typescript
const launchDate = new Date('December 15, 2025 00:00:00').getTime();
```

## 📞 Contact

- **Phone**: +91 9040485999
- **Email**: hello@crazytadka.in
- **Location**: KIIT Road, Patia, Bhubaneswar, Odisha 751024

## 📄 License

MIT License - feel free to use for your own restaurant!

---

Built with ❤️ and lots of 🌶️ by CRAZY TADKA Team
