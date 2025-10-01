# TastyFruit - Deployment Guide

## 🚀 Deployment Strategy

### Vercel Deployment (Recommended)

#### 1. Setup Multiple Projects di Vercel

**Client App (Customer Website):**

- **Project Name:** `tastyfruit-client`
- **Domain:** `www.tastyfruit.com` atau `tastyfruit.com`
- **Root Directory:** `apps/client`
- **Build Command:** `cd ../.. && bun install && cd apps/client && bun run build`
- **Output Directory:** `apps/client/.next`
- **Install Command:** `bun install`

**Admin App (Dashboard):**

- **Project Name:** `tastyfruit-admin`
- **Domain:** `admin.tastyfruit.com`
- **Root Directory:** `apps/admin`
- **Build Command:** `cd ../.. && bun install && cd apps/admin && bun run build`
- **Output Directory:** `apps/admin/.next`
- **Install Command:** `bun install`

#### 2. Vercel CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy Client App
cd apps/client
vercel --prod

# Deploy Admin App
cd apps/admin
vercel --prod
```

#### 3. Environment Variables

**Client App (Vercel Dashboard → Settings → Environment Variables):**

```env
NEXT_PUBLIC_API_URL=https://api.tastyfruit.com
NEXT_PUBLIC_APP_ENV=production
```

**Admin App (Vercel Dashboard → Settings → Environment Variables):**

```env
NEXT_PUBLIC_API_URL=https://api.tastyfruit.com
NEXT_PUBLIC_APP_ENV=production
NEXTAUTH_URL=https://admin.tastyfruit.com
NEXTAUTH_SECRET=your-production-secret-key
```

### Alternative Deployment Options

#### Netlify

```bash
# Build and deploy client
cd apps/client
npm run build
netlify deploy --prod --dir=.next

# Build and deploy admin
cd apps/admin
npm run build
netlify deploy --prod --dir=.next
```

#### Railway

```bash
# Deploy client
railway login
railway link
railway up --service client

# Deploy admin
railway up --service admin
```

## 🔄 CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy TastyFruit Apps

on:
  push:
    branches: [main]

jobs:
  deploy-client:
    if: contains(github.event.head_commit.modified, 'apps/client/')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build:client
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.CLIENT_PROJECT_ID }}
          working-directory: ./apps/client

  deploy-admin:
    if: contains(github.event.head_commit.modified, 'apps/admin/')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build:admin
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.ADMIN_PROJECT_ID }}
          working-directory: ./apps/admin
```

## 🌐 Domain Configuration

### DNS Settings

```
A Record:    tastyfruit.com          → Vercel IP
CNAME:       www.tastyfruit.com      → tastyfruit.com
CNAME:       admin.tastyfruit.com    → vercel-alias.com
```

### Vercel Domain Settings

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add custom domains:
   - Client: `tastyfruit.com`, `www.tastyfruit.com`
   - Admin: `admin.tastyfruit.com`

## 📊 Monitoring & Analytics

### Vercel Analytics

Enable in Vercel Dashboard → Project → Analytics

### Performance Monitoring

- **Client App:** Google Analytics, Vercel Speed Insights
- **Admin App:** Internal usage tracking

## 🔒 Security Considerations

### Environment Variables

- Never commit `.env` files
- Use Vercel's environment variable management
- Rotate secrets regularly

### Domain Security

- Enable HTTPS (automatic with Vercel)
- Set up proper CORS policies
- Implement rate limiting for admin routes

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**

```bash
# Clear cache and rebuild
bun run clean
bun install
bun run build
```

**Deployment Issues:**

- Check environment variables
- Verify build commands
- Check Vercel logs

**Domain Issues:**

- Verify DNS propagation
- Check SSL certificate status
- Ensure proper redirects

### Support Commands

```bash
# Check build locally
bun run build

# Test production build
bun run start

# Check for type errors
bun run type-check

# Lint code
bun run lint
```
