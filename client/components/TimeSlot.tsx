import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Paper, Box, Button } from '@mui/material';

import ConfirmDialog from './ConfirmDialog';

const dateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
};

const TimeSlot = ({ timeSlot, name }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleOpen = (event) => {
    setSelectedTime(event.currentTarget.id);
    setOpenDialog(true);
  };

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      setDisabled(true);
    }
    setOpenDialog(false);
  };

  const date = new Date(timeSlot.date).toLocaleDateString(
    undefined,
    dateOptions
  );
  const datetimeString = `${date} at ${timeSlot.time}`;

  return (
    <>
      <Button
        className="flex column time-btn"
        variant="contained"
        sx={{ textTransform: 'none', margin: '5px 10px' }}
        onClick={handleOpen}
        id={datetimeString}
        disabled={disabled}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
          {date}
        </Typography>
        <Typography variant="subtitle2">{timeSlot.time}</Typography>
      </Button>

      <ConfirmDialog
        handleClose={handleClose}
        handleOpen={handleOpen}
        openDialog={openDialog}
        name={name}
        timeSlot={selectedTime}
      />
    </>
  );
};

export default TimeSlot;
