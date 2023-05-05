import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Box } from '@mui/material';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [withRouter],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Box sx={{ width: 217 }}>
    <Card
      image="https://image.tmdb.org/t/p/w500/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg"
      onClick={() => console.log('click')}
      rating={8.2}
    >
      {'Plane'}
    </Card>
  </Box>
);

export const Default = Template.bind({});
