#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🔧 Setting up Git configuration for TastyFruit...\n");

// Setup Git hooks
const hooksDir = path.join(__dirname, ".git", "hooks");
const customHooksDir = path.join(__dirname, ".githooks");

if (fs.existsSync(".git")) {
  // Copy custom hooks to .git/hooks
  const hooks = ["commit-msg", "pre-push"];

  hooks.forEach((hook) => {
    const sourcePath = path.join(customHooksDir, hook);
    const targetPath = path.join(hooksDir, hook);

    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      // Make executable (Unix systems)
      if (process.platform !== "win32") {
        fs.chmodSync(targetPath, "755");
      }
      console.log(`✅ Installed ${hook} hook`);
    }
  });

  // Configure Git settings
  try {
    execSync("git config core.hooksPath .githooks", { stdio: "inherit" });
    console.log("✅ Configured Git hooks path");
  } catch (error) {
    console.log("⚠️  Could not configure Git hooks path");
  }

  // Set up commit message template
  const commitTemplate = `# <type>(<scope>): <subject>
#
# <body>
#
# <footer>
#
# Types: feat, fix, docs, style, refactor, test, chore
# Scopes: client, admin, shared, root
# Example: feat(client): add product search functionality`;

  fs.writeFileSync(".gitmessage", commitTemplate);

  try {
    execSync("git config commit.template .gitmessage", { stdio: "inherit" });
    console.log("✅ Set up commit message template");
  } catch (error) {
    console.log("⚠️  Could not set commit template");
  }

  // Configure branch protection (informational)
  console.log("\n📋 Recommended Git configuration:");
  console.log("git config branch.main.pushRemote no_push");
  console.log("git config branch.develop.rebase true");
} else {
  console.log('⚠️  Not a Git repository. Run "git init" first.');
}

console.log("\n🎉 Git setup complete!");
console.log("\n📝 Next steps:");
console.log("1. git init (if not done)");
console.log("2. git add .");
console.log('3. git commit -m "feat(root): initial project setup"');
console.log("4. git branch develop");
console.log("5. git checkout develop");
console.log("\n💡 Branch naming examples:");
console.log("- feature/user-authentication");
console.log("- client/homepage-redesign");
console.log("- admin/dashboard-analytics");
console.log("- shared/ui-components-update");
console.log("- release/v1.0.0");
console.log("- hotfix/security-patch");
