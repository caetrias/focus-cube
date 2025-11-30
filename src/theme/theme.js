import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#ff6b6b',
      dark: '#ee5a6f',
    },
    secondary: {
      main: '#4facfe',
    },
    background: {
      default: mode === 'light' ? '#f5f5f7' : '#1a1a1a',
      paper: mode === 'light' ? '#ffffff' : '#2a2a2a',
    },
    text: {
      primary: mode === 'light' ? '#1d1d1f' : '#ffffff',
      secondary: mode === 'light' ? '#86868b' : '#a0a0a0',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Inter',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: mode === 'light' 
            ? '0 2px 10px rgba(0, 0, 0, 0.05)' 
            : '0 2px 10px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
});
