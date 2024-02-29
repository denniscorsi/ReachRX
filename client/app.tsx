import React from 'react';
import Header from './components/Header';
import DoctorCard from './DoctorCard';
import Grid from '@mui/material/Grid';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DoctorCard
            imgSrc={
              'https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg'
            }
            name="Doctor Maggie"
            location="New York, NY"
          />
        </Grid>
        <Grid item xs={4}>
          <DoctorCard
            imgSrc={
              'https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/03/board-certified-doctor-meaning.webp'
            }
            name="Doctor Maggie"
            location="New York, NY"
          />
        </Grid>
        <Grid item xs={4}>
          <DoctorCard
            imgSrc={
              'https://www.hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/healthu-images/patient-perspectives/20220826-ofer-avi-werthaim-md.png'
            }
            name="Doctor Maggie"
            location="New York, NY"
          />
        </Grid>
        <Grid item xs={4}>
          <DoctorCard
            imgSrc={
              'https://images.ctfassets.net/pxcfulgsd9e2/3SeHNiR1vj8XTHzdTHHDnU/95d6df23dbdc6c587581ac3bd49e787c/Primary-care-duplex-hero-3840x2160.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396'
            }
            name="Doctor Maggie"
            location="New York, NY"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
