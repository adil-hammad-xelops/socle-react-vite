import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, Select, Checkbox, Radio, Switch, Slider } from '../components/ui';

// TextArea Stories
const textAreaMeta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default textAreaMeta;

export const DefaultTextArea: StoryObj<typeof TextArea> = {
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    rows: 4,
  },
};

export const WithError: StoryObj<typeof TextArea> = {
  args: {
    label: 'Comments',
    error: true,
    helperText: 'This field is required',
  },
};

// Select Stories
const selectMeta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const DefaultSelect: StoryObj<typeof Select> = {
  args: {
    label: 'Country',
    options: [
      { label: 'United States', value: 'us' },
      { label: 'Canada', value: 'ca' },
      { label: 'United Kingdom', value: 'uk' },
    ],
  },
};

// Checkbox Stories
const checkboxMeta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const DefaultCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const CheckedCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
};

// Radio Stories
const radioMeta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const DefaultRadio: StoryObj<typeof Radio> = {
  args: {
    label: 'Choose your plan',
    options: [
      { label: 'Free Plan', value: '1' },
      { label: 'Pro Plan', value: '2' },
      { label: 'Enterprise Plan', value: '3' },
    ],
  },
};

// Switch Stories
const switchMeta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const DefaultSwitch: StoryObj<typeof Switch> = {
  args: {
    label: 'Enable notifications',
  },
};

export const CheckedSwitch: StoryObj<typeof Switch> = {
  args: {
    label: 'Dark mode',
    checked: true,
  },
};

// Slider Stories
const sliderMeta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const DefaultSlider: StoryObj<typeof Slider> = {
  args: {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100,
  },
};

export const WithMarks: StoryObj<typeof Slider> = {
  args: {
    label: 'Price Range',
    value: 50,
    min: 0,
    max: 100,
    marks: true,
    step: 10,
  },
};

