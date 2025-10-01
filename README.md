# TastyFruit

Aplikasi TastyFruit yang terdiri dari client app, admin dashboard, dan shared packages dalam satu repository.

## 📁 Struktur Project

```
tastyfruit/
├── apps/
│   ├── client/          # Customer-facing website (www.tastyfruit.com)
│   └── admin/           # Internal admin dashboard (admin.tastyfruit.com)
├── packages/
│   ├── shared-types/    # Shared TypeScript types
│   └── ui-components/   # Shared React components
├── package.json         # Root package.json dengan workspaces
└── turbo.json          # Turborepo configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- Bun >= 1.0.0

### Installation

```bash
# Clone repository
git clone <repository-url>
cd tastyfruit

# Install dependencies untuk semua apps dan packages
bun install
```

### Development

#### Jalankan semua aplikasi sekaligus:

```bash
bun run dev
```

- Client app: http://localhost:3000
- Admin dashboard: http://localhost:3001

#### Jalankan aplikasi individual:

```bash
# Hanya client app
bun run dev:client

# Hanya admin dashboard
bun run dev:admin
```

### Build

#### Build semua aplikasi:

```bash
bun run build
```

#### Build aplikasi individual:

```bash
bun run build:client
bun run build:admin
```

## 📦 Apps & Packages

### Apps

#### `@tastyfruit/client`

- **Port:** 3000
- **Description:** Customer-facing website dengan informasi produk, artikel, dan resep
- **Tech Stack:** Next.js 15, React 19, Tailwind CSS, TypeScript
- **Deploy:** Vercel (www.tastyfruit.com)

#### `@tastyfruit/admin`

- **Port:** 3001
- **Description:** Internal admin dashboard untuk mengelola produk, publikasi, dan resep
- **Tech Stack:** Next.js 15, React 19, Tailwind CSS, TypeScript, NextAuth.js, React Query
- **Deploy:** Vercel (admin.tastyfruit.com)

### Packages

#### `@tastyfruit/shared-types`

Shared TypeScript interfaces dan types yang digunakan di semua aplikasi:

- Product types (ProdukData, FruitType)
- Publication types (PublikasiData)
- Recipe types (ResepData)
- API response types
- Form types

#### `@tastyfruit/ui-components`

Shared React components dengan consistent styling:

- Button
- Card
- Container
- LoadingSpinner
- Utility functions (cn)

## 🛠️ Development Commands

```bash
# Development
bun run dev              # Jalankan semua apps
bun run dev:client       # Jalankan client app saja
bun run dev:admin        # Jalankan admin app saja

# Build
bun run build            # Build semua apps
bun run build:client     # Build client app saja
bun run build:admin      # Build admin app saja

# Linting
bun run lint             # Lint semua apps
bun run lint:client      # Lint client app saja
bun run lint:admin       # Lint admin app saja

# Type checking
bun run type-check       # Type check semua apps
bun run type-check:client # Type check client app saja
bun run type-check:admin  # Type check admin app saja

# Cleaning
bun run clean            # Clean semua build artifacts
bun run clean:client     # Clean client app saja
bun run clean:admin      # Clean admin app saja
```

## 🚀 Deployment

### Vercel Deployment

Setiap aplikasi dapat di-deploy secara terpisah ke Vercel:

#### Client App

```bash
cd apps/client
vercel --prod
```

#### Admin App

```bash
cd apps/admin
vercel --prod
```

### Environment Variables

#### Client App (.env.local)

```env
NEXT_PUBLIC_API_URL=https://api.tastyfruit.com
NEXT_PUBLIC_APP_ENV=production
```

#### Admin App (.env.local)

```env
NEXT_PUBLIC_API_URL=https://api.tastyfruit.com
NEXTAUTH_URL=https://admin.tastyfruit.com
NEXTAUTH_SECRET=your-secret-key
```

## 🏗️ Architecture

### Monorepo Benefits

- **Code Sharing:** Shared types dan components antar aplikasi
- **Consistent Styling:** Unified design system
- **Atomic Updates:** Update shared packages affect semua apps
- **Independent Deployment:** Deploy client dan admin secara terpisah
- **Type Safety:** Shared TypeScript types untuk consistency

### Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Runtime:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** Bun
- **Build Tool:** Turbo (optional)
- **Deployment:** Vercel

## 📝 Contributing

1. Clone repository
2. Install dependencies: `bun install`
3. Create feature branch: `git checkout -b feature/nama-fitur`
4. Make changes
5. Test: `bun run type-check && bun run lint`
6. Commit: `git commit -m "feat: deskripsi fitur"`
7. Push: `git push origin feature/nama-fitur`
8. Create Pull Request

## 📄 License

Private - TastyFruit Internal Use Only
