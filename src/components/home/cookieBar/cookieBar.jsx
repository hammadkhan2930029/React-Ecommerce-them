import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

export const CookieBar = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setTimeout(() => {

            setVisible(true);
        }, 3000);
    }, [])

    const handleAccept = () => {


        setVisible(false);

        // localStorage.setItem("cookiesAccepted", "true"); // optional
    };


    const handleDecline = () => {
        setVisible(false);
        // localStorage.setItem("cookiesAccepted", "false"); // optional
    };

    if (!visible) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                bgcolor: '#1c1c1c',
                color: '#fff',
                zIndex: 9999,
                px: 3,
                py: 2,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Typography variant="body2" sx={{ flex: 1 }}>
                We use cookies to improve our site and your shopping experience. By continuing to browse our site you accept our cookie policy.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor:  'var(--text-hover-color)',
                        color: '#fff',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color:'var(--text-hover-color)',
                            border:'1px solid',
                            borderColor:'var(--text-hover-color)',
                        },
                    }}
                    onClick={handleAccept}
                >
                    Accept
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#1c1c1c',
                             border:'1px solid',
                            borderColor:'var(--text-hover-color)',
                        },
                    }}
                    onClick={handleDecline}
                >
                    Decline
                </Button>
            </Box>
        </Box>
    );
};


