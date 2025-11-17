import React from 'react';
import { Box, Typography } from '@mui/material';

const TimerDisplay = ({ minutes, seconds, mode }) => {
  const getModeLabel = () => {
    const labels = {
      focus: 'Foco Intenso',
      short: 'Pausa Curta',
      long: 'Pausa Longa',
    };
    return labels[mode] || 'Foco Intenso';
  };

  return (
    <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <Typography
        variant="caption"
        sx={{
          color: 'rgba(255, 255, 255, 0.8)',
          textTransform: 'uppercase',
          letterSpacing: 2,
          mb: 4,
          display: 'block',
          fontWeight: 500,
        }}
      >
        {getModeLabel()}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '80px', md: '120px' },
          fontWeight: 300,
          color: 'white',
          letterSpacing: '10px',
          mb: 2,
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        {minutes}:{seconds}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 500,
        }}
      >
        minutos de concentração
      </Typography>
    </Box>
  );
};

export default TimerDisplay;