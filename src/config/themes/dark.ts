import { createTheme } from '@mui/material';

export const dark = createTheme({
  palette: {
    primary: {
      main: '#161621',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F74346',
      contrastText: '#f1f1f1',
      dark: '#2B2B38',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: 10,
          height: 10,
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#bdbdbd',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#f5f5f7',
        },
        '*': {
          margin: 0,
          padding: 0,
        },
        body: {
          minWidth: 320,
          margin: 0,
          backgroundColor: '#161621',
        },
        '#root': {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100vh',
          margin: '0 auto',
        },

        header: {
          flexGrow: 0,
        },
        footer: {
          flexGrow: 0,
        },
        main: {
          flexGrow: 1,
          position: 'relative',
          paddingBottom: '20px',
          marginTop: '65px',
          overflow: 'hidden',
        },
      },
    },
  },
});
