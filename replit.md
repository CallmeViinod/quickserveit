# Quickserve IT - Premium Agency Website

## Overview
Ultra-premium static website for Quickserve IT agency featuring a dual-mode experience:
1. **Corporate Command** - Institutional technology services (Nintendo-style aesthetic, Royal Yellow primary color)
2. **Cinematic AI Studio** - Creative production services (Film studio aesthetic, AI Blue accent color)

## Current State
**Status:** Production-ready with all pages and features implemented

### Pages Implemented
- **Home** - Hero section with particle canvas, dynamic greeting, typewriter text, service highlights
- **Institute Services** - Full-service technology offerings for schools and institutions
- **Creative Studio** - Cinematic production services (video editing, branding, motion graphics)
- **Portfolio** - Showcase of creative work with category filtering
- **Pricing** - Three-tier pricing structure with detailed feature lists
- **About** - Team, values, and company story
- **Contact** - Multi-method contact form with validation
- **Legal Pages** - Terms of Service, Privacy Policy, Disclaimer

### Core Components
- `ParticleCanvas` - Cursor-reactive Canvas 2D particle system with performance optimizations
- `Navigation` - Sticky header with mobile drawer, smooth animations
- `TypewriterText` - Animated text reveal effect
- `DynamicGreeting` - Time-based personalized greetings
- `InsightBox` - Dual-mode insight displays (Corporate vs Creative)
- `PremiumButton` - Gold-glow effect buttons
- `ServiceCard`, `PortfolioCard`, `PricingCard` - Feature cards
- `TrustBadges` - Credibility indicators
- `Footer` - Comprehensive footer with navigation links

## Project Architecture

### Frontend (`client/src/`)
- **Framework:** React with TypeScript
- **Routing:** Wouter
- **Styling:** Tailwind CSS with custom design tokens
- **Animations:** Framer Motion (GPU-optimized, transform/opacity only)
- **State Management:** TanStack React Query
- **Forms:** React Hook Form with Zod validation

### Backend (`server/`)
- **Framework:** Express.js
- **Storage:** In-memory storage (MemStorage)
- **Validation:** Zod schemas

### Shared (`shared/`)
- **Schema:** Drizzle ORM types with Zod insert schemas
- Data models: User, Contact, Service, PortfolioItem, PricingTier, TeamMember

## Design System

### Color Palette
- **Deep Carbon Black:** `#0A0A0A` (background)
- **Royal Yellow:** `#FFD541` (primary/corporate)
- **AI Blue:** `#5087ff` (creative studio accent)
- **Neutral grays:** For text hierarchy

### Typography
- **Display:** Plus Jakarta Sans (headings)
- **Body:** Inter (content)
- **Mono:** JetBrains Mono (code/technical)

### Design Rules
- AI Blue is ONLY used in Creative Studio and Portfolio pages
- Corporate pages use Royal Yellow exclusively
- All animations use transform/opacity for GPU optimization
- Particle canvas auto-disables on mobile/reduced-motion

## API Endpoints
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form submission
- `GET /api/contacts` - Retrieve all contacts (admin)

## Running the Project
```bash
npm run dev
```
This starts both the Express server and Vite dev server on port 5000.

## User Preferences
- Strict adherence to design_guidelines.md
- Nintendo-style aesthetic for corporate sections
- Cinematic film studio aesthetic for creative sections
- No emojis in UI
- Premium, luxury feel throughout

## Recent Changes
- December 2024: Initial full implementation complete
- Fixed Navigation and Footer to avoid nested anchor warnings
- All React warnings resolved
- Backend API routes functional
