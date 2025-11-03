import React from 'react';
import { Container, Grid, Stack, Typography, Divider, Card, Box, List, Table, Accordion, Timeline, AvatarGroup } from '../components/ui';
import { Star, Check, ShoppingCart } from '@mui/icons-material';

export function DataDisplayPage() {
  const listItems = [
    { id: '1', primary: 'Item 1', secondary: 'Description 1', icon: <Star /> },
    { id: '2', primary: 'Item 2', secondary: 'Description 2', icon: <Check /> },
    { id: '3', primary: 'Item 3', secondary: 'Description 3', icon: <ShoppingCart /> },
  ];

  const tableData = [
    { id: '1', product: 'Product A', sales: 142, revenue: '$14,200', status: 'Active' },
    { id: '2', product: 'Product B', sales: 98, revenue: '$9,800', status: 'Active' },
    { id: '3', product: 'Product C', sales: 67, revenue: '$6,700', status: 'Low Stock' },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>Data Display</Typography>
      <Divider sx={{ my: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card title="Card Example" subtitle="With subtitle">
            Card content goes here. Cards are great for grouping related content.
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="List Example">
            <List items={listItems} dividers />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card title="Table Example">
            <Table
              columns={[
                { id: 'product', label: 'Product', sortable: true },
                { id: 'sales', label: 'Sales', align: 'right' as const },
                { id: 'revenue', label: 'Revenue', align: 'right' as const },
                { id: 'status', label: 'Status' },
              ]}
              rows={tableData}
              sortable
              pagination
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Accordion">
            <Accordion
              items={[
                { id: '1', title: 'Section 1', content: <div>Content for section 1</div> },
                { id: '2', title: 'Section 2', content: <div>Content for section 2</div> },
                { id: '3', title: 'Section 3', content: <div>Content for section 3</div> },
              ]}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Timeline">
            <Timeline
              items={[
                { id: '1', title: 'Event 1', description: 'Description', time: '2 hours ago', icon: <Check />, color: 'success' as const },
                { id: '2', title: 'Event 2', description: 'Description', time: '1 hour ago', icon: <Star />, color: 'primary' as const },
              ]}
            />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card title="Avatar Group">
            <AvatarGroup
              avatars={[
                { name: 'John Doe' },
                { name: 'Jane Smith' },
                { name: 'Bob Johnson' },
                { name: 'Alice Brown' },
              ]}
              max={3}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DataDisplayPage;

