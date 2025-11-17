import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography } from '@mui/material';
import { PomodoroProvider } from './context/PomodoroContext';
import { theme } from './styles/theme';
import Dashboard from './pages/Dashboard';
import Timer from './pages/Timer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PomodoroProvider>
        <Box
          sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            py: 5,
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
                🎲 Cubo Pomodoro
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Mockups de Interface para Sistema Embarcado
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <Dashboard />
              <Timer />
            </Box>
          </Container>
        </Box>
      </PomodoroProvider>
    </ThemeProvider>
  );
}

export default App;
