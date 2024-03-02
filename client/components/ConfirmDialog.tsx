import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const ConfirmDialog = ({
  handleClose,
  handleOpen,
  openDialog,
  name,
  timeSlot,
}) => {
  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className="title" id="alert-dialog-title">
        {'Confirm Visit'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You have selected to meet with {name} on {timeSlot}.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} variant="outlined">
          Cancel
        </Button>
        <Button onClick={() => handleClose(true)} variant="contained" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
