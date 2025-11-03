import React from 'react';
import { Container, Typography, Stack, Box, Paper } from '../components/ui';
import { Button } from '../components/ui';

/**
 * Home/Landing Page
 */
export function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h2" align="center">
          UI Component Library
        </Typography>

        <Typography variant="h5" color="textSecondary" align="center">
          A comprehensive, production-ready React + TypeScript UI component library
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button variant="primary" size="large" onClick={() => window.location.href = '/components'}>
            Browse Components
          </Button>
          <Button variant="outline" size="large" onClick={() => window.location.href = '/dashboard'}>
            View Dashboard
          </Button>
        </Stack>

        <Box sx={{ mt: 6, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Features
          </Typography>

          <Stack spacing={3} sx={{ mt: 3 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                🎨 58+ Components
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Comprehensive set of UI components including forms, navigation, feedback, data display, and more.
              </Typography>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                💪 TypeScript First
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Full TypeScript support with comprehensive prop types and IntelliSense.
              </Typography>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                ♿ Accessible
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Built with accessibility in mind. ARIA attributes and keyboard navigation included.
              </Typography>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                📱 Responsive
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Mobile-first design with responsive breakpoints for all screen sizes.
              </Typography>
            </Paper>
          </Stack>
        </Box>

        <Box sx={{ mt: 6, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Component Categories
          </Typography>

          <Stack spacing={2} sx={{ mt: 3 }}>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/basic'}>
              Basic Elements (7 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/form'}>
              Form Elements (10 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/navigation'}>
              Navigation (9 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/feedback'}>
              Feedback (9 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/data-display'}>
              Data Display (8 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/layout'}>
              Layout (8 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/visualization'}>
              Visualization (3 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => window.location.href = '/advanced'}>
              Advanced (5 components)
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default HomePage;

