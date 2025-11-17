import React, { useEffect } from 'react';
import { Paper, Box } from '@mui/material';
import { usePomodoroContext } from '../context/PomodoroContext';
import PageHeader from '../components/common/PageHeader';
import TimerDisplay from '../components/timer/TimerDisplay';
import TimerCircle from '../components/timer/TimerCircle';
import ModeSelector from '../components/timer/ModeSelector';
import { TIMER_MODES } from '../utils/constants';

const Timer = () => {
  const { currentMode, setCurrentMode, formatTime, timeRemaining, resetTimer } =
    usePomodoroContext();

  const time = formatTime();
  const currentModeData = TIMER_MODES.find((m) => m.id === currentMode);
  const progress = ((currentModeData.duration * 60 - timeRemaining) / (currentModeData.duration * 60)) * 100;

  // Atualiza o timer quando o modo muda
  useEffect(() => {
    const mode = TIMER_MODES.find((m) => m.id === currentMode);
    if (mode) {
      resetTimer(mode.duration);
    }
  }, [currentMode, resetTimer]);

  const handleModeChange = (newMode) => {
    setCurrentMode(newMode);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 5,
        p: 5,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <PageHeader number="2" title="Timer Ativo - Reflexo do Cubo Físico" />

      <Box
        sx={{
          background: currentModeData?.gradient || 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
          borderRadius: 4,
          py: 10,
          px: 4,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 500,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          },
        }}
      >
        <TimerCircle progress={progress} />
        <TimerDisplay
          minutes={time.minutes}
          seconds={time.seconds}
          mode={currentMode}
        />
      </Box>

      <ModeSelector currentMode={currentMode} onModeChange={handleModeChange} />
    </Paper>
  );
};

export default Timer;
