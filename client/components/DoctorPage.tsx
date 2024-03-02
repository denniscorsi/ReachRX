import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Paper, Box } from '@mui/material';
import TimeSlot from './TimeSlot';

const DoctorPage: React.FC = () => {
  const locationHook = useLocation();
  const { imgSrc, name, location, availableTimes } = locationHook.state.props;

  const [imageSrc, setImageSrc] = useState<string>(imgSrc);

  // Replace image with default if link is broken or missing
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
        <Box margin={2}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{location}</Typography>
        </Box>
        <Box margin={2}>{timeOptions}</Box>
      </Paper>
    </Box>
  );
};

export default DoctorPage;
