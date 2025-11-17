import React, { createContext, useContext } from 'react';
import { useTimer } from '../hooks/useTimer';
import { useStats } from '../hooks/useStats';

const PomodoroContext = createContext();

export const usePomodoroContext = () => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error('usePomodoroContext must be used within PomodoroProvider');
  }
  return context;
};

export const PomodoroProvider = ({ children }) => {
  const timer = useTimer(25);
  const statsHook = useStats();
  const [currentMode, setCurrentMode] = React.useState('focus');

  return (
    <PomodoroContext.Provider
      value={{
        ...timer,
        ...statsHook,
        currentMode,
        setCurrentMode,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};