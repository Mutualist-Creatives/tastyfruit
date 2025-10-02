# Vercel Deployment Guide - TastyFruit Monorepo

## 🚀 **Deployment Strategy**

Deploy 2 separate projects dari 1 repository menggunakan Vercel Dashboard settings (TANPA vercel.json).

## 📋 **Step-by-Step Deployment**

### **1. Import Repository ke Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import Git Repository → Select `tastyfruit`
4. **DON'T deploy immediately** - kita perlu konfigurasi dulu

### **2. Create Client App Project**

#### **Project Configuration:**

- **Project Name:** `tastyfruit-client`
- **Framework Preset:** `Next.js`
- **Root Directory:** `apps/client` ⚠️ **PENTING!**

#### **Build & Output Settings:**

```
Build Command: cd ../.. && bun install && bun run vercel:build:client
Output Directory: .next
Install Command: bun install
Development Command: bun run dev
Node.js Version: 18.x
```

#### **What this command does:**

- `cd ../..` - Navigate to monorepo root
- `bun install` - Install all dependencies
- `bun run vercel:build:client` - Runs `turbo run build --filter=client --no-cache`

#### **Alternative Build Commands (if above fails):**

```
Option 1: cd ../.. && bun install && turbo run build --filter=client --no-cache
Option 2: cd ../.. && bun install && cd apps/client && bun run build
Option 3: npm install && cd apps/client && npm run build
```

#### **Environment Variables:**

```env
NEXT_PUBLIC_API_URL=https://api.tastyfruit.com
NEXT_PUBLIC_APP_ENV=production
```

#### **Git Configuration:**

```
Production Branch: main
Preview Branches: develop, client/*
```

### **3. Create Admin App Project**

#### **Create Second Project:**

1. Go back to Vercel Dashboard
2. Click **"New Project"** again
3. Import **same repository** → `tastyfruit`
4. Vercel akan detect ini repo yang sama

#### **Project Configuration:**

- **Project Name:** `tastyfruit-admin`
- **Framework Preset:** `Next.js`
- **Root Directory:** `apps/admin` ⚠️ **PENTING!**

#### **Build & Output Settings:**

```
Build Command: cd ../.. && bun install && bun run vercel:build:admin
Output Directory: .next
Install Command: bun install
Development Command: bun run dev
Node.js Version: 18.x
```

#### **What this command does:**

- `cd ../..` - Navigate to monorepo root
- `bun install` - Install all dependencies
- `bun run vercel:build:admin` - Runs `turbo run build --filter=admin --no-cache`

#### **Alternative Build Commands (if above fails):**

```
Option 1: cd ../.. && bun install && turbo run build --filter=admin --no-cache
Option 2: cd ../.. && bun install && cd apps/admin && bun run build
Option 3: npm install && cd apps/admin && npm run build
```

#### **Environment Variables:**

```env
NEXT_PUBLIC_API_URL=https://api.tastyfruit.com
NEXT_PUBLIC_APP_ENV=production
NEXTAUTH_URL=https://admin.tastyfruit.com
NEXTAUTH_SECRET=your-production-secret-key
```

#### **Git Configuration:**

```
Production Branch: main
Preview Branches: develop, admin/*
```

## 🌐 **Domain Configuration**

### **Client App Domains:**

- **Production:** `www.tastyfruit.com`
- **Alternative:** `tastyfruit.com`
- **Staging:** `staging.tastyfruit.com` (from develop branch)

### **Admin App Domains:**

- **Production:** `admin.tastyfruit.com`
- **Staging:** `admin-staging.tastyfruit.com` (from develop branch)

## 🔧 **Build Process Explanation**

### **Why `cd ../.. && bun install`?**

1. **Monorepo Structure:** Dependencies di root level
2. **Workspace Setup:** Bun workspaces perlu install dari root
3. **Shared Packages:** packages/ folder di root

### **Build Flow:**

```bash
1. cd ../..                    # Go to monorepo root
2. bun install                 # Install all dependencies
3. cd apps/client              # Go to specific app
4. bun run build              # Build the app
```

## 🚨 **Common Issues & Solutions**

### **Issue 1: Build Command Failed**

```
Error: command exited with code 1
```

**Solution:** Pastikan build command benar:

```bash
cd ../.. && bun install && cd apps/client && bun run build
```

### **Issue 2: Module Not Found**

```
Error: Cannot resolve module '@/components/...'
```

**Solution:** Pastikan Root Directory setting benar (`apps/client` atau `apps/admin`)

### **Issue 3: Environment Variables**

```
Error: process.env.NEXT_PUBLIC_API_URL is undefined
```

**Solution:** Set environment variables di Vercel project settings

### **Issue 4: vercel.json Conflicts**

```
Error: Build configuration conflict
```

**Solution:** Hapus semua vercel.json files, gunakan dashboard settings saja

## ✅ **Deployment Checklist**

### **Before Deployment:**

- [ ] Repository pushed to GitHub
- [ ] Both apps build successfully locally
- [ ] Environment variables prepared
- [ ] Domain names ready (optional)

### **Client App Setup:**

- [ ] Project created with correct name
- [ ] Root directory set to `apps/client`
- [ ] Build command configured correctly
- [ ] Environment variables set
- [ ] Git branches configured
- [ ] Domain configured (if needed)

### **Admin App Setup:**

- [ ] Project created with correct name
- [ ] Root directory set to `apps/admin`
- [ ] Build command configured correctly
- [ ] Environment variables set
- [ ] Git branches configured
- [ ] Domain configured (if needed)

### **Post Deployment:**

- [ ] Both apps deploy successfully
- [ ] Preview deployments work
- [ ] Production URLs accessible
- [ ] Environment variables working
- [ ] No build errors in logs

## 🔍 **Monitoring & Debugging**

### **Check Build Logs:**

1. Go to Vercel Dashboard
2. Select project
3. Go to "Deployments"
4. Click on deployment
5. Check "Build Logs"

### **Common Log Patterns:**

```bash
✅ Success: "Build completed successfully"
❌ Error: "command exited with code 1"
⚠️ Warning: "Multiple lockfiles detected"
```

### **Debug Commands:**

```bash
# Test build locally
bun run build:client
bun run build:admin

# Test with exact Vercel commands
cd apps/client && bun install && bun run build
cd apps/admin && bun install && bun run build
```

## 🚀 **Deployment URLs**

After successful deployment:

### **Client App:**

- **Production:** `https://tastyfruit-client.vercel.app`
- **Custom Domain:** `https://www.tastyfruit.com`
- **Preview:** `https://tastyfruit-client-git-develop.vercel.app`

### **Admin App:**

- **Production:** `https://tastyfruit-admin.vercel.app`
- **Custom Domain:** `https://admin.tastyfruit.com`
- **Preview:** `https://tastyfruit-admin-git-develop.vercel.app`

## 📊 **Performance Optimization**

### **Build Optimization:**

- Next.js optimizations enabled in `next.config.ts`
- `outputFileTracingRoot` untuk monorepo support
- Package imports optimization untuk lucide-react, recharts

### **Deployment Optimization:**

- Automatic static optimization
- Image optimization
- Code splitting
- Tree shaking

## 🔄 **CI/CD Integration**

### **Automatic Deployments:**

- **Push to `main`** → Deploy to production
- **Push to `develop`** → Deploy to staging
- **PR to `develop`** → Deploy preview

### **Manual Deployments:**

- Use Vercel CLI: `vercel --prod`
- Or trigger from Vercel Dashboard

---

**✨ Dengan konfigurasi ini, TastyFruit monorepo siap untuk production deployment di Vercel!**
