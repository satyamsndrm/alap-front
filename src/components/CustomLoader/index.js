import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function CustomLoader() {
  return (
    <div
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
      data-testid='custom-loader-box'
    >
      <CircularProgress />
    </div>
  );
}
