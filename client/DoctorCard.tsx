import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const DoctorPaper = styled(Paper)({
  // width: '100px',
  overflow: 'hidden',
});

interface DoctorCardProps {
  imgSrc: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ imgSrc }) => {
  return (
    <Box>
      <DoctorPaper elevation={12} square={false}>
        <Box sx={{ height: '200px', overflow: 'hidden' }}>
          <img className="doctor" src={imgSrc}></img>
        </Box>
        <Box>
          <p>info</p>
          <p>info</p>
          <p>info</p>
        </Box>
      </DoctorPaper>
    </Box>
  );
};

export default DoctorCard;
