import React from 'react';
import { Container, Grid, Stack, Typography, Divider, Card, Box, Paper } from '../components/ui';

export function LayoutPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>Layout Components</Typography>
      <Divider sx={{ my: 3 }} />

      <Stack spacing={3}>
        <Card title="Container">
          <Typography>Container provides responsive fixed-width layouts</Typography>
        </Card>

        <Card title="Grid System">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}><Paper sx={{ p: 2 }}>Column 1</Paper></Grid>
            <Grid item xs={12} md={4}><Paper sx={{ p: 2 }}>Column 2</Paper></Grid>
            <Grid item xs={12} md={4}><Paper sx={{ p: 2 }}>Column 3</Paper></Grid>
          </Grid>
        </Card>

        <Card title="Stack">
          <Stack spacing={2}>
            <Paper sx={{ p: 2 }}>Item 1</Paper>
            <Paper sx={{ p: 2 }}>Item 2</Paper>
            <Paper sx={{ p: 2 }}>Item 3</Paper>
          </Stack>
        </Card>

        <Card title="Box">
          <Box sx={{ p: 2, bgcolor: 'primary.light', borderRadius: 1 }}>
            Box is a flexible container component
          </Box>
        </Card>
      </Stack>
    </Container>
  );
}

export default LayoutPage;

