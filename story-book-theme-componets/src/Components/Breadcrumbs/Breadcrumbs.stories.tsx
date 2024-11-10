import BreadcrumbsComponent, { BreadcrumbsProps } from './Breadcrumbs';
import { Meta, StoryFn } from '@storybook/react';

import React from 'react';

export default {
  title: 'Components/Breadcrumbs',
  component: BreadcrumbsComponent,
  argTypes: {
    onClick: { action: 'onClick' }, // Logs onClick in the actions panel
    onBlur: { action: 'onBlur' }, // Logs onBlur in the actions panel
  },
} as Meta<typeof BreadcrumbsComponent>;

const Template: StoryFn<typeof BreadcrumbsComponent> = (args) => (
  <BreadcrumbsComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  breadcrumbsOption: [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Shoes', link: '/products/shoes' },
  ],
  onClick: (link: string, event: React.MouseEvent<HTMLElement>) => {
    console.log('Breadcrumb clicked:', link);
  },
  onBlur: (event: React.FocusEvent<HTMLElement>) => {
    console.log('Breadcrumb blurred');
  },
  maxCrumbs: 5,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  breadcrumbsOption: [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Shoes', link: '/products/shoes' },
  ],
  disabled: true,
  onClick: (link: string, event: React.MouseEvent<HTMLElement>) => {
    console.log('Breadcrumb clicked:', link);
  },
  onBlur: (event: React.FocusEvent<HTMLElement>) => {
    console.log('Breadcrumb blurred');
  },
  maxCrumbs: 5,
};
