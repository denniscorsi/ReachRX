import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const DoctorPaper = styled(Paper)({
  // width: '100px',
  overflow: 'hidden',
});

interface DoctorCardProps {
  imgSrc: string;
  name: string;
  location: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ imgSrc, name, location }) => {
  return (
    <Box>
      <DoctorPaper elevation={12} square={false}>
        <Box sx={{ height: '200px', overflow: 'hidden' }}>
          <img className="doctor" src={imgSrc}></img>
        </Box>
        <Box p={1}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{location}</Typography>
          <Typography variant="body1">{name}</Typography>
        </Box>
      </DoctorPaper>
    </Box>
  );
};

export default DoctorCard;
