import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Typography, Chip, Paper, Box, Button } from '@mui/material';
import EventBusyRoundedIcon from '@mui/icons-material/EventBusyRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';

const DoctorPaper = styled(Paper)({
  // width: '100px',
  overflow: 'hidden',
});

interface timeSlot {
  date: Date;
  time: number;
}

interface DoctorCardProps {
  imgSrc: string;
  name: string;
  location: string;
  availableTimes: Array<timeSlot>;
  bookings: Array<timeSlot>;
  doctorId: any;
}

const DoctorCard: React.FC<DoctorCardProps> = (props) => {
  const { imgSrc, name, location, availableTimes, bookings, doctorId } = props;

  const isAvailable = availableTimes.length > 0;

  let availability: string = 'no available slots';
  let icon = <EventBusyRoundedIcon />;
  if (isAvailable) {
    availability = 'available slots';
    icon = <EventAvailableRoundedIcon />;
  }

  const navigate = useNavigate();

  const goToDoctor = () => {
    navigate('/doctor', { state: { props } });
  };

  return (
    <Box>
      <DoctorPaper elevation={12} square={false}>
        <Box sx={{ height: '200px', overflow: 'hidden' }}>
          <img className="doctor" src={imgSrc}></img>
        </Box>
        <Box p={1}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{location}</Typography>
          <Box className="flex" paddingTop={1}>
            <Chip
              icon={icon}
              label={availability}
              disabled={!isAvailable}
              color={'primary'}
            />
            {isAvailable && (
              <Button variant="contained" onClick={goToDoctor}>
                Book Time
              </Button>
            )}
          </Box>
        </Box>
      </DoctorPaper>
    </Box>
  );
};

export default DoctorCard;
