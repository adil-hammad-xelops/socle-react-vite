import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './components/ui/theme';
import { Box, Stack, Button } from './components/ui';
import { Navbar, ThemeToggle } from './components/ui';

// Import Pages
import HomePage from './pages/HomePage';
import BasicPage from './pages/BasicPage';
import FormPage from './pages/FormPage';
import NavigationPage from './pages/NavigationPage';
import FeedbackPage from './pages/FeedbackPage';
import DashboardApp from './examples/DashboardApp';
import ComponentShowcase from './examples/ComponentShowcase';

// Lazy load remaining pages
const DataDisplayPage = React.lazy(() => import('./pages/DataDisplayPage'));
const LayoutPage = React.lazy(() => import('./pages/LayoutPage'));
const VisualizationPage = React.lazy(() => import('./pages/VisualizationPage'));
const AdvancedPage = React.lazy(() => import('./pages/AdvancedPage'));

/**
 * Main App Router Component
 */
function AppRouter() {
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Navigation Bar */}
          <Navbar
            title="UI Component Library"
            onMenuClick={() => setMenuOpen(!menuOpen)}
            actions={
              <ThemeToggle mode={themeMode} onChange={setThemeMode} />
            }
          />

          {/* Navigation Menu */}
          <NavigationMenu />

          {/* Main Content */}
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
            <React.Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/basic" element={<BasicPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/navigation" element={<NavigationPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/data-display" element={<DataDisplayPage />} />
                <Route path="/layout" element={<LayoutPage />} />
                <Route path="/visualization" element={<VisualizationPage />} />
                <Route path="/advanced" element={<AdvancedPage />} />
                <Route path="/dashboard" element={<DashboardApp />} />
                <Route path="/showcase" element={<ComponentShowcase />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </React.Suspense>
          </Box>

          {/* Footer */}
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

/**
 * Navigation Menu Component
 */
function NavigationMenu() {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/basic', label: 'Basic' },
    { path: '/form', label: 'Forms' },
    { path: '/navigation', label: 'Navigation' },
    { path: '/feedback', label: 'Feedback' },
    { path: '/data-display', label: 'Data Display' },
    { path: '/layout', label: 'Layout' },
    { path: '/visualization', label: 'Charts' },
    { path: '/advanced', label: 'Advanced' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/showcase', label: 'Showcase' },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        overflowX: 'auto',
      }}
    >
      <Stack
        direction="row"
        spacing={0}
        sx={{
          px: 2,
          minWidth: 'fit-content',
        }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              size="small"
              sx={{
                borderRadius: 0,
                borderBottom: location.pathname === item.path ? 2 : 0,
                borderColor: 'primary.main',
                px: 2,
                py: 1.5,
              }}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

/**
 * Loading Fallback Component
 */
function LoadingFallback() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 400,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Box
          sx={{
            width: 40,
            height: 40,
            border: '4px solid',
            borderColor: 'primary.main',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        />
        <Box sx={{ color: 'text.secondary' }}>Loading...</Box>
      </Stack>
    </Box>
  );
}

/**
 * 404 Not Found Page
 */
function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 400,
        textAlign: 'center',
        px: 3,
      }}
    >
      <Box sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'primary.main' }}>
        404
      </Box>
      <Box sx={{ fontSize: '1.5rem', mb: 2 }}>
        Page Not Found
      </Box>
      <Box sx={{ color: 'text.secondary', mb: 4 }}>
        The page you're looking for doesn't exist.
      </Box>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="primary">Go Home</Button>
      </Link>
    </Box>
  );
}

/**
 * Footer Component
 */
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 3,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Box sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
        UI Component Library - Built with React + TypeScript + Material-UI
      </Box>
      <Box sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 0.5 }}>
        © 2025 - 59 Production-Ready Components
      </Box>
    </Box>
  );
}

export default AppRouter;

