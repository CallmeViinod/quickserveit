# Quickserve IT - Design Guidelines

## Design Philosophy

This is an ultra-premium dual-experience platform combining institutional authority with cinematic creative power. The design must communicate trust, precision, and innovation simultaneously.

## Design Approach: Hybrid Reference + Custom System

**Primary References:**
- **Corporate Mode**: Stripe (restraint, authority), Linear (precision typography), Apple (minimalism)
- **Cinematic Studio Mode**: Film studio interfaces, sci-fi command centers, luxury creative agencies

**Core Principle**: Two distinct emotional worlds sharing a unified luxury foundation.

---

## Color System

**Foundation Colors:**
- Deep Carbon Black (#0A0A0A) - primary backgrounds
- Rich Black (#050505) - depth layers
- Royal Yellow (#FFD541) - CTAs, highlights, focus states
- Gold Accent (#EAC76F) - hover states, premium details

**Mode-Specific:**
- AI Blue Rim (rgba(80,135,255,0.6)) - **ONLY in Creative Studio/Portfolio**
- Film Glow (rgba(255,230,150,0.25)) - subtle cinematic lighting

**Critical Rule**: No color mentions in corporate sections except black and gold. Blue is forbidden outside creative zones.

---

## Typography System

**Display Headings:**
- 46px-82px, weight 600-700
- Typewriter reveal animation on hero sections
- Wide letter-spacing for cinematic titles

**Body Text:**
- Clean sans-serif, 16-18px base
- Weight 300-400 for readability
- Soft gray (#A0A0A0) or off-white (#F5F5F5)

**Hierarchy:**
- H1: 64px desktop, 36px mobile
- H2: 48px desktop, 28px mobile
- H3: 32px desktop, 22px mobile
- Body: 18px desktop, 16px mobile

---

## Layout & Spacing

**Tailwind Spacing Units**: Standardize on **4, 8, 12, 16, 20, 24, 32** (p-4, m-8, gap-12, etc.)

**Container System:**
- Max-width: 1280px (max-w-7xl)
- Content sections: max-w-6xl
- Text content: max-w-4xl
- Inner padding: px-6 mobile, px-12 desktop

**Grid Patterns:**
- Corporate: Clean 1-2 columns max, strict alignment
- Creative Studio: 2-3 columns with depth layering, asymmetric breaks

---

## Component Design

### Navigation
- Sticky header, backdrop blur
- Brand "Quickserve IT" left, menu right
- Mobile: hamburger with slide-in drawer
- Gold underline on active states

### Buttons
**Primary (Gold Solid):**
- Gold background, black text
- Glow edge effect (box-shadow)
- Hover: scale(1.03), brightness increase
- Micro-animation duration: 200ms

**Secondary (Outline):**
- Gold border, transparent bg
- Hover: filled background transition

**Creative Mode Variant:**
- Holographic edge glow (blue tint)
- Subtle shimmer effect

### Cards
- Rounded corners (12-16px)
- Floating shadow (soft, elevation-based)
- Hover: lift effect (translateY -4px)
- Corporate: minimal, structured
- Creative: parallax depth, energy glow

---

## Mode-Specific Design Language

### Corporate Command Mode
**Visual Characteristics:**
- Heavy blacks, controlled animations
- Precision grid layouts, strict alignment
- Clean fade-up scroll reveals (no parallax)
- Gold CTAs with authority tone
- Information-dense, trust-building

**Pages**: Home (top), Institute Services, Pricing, About, Contact

### Cinematic AI Studio Mode
**Visual Characteristics:**
- Lighting shifts, energy particle flow
- Scene-based sections (not standard blocks)
- Depth parallax on scroll
- Holographic overlays, blue rim lights
- Film title-style animations
- Emotionally inspiring, creatively powerful

**Pages**: Creative Studio, Portfolio

---

## Key Interactive Features

### Cursor-Reactive Particle System
- Canvas 2D implementation
- Particles repel from cursor (magnetic inversion)
- Corporate: subtle float, low density
- Creative: energetic flow, orbital motion
- Auto-disable on mobile/reduced-motion

### Typewriter Animation
- Hero headlines and creative quotes only
- Smooth character reveal (80ms delay)
- Soft cursor blink
- Premium timing feel

### Dynamic Greetings
- Time-based logic (Morning/Afternoon/Evening/Late-night)
- Gentle slide + fade animation
- Updates automatically on each visit

### Smart Insight Box
- Random quote/tip on page load
- Floating card with soft glow
- Fade-in (opacity + blur transition)

---

## Page-Specific Layouts

### Homepage
- **Hero**: Full-height section, typewriter headline, time-based greeting, dual CTAs, particle background
- **Services Preview**: Split corporate/creative blocks with mode indicators
- **Trust Pillars**: 3-column grid, icon-title-description
- **CTA Section**: Strong gold button with WhatsApp integration

### Institute Services (Corporate)
- Clean service cards grid (2 columns desktop)
- Process flow diagrams
- Security badges, emergency availability indicators
- Coming Soon sections with subtle treatment

### Creative Studio (Cinematic)
- Scene-based layout (each service = cinematic scene)
- Video/parallax backgrounds
- Energy particle layers
- Film-title style section headers
- Portfolio preview integration

### Portfolio Vault
- Masonry grid or film-reel style layout
- Hover: light sweep, metadata reveal, scale effect
- Classified aesthetic (dark, exclusive)
- Project cards with thumbnails

### Pricing
- Tiered cards (per-task, monthly, annual)
- Gold highlights on recommended tier
- Clear feature comparison
- No "discount" language - premium positioning

### Contact
- Split layout: Form left, info/map right
- WhatsApp CTA prominently placed
- Upload vault placeholder (Google Drive link)
- High-trust UI, calm colors

---

## Responsive Breakpoints

- **Mobile**: < 640px (single column, reduced particles, simplified animations)
- **Tablet**: 640px-1024px (2-column grids, moderate effects)
- **Desktop**: 1024px-1920px (full experience)
- **4K**: > 1920px (scale up spacing, maintain max-width containers)

---

## Animation Guidelines

**Corporate Mode:**
- Fade-up on scroll (opacity 0→1, translateY 20px→0)
- Duration: 400ms, easing: ease-out
- Stagger children by 100ms

**Creative Mode:**
- Camera push (scale 0.95→1, opacity 0→1)
- Parallax depth layers
- Duration: 600ms, easing: cubic-bezier
- Energy pulse effects on CTAs

**Performance Rule**: Transform and opacity ONLY. No width/height animations.

---

## Images

**Hero Sections:**
- Corporate pages: Subtle abstract backgrounds (geometric patterns, low opacity)
- Creative Studio: Cinematic production imagery, studio environment
- Portfolio: Project thumbnails, work samples

**Service Sections:**
- Icon illustrations (not photos) for institute services
- Behind-the-scenes creative imagery for studio services
- Trust badges, partner logos (if applicable)

**Image Treatment:**
- Overlay gradients for text readability
- Blur backgrounds behind buttons/text
- Lazy loading for performance

---

## Accessibility & Performance

- Keyboard navigation throughout
- ARIA labels on interactive elements
- Focus indicators (gold outline)
- Skip-to-content link
- Reduced-motion media query support
- Lighthouse targets: 90+ desktop, 85+ mobile
- GPU-accelerated animations only

---

**Final Note**: Every detail must feel intentional, expensive, and handcrafted. The experience should inspire confidence in corporate contexts and awe in creative contexts. Quality over quantity, precision over decoration.