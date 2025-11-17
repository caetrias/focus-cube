import React from 'react';
import { Box } from '@mui/material';

const TimerCircle = ({ progress = 75 }) => {
  const circumference = 2 * Math.PI * 200;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <Box
        component="svg"
        sx={{
          position: 'absolute',
          width: 420,
          height: 420,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
        }}
      >
        <circle
          cx="210"
          cy="210"
          r="200"
          fill="none"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </Box>
    </>
  );
};

export default TimerCircle;
