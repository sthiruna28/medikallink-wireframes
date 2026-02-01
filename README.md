# MedikaLLInk Copilot UI Wireframes

A **Next.js 14** application showcasing the MedikaLLInk Doctor Voice AI Copilot interface. Built with TypeScript, Tailwind CSS, and Lucide React icons.

![MedikaLLInk Copilot](https://img.shields.io/badge/MedikaLLInk-Copilot-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-cyan)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
app/
├── page.tsx              # Navigation hub (index)
├── layout.tsx            # Root layout with fonts
├── globals.css           # Global styles & Tailwind
├── copilot/
│   └── page.tsx          # Main voice interface
├── confirm/
│   └── page.tsx          # Confirmation modal
├── disambiguate/
│   └── page.tsx          # Multiple results selection
├── error/
│   └── page.tsx          # Error & help states
└── preview/
    └── page.tsx          # Action preview (send/preview)

public/                   # Static assets
package.json
tailwind.config.ts
tsconfig.json
next.config.js
```

---

## 🎨 Screens Overview

| Route | Screen | Description |
|-------|--------|-------------|
| `/` | **Navigation Hub** | Landing page with links to all wireframes |
| `/copilot` | **Copilot Panel** | Main voice interface with transcript, mic button, voice hints |
| `/confirm` | **Confirmation Modal** | Critical action preview with dual voice/UI confirmation |
| `/disambiguate` | **Disambiguation** | Multiple patient/document selection with voice options |
| `/error` | **Error & Help** | Missing parameters and backend failure recovery |
| `/preview` | **Action Preview** | Document send preview with recipient and method |

---

## 🌐 Deployment

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Static Export

The app can be configured for static export:

```bash
# Generate static files
npm run build

# Output in /dist folder
# Deploy dist/ to any static host
```

---

## 🎨 Design System

### Color Palette

```
Primary Blue:    #4a90d9  (medical-500)
Primary Dark:    #1e3a5f  (medical-800)
Success Green:   #10b981  (success-500)
Warning Amber:   #f59e0b  (warning-500)
Error Red:       #ef4444  (error-500)
Clinical White:  #ffffff
Soft Gray:       #f1f5f9
```

### Typography

- **Font:** Inter (system fallback)
- **Sizes:** 10px labels → 20px headings
- **Weights:** 400 (body), 500 (medium), 600 (semibold), 700 (bold)

### Key Features

- ✅ Voice-first interaction with typed fallback
- ✅ Bilingual FR/EN support
- ✅ Safety-critical confirmation flows
- ✅ Non-blocking error handling
- ✅ Accessible touch targets (44px+)
- ✅ Responsive design (desktop → tablet)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icons |
| PostCSS | CSS processing |

---

## 📝 Client Presentation Tips

1. **Start at the index** (`/`) — clean landing with all screens
2. **Navigate in order:**
   - Copilot Panel → show main interaction
   - Confirmation → demonstrate safety
   - Disambiguation → show intelligence
   - Error → show graceful failures
   - Preview → show document workflows
3. **Highlight voice + UI** — every screen supports both
4. **Point out bilingual labels** — FR/EN throughout

---

## 🔄 Making Changes

### Edit Components
All screens are self-contained in `app/[screen]/page.tsx`.

### Update Colors
Modify `tailwind.config.ts`:
```typescript
colors: {
  medical: {
    500: '#your-color',
  }
}
```

### Add New Screen
1. Create `app/newscreen/page.tsx`
2. Add to navigation in `app/page.tsx`
3. Update navigation links

---

## 📄 License

Internal use for MedikaLLInk client presentation.

---

**Questions?** Refer to the main project documentation or contact the UX team.
