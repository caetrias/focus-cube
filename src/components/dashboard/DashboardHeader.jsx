import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const DashboardHeader = ({ userName, date, todayMinutes }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        pb: 3,
        borderBottom: 1,
        borderColor: 'divider',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
          Olá, {userName} 👋
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </Box>
      <Chip
        label={`✨ Você completou ${todayMinutes} minutos hoje`}
        sx={{
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
          color: 'white',
          fontWeight: 500,
          px: 2,
          height: 40,
        }}
      />
    </Box>
  );
};

export default DashboardHeader;