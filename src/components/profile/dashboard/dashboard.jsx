// import React from "react";
// import './dashboard.css';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import TollIcon from '@mui/icons-material/Toll';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

// export const Dashboard = () => {
//     return (
//         <div className="dashboard">
//             <div className="dashboard_main">
//                 <div className="dashboard_head">
//                     <span className="dashboard_h1">
//                         Hello, MARK JECNO !
//                     </span>
//                     <span className="dashboard_h4">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</span>
//                 </div>
//                 <div className="pricing_div">
//                     <div className="div_one">
//                         <div>
//                             <AccountBalanceWalletIcon className="dashboard_icon" />
//                         </div>
//                         <div className="text_div">
//                             <span className="d_text_1">$12.52</span>
//                             <span className="d_text_2">Total Order</span>

//                         </div>
//                     </div>
//                     <div className="div_one">
//                         <div>
//                             <TollIcon className="dashboard_icon" />
//                         </div>
//                         <div  className="text_div">
//                             <span className="d_text_1">2523</span>
//                             <span className="d_text_2">Total Points</span>

//                         </div>
//                     </div>
//                     <div className="div_one">
//                         <div>
//                             <ViewQuiltIcon className="dashboard_icon" />
//                         </div>
//                         <div className="text_div">
//                             <span className="d_text_1">15</span>
//                             <span className="d_text_2">Total Orders</span>

//                         </div>
//                     </div>

//                 </div>
//                 <div className="dashboard_list">
//                     <span>Account Information</span>
//                     <li>Full Name: John Due</li>
//                     <li>Phone: +1 65558845</li>
//                     <li>Address: 26, Starts Hollow Colony Denver, Colorado, United States 80014</li>

//                 </div>
//                 <div className="login_details">
//                     <span className="login_h1">Login Details</span>
//                     <div style={{display:'flex',justifyContent:'space-between',padding:10,alignItems:'center',width:'70%'}}>
//                         <div className="login_info">
//                             <span className="dashboard_email">Email : john.customer@example.com</span>
//                             <span className="edit">Edit</span>
//                         </div>
//                         <div className="login_info">
//                             <span  className="dashboard_email">Password : 123456</span>
//                             <span className="edit">Edit</span>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     )
// }
// import React from "react";
// import './dashboard.css';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import TollIcon from '@mui/icons-material/Toll';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export const Dashboard = () => {
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div className="dashboard">
//             <div className="dashboard_main">
//                 <div className="dashboard_head">
//                     <span className="dashboard_h1">Hello, MARK JECNO !</span>
//                     <span className="dashboard_h4">
//                         From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.
//                     </span>
//                 </div>

//                 <div className="pricing_div">
//                     <div className="div_one">
//                         <AccountBalanceWalletIcon className="dashboard_icon" />
//                         <div className="text_div">
//                             <span className="d_text_1">$12.52</span>
//                             <span className="d_text_2">Total Order</span>
//                         </div>
//                     </div>
//                     <div className="div_one">
//                         <TollIcon className="dashboard_icon" />
//                         <div className="text_div">
//                             <span className="d_text_1">2523</span>
//                             <span className="d_text_2">Total Points</span>
//                         </div>
//                     </div>
//                     <div className="div_one">
//                         <ViewQuiltIcon className="dashboard_icon" />
//                         <div className="text_div">
//                             <span className="d_text_1">15</span>
//                             <span className="d_text_2">Total Orders</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="dashboard_list">
//                     <span>Account Information</span>
//                     <li>Full Name: John Due</li>
//                     <li>Phone: +1 65558845</li>
//                     <li>Address: 26, Starts Hollow Colony Denver, Colorado, United States 80014</li>
//                 </div>

//                 <div className="login_details">
//                     <span className="login_h1">Login Details</span>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', padding: 10, alignItems: 'center', width: '70%' }}>
//                         <div className="login_info">
//                             <span className="dashboard_email">Email : john.customer@example.com</span>
//                             <span className="edit" onClick={handleClickOpen}>Edit</span>
//                         </div>
//                         <div className="login_info">
//                             <span className="dashboard_email">Password : 123456</span>
//                             <span className="edit" onClick={handleClickOpen}>Edit</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Dialog Box email*/}
//             <Dialog
//                 open={open}
//                 TransitionComponent={Transition}
//                 keepMounted
//                 onClose={handleClose}
//                 aria-describedby="alert-dialog-slide-description"
//             >
//                 <DialogTitle>Update Email</DialogTitle>
//                 <DialogContent>
//                     <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
//                         <label htmlFor="email">New Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             required
//                             placeholder="Enter new email"
//                             style={{
//                                 padding: '8px',
//                                 borderRadius: '4px',
//                                 border: '1px solid #ccc',
//                                 fontSize: '16px',
//                                 width: '100%',
//                             }}
//                         />
//                     </form>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button onClick={() => {
//                         // Yahan aap handleSave function bana sakte hain
//                         alert("Email updated successfully!");
//                         handleClose();
//                     }}>
//                         Save
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//         </div>
//     );
// };
import React from "react";
import './dashboard.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TollIcon from '@mui/icons-material/Toll';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useScreenWidth from "../../../hooks/screenWidth";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Dashboard = () => {
    const screenWidth = useScreenWidth()
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        fullName: 'john due',
        email: 'john.customer@example.com',
        phone: '(+1) 65558845',
    });

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log('Updated Info:', formData);
        alert('Profile updated successfully!');
        handleClose();
    };

    return (
        <div className="dashboard">
            <div className="dashboard_main">
                <div className="dashboard_head">
                    <span className="dashboard_h1">Hello, MARK JECNO !</span>
                    <span className="dashboard_h4">
                        From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.
                    </span>
                </div>

                <div className="pricing_div">
                    <div className="div_one">
                        <AccountBalanceWalletIcon className="dashboard_icon" />
                        <div className="text_div">
                            <span className="d_text_1">$12.52</span>
                            <span className="d_text_2">Total Order</span>
                        </div>
                    </div>
                    <div className="div_one">
                        <TollIcon className="dashboard_icon" />
                        <div className="text_div">
                            <span className="d_text_1">2523</span>
                            <span className="d_text_2">Total Points</span>
                        </div>
                    </div>
                    <div className="div_one">
                        <ViewQuiltIcon className="dashboard_icon" />
                        <div className="text_div">
                            <span className="d_text_1">15</span>
                            <span className="d_text_2">Total Orders</span>
                        </div>
                    </div>
                </div>

                <div className="dashboard_list">
                    <span>Account Information</span>
                    <li>Full Name: {formData.fullName}</li>
                    <li>Phone: {formData.phone}</li>
                    <li>Address: 26, Starts Hollow Colony Denver, Colorado, United States 80014</li>
                </div>

                <div className="login_details">
                    <span className="login_h1">Login Details</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 10, alignItems: 'center', width: screenWidth < 575 ? "100%" : '70%' }}>
                        <div className="login_info">
                            <span className="dashboard_email">Email : {formData.email}</span>
                            <span className="edit" onClick={handleClickOpen}>Edit</span>
                        </div>
                        <div className="login_info">
                            <span className="dashboard_email">Password : *******</span>
                            <span className="edit" onClick={handleClickOpen}>Edit</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Updated Dialog Box */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="edit-profile-form"
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Edit Profile
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ color: '#c10037' }} />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        sx={{ borderColor: '#c10037', color: '#333', textTransform: 'none' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{
                            backgroundColor: '#c10037',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#d56a34',
                            },
                        }}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

