import React from 'react';
import { Container, Grid, Typography, Divider, Card, ChartWrapper, Gauge, CalendarView } from '../components/ui';

export function VisualizationPage() {
  const chartData = [
    { label: 'Jan', value: 45, color: '#2563eb' },
    { label: 'Feb', value: 52, color: '#3b82f6' },
    { label: 'Mar', value: 48, color: '#60a5fa' },
    { label: 'Apr', value: 65, color: '#93c5fd' },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>Visualization</Typography>
      <Divider sx={{ my: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ChartWrapper
            type="bar"
            title="Bar Chart Example"
            data={chartData}
            height={300}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Card title="Gauge Example" sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <Gauge value={75} max={100} label="Performance" color="success" size={200} />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartWrapper
            type="line"
            title="Line Chart"
            data={chartData}
            height={300}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartWrapper
            type="pie"
            title="Pie Chart"
            data={chartData}
            height={300}
          />
        </Grid>

        <Grid item xs={12}>
          <CalendarView
            events={[
              { id: '1', title: 'Meeting', date: new Date(), color: '#2563eb' },
              { id: '2', title: 'Deadline', date: new Date(Date.now() + 86400000), color: '#ef4444' },
            ]}
            onDateClick={(date) => console.log('Date clicked:', date)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default VisualizationPage;

