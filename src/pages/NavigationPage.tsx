import React from 'react';
import { Container, Grid, Stack, Typography, Divider, Card, Box, Button } from '../components/ui';
import { Navbar, Sidebar, Tabs, Breadcrumbs, Pagination, Stepper } from '../components/ui';
import { Home, Dashboard, Settings, People } from '@mui/icons-material';

/**
 * Navigation Components Demo Page
 */
export function NavigationPage() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('1');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [activeStep, setActiveStep] = React.useState(0);

  const sidebarItems = [
    { label: 'Dashboard', icon: <Dashboard />, active: true, onClick: () => {} },
    { label: 'Users', icon: <People />, onClick: () => {} },
    { label: 'Settings', icon: <Settings />, onClick: () => {} },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Navigation Components
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Navigate through your application with ease
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Navbar */}
      <Card title="Navbar" sx={{ mb: 3 }}>
        <Navbar
          title="Application Name"
          onMenuClick={() => setDrawerOpen(true)}
          actions={
            <Button variant="outline" size="small">Sign Out</Button>
          }
        />
      </Card>

      {/* Sidebar */}
      <Card title="Sidebar" sx={{ mb: 3 }}>
        <Box>
          <Button variant="primary" onClick={() => setDrawerOpen(!drawerOpen)}>
            Toggle Sidebar
          </Button>
          <Sidebar
            items={sidebarItems}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            variant="temporary"
          />
        </Box>
      </Card>

      {/* Tabs */}
      <Card title="Tabs" sx={{ mb: 3 }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" gutterBottom>Standard Tabs</Typography>
            <Tabs
              tabs={[
                { label: 'Tab 1', value: '1' },
                { label: 'Tab 2', value: '2' },
                { label: 'Tab 3', value: '3' },
              ]}
              value={activeTab}
              onChange={setActiveTab}
            />
            <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderTop: 0 }}>
              <Typography>Content for {activeTab}</Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" gutterBottom>Full Width Tabs</Typography>
            <Tabs
              tabs={[
                { label: 'Overview', value: 'overview' },
                { label: 'Analytics', value: 'analytics' },
                { label: 'Reports', value: 'reports' },
              ]}
              value="overview"
              onChange={() => {}}
              variant="fullWidth"
            />
          </Box>
        </Stack>
      </Card>

      {/* Breadcrumbs */}
      <Card title="Breadcrumbs" sx={{ mb: 3 }}>
        <Stack spacing={2}>
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: () => alert('Home clicked') },
              { label: 'Products', onClick: () => alert('Products clicked') },
              { label: 'Details' },
            ]}
          />
          <Breadcrumbs
            items={[
              { label: 'Dashboard', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Navigation' },
            ]}
          />
        </Stack>
      </Card>

      {/* Pagination & Stepper */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card title="Pagination">
            <Stack spacing={3} alignItems="center">
              <Pagination
                count={10}
                page={currentPage}
                onChange={setCurrentPage}
              />
              <Typography variant="body2">Page {currentPage} of 10</Typography>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Stepper">
            <Stack spacing={3}>
              <Stepper
                steps={[
                  { label: 'Select campaign' },
                  { label: 'Create an ad', optional: true },
                  { label: 'Review' },
                ]}
                activeStep={activeStep}
              />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outline"
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setActiveStep(Math.min(2, activeStep + 1))}
                  disabled={activeStep === 2}
                >
                  Next
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NavigationPage;

