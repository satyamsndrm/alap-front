import React from 'react';
import { useSnackbar } from 'notistack';

export default function useCustomAlert() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const showSuccess = (message) => {
    enqueueSnackbar(message, { variant: 'success' });
  };
  const showError = (message) => {
    enqueueSnackbar(message, { variant: 'error' });
  };
  return { showSuccess, showError };
}
