import { Meta, StoryFn } from '@storybook/react';
import TableComponent, { TableComponentProps } from './Table';

import { CSSProperties } from 'react';
import React from 'react';

export default {
  title: 'Components/TableComponent',
  component: TableComponent,
  argTypes: {
    onSelect: { action: 'onSelect' },
    onPageChange: { action: 'onPageChange' },
    // You can add more controls here if needed
  },
} as Meta;

const columns = [
  {
    heading: 'Name',
    dataLabel: 'name',
    render: (item: any) => item.name,
  },
  {
    heading: 'Age',
    dataLabel: 'age',
    render: (item: any) => item.age,
  },
  {
    heading: 'Country',
    dataLabel: 'country',
    render: (item: any) => item.country,
  },
];

const data = [
  { name: 'John Doe', age: 30, country: 'USA' },
  { name: 'Jane Smith', age: 25, country: 'UK' },
  { name: 'Sara Lee', age: 35, country: 'Canada' },
  { name: 'James Brown', age: 40, country: 'Australia' },
];

const Template: StoryFn<TableComponentProps> = (args) => (
  <TableComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
  totalCount: 4,
  rowsPerPage: 10,
  showPagination: true,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  data: [],
  columns,
  totalCount: 0,
  loading: true,
  rowsPerPage: 10,
  showPagination: true,
};

export const WithPagination = Template.bind({});
WithPagination.args = {
  data,
  columns,
  totalCount: 50,
  rowsPerPage: 10,
  paginationStyle: { marginTop: '10px' } as CSSProperties,
  showPagination: true,
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  data,
  columns,
  totalCount: 4,
  rowsPerPage: 10,
  selectionType: 'checkbox',
  selectable: true,
  showPagination: true,
};

export const WithRadioSelection = Template.bind({});
WithRadioSelection.args = {
  data,
  columns,
  totalCount: 4,
  rowsPerPage: 10,
  selectionType: 'radio',
  selectable: true,
  showPagination: true,
};
