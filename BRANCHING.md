# TastyFruit - Git Branching Strategy

## 🌳 Branching Model

Kami menggunakan **Modified Git Flow** yang disesuaikan untuk monorepo dengan multiple apps.

### 📋 Branch Structure

```
main                    # Production-ready code
├── develop            # Integration branch untuk development
├── release/*          # Release preparation branches
├── hotfix/*           # Critical production fixes
├── feature/*          # New features
├── client/*           # Client app specific features
├── admin/*            # Admin app specific features
└── shared/*           # Shared packages features
```

## 🎯 Branch Types & Naming Convention

### **Main Branches**

#### `main`

- **Purpose:** Production-ready code
- **Deploy:** Auto-deploy ke production (www.tastyfruit.com & admin.tastyfruit.com)
- **Protection:** Require PR + reviews + CI checks
- **Merge:** Only from `develop` atau `hotfix/*`

#### `develop`

- **Purpose:** Integration branch untuk semua development
- **Deploy:** Auto-deploy ke staging environment
- **Merge:** From `feature/*`, `client/*`, `admin/*`, `shared/*`

### **Supporting Branches**

#### `feature/*` - General Features

```bash
feature/user-authentication
feature/product-search
feature/email-notifications
```

- **From:** `develop`
- **Merge to:** `develop`
- **Purpose:** Features yang affect multiple apps

#### `client/*` - Client App Features

```bash
client/homepage-redesign
client/product-gallery
client/recipe-filtering
```

- **From:** `develop`
- **Merge to:** `develop`
- **Purpose:** Features khusus untuk customer website

#### `admin/*` - Admin App Features

```bash
admin/dashboard-analytics
admin/product-management
admin/user-roles
```

- **From:** `develop`
- **Merge to:** `develop`
- **Purpose:** Features khusus untuk admin dashboard

#### `shared/*` - Shared Packages

```bash
shared/ui-components-update
shared/types-refactor
shared/utils-enhancement
```

- **From:** `develop`
- **Merge to:** `develop`
- **Purpose:** Updates untuk shared packages

#### `release/*` - Release Preparation

```bash
release/v1.2.0
release/v2.0.0-beta
```

- **From:** `develop`
- **Merge to:** `main` dan `develop`
- **Purpose:** Final testing, bug fixes, version bumps

#### `hotfix/*` - Critical Fixes

```bash
hotfix/security-patch
hotfix/payment-bug
```

- **From:** `main`
- **Merge to:** `main` dan `develop`
- **Purpose:** Critical production fixes

## 🔄 Workflow Examples

### **Feature Development**

#### 1. General Feature (affects both apps)

```bash
# Create feature branch
git checkout develop
git pull origin develop
git checkout -b feature/user-authentication

# Development work...
git add .
git commit -m "feat: add user authentication system"

# Push and create PR
git push origin feature/user-authentication
# Create PR: feature/user-authentication → develop
```

#### 2. Client-specific Feature

```bash
# Create client feature branch
git checkout develop
git checkout -b client/homepage-redesign

# Work on client app only
cd apps/client
# Make changes...

git add apps/client/
git commit -m "feat(client): redesign homepage layout"
git push origin client/homepage-redesign
# Create PR: client/homepage-redesign → develop
```

#### 3. Admin-specific Feature

```bash
# Create admin feature branch
git checkout develop
git checkout -b admin/analytics-dashboard

# Work on admin app only
cd apps/admin
# Make changes...

git add apps/admin/
git commit -m "feat(admin): add analytics dashboard"
git push origin admin/analytics-dashboard
# Create PR: admin/analytics-dashboard → develop
```

#### 4. Shared Package Update

```bash
# Create shared feature branch
git checkout develop
git checkout -b shared/ui-components-v2

# Work on shared packages
cd packages/ui-components
# Make changes...

git add packages/
git commit -m "feat(shared): update button component API"
git push origin shared/ui-components-v2
# Create PR: shared/ui-components-v2 → develop
```

### **Release Process**

```bash
# 1. Create release branch
git checkout develop
git checkout -b release/v1.2.0

# 2. Version bumps
npm version minor  # Updates package.json versions
git add .
git commit -m "chore: bump version to v1.2.0"

# 3. Final testing & bug fixes
git commit -m "fix: resolve minor UI issues"

# 4. Merge to main
git checkout main
git merge --no-ff release/v1.2.0
git tag -a v1.2.0 -m "Release version 1.2.0"

# 5. Merge back to develop
git checkout develop
git merge --no-ff release/v1.2.0

# 6. Clean up
git branch -d release/v1.2.0
git push origin main develop --tags
```

### **Hotfix Process**

```bash
# 1. Create hotfix branch
git checkout main
git checkout -b hotfix/critical-security-fix

# 2. Fix the issue
git commit -m "fix: resolve security vulnerability"

# 3. Merge to main
git checkout main
git merge --no-ff hotfix/critical-security-fix
git tag -a v1.2.1 -m "Hotfix version 1.2.1"

# 4. Merge to develop
git checkout develop
git merge --no-ff hotfix/critical-security-fix

# 5. Clean up
git branch -d hotfix/critical-security-fix
git push origin main develop --tags
```

## 📝 Commit Message Convention

### **Format**

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### **Types**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### **Scopes**

- `client`: Client app changes
- `admin`: Admin app changes
- `shared`: Shared packages changes
- `root`: Root level changes (configs, etc.)

### **Examples**

```bash
feat(client): add product search functionality
fix(admin): resolve dashboard loading issue
docs(shared): update component documentation
chore(root): update dependencies
```

## 🚀 CI/CD Integration

### **Branch Protection Rules**

#### `main` branch:

- Require PR reviews (2+ reviewers)
- Require status checks (CI/CD)
- Require up-to-date branches
- No direct pushes

#### `develop` branch:

- Require PR reviews (1+ reviewer)
- Require status checks (CI/CD)
- Allow squash merging

### **Automated Deployments**

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches:
      - main # → Production deployment
      - develop # → Staging deployment
  pull_request:
    branches:
      - develop # → Preview deployment
```

### **Deployment Strategy**

- **`main`** → Production (www.tastyfruit.com + admin.tastyfruit.com)
- **`develop`** → Staging (staging.tastyfruit.com + admin-staging.tastyfruit.com)
- **PR branches** → Preview deployments (Vercel preview URLs)

## 🛠️ Development Workflow

### **Daily Development**

1. Start from `develop`
2. Create feature branch with appropriate prefix
3. Work on specific app/package
4. Commit with conventional messages
5. Push and create PR to `develop`
6. Code review and merge

### **Release Cycle**

1. **Weekly:** Merge `develop` → `release/vX.Y.Z`
2. **Testing:** QA on release branch
3. **Deploy:** Merge `release/*` → `main`
4. **Hotfixes:** Direct from `main` if critical

### **Team Collaboration**

- **Frontend Developers:** Work on `client/*` branches
- **Backend Developers:** Work on `feature/*` branches (future API)
- **UI/UX Developers:** Work on `shared/*` branches
- **DevOps:** Manage `main`, `develop`, `release/*`

## 📊 Branch Monitoring

### **Useful Git Commands**

```bash
# See all branches
git branch -a

# See branch relationships
git log --oneline --graph --all

# Clean up merged branches
git branch --merged develop | grep -v develop | xargs git branch -d

# Check which branches contain specific commit
git branch --contains <commit-hash>
```

### **Branch Naming Validation**

Create `.gitmessage` template:

```
# <type>(<scope>): <subject>
#
# <body>
#
# <footer>
```

## 🎯 Best Practices

1. **Keep branches focused** - One feature per branch
2. **Regular syncing** - Rebase feature branches with develop
3. **Small commits** - Atomic, focused commits
4. **Descriptive names** - Clear branch and commit messages
5. **Clean history** - Squash commits before merging
6. **Test before merge** - Ensure CI passes
7. **Delete merged branches** - Keep repository clean

## 🚨 Emergency Procedures

### **Rollback Production**

```bash
# Revert last merge on main
git checkout main
git revert -m 1 <merge-commit-hash>
git push origin main
```

### **Fix Broken Develop**

```bash
# Reset develop to last known good state
git checkout develop
git reset --hard <good-commit-hash>
git push --force-with-lease origin develop
```

This branching strategy ensures clean development workflow, proper code review, and safe deployments for the TastyFruit monorepo.
