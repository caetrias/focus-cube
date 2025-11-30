import React, { createContext, useContext, useState, useEffect } from 'react';

const PomodoroContext = createContext();

export const usePomodoroContext = () => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error('usePomodoroContext must be used within PomodoroProvider');
  }
  return context;
};

export const PomodoroProvider = ({ children }) => {
  const [stats, setStats] = useState({
    todayMinutes: 180,
    weekMinutes: 720,
    completedSessions: 24,
    weeklyGoal: 900,
    monthlyGoal: 3600,
    monthlyProgress: 2850,
  });

  const [weekData] = useState([
    { day: 'Seg', value: 60 },
    { day: 'Ter', value: 85 },
    { day: 'Qua', value: 45 },
    { day: 'Qui', value: 70 },
    { day: 'Sex', value: 55 },
    { day: 'Sáb', value: 30 },
    { day: 'Dom', value: 20 },
  ]);

  const [currentMode, setCurrentMode] = useState('focus');
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <PomodoroContext.Provider
      value={{
        stats,
        weekData,
        currentMode,
        setCurrentMode,
        timeRemaining,
        setTimeRemaining,
        isRunning,
        setIsRunning,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};