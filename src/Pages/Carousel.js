import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    description: `“Saving on dog will not change the world, but surely for that one dog, the world will change forever.”`,
    backgroundImage: 'https://img.freepik.com/free-photo/3d-rendering-cartoon-like-dog_23-2150780984.jpg?semt=ais_user',
  },
  {
    description: '“Dogs have given us their absolute all. We are the center of their universe. We are the focus of their love and faith and trust. They serve us in return for scraps. It is without a doubt the best deal man has ever made.”',
    backgroundImage: 'https://img.freepik.com/premium-photo/amazing-lovely-best-this-photo-take-this-picture-your-work-ai-generated-top-wonderful-photo_1078211-225325.jpg?semt=ais_user',
  },
  {
    description: `“Fall in love with a dog, and in many ways you enter a new orbit, a universe that features not just new colors but new rituals, new rules, a new way of experiencing attachment.”`,
    backgroundImage: 'https://img.freepik.com/free-photo/ai-generated-labrador-retriever-dog-picture_23-2150644882.jpg?ga=GA1.1.65729746.1719653371&semt=ais_user',
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        width: '100vw',
        backgroundImage: `url(${steps[activeStep].backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        textAlign: 'center',
        padding: theme.spacing(0),
        position: 'relative',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: theme.spacing(3),
        }}
      >
        <Typography variant="h2" sx={{ mb: 3, color:'white' }}>
          {steps[activeStep].description}
        </Typography>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              position: 'absolute',
              top: theme.spacing(70),
              right: theme.spacing(4),
              color: '#fff',
            }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              position: 'absolute',
              top: theme.spacing(70),
              left: theme.spacing(4),
              color: '#fff',
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
