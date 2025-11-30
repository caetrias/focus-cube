import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

const MonthlyGoalChart = ({ monthlyProgress, monthlyGoal }) => {
  const progress = monthlyGoal > 0 ? Math.min(100, Math.round((monthlyProgress / monthlyGoal) * 100)) : 0;
  
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <EmojiEvents sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Meta Mensal
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 3,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: `conic-gradient(#ff6b6b 0% ${progress}%, #e5e5e7 ${progress}% 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                {progress}%
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Completo
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MonthlyGoalChart;
