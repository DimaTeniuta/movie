import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { dark } from './config/themes/dark';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
