import { useState, useEffect } from 'react';

export const useStats = () => {
  const [stats, setStats] = useState({
    todayMinutes: 180,
    weekMinutes: 720,
    completedSessions: 24,
    weeklyGoal: 900,
    monthlyGoal: 3600,
    monthlyProgress: 2850,
  });

  const [weekData, setWeekData] = useState([
    { day: 'Seg', value: 60, date: '2024-11-11' },
    { day: 'Ter', value: 85, date: '2024-11-12' },
    { day: 'Qua', value: 45, date: '2024-11-13' },
    { day: 'Qui', value: 70, date: '2024-11-14' },
    { day: 'Sex', value: 55, date: '2024-11-15' },
    { day: 'Sáb', value: 30, date: '2024-11-16' },
    { day: 'Dom', value: 20, date: '2024-11-17' },
  ]);

  // por enquanto, simula carregamento de dados (substituir por API real)
  useEffect(() => {
    // fazer fetch de dados do backend
    // ou do localStorage
  }, []);

  const addSession = (minutes) => {
    setStats((prevStats) => ({
      ...prevStats,
      todayMinutes: prevStats.todayMinutes + minutes,
      weekMinutes: prevStats.weekMinutes + minutes,
      monthlyProgress: prevStats.monthlyProgress + minutes,
      completedSessions: prevStats.completedSessions + 1,
    }));
  };

  const calculateWeeklyProgress = () => {
    return (stats.weekMinutes / stats.weeklyGoal) * 100;
  };

  const calculateMonthlyProgress = () => {
    return (stats.monthlyProgress / stats.monthlyGoal) * 100;
  };

  const getRemainingToGoal = () => {
    return stats.weeklyGoal - stats.weekMinutes;
  };

  return {
    stats,
    weekData,
    addSession,
    calculateWeeklyProgress,
    calculateMonthlyProgress,
    getRemainingToGoal,
  };
};