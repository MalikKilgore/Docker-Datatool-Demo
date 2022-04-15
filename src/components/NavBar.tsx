import React from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}Menu
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Data Tool
          </Typography>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}> 
            <Button color="inherit">Upload</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
