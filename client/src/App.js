import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid, Toolbar, IconButton, MenuIcon} from '@mui/material';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';


import {getForms} from './actions/posts';
import Form from './components/Form/Form';
import LoginForm from './components/LoginForm/LoginForm';
import results from './components/Form/results';
import useStyles from './styles';


const App = () =>{
    const classes = useStyles();
    const history = useHistory();


    return (
      <Router>
        <Container>
        <Grow in>
         <Container>
           {/*<LoginForm/>*/}
           <Form/>
              <Switch>
                <Route path="/components/LoginForm/LoginForm" exact component={LoginForm}/>
                <Route path="/components/Form/Form" exact component={Form}/>
                <Route path="/components/Form/results" exact component={results}/>
              </Switch>
         </Container>
        </Grow>
        </Container>
      </Router>
    );
};

export default App;
