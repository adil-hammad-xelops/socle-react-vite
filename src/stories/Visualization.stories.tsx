import type { Meta, StoryObj } from '@storybook/react';
import { ChartWrapper, Gauge } from '../components/ui';

const chartMeta: Meta<typeof ChartWrapper> = {
  title: 'Visualization/ChartWrapper',
  component: ChartWrapper,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default chartMeta;

const sampleData = [
  { label: 'Jan', value: 45, color: '#2563eb' },
  { label: 'Feb', value: 52, color: '#3b82f6' },
  { label: 'Mar', value: 48, color: '#60a5fa' },
  { label: 'Apr', value: 65, color: '#93c5fd' },
  { label: 'May', value: 58, color: '#2563eb' },
];

export const BarChart: StoryObj<typeof ChartWrapper> = {
  args: {
    type: 'bar',
    title: 'Monthly Sales',
    data: sampleData,
    height: 300,
    showLegend: true,
  },
};

export const LineChart: StoryObj<typeof ChartWrapper> = {
  args: {
    type: 'line',
    title: 'Trend Analysis',
    data: sampleData,
    height: 300,
    showLegend: true,
  },
};

export const PieChart: StoryObj<typeof ChartWrapper> = {
  args: {
    type: 'pie',
    title: 'Market Share',
    data: sampleData,
    height: 300,
    showLegend: true,
  },
};

// Gauge Stories
const gaugeMeta: Meta<typeof Gauge> = {
  title: 'Visualization/Gauge',
  component: Gauge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const GaugeDefault: StoryObj<typeof Gauge> = {
  args: {
    value: 75,
    max: 100,
    label: 'Performance',
    color: 'primary',
    size: 200,
    showValue: true,
  },
};

export const GaugeSuccess: StoryObj<typeof Gauge> = {
  args: {
    value: 85,
    max: 100,
    label: 'Health Score',
    color: 'success',
    size: 200,
  },
};

export const GaugeWarning: StoryObj<typeof Gauge> = {
  args: {
    value: 45,
    max: 100,
    label: 'Storage Used',
    color: 'warning',
    size: 200,
  },
};

