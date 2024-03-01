import React from 'react';
import { useLocation } from 'react-router-dom';

const DoctorPage = () => {
  const locationHook = useLocation();
  const { imgSrc, name, location, availableTimes, bookings, doctorId } =
    locationHook.state.props;

  return (
    <>
      <h2>Doctor {name}</h2>
      <img src={imgSrc} />
    </>
  );
};

export default DoctorPage;
