import React, { ReactNode, useContext } from 'react';
import { Login, Logout, auth } from '~/src/lib/firebase';
import Head from 'next/head';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ColorModeContext from '../context/ColorModeContext';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Outdoor Climbing Tracker
            </Typography>
            <IconButton color='inherit' onClick={colorMode.toggleColorMode}>
              <InvertColorsIcon />
            </IconButton>
            {auth.currentUser ?
              <Button color="inherit" onClick={() => Logout()}>Logout</Button>
              :
              <Button color="inherit" onClick={() => Login()}>Login</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  )
};

export default Layout;
