# Installation & Setup Guide

## 📦 Required Dependencies

The UI component library requires the following packages to be installed:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### Package Versions (Recommended)
```json
{
  "dependencies": {
    "@mui/material": "^5.15.11",
    "@mui/icons-material": "^5.15.11",
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

## 🔧 Installation Steps

### 1. Install Material-UI Icons (REQUIRED)

```bash
npm install @mui/icons-material
```

This package is required for:
- Icon component
- Navigation icons (Menu, Home, etc.)
- Advanced components (Notifications, Settings, etc.)
- Form controls (Visibility toggle for password inputs)

### 2. Verify Installation

Check your `package.json` to ensure all packages are installed:

```bash
npm list @mui/icons-material
npm list @mui/material
npm list @emotion/react
npm list @emotion/styled
```

### 3. Fix TypeScript Verbatim Module Syntax (Optional)

If you encounter `TS1484` errors about type-only imports, you have two options:

**Option A: Update imports to use type-only syntax** (Recommended)

The components already use the correct syntax. Just ensure you have the latest versions installed.

**Option B: Adjust tsconfig.json**

If you want to disable this strict check, update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "verbatimModuleSyntax": false
  }
}
```

## 🚀 Quick Start After Installation

### 1. Install the missing package:

```bash
npm install @mui/icons-material
```

### 2. Import and use components:

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './components/ui';
import { Button, Card, Typography } from './components/ui';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div>
        <Card title="Welcome">
          <Typography variant="h5">Hello World!</Typography>
          <Button variant="primary">Click Me</Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 3. Run your development server:

```bash
npm run dev
```

## ✅ Verification Checklist

After installation, verify:

- [ ] `@mui/icons-material` is installed
- [ ] `@mui/material` is installed  
- [ ] `@emotion/react` is installed
- [ ] `@emotion/styled` is installed
- [ ] No TypeScript errors in components
- [ ] Dev server runs without errors
- [ ] Components render correctly

## 🐛 Common Issues & Solutions

### Issue 1: Cannot find module '@mui/icons-material'

**Solution:**
```bash
npm install @mui/icons-material
```

### Issue 2: Type import errors (TS1484)

**Solution:**
The components use proper type imports. Ensure you're using TypeScript 5.x:
```bash
npm install typescript@latest
```

### Issue 3: Emotion peer dependency warnings

**Solution:**
```bash
npm install @emotion/react @emotion/styled --save
```

### Issue 4: React version mismatch

**Solution:**
Ensure you're using React 18+:
```bash
npm install react@latest react-dom@latest
```

## 📋 Full Installation Command

Run this single command to install all required dependencies:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## 🎯 Next Steps

1. ✅ Install dependencies (run command above)
2. ✅ Verify installation (no errors)
3. ✅ Import components
4. ✅ Wrap app with ThemeProvider
5. ✅ Start building!

## 📚 Resources

- [Material-UI Docs](https://mui.com/material-ui/getting-started/installation/)
- [Material Icons](https://mui.com/material-ui/material-icons/)
- [Emotion Docs](https://emotion.sh/docs/introduction)
- [Component Library README](./README.md)

## 💡 Pro Tips

1. **Use TypeScript** - Get full autocomplete and type safety
2. **Import from index** - Cleaner imports: `import { Button } from './components/ui'`
3. **Check examples** - See `src/examples/DashboardApp.tsx` for real usage
4. **Customize theme** - Edit `src/components/ui/theme.ts` for your brand colors

---

**Status**: Ready for use after installing `@mui/icons-material` ✅

