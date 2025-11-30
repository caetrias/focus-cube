import React from 'react';
import { Grid } from '@mui/material';
import StatCard from '../common/StatCard';

const StatsGrid = ({ stats }) => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} md={4}>
        <StatCard label="Total Hoje" value={stats.todayMinutes} unit="min" />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard label="Esta Semana" value={stats.weekMinutes} unit="min" />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard label="Sessões Completas" value={stats.completedSessions} unit="ciclos" />
      </Grid>
    </Grid>
  );
};

export default StatsGrid;