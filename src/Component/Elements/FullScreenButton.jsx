import React, { useState } from 'react'
import Button from '@mui/material/Button';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const FullScreenButton = () => {

    const handleChange = () => {
        const element = document.body;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    }

    return <>
        <Button variant="outlined" startIcon={<FullscreenIcon />} onClick={handleChange}>
            Full Screen
        </Button>
    </>

}

export default FullScreenButton;
