import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Alert } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

const GoalsSection = ({ stats }) => {
  const weeklyProgress = stats.weeklyGoal > 0 ? (stats.weekMinutes / stats.weeklyGoal) * 100 : 0;
  const monthlyProgress = stats.monthlyGoal > 0 ? (stats.monthlyProgress / stats.monthlyGoal) * 100 : 0;
  
  const weeklyRemaining = Math.max(0, stats.weeklyGoal - stats.weekMinutes);
  const weeklyPercentage = Math.min(100, Math.round(weeklyProgress));
  const monthlyPercentage = Math.min(100, Math.round(monthlyProgress));

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <TrendingUp sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Metas de Foco
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Meta Semanal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stats.weekMinutes} / {stats.weeklyGoal} min
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={weeklyPercentage}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: 'action.hover',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #ff6b6b, #ee5a6f)',
                borderRadius: 4,
              },
            }}
          />
          {weeklyPercentage < 100 && weeklyRemaining > 0 && (
            <Alert severity="info" sx={{ mt: 2 }}>
              💪 Ótimo ritmo! Faltam apenas {weeklyRemaining} minutos para sua meta.
            </Alert>
          )}
          {weeklyPercentage >= 100 && (
            <Alert severity="success" sx={{ mt: 2 }}>
              🎉 Parabéns! Você atingiu sua meta semanal!
            </Alert>
          )}
        </Box>

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Meta Mensal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stats.monthlyProgress} / {stats.monthlyGoal} min
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={monthlyPercentage}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: 'action.hover',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #ff6b6b, #ee5a6f)',
                borderRadius: 4,
              },
            }}
          />
          {monthlyPercentage >= 100 && (
            <Alert severity="success" sx={{ mt: 2 }}>
              🎉 Parabéns! Você atingiu sua meta mensal!
            </Alert>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default GoalsSection;