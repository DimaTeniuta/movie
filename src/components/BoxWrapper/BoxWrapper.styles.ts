import { styled, Paper as MuiPaper } from '@mui/material';

export const Paper = styled(MuiPaper)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 120px)',
  backgroundColor: theme.palette.secondary.dark,
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    width: 6,
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
