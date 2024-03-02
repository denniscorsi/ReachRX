import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Paper, Box, Button } from '@mui/material';
import TimeSlot from './TimeSlot';

const DoctorPage = () => {
  const locationHook = useLocation();
  const { imgSrc, name, location, availableTimes, bookings, doctorId } =
    locationHook.state.props;

  const [imageSrc, setImageSrc] = useState(imgSrc);

  const handleImageError = () => {
    setImageSrc(
      'https://kyruus-app-static.kyruus.com/providermatch/atlantic/photos/orig/pmc-avatar-neutral_316x392.png'
    );
  };

  const timeOptions = availableTimes.map((timeSlot) => (
    <TimeSlot timeSlot={timeSlot} name={name} />
  ));

  return (
    <Box>
      <Paper elevation={12} square={false} className="flex stretch">
        <Box sx={{ height: '200px', overflow: 'hidden' }}>
          <img
            className="doctor"
            src={imageSrc}
            onError={handleImageError}
          ></img>
        </Box>
        <Box>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{location}</Typography>
        </Box>
        <Box>{timeOptions}</Box>
      </Paper>
    </Box>
  );
};

export default DoctorPage;
