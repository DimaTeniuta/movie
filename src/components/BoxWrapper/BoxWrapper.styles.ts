import { styled, Paper as MuiPaper } from '@mui/material';

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  width: '100%',
  minHeight: 'calc(100vh - 120px)',
  backgroundColor: theme.palette.secondary.dark,
}));
