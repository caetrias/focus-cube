import React from 'react';
import { Grid } from '@mui/material';
import { AccessTime, CalendarToday, CheckCircle } from '@mui/icons-material';
import StatCard from '../common/StatCard';

const StatsGrid = ({ stats }) => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} md={4}>
        <StatCard
          label="Total Hoje"
          value={stats.todayMinutes}
          unit="min"
          icon={<AccessTime />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard
          label="Esta Semana"
          value={stats.weekMinutes}
          unit="min"
          icon={<CalendarToday />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard
          label="Sessões Completas"
          value={stats.completedSessions}
          unit="ciclos"
          icon={<CheckCircle />}
        />
      </Grid>
    </Grid>
  );
};

export default StatsGrid;