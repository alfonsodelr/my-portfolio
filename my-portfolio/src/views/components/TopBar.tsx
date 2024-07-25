import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import Image from 'next/image';
import styles from "@/styles/Homepage.module.css";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Box>
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          </Box>
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;