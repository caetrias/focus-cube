import React from 'react';
import { Card, CardContent, Typography, Box, Tooltip } from '@mui/material';
import { Timeline } from '@mui/icons-material';

const WeeklyChart = ({ data }) => {
  // Calcular o valor máximo para escala do gráfico
  const maxValue = Math.max(...data.map(item => item.value), 1);
  
  // Definir uma altura base mínima para valores muito baixos
  const MIN_VISIBLE_HEIGHT = 5; // 5% de altura mínima para valores > 0
  
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Timeline sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Tempo de Foco por Dia
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Máx: {maxValue} min
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
            // Calcular altura proporcional
            let heightPercent = 0;
            if (item.value > 0 && maxValue > 0) {
              heightPercent = (item.value / maxValue) * 100;
              // Garantir altura mínima visível
              heightPercent = Math.max(heightPercent, MIN_VISIBLE_HEIGHT);
            }
            
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
                <Tooltip 
                  title={
                    <Box>
                      <Typography variant="caption" display="block">
                        {item.day}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item.value} minutos
                      </Typography>
                    </Box>
                  } 
                  arrow
                  placement="top"
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: `${heightPercent}%`,
                      background: item.value > 0 
                        ? 'linear-gradient(180deg, #ff6b6b, #ee5a6f)' 
                        : 'transparent',
                      border: item.value === 0 ? '2px dashed rgba(0,0,0,0.1)' : 'none',
                      borderRadius: item.value > 0 ? '6px 6px 0 0' : '6px',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': {
                        opacity: 0.8,
                        transform: item.value > 0 ? 'scaleY(1.05)' : 'none',
                      },
                      // Label de valor dentro da barra (se houver espaço)
                      '&::after': item.value > 30 ? {
                        content: `"${item.value}"`,
                        position: 'absolute',
                        top: '8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: 600,
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                      } : {},
                    }}
                  />
                </Tooltip>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ fontWeight: item.value > 0 ? 600 : 400 }}
                >
                  {item.day}
                </Typography>
                {/* Mostrar valor abaixo se a barra for muito pequena */}
                {item.value > 0 && item.value <= 30 && (
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontSize: '9px',
                      color: 'primary.main',
                      fontWeight: 600 
                    }}
                  >
                    {item.value}m
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>
        
        {/* Legenda de escala */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          mt: 2, 
          pt: 2, 
          borderTop: 1,
          borderColor: 'divider' 
        }}>
          <Typography variant="caption" color="text.secondary">
            0 min
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {Math.round(maxValue / 2)} min
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {maxValue} min
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeeklyChart;
