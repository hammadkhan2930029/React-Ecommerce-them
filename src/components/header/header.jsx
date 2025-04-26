import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftDrawer from '../home/drawer/drawer'
import { AppImages } from '../../constants/AppImages';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import useScreenWidth from '../../hooks/screenWidth';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './header.css'
import RightDrawer from '../home/drawer/drawerRight';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { motion, useInView } from "framer-motion";




export const Header = () => {



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // -------------------------------------------------


  const [OpenDrawer, setOpenDrawer] = React.useState(false)
  const [OpenDrawerRight, setOpenDrawerRight] = React.useState(false)
  const screenWidth = useScreenWidth()
  // --------------------------------------
  const refOne = React.useRef(null);

  const inViewOne = useInView(refOne, { triggerOnce: true });
  // -----------------------------------------------
  const menuItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "Feature" },
    { id: 3, title: "Product" },
    { id: 4, title: "Shop" },
    { id: 5, title: "Deal" },
    { id: 6, title: "About" },
    { id: 7, title: "Contact" }
  ];






  return (
    <Box sx={{ flexGrow: 1 }}>
      {screenWidth < 600 ? null : (
        <motion.div className="header-container"
          ref={refOne}
          initial={{ opacity: 0, x: -100 }}
          animate={inViewOne ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: .8 }}>
          <motion.div className="header-left">
            <span>Welcome to Our Store</span>
            <motion.div className="call-info">
              <PhoneIcon style={{ color: 'orange' }} />
              <span className='text'>Call Us: +92-311-9988080</span>
            </motion.div>
          </motion.div>
          <motion.div className="header-right">
            <motion.div className="login-register">
              <PersonIcon />
              <span className='text'>Login</span>
            </motion.div>
            <motion.div className="login-register">
              <PersonIcon />
              <span className='text'>Register</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <motion.div
      >
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', }}>
          <Toolbar>
            <IconButton
              onClick={() => setOpenDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon style={{ fontSize: 32 }} />
            </IconButton>
            <img src={AppImages.logo}
              alt="Logo"
              style={{
                maxWidth: '80px',
                width: '20%',
                height: 'auto',
                objectFit: 'contain',
              }} />
            {screenWidth < 1100 ? (
              <motion.div className='menuItems'>
                <IconButton
                  onClick={() => setOpenDrawerRight(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuOpenIcon className='icon' style={{ fontSize: 32, color: 'orange' }} />
                </IconButton>
              </motion.div>
            ) : (
              <motion.div className='menuItems'
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>
                {menuItems.map((item, index) => (

                  <span key={item.id} className='menutext'  onClick={handleClick}>
                    {item.title}
                    {item.title.toLowerCase() === 'home' ? null : (<KeyboardArrowDownOutlinedIcon className='menuIcon' sx={{ fontSize: 20, fontWeight: 500, color: "#000" }} />)}</span>
                ))}

                <SearchIcon className='menuIcon' sx={{ fontSize: 30, color: '#000', marginRight: '10px', cursor: 'pointer' }} />
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon className='menuIcon' sx={{ fontSize: 30, color: '#000', cursor: 'pointer' }} />
                </Badge>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </motion.div>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>
      <LeftDrawer open={OpenDrawer} onClose={() => setOpenDrawer(false)} />
      <RightDrawer open={OpenDrawerRight} onClose={() => setOpenDrawerRight(false)} />
    </Box>
  );
}
