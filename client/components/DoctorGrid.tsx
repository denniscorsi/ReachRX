import React from 'react';
import { useQuery } from 'react-query';
import DoctorCard from './DoctorCard';

import Grid from '@mui/material/Grid';

const fetchDoctors = async () => {
  const response = await fetch('/doctors');
  const doctors = await response.json();
  return doctors;
};

const DoctorGrid = () => {
  const { data, isLoading } = useQuery('doctors', fetchDoctors);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  const Doctors = data.map((doctor) => (
    <Grid item xs={4}>
      <DoctorCard
        imgSrc={doctor.imgSrc}
        name={doctor.name}
        location={doctor.location}
        availableTimes={doctor.availableTimes}
        bookings={doctor.bookings}
        doctorId={doctor._id}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {Doctors}
    </Grid>
  );
};

export default DoctorGrid;
