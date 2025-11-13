#!/bin/bash
# Storybook v8 Fix Script

echo "🔧 Fixing Storybook v8 Addon Issues..."

echo "1. Removing node_modules and package-lock.json..."
rm -rf node_modules
rm -f package-lock.json

echo "2. Clearing Storybook cache..."
rm -rf .storybook-cache
rm -rf storybook-static
rm -rf node_modules/.cache/storybook

echo "3. Installing clean dependencies..."
npm install

echo "4. Clearing any remaining cache..."
npx storybook@latest cache clear

echo "✅ Storybook v8 fix complete!"
echo ""
echo "🚀 Now run: npm run storybook"
echo ""
echo "This should resolve the addon-backgrounds and addon-viewport errors."
