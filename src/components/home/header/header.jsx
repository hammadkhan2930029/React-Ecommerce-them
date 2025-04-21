import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftDrawer from '../drawer/drawer'
import { AppImages } from '../../../constants/AppImages';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import useScreenWidth from '../../../hooks/screenWidth';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './header.css'
import RightDrawer from '../drawer/drawerRight';
import { motion, useInView } from "framer-motion";




export const Header = () => {


  const [OpenDrawer, setOpenDrawer] = React.useState(false)
  const [OpenDrawerRight, setOpenDrawerRight] = React.useState(false)
  const screenWidth = useScreenWidth()
  // --------------------------------------
  const refOne = React.useRef(null);

  const inViewOne = useInView(refOne, { triggerOnce: true });




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
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', padding: 1 }}>
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
                <span className='menutext'>Home</span>
                <span className='menutext'>Shop</span>
                <span className='menutext'>Deal</span>
                <span className='menutext'> About</span>
                <span className='menutext'>Contact</span>
                <SearchIcon sx={{ fontSize: 30, color: '#000', marginRight: '10px', cursor: 'pointer' }} />
                <ShoppingCartIcon sx={{ fontSize: 30, color: '#000', marginRight: '10px', cursor: 'pointer' }} />

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
