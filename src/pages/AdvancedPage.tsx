import React from 'react';
import { Container, Grid, Stack, Typography, Divider, Card, Button, Box } from '../components/ui';
import { CommandPalette, NotificationCenter, ThemeToggle, LanguageSelector, UserMenu } from '../components/ui';
import { Settings, AccountCircle, Logout } from '@mui/icons-material';

export function AdvancedPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light');
  const [language, setLanguage] = React.useState('en');

  const notifications = [
    {
      id: '1',
      title: 'New Message',
      message: 'You have received a new message',
      timestamp: new Date(),
      type: 'info' as const,
    },
    {
      id: '2',
      title: 'System Update',
      message: 'System will be updated tonight',
      timestamp: new Date(Date.now() - 3600000),
      type: 'warning' as const,
    },
  ];

  const commands = [
    { id: '1', label: 'Go to Dashboard', icon: <Settings />, action: () => console.log('Dashboard') },
    { id: '2', label: 'View Profile', icon: <AccountCircle />, action: () => console.log('Profile') },
    { id: '3', label: 'Logout', icon: <Logout />, action: () => console.log('Logout') },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>Advanced Components</Typography>
      <Divider sx={{ my: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card title="Command Palette">
            <Stack spacing={2}>
              <Typography variant="body2">
                Quick access to actions with keyboard shortcut (Cmd+K)
              </Typography>
              <Button variant="primary" onClick={() => setCommandPaletteOpen(true)}>
                Open Command Palette
              </Button>
              <CommandPalette
                open={commandPaletteOpen}
                onClose={() => setCommandPaletteOpen(false)}
                commands={commands}
              />
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Notification Center">
            <Stack spacing={2}>
              <Typography variant="body2">
                Centralized notification management
              </Typography>
              <Box>
                <NotificationCenter
                  notifications={notifications}
                  onMarkAsRead={() => {}}
                  onClear={() => {}}
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Theme Toggle">
            <Stack spacing={2}>
              <Typography variant="body2">
                Switch between light and dark modes
              </Typography>
              <ThemeToggle mode={themeMode} onChange={setThemeMode} />
              <Typography variant="caption">Current: {themeMode}</Typography>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Language Selector">
            <Stack spacing={2}>
              <Typography variant="body2">
                Multi-language support
              </Typography>
              <LanguageSelector
                languages={languages}
                currentLanguage={language}
                onChange={setLanguage}
              />
              <Typography variant="caption">Current: {language}</Typography>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card title="User Menu">
            <Stack spacing={2}>
              <Typography variant="body2">
                User profile and account management
              </Typography>
              <Box>
                <UserMenu
                  user={{
                    name: 'John Doe',
                    email: 'john@example.com',
                  }}
                  menuItems={[
                    { label: 'Profile', icon: <AccountCircle />, onClick: () => alert('Profile') },
                    { label: 'Settings', icon: <Settings />, onClick: () => alert('Settings') },
                  ]}
                  onLogout={() => alert('Logout')}
                />
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdvancedPage;

