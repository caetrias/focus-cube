import React from 'react';
import { Card, Box } from '@mui/material';
import { usePomodoroContext } from '../context/PomodoroContext';
import PageHeader from '../components/common/PageHeader';
import TimerDisplay from '../components/timer/TimerDisplay';
import ModeSelector from '../components/timer/ModeSelector';

const Timer = () => {
  const { currentMode, setCurrentMode, timeRemaining } = usePomodoroContext();
  
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const getModeGradient = () => {
    const gradients = {
      focus: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
      short: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      long: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    };
    return gradients[currentMode] || gradients.focus;
  };

  return (
    <Card sx={{ borderRadius: 6, p: 5 }}>
      <PageHeader number="2" title="Timer Ativo - Reflexo do Cubo Físico" />
      
      <Box
        sx={{
          borderRadius: 4,
          py: 12,
          px: 4,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 500,
          background: getModeGradient(),
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 150% -50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 300, md: 400 },
            height: { xs: 300, md: 400 },
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
          }}
        />
        
        <TimerDisplay minutes={minutes} seconds={seconds} mode={currentMode} />
      </Box>
      
      <ModeSelector currentMode={currentMode} onModeChange={setCurrentMode} />
    </Card>
  );
};

export default Timer;