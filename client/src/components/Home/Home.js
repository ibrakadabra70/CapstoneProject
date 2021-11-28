import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid, Toolbar, IconButton, MenuIcon} from '@mui/material';
import {useDispatch} from "react-redux";
import axios from "axios";
import {useHistory} from 'react-router-dom';


import {sendForm, getForms} from '../../actions/posts';
import Form from '../Form/Form';
import Projects from '../Projects/Projects';

import useStyles from './styles';

import ButtonAppBar from '../Navbar/Navbar';



const Home = () =>{
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
      dispatch(getForms());
    }, [dispatch]);
    

    return (
      <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Projects />
          </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>


    );
};

export default Home;
