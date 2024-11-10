import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

import React, { useState } from 'react';
import { FiEyeOff } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      control: 'radio',
      options: ['top', 'side'],
      description: 'Position of the label',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel'],
      description: 'Type of input field',
    },
    shape: {
      control: 'radio',
      options: ['roundedRectangle'],
      description: 'Shape of the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    showSuffixIcon: {
      control: 'boolean',
      description: 'Whether to show the suffix icon',
    },
    validate: {
      control: 'boolean',
      description: 'Whether to enable validation',
    },
    width: {
      control: 'text',
      description: 'Width of the input field',
    },
    height: {
      control: 'text',
      description: 'Height of the input field',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base story with default props
export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter text...',
    width: '300px',
  },
};

// Story with label on side
export const SideLabel: Story = {
  args: {
    ...Default.args,
    labelPosition: 'side',
    additionalLabel: 'Side Label',
  },
};

// Story with validation
export const WithValidation: Story = {
  args: {
    ...Default.args,
    label: 'Email',
    type: 'email',
    validate: true,
    validateInput: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    errorMessage: 'Please enter a valid email address',
  },
};

// Password input component
const PasswordInputComponent = (args: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <InputField
      {...args}
      type={showPassword ? 'text' : 'password'}
      suffixIcon={
        <div
          onClick={togglePassword}
          style={{ cursor: 'pointer' }}
          role='button'
          tabIndex={0}
        >
          {showPassword ? <FiEyeOff size={20} /> : <BsEye size={20} />}
        </div>
      }
      showSuffixIcon
    />
  );
};

// Story with password toggle
export const PasswordInput: Story = {
  render: (args) => <PasswordInputComponent {...args} />,
  args: {
    ...Default.args,
    label: 'Password',
    placeholder: 'Enter password...',
  },
};

// Story with search icon
export const SearchInput: Story = {
  args: {
    ...Default.args,
    label: 'Search',
    placeholder: 'Search...',
    suffixIcon: <BiSearch size={20} />,
    showSuffixIcon: true,
  },
};

// Story with error state
export const WithError: Story = {
  args: {
    ...Default.args,
    label: 'Error Input',
    error: true,
    helperText: 'This is an error message',
  },
};

// Story with custom width and height
export const CustomSize: Story = {
  args: {
    ...Default.args,
    label: 'Custom Size Input',
    width: '400px',
    height: '56px',
  },
};

// Story with required field
export const Required: Story = {
  args: {
    ...Default.args,
    label: 'Required Input',
    required: true,
    validate: true,
    errorMessage: 'This field is required',
  },
};

// Story with disabled state
export const Disabled: Story = {
  args: {
    ...Default.args,
    label: 'Disabled Input',
    disabled: true,
    value: 'Disabled value',
  },
};

// Story with character limit
export const WithCharacterLimit: Story = {
  args: {
    ...Default.args,
    label: 'Limited Input',
    maxLength: 20,
    helperText: 'Maximum 20 characters',
  },
};

// Story with custom validation regex
export const RegexValidation: Story = {
  args: {
    ...Default.args,
    label: 'Phone Number',
    type: 'tel',
    validate: true,
    validationRegex: /^\d{10}$/,
    errorMessage: 'Please enter a valid 10-digit phone number',
    placeholder: '1234567890',
  },
};
