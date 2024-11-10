import { Meta, StoryFn } from '@storybook/react';

import CheckboxList from './CheckBox';
import React from 'react';

export default {
  title: 'Components/CheckboxList',
  component: CheckboxList,
  argTypes: {
    onChange: { action: 'onChange' }, // This will log the selected items in the actions panel
  },
} as Meta;

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const Template: StoryFn<typeof CheckboxList> = (args) => (
  <CheckboxList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items, // Ensure the items are passed to the component
  onChange: (selectedItems: string[]) => {
    console.log('Selected Items:', selectedItems); // Log the selected items
  },
};
