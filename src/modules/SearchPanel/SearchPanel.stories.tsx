import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchPanel } from './SearchPanel';

export default {
  title: 'SearchPanel',
  component: SearchPanel,
} as ComponentMeta<typeof SearchPanel>;

const Template: ComponentStory<typeof SearchPanel> = () => <SearchPanel />;

export const Default = Template.bind({});
