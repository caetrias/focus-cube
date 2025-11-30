import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAllStats } from '../services/api';

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
    todayMinutes: 0,
    weekMinutes: 0,
    completedSessions: 0,
    weeklyGoal: 840,
    monthlyGoal: 3360,
    monthlyProgress: 0,
  });

  const [weekData, setWeekData] = useState([
    { day: 'Seg', value: 0 },
    { day: 'Ter', value: 0 },
    { day: 'Qua', value: 0 },
    { day: 'Qui', value: 0 },
    { day: 'Sex', value: 0 },
    { day: 'Sáb', value: 0 },
    { day: 'Dom', value: 0 },
  ]);

  const [currentMode, setCurrentMode] = useState('focus');
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Buscar dados da API
  const loadStats = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchAllStats();
      setStats(data.stats);
      setWeekData(data.weekData);
    } catch (err) {
      console.error('Erro ao carregar estatísticas:', err);
      setError('Não foi possível carregar os dados. Usando valores padrão.');
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar dados ao montar o componente
  useEffect(() => {
    loadStats();
    
    // Atualizar dados a cada 30 segundos
    const interval = setInterval(loadStats, 30000);
    
    return () => clearInterval(interval);
  }, []);

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
        isLoading,
        error,
        reloadStats: loadStats,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};