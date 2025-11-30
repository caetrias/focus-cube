import React, { useMemo } from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography } from '@mui/material';
import { PomodoroProvider, usePomodoroContext } from './context/PomodoroContext';
import { getTheme } from './theme/theme';
import ThemeToggle from './components/common/ThemeToggle';
import Dashboard from './pages/Dashboard';
import Timer from './pages/Timer';

function AppContent() {
  const { isDarkMode } = usePomodoroContext();
  const theme = useMemo(() => getTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6, px: 3 }}>
        <ThemeToggle />
        
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
              🎲 Cubo Pomodoro
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Mockups de Interface para Sistema Embarcado
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <Dashboard />
            <Timer />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

function App() {
  return (
    <PomodoroProvider>
      <AppContent />
    </PomodoroProvider>
  );
}

export default App;