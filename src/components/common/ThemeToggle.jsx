import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { usePomodoroContext } from '../../context/PomodoroContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = usePomodoroContext();

  return (
    <Tooltip title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}>
      <IconButton
        onClick={toggleDarkMode}
        sx={{
          position: 'fixed',
          top: 24,
          right: 24,
          bgcolor: 'background.paper',
          boxShadow: 3,
          '&:hover': {
            transform: 'scale(1.1)',
          },
          transition: 'transform 0.2s',
          zIndex: 1000,
        }}
      >
        {isDarkMode ? (
          <Brightness7 sx={{ color: '#fbbf24' }} />
        ) : (
          <Brightness4 sx={{ color: '#6366f1' }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
