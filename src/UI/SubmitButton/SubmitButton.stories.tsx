import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubmitButton } from './SubmitButton';

export default {
  title: 'SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = () => (
  <SubmitButton sx={{ width: 300 }}>Click</SubmitButton>
);

export const Default = Template.bind({});
