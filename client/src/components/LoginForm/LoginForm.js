import React, { useState } from 'react';
import {Container, AppBar, Typography, Grow, Grid, Toolbar, IconButton, MenuIcon, Paper, TextField, FormControlLabel, Checkbox, Link, Button, Avatar} from '@mui/material';
import useStyles from './styles';
//import {BrowserRouter, Switch, Route} from 'react-router-dom';

const LoginForm = () => {
    const classes = useStyles();
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
      <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <hr/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography > Don't have an account? 
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default LoginForm;

