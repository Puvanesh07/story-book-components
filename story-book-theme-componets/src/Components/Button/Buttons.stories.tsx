import { Meta, StoryFn } from '@storybook/react';

import CustomButton from './Buttons';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    shape: {
      control: 'select',
      options: ['roundedRectangle', 'circle', 'rectangle'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    children: { control: 'text' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    buttonHoverBackgroundColor: { control: 'color' },
    style: { control: 'object' },
  },
} as Meta<typeof CustomButton>;

const Template: StoryFn<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  shape: 'roundedRectangle',
  size: 'medium',
  children: 'Save', // Button label
  // startIcon: <SaveIcon />,
  // endIcon: <DeleteIcon />,
  loading: false,
  disabled: false,
  buttonHoverBackgroundColor: '#3f51b5',
  style: { backgroundColor: '#3f51b5', color: 'white' },
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
  children: 'Loading',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
  children: 'Disabled',
};

export const CircleShape = Template.bind({});
CircleShape.args = {
  ...Primary.args,
  shape: 'circle',
  children: 'Go',
  style: { backgroundColor: '#ff5722', color: 'white' },
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  ...Primary.args,
  size: 'large',
  children: 'Large Button',
  style: { backgroundColor: '#673ab7', color: 'white' },
};
