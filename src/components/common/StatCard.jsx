import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StatCard = ({ label, value, unit, icon }) => {
  return (
    <Card elevation={0} sx={{ borderRadius: 3 }}>
      <CardContent>
        {icon && (
          <Box sx={{ mb: 2, color: 'primary.main' }}>
            {icon}
          </Box>
        )}
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            display: 'block',
            mb: 1,
          }}
        >
          {label}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          {value}
          <Typography
            component="span"
            sx={{ fontSize: '1rem', color: 'text.secondary', ml: 1 }}
          >
            {unit}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
