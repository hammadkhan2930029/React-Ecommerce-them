import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./breadcrums.css"
import { motion, useInView } from "framer-motion";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const ActiveBreadcrumb = () => {
  const refOne = React.useRef(null);
  const inViewOne = useInView(refOne, { triggerOnce: false });
  return (
    <motion.div role="presentation"
      onClick={handleClick}
      className='bradCrums'
      ref={refOne}
      initial={{ opacity: 0, y: -100 }}
      animate={inViewOne ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: .8 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </motion.div>
  );
}
