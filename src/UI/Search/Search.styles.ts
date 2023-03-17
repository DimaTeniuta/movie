import { styled, TextField } from '@mui/material';

export const SearchInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: 20,
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.contrastText,
      borderRadius: 20,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.contrastText,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.contrastText,
    },
  },
}));
