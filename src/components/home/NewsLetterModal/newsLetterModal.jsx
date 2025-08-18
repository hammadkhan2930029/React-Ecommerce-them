
import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AppImages } from '../../../constants/AppImages';

export const NewsLetter = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 3000); // 3 second delay
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="newsletter-modal-title"
            aria-describedby="newsletter-modal-description"

        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {
                        xs: '90%',  // for small screens
                        sm: '70%',
                        md: '50%',
                        lg: '40%',
                    },
                    bgcolor: 'background.paper',
                    // boxShadow: 24,
                    borderRadius: 2,
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '4px dashed ',
                    borderColor:'var(--text-hover-color)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 5,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
            >
                <Box sx={{ alignSelf: 'flex-end' }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ width: '100%', mb: 2 }}>
                    <img
                        src={AppImages.newsletter}
                        alt="Newsletter"
                        style={{
                            width: '100%',
                            height: '150px',
                            borderRadius: 8,
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', mb: 2 }}>
                    Newsletter
                </Typography>

                <TextField
                    fullWidth
                    placeholder="Enter your email"
                    variant="outlined"
                    type="email"
                    sx={{
                        mb: 2,
                        input: { textAlign: 'center', fontSize: '16px' }
                    }}
                />

                <Button
                    variant="contained"
                    onClick={() => { }} 
                    sx={{
                        backgroundColor: 'var(--text-hover-color)',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        borderRadius: 1,
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                            backgroundColor: '#a1002c'
                        }
                    }}
                >
                    Subscribe
                </Button>
            </Box>
        </Modal>
    );
};
