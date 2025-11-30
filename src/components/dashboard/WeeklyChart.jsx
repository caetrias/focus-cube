import React from 'react';
import { Card, CardContent, Typography, Box, Tooltip } from '@mui/material';
import { Timeline } from '@mui/icons-material';

const WeeklyChart = ({ data }) => {
  // Calcular o valor máximo para escala do gráfico
  const maxValue = Math.max(...data.map(item => item.value), 1);
  
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Timeline sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Tempo de Foco por Dia
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: 180,
            gap: 1,
          }}
        >
          {data.map((item, index) => {
            const heightPercent = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
            return (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Tooltip title={`${item.value} minutos`} arrow>
                  <Box
                    sx={{
                      width: '100%',
                      height: `${heightPercent}%`,
                      minHeight: item.value > 0 ? '8px' : '0px',
                      background: 'linear-gradient(180deg, #ff6b6b, #ee5a6f)',
                      borderRadius: '6px 6px 0 0',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      '&:hover': {
                        opacity: 0.8,
                        transform: 'scaleY(1.05)',
                      },
                    }}
                  />
                </Tooltip>
                <Typography variant="caption" color="text.secondary">
                  {item.day}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeeklyChart;