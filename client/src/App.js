import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid, Toolbar, IconButton, MenuIcon} from '@mui/material';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';


import {getForms} from './actions/posts';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';

import useStyles from './styles';

import ButtonAppBar from './components/Navbar/Navbar';



const App = () => (
  <Router>
    <Container maxWidth="lg">
      <Grid item xs={12} sm={14}>
        <ButtonAppBar />
      </Grid>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Container>
  </Router>
);

export default App;
