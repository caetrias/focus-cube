import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { usePomodoroContext } from '../context/PomodoroContext';
import PageHeader from '../components/common/PageHeader';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatsGrid from '../components/dashboard/StatsGrid';
import WeeklyChart from '../components/dashboard/WeeklyChart';
import MonthlyGoalChart from '../components/dashboard/MonthlyGoalChart';
import GoalsSection from '../components/dashboard/GoalsSection';

const Dashboard = () => {
  const { stats, weekData } = usePomodoroContext();

  return (
    <Card sx={{ borderRadius: 6, p: 5 }}>
      <PageHeader number="1" title="Dashboard Principal - Dados e Metas" />
      
      <Box sx={{ bgcolor: 'action.hover', borderRadius: 4, p: 4 }}>
        <DashboardHeader
          userName="Marina"
          date="Terça-feira, 11 de Novembro"
          todayMinutes={stats.todayMinutes}
        />
        
        <StatsGrid stats={stats} />
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, mb: 4 }}>
          <WeeklyChart data={weekData} />
          <MonthlyGoalChart progress={75} />
        </Box>
        
        <GoalsSection stats={stats} />
      </Box>
    </Card>
  );
};

export default Dashboard;