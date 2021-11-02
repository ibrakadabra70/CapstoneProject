import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid, Toolbar, IconButton, MenuIcon} from '@mui/material';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";


import {getForms} from './actions/posts';
import Form from './components/Form/Form';
import LoginForm from './components/LoginForm/LoginForm';
import useStyles from './styles';


const App = () =>{
    const classes = useStyles();

    return (
      <Router>
        <Container>
        <Grow in>
         <Container>
           {/*<LoginForm/>*/}
           <Form/>
              <Switch>
                <Route path="./components/LoginForm/LoginForm" exact component={LoginForm}/>
                <Route path="./components/Form/Form" exact component={Form}/>
              </Switch>
         </Container>
        </Grow>
        </Container>
      </Router>
    );
};

export default App;
