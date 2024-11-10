import { Meta, StoryFn } from '@storybook/react';
import VerticalStepper, { VerticalStepperProps } from './VerticalStepper';

import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // For the step icons
import React from 'react';

export default {
  title: 'Components/VerticalStepper',
  component: VerticalStepper,
} as Meta<typeof VerticalStepper>;

const stepItems = [
  {
    icon: <CheckCircleIcon />,
    title: 'Step 1: Introduction',
    descriptionTitle: 'Description for Step 1',
    description: 'This is the first step in the process.',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Step 2: Details',
    descriptionTitle: 'Description for Step 2',
    description: 'This is the second step where we add more details.',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Step 3: Confirmation',
    descriptionTitle: 'Description for Step 3',
    description: 'This is the final step, where we confirm everything.',
  },
];

const Template: StoryFn<typeof VerticalStepper> = (args) => (
  <VerticalStepper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stepItems,
  style: { maxWidth: 600, margin: '0 auto' }, // Optional: for story display
  className: '', // Optional: for story display
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  stepItems,
  style: { maxWidth: 600, margin: '0 auto', backgroundColor: '#f4f4f4' }, // Custom background color
  className: 'custom-stepper',
};
