import React from 'react';
import { Paper, Box } from '@mui/material';
import { usePomodoroContext } from '../context/PomodoroContext';
import PageHeader from '../components/common/PageHeader';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatsGrid from '../components/dashboard/StatsGrid';
import WeeklyChart from '../components/dashboard/WeeklyChart';
import MonthlyGoalChart from '../components/dashboard/MonthlyGoalChart';
import GoalsSection from '../components/dashboard/GoalsSection';

const Dashboard = () => {
  const {
    stats,
    weekData,
    calculateWeeklyProgress,
    calculateMonthlyProgress,
    getRemainingToGoal,
  } = usePomodoroContext();

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 5,
        p: 5,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <PageHeader number="1" title="Dashboard Principal - Dados e Metas" />

      <Box sx={{ bgcolor: '#fafafa', borderRadius: 4, p: 4 }}>
        <DashboardHeader
          userName="Marina"
          date="Terça-feira, 11 de Novembro"
          todayMinutes={stats.todayMinutes}
        />

        <StatsGrid stats={stats} />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 3,
            mb: 4,
          }}
        >
          <WeeklyChart data={weekData} />
          <MonthlyGoalChart progress={75} />
        </Box>

        <GoalsSection
          stats={stats}
          weeklyProgress={calculateWeeklyProgress()}
          monthlyProgress={calculateMonthlyProgress()}
          remaining={getRemainingToGoal()}
        />
      </Box>
    </Paper>
  );
};

export default Dashboard;