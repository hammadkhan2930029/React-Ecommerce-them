import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./blogs_details_breadCrumb.css"
import { motion, useInView } from "framer-motion";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Blogs_details_Breadcrumb = () => {

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
      <div className='checkOut_BreadCrumb'>
        <span className='checkOut_breadCrumb_heading'>Blogs</span>

        <Breadcrumbs aria-label="breadcrumb">

          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
           blogs details
          </Link>
          {/* <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            checkout
          </Link> */}
        </Breadcrumbs>
      </div>
    </motion.div>
  );
}
