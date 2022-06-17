import React from 'react'
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const HideOverlay = () => {
    return <>
        <Button variant="outlined" startIcon={<VisibilityOffIcon />}>
            Hide Overlay
        </Button>
    </>
}

export default HideOverlay
