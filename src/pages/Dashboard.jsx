import React from 'react';
import { Card, Box, CircularProgress, Alert, IconButton, Tooltip } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { usePomodoroContext } from '../context/PomodoroContext';
import PageHeader from '../components/common/PageHeader';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatsGrid from '../components/dashboard/StatsGrid';
import WeeklyChart from '../components/dashboard/WeeklyChart';
import MonthlyGoalChart from '../components/dashboard/MonthlyGoalChart';
import GoalsSection from '../components/dashboard/GoalsSection';

const Dashboard = () => {
  const { stats, weekData, isLoading, error, reloadStats } = usePomodoroContext();

  if (isLoading) {
    return (
      <Card sx={{ borderRadius: 6, p: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
          <CircularProgress />
        </Box>
      </Card>
    );
  }

  return (
    <Card sx={{ borderRadius: 6, p: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <PageHeader number="1" title="Dashboard Principal - Dados e Metas" />
        <Tooltip title="Atualizar dados">
          <IconButton onClick={reloadStats} color="primary">
            <Refresh />
          </IconButton>
        </Tooltip>
      </Box>
      
      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      <Box sx={{ bgcolor: 'action.hover', borderRadius: 4, p: 4 }}>
        <DashboardHeader
          userName="Marina"
          date={new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
          todayMinutes={stats.todayMinutes}
        />
        
        <StatsGrid stats={stats} />
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, mb: 4 }}>
          <WeeklyChart data={weekData} />
          <MonthlyGoalChart 
            monthlyProgress={stats.monthlyProgress} 
            monthlyGoal={stats.monthlyGoal} 
          />
        </Box>
        
        <GoalsSection stats={stats} />
      </Box>
    </Card>
  );
};

export default Dashboard;