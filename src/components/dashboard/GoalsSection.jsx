import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import ProgressBar from '../common/ProgressBar';

const GoalsSection = ({ stats, weeklyProgress, monthlyProgress, remaining }) => {
  return (
    <Card elevation={0} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <TrendingUp sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Metas de Foco
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Meta Semanal
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {stats.weekMinutes} / {stats.weeklyGoal} min
            </Typography>
          </Box>
          <ProgressBar
            progress={weeklyProgress}
            showFeedback={true}
            feedback={`💪 Ótimo ritmo! Faltam apenas ${remaining} minutos para sua meta.`}
          />
        </Box>

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Meta Mensal
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {stats.monthlyProgress} / {stats.monthlyGoal} min
            </Typography>
          </Box>
          <ProgressBar progress={monthlyProgress} showFeedback={false} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default GoalsSection;