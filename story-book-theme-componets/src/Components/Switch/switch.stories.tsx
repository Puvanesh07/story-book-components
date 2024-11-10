import { Meta, StoryFn } from '@storybook/react';

import React from 'react';
import SwitchComponent from './Switch';

export default {
  title: 'Components/SwitchComponent',
  component: SwitchComponent,
  argTypes: {
    shape: { control: 'select', options: ['rounded', 'square'] },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    style: { control: 'object' },
    onChange: { action: 'changed' },
    onClick: { action: 'clicked' },
    onBlur: { action: 'blurred' },
  },
} as Meta<typeof SwitchComponent>;

const Template: StoryFn<typeof SwitchComponent> = (args) => (
  <SwitchComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'switch-default',
  name: 'defaultSwitch',
  shape: 'rounded',
  defaultChecked: true,
  disabled: false,
  style: {
    width: '42px',
    height: '24px',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const SquareShape = Template.bind({});
SquareShape.args = {
  ...Default.args,
  shape: 'square',
  defaultChecked: false,
};
