@echo off
REM Storybook v8 Fix Script for Windows

echo 🔧 Fixing Storybook v8 Addon Issues...

echo 1. Removing node_modules and package-lock.json...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo 2. Clearing Storybook cache...
if exist .storybook-cache rmdir /s /q .storybook-cache
if exist storybook-static rmdir /s /q storybook-static
if exist node_modules\.cache\storybook rmdir /s /q node_modules\.cache\storybook

echo 3. Installing clean dependencies...
npm install

echo 4. Clearing any remaining cache...
npx storybook@latest cache clear

echo ✅ Storybook v8 fix complete!
echo.
echo 🚀 Now run: npm run storybook
echo.
echo This should resolve the addon-backgrounds and addon-viewport errors.
pause
