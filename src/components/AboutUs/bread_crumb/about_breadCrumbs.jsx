import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./about_breadCrumbs.css"
import { motion, useInView } from "framer-motion";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const About_breadCrumbs = () => {
  const refOne = React.useRef(null);
  const inViewOne = useInView(refOne, { triggerOnce: false });
  return (
    <motion.div role="presentation"
      onClick={handleClick}
      className='bradCrums'
      ref={refOne}
      initial={{ opacity: 0, y: -100 }}
      animate={inViewOne ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: .8 }}
    >
      <div className='cartBreadCrumb'>
        <span className='breadCrumb_heading'>About Us</span>

        <Breadcrumbs aria-label="breadcrumb">

          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
          about us
          </Link>
          {/* <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Cart
          </Link> */}
        </Breadcrumbs>
      </div>
    </motion.div>
  );
}
