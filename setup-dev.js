#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🚀 Setting up TastyFruit Development Environment...\n");

// Create .env.local files for apps
const clientEnvContent = `# Client App Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_ENV=development
`;

const adminEnvContent = `# Admin App Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_ENV=development

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=development-secret-key-change-in-production
`;

// Write client .env.local
const clientEnvPath = path.join(__dirname, "apps", "client", ".env.local");
if (!fs.existsSync(clientEnvPath)) {
  fs.writeFileSync(clientEnvPath, clientEnvContent);
  console.log("✅ Created apps/client/.env.local");
} else {
  console.log("⚠️  apps/client/.env.local already exists, skipping...");
}

// Write admin .env.local
const adminEnvPath = path.join(__dirname, "apps", "admin", ".env.local");
if (!fs.existsSync(adminEnvPath)) {
  fs.writeFileSync(adminEnvPath, adminEnvContent);
  console.log("✅ Created apps/admin/.env.local");
} else {
  console.log("⚠️  apps/admin/.env.local already exists, skipping...");
}

console.log("\n🎉 Development environment setup complete!");
console.log("\n📝 Next steps:");
console.log("1. Run: bun run dev");
console.log("2. Open: http://localhost:3000 (Client App)");
console.log("3. Open: http://localhost:3001 (Admin Dashboard)");
console.log("\n💡 Available commands:");
console.log("- bun run dev          # Run all apps");
console.log("- bun run dev:client   # Run client app only");
console.log("- bun run dev:admin    # Run admin app only");
console.log("- bun run build        # Build all apps");
console.log("- bun run lint         # Lint all apps");
console.log("- bun run type-check   # Type check all apps");
