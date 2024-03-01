import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Paper, Box, Button } from '@mui/material';

import ConfirmDialog from './ConfirmDialog';

const DoctorPage = () => {
  const locationHook = useLocation();
  const { imgSrc, name, location, availableTimes, bookings, doctorId } =
    locationHook.state.props;

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleOpen = (event) => {
    setSelectedTime(event.currentTarget.id);
    setOpenDialog(true);
  };

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      console.log({ selectedTime });

      const button = document.getElementById(selectedTime) as HTMLButtonElement;
      console.log(button);

      button.disabled = true;
    }
    setOpenDialog(false);
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
  };
  const timeOptions = availableTimes.map((timeSlot) => {
    const date = new Date(timeSlot.date).toLocaleDateString(
      undefined,
      dateOptions
    );
    const datetimeString = `${date} at ${timeSlot.time}`;
    return (
      <Button
        className="flex column time-btn"
        variant="contained"
        sx={{ textTransform: 'none', margin: '5px 10px' }}
        onClick={handleOpen}
        id={datetimeString}
        disabled={false}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
          {date}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'black' }}>
          {timeSlot.time}
        </Typography>
      </Button>
    );
  });

  return (
    <Box>
      <Paper elevation={12} square={false} className="flex stretch">
        <Box sx={{ height: '200px', overflow: 'hidden' }}>
          <img className="doctor" src={imgSrc}></img>
        </Box>
        <Box>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{location}</Typography>
        </Box>
        <Box>{timeOptions}</Box>
      </Paper>
      <ConfirmDialog
        handleClose={handleClose}
        handleOpen={handleOpen}
        openDialog={openDialog}
        name={name}
        timeSlot={selectedTime}
      />
    </Box>
  );
};

export default DoctorPage;
