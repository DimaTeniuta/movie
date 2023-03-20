import { styled } from '@mui/material';

export const WrapCard = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 30,
  padding: 20,
}));

export const WrapPagination = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  paddingBottom: 30,
}));
