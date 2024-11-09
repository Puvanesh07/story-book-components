import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Buttons';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'custom'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'roundedRectangle', 'circle'],
    },
    width: {
      control: 'text',
      if: { arg: 'size', eq: 'custom' },
    },
    height: {
      control: 'text',
      if: { arg: 'size', eq: 'custom' },
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
    variant: 'primary',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'medium',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
    variant: 'primary',
  },
};

export const CustomSize: Story = {
  args: {
    label: 'Custom Size',
    size: 'custom',
    width: '200px',
    height: '60px',
    variant: 'primary',
  },
};

export const WithLoading: Story = {
  args: {
    label: 'Loading Button',
    loading: true,
    variant: 'primary',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    variant: 'primary',
    size: 'medium',
  },
};

export const RoundedShape: Story = {
  args: {
    label: 'Rounded Button',
    shape: 'rounded',
    variant: 'primary',
    size: 'medium',
  },
};

export const CircleShape: Story = {
  args: {
    label: '🔔',
    shape: 'circle',
    variant: 'primary',
    size: 'medium',
  },
};
