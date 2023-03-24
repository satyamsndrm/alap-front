import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ModalHeader({ handleClose, title }) {
  return (
    <Box
      style={{
        padding: '14px 15px',
        color: 'white',
        borderBottom: '1px solid #262121a3',
      }}
    >
      <Typography
        variant='h6'
        color='text.primary'
        gutterBottom
        style={{
          marginBottom: '0px',
          fontWeight: '600',
          fontFamily: 'Open Sans',
        }}
      >
        {title}
      </Typography>
      <Divider />
      <Box
        style={{
          position: 'absolute',
          right: '8px',
          top: '13px',
          cursor: 'pointer',
        }}
        onClick={handleClose}
      >
        <HighlightOffIcon
          style={{
            color: 'red',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        />
      </Box>
    </Box>
  );
}
