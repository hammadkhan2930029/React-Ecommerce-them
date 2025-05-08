import React from 'react';
import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';

export const BankDetailsForm = () => {
  return (
    <Paper  sx={{ p: 4, backgroundColor: '#f9f9f9',width:'100%' }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Bank Details
      </Typography>

      <Grid  spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Bank Account Number" placeholder="Enter Bank Account Number" sx={{marginTop:2,backgroundColor:'#fff'}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Bank Name" placeholder="Enter Bank Name" sx={{marginTop:2,backgroundColor:'#fff'}} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Holder Name" placeholder="Enter Bank Holder Name" sx={{marginTop:2,backgroundColor:'#fff'}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Swift" placeholder="Enter Swift Code" sx={{marginTop:2,backgroundColor:'#fff'}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="IFSC" placeholder="Enter IFSC Code" sx={{marginTop:2,backgroundColor:'#fff'}}/>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Payment Details
        </Typography>
        <Grid  spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Paypal Email" placeholder="Enter Paypal Email" sx={{marginTop:2,backgroundColor:'#fff'}}/>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4} display="flex" justifyContent="flex-end">
        <Button variant="contained" sx={{ backgroundColor: "var(--text-hover-color)", color: '#fff' }}>
          Save
        </Button>
      </Box>
    </Paper>
  );
};

