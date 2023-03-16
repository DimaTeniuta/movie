import { styled, Button } from '@mui/material';

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  '&.active': {
    color: theme.palette.secondary.main,
  },
})) as typeof Button;
