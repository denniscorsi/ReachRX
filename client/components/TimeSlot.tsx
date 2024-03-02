import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

import ConfirmDialog from './ConfirmDialog';

const dateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
};

type TimeSlotProps = {
  timeSlot: any;
  name: string;
};

const TimeSlot: React.FC<TimeSlotProps> = ({ timeSlot, name }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  // To open confirmation dialog
  const handleOpen = (event) => {
    setSelectedTime(event.currentTarget.id);
    setOpenDialog(true);
  };

  // To close confirmation dialog
  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      setDisabled(true);
    }
    setOpenDialog(false);
  };

  // Format date (which comes in as a string from the database)
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
