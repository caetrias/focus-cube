import React from 'react';
import { Box, Typography } from '@mui/material';
import { TIMER_MODES } from '../../utils/constants';

const ModeSelector = ({ currentMode, onModeChange }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        {TIMER_MODES.map((mode) => (
          <Box
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            sx={{
              width: 60,
              height: 40,
              borderRadius: 2,
              background: mode.gradient,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              border:
                currentMode === mode.id
                  ? '3px solid #1d1d1f'
                  : '2px solid white',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
            title={mode.label}
          />
        ))}
      </Box>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'center',
          display: 'block',
          mt: 2,
          color: 'text.secondary',
        }}
      >
        Variações de cor por modo Pomodoro
      </Typography>
    </Box>
  );
};

export default ModeSelector;
