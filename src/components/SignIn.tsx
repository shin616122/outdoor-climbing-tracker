import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { Box, createTheme, ThemeProvider } from "@mui/system";
import React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Login } from "~/src/lib/firebase";
import GoogleIcon from '@mui/icons-material/Google';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Outdoor climbing tracker
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn() {
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/featured/?rock-climbing)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? '#BEBEBE' : '#303030',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => Login()}
                        >
                            <GoogleIcon /> Sign In with Google
                        </Button>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}