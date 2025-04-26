import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AppImages } from '../../../constants/AppImages';
import { JoinFullSharp } from '@mui/icons-material';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AskQueastion = ({ open, setOpen }) => {


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >

                <DialogContent >
                    <DialogContentText id="alert-dialog-slide-description">
                        <div style={{ width: '100%' }}>

                            <h5>

                                Ask Queastion
                            </h5>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10,  }}>
                                <div>
                                    <img src={AppImages.cardimg1} style={{ width: 100,borderRadius:10 }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                                    <span>Wide long shirt</span>
                                    <span>$19.5</span>

                                </div>
                            </div>
                            <div>
                                <h5>Your Question</h5>
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                                    noValidate
                                    autoComplete="off">
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        placeholder='Message' />

                                </Box>

                            </div>
                        </div>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Send</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
