import { styled, Button } from '@mui/material';

export const ConfirmButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '20px',
}));
