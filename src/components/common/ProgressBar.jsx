import React from 'react';
import { Box, LinearProgress, Paper, Typography } from '@mui/material';

const ProgressBar = ({ progress, showFeedback, feedback }) => {
  return (
    <Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          bgcolor: '#e5e5e7',
          '& .MuiLinearProgress-bar': {
            background: 'linear-gradient(90deg, #ff6b6b, #ee5a6f)',
            borderRadius: 4,
          },
        }}
      />
      {showFeedback && feedback && (
        <Paper
          elevation={0}
          sx={{
            mt: 1.5,
            p: 1.5,
            bgcolor: '#f0f9ff',
            borderLeft: '3px solid #3b82f6',
            borderRadius: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: '#1e40af' }}>
            {feedback}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default ProgressBar;