import { Box, Toolbar } from '@mui/material';
import React from 'react'
import SwipeableTextMobileStepper from '../Pages/Carousel';
import DrawerAppBar from './AppBar';
import Footer from './Footer';

function HomeCarousel() {
  return (
    
    <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
        <div>
        <DrawerAppBar/>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <SwipeableTextMobileStepper sx={{ width: '100%', height: '100%' }} />
        </div>
        <Footer/>
      </Box>
  )
}

export default HomeCarousel;