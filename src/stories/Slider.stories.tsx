import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Slider } from 'components/ui';

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div>
        <Slider
          label="Volume"
          value={value}
          onChange={(e, newValue) => setValue(newValue as number)}
          min={0}
          max={100}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Current Value:</strong> {value}%
        </div>
      </div>
    );
  },
};

export const DefaultSlider: Story = {
  args: {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100,
  },
};

export const WithMarks: Story = {
  args: {
    label: 'Price Range',
    value: 50,
    min: 0,
    max: 100,
    marks: true,
    step: 10,
  },
};

export const CustomRange: Story = {
  args: {
    label: 'Temperature (°C)',
    value: 20,
    min: -10,
    max: 40,
    step: 5,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled slider',
    value: 30,
    disabled: true,
  },
};

// Range slider examples
export const RangeSlider: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([20, 80]);
    return (
      <div>
        <Slider
          label="Price Range"
          value={value}
          onChange={(e, newValue) => setValue(newValue as number[])}
          min={0}
          max={100}
          valueLabelDisplay="on"
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Range:</strong> ${value[0]} - ${value[1]}
        </div>
      </div>
    );
  },
};

export const RangeWithMarks: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([25, 75]);
    return (
      <div>
        <Slider
          label="Temperature Range (°C)"
          value={value}
          onChange={(e, newValue) => setValue(newValue as number[])}
          min={0}
          max={100}
          step={5}
          marks
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Range:</strong> {value[0]}°C - {value[1]}°C
        </div>
      </div>
    );
  },
};

