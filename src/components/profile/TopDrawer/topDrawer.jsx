import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { AppImages } from '../../../constants/AppImages';
import { useDispatch } from 'react-redux';
import { setSelectedItemId } from '../../../Redux/sliceData';


export default function TopDrawer({ open, onClose }) {

  const [click, setClick] = React.useState(0);

  const dispatch = useDispatch();
   const handleClick = (id) => {
    dispatch(setSelectedItemId(id))
    console.log('id ', id)

  }
// -----------------------------------------

  const menuItems = [
    { id: 1, label: 'Dashboard', icon: <HomeOutlinedIcon /> },
    { id: 2, label: 'Notifications', icon: <NotificationsNoneOutlinedIcon /> },
    { id: 3, label: 'Bank Details', icon: <AccountBalanceOutlinedIcon /> },
    { id: 4, label: 'My Wallet', icon: <AccountBalanceWalletOutlinedIcon /> },
    { id: 5, label: 'Earning Points', icon: <TollOutlinedIcon /> },
    { id: 6, label: 'My Orders', icon: <AssignmentOutlinedIcon /> },
    { id: 7, label: 'Refund History', icon: <PaidOutlinedIcon /> },
    { id: 8, label: 'Save Address', icon: <LocationOnOutlinedIcon /> },
  ];
 

  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <div style={{ padding: 20, backgroundColor: '#f9f9f9' }}>
        {/* Close Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <CloseIcon />
          </button>
        </div>

        {/* User Info */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
          <img
            src={AppImages.owner1}
            alt="user"
            style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 15 }}
          />
          <div>
            <div style={{ fontWeight: 'bold', fontSize: 16 }}>John Due</div>
            <div style={{ color: '#666' }}>john.customer@example.com</div>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {menuItems.map(item => (
            <div
              key={item.id}
              onClick={() =>{ 
                setClick(item.id)
                handleClick(item.id)
                onClose()
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 15px',
                borderRadius: 8,
                cursor: 'pointer',
                backgroundColor: click === item.id ? '#c10037' : '#fff',
                color: click === item.id ? '#fff' : '#000',
                transition: 'all 0.2s ease-in-out',
              }}
            >
              {React.cloneElement(item.icon, { style: { color: click === item.id ? '#fff' : '#000' } })}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Logout */}
        <div style={{ marginTop: 30, textAlign: 'center' }}>
          <span
            onClick={() => alert('Logout')}
            style={{
              color: '#c10037',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Logout
          </span>
        </div>
      </div>
    </Drawer>
  );
}
