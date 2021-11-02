import React, {useState} from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';
import useStyles from './styles';
import { Box, grid } from '@mui/system';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {sendForm} from '../../actions/posts'


const Form = () => {
    const[formData, setFormData] = useState({
        projectName: '',
        numberOfHomes: '',
        electricHeating: '',
        gasHeating: '',
        squareFootagePerHome: '',
        numberOfEV: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(sendForm(formData));
        clear();
      };

    // clears the form
    const clear = async (e) => {
        setFormData({
            projectName: '',
            numberOfHomes:'',
            electricHeating:'',
            gasHeating: '',
            squareFootagePerHome:'',
            numberOfEV:''
        });
    }
    return (
        <Paper>
            <Typography variant="h6" align="center">Please Enter Project information</Typography>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField name ="project name" variant="outlined" label="Project Name" placeholder="Project Name" fullWidth value={formData.projectName} onChange={(e) => setFormData({ ...formData, projectName: e.target.value})} />
                <hr/>
                <TextField name ="Number of homes" variant="outlined" label="Number of Homes" placeholder="Number Of Homes" fullWidth value={formData.numberOfHomes} onChange={(e) => setFormData({ ...formData, numberOfHomes: e.target.value})} />
                <hr/>
                <TextField name ="electric heating" variant="outlined" label="Number of Homes with Electric Heating" placeholder="Number Of Homes with Electric Heating" fullWidth value={formData.electricHeating} onChange={(e) => setFormData({ ...formData, electricHeating: e.target.value})} />
                <hr/>
                <TextField name ="gas heating" variant="outlined" label="Number of Homes with Gas Heating" placeholder="Number of Homes with Gas Heating " fullWidth value={formData.gasHeating} onChange={(e) => setFormData({ ...formData, gasHeating: e.target.value})} />
                <hr/>
                <TextField name ="SF" variant="outlined" label="Enter the Maximum S.F of home" placeholder="Maximum Square Footage" fullWidth value={formData.squareFootagePerHome} onChange={(e) => setFormData({ ...formData, squareFootagePerHome: e.target.value})} />
                <hr/>
                <TextField name ="Electrical Vehicles" variant="outlined" label="Number of Electrical Vehicles" placeholder="Number of Electrical Vehicles" fullWidth value={formData.numberOfEV} onChange={(e) => setFormData({ ...formData, numberOfEV: e.target.value})} />
                <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                <Button variant="contained" color="secondary" size="large" onClick={clear}>Clear</Button>
           </form>
        </Paper>
    );
};

export default Form;