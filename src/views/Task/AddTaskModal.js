import React, { useEffect, useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import { DataGrid } from '@mui/x-data-grid';
import ModalHeader from '../../components/Custom/ModalHeader';
// import CustomLoader from '../../components/CustomLoader';
// import RefreshIcon from '@mui/icons-material/Refresh';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddTaskForm from './AddTaskForm';
// import ModalHeader from './ModalHeader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'white',
  boxShadow: 24,
  borderRadius: '10px',
  border: '1px solid black',
};
export default function AddTaskModal({ openModal, setOpenModal }) {
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <ModalHeader
            title='Add Task'
            handleClose={() => setOpenModal(false)}
          />
          <Box
            style={{
              padding: '20px 15px',
              maxHeight: '80vh',
              overflow: 'scroll',
            }}
          >
            {/* Modal Body */}
            <AddTaskForm {...{ setOpenModal }} />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
