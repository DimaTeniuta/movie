import { styled } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { IImage } from './Card.types';

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 20,
}));

export const Image = {
  width: '217px',
  height: '310px',
  borderRadius: 16,
};

export const Text = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '200px',
  color: theme.palette.secondary.main,
  fontSize: 20,
  fontWeight: 700,
}));
