import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { TIMER_MODES } from '../../utils/constants';

const ModeSelector = ({ currentMode, onModeChange }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        {TIMER_MODES.map((mode) => (
          <Tooltip key={mode.id} title={mode.label}>
            <Box
              onClick={() => onModeChange(mode.id)}
              sx={{
                width: 60,
                height: 40,
                borderRadius: 2,
                background: mode.gradient,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                border: currentMode === mode.id ? '3px solid #1d1d1f' : '2px solid white',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
          </Tooltip>
        ))}
      </Box>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ textAlign: 'center', display: 'block', mt: 2 }}
      >
        Variações de cor por modo Pomodoro
      </Typography>
    </Box>
  );
};

export default ModeSelector;