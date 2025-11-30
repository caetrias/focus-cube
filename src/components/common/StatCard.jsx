import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatCard = ({ label, value, unit }) => {
  return (
    <Card>
      <CardContent>
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