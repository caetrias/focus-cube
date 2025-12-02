import React from 'react';
import { Card, CardContent, Typography, Box, Tooltip } from '@mui/material';
import { Timeline } from '@mui/icons-material';

const EN_DAY_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAY_TRANSLATION = {
  Monday: 'Seg',
  Tuesday: 'Ter',
  Wednesday: 'Qua',
  Thursday: 'Qui',
  Friday: 'Sex',
  Saturday: 'Sáb',
  Sunday: 'Dom',
};

const toMinutes = (seconds) => {
  const n = parseInt(seconds);
  if (Number.isNaN(n)) return 0;
  return Math.round(n / 60);
};

const normalizeIncoming = (data) => {
  if (!Array.isArray(data)) return EN_DAY_ORDER.map(d => ({ day: DAY_TRANSLATION[d], value: 0 }));
  if (data.length === 0) return EN_DAY_ORDER.map(d => ({ day: DAY_TRANSLATION[d], value: 0 }));

  // already normalized format?
  if (data[0].day !== undefined && data[0].value !== undefined) {
    return data;
  }

  // API format { dia: 'Sunday', tempo: '930' }
  const map = {};
  data.forEach(item => {
    if (item.dia) map[item.dia] = toMinutes(item.tempo || 0);
  });

  return EN_DAY_ORDER.map(d => ({
    day: DAY_TRANSLATION[d] || d,
    value: map[d] || 0,
  }));
};

const WeeklyChart = ({ data }) => {
  const normalized = normalizeIncoming(data);

  const maxValue = Math.max(...normalized.map(item => Number(item.value) || 0), 1);

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
          {normalized.map((item, index) => {
            const value = Number(item.value) || 0;
            const heightPercent = maxValue > 0 ? (value / maxValue) * 100 : 0;
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
                <Tooltip title={`${value} minutos`} arrow>
                  <Box
                    sx={{
                      width: '100%',
                      height: `${heightPercent}%`,
                      minHeight: value > 0 ? '8px' : '0px',
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