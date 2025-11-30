import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const PageHeader = ({ number, title }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
      <Avatar
        sx={{
          width: 40,
          height: 40,
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
          fontWeight: 600,
        }}
      >
        {number}
      </Avatar>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;
