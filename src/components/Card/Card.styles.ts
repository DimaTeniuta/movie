import { styled } from '@mui/material';

export const Wrapper = styled('div')(() => ({
  position: 'relative',
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
  textAlign: 'center',
  color: theme.palette.secondary.main,
  fontSize: 20,
  fontWeight: 700,
}));

export const cardMediaStyles = {
  borderRadius: 2,
  color: 'primary.contrastText',
  ':hover': {
    cursor: 'pointer',
  },
};

export const Rating = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 250,
  right: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 50,
  height: 50,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  ':hover': {
    cursor: 'pointer',
  },
}));
