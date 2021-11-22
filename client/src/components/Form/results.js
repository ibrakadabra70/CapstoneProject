import React, {useState} from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';
import useStyles from './styles';
import { Box, grid } from '@mui/system';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import Form from './Form.js';

const results = () => {

    return (
        <Typography variant="h6" align="center">Please Enter Project information</Typography>

    );
};

export default results;