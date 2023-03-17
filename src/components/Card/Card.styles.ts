import { styled } from '@mui/material';

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 20,
}));

export const Image = {
  width: '217px',
  height: '310px',
  borderRadius: 16,
};

export const Text = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '200px',
  color: theme.palette.secondary.main,
  fontSize: 20,
  fontWeight: 700,
}));
