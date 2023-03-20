import { styled } from '@mui/material';

export const WrapContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 30,
  padding: 30,
}));
