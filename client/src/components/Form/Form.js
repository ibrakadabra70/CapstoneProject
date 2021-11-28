import React, {useState} from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';
import useStyles from './styles';
import { Box, grid } from '@mui/system';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import {sendForm} from '../../actions/posts';




const Form = () => {
    

    const[formData, setFormData] = useState({
        projectName: '',
        numberOfHomes: '',
        electricHeating: '',
        gasHeating: '',
        squareFootagePerHome: '',
        numberOfEV: '',
        transformerSize: ''
    });

    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    

    const handleSubmit = (e) => {
        e.preventDefault();

        let diversityFactor = [1, 0.9, 0.75, 0.65, 0.63, 0.62, 0.61, 0.61, 0.61, 0.61, 0.6, 0.59, 0.58, 0.58, 0.57, 0.57, 0.56, 0.54, 0.54, 0.54];
        let zValueWinter = [
            16,
            24,
            40,
            60,
            80,
            120,
            160,
            267
        ]
        let transformerSizeWinter= [10, 15, 25, 37.5, 50, 75, 100, 167]
        let electricWinter = 0;
        let zElectric = 0;
        let indexElectric = 0;
        let gasWinter = 0;
        let zGas = 0;
        let indexGas = 0
        

        let sum = 0;
        
        let index = 0;

        let projectTransformerSize = 0;

        function calculateTransformerSize(transformerSize)
        {
            let transformerCost = 0;
            switch (transformerSize) {
                case 10:
                    transformerCost = 1056;
                    return transformerCost;
                case 15:
                    transformerCost = 1108;
                    return transformerCost;
                case 25:
                    transformerCost = 1425;
                    return transformerCost;
                case 30:
                    transformerCost = 1465;
                    return transformerCost;
                case 37.5:
                    transformerCost = 1323;
                    return transformerCost;
                case 45:
                    transformerCost = 1813;
                    return transformerCost;
                case 50 :
                    transformerCost = 1841;
                    return transformerCost;
                case 75 :
                    transformerCost = 2282;
                    return transformerCost;
                case 100 :
                    transformerCost = 3117;
                    return transformerCost;
                case 112.5 :
                    transformerCost = 3900;
                    return transformerCost;
                case 150 :
                    transformerCost = 5015;
                    return transformerCost;
                case 167:
                    transformerCost = 5200;
                    return transformerCost; 
                case 200 :
                    transformerCost = 5486;
                    return transformerCost;
                case 225 :
                    transformerCost = 6935;
                    return transformerCost;
                case 300 :
                    transformerCost = 8200;
                    return transformerCost;
                default:
                    break;
            }
        }




        if(parseInt(formData.numberOfHomes) > '20')
        {
            alert("Maximum number of houses is 20, Please input correct values");
            clear();
            return;
        }
        else if(parseInt(formData.electricHeating) + parseInt(formData.gasHeating) !== parseInt(formData.numberOfHomes))
        {
            alert("Sum of Homes with Electrical Heating and Gas Heating must equal total number of homes");
            clear();
            return;
        }
        else
        {
            if (formData.electricHeating !== '0' && (formData.gasHeating === '0' || formData.gasHeating === '') ) {
                if (parseInt(formData.squareFootagePerHome) < 1200) {
                    electricWinter = parseInt(formData.electricHeating) * 15;
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric]; 
                    console.log(indexElectric);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1200 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 1500) {
                    electricWinter = parseInt(formData.electricHeating) * 18;
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(indexElectric);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1500 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 1800) {
                    electricWinter = parseInt(formData.electricHeating) * 20;
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(electricWinter);
                    console.log(indexElectric);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1800 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 2400) {
                    electricWinter = parseInt(formData.electricHeating) * 21;
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(indexElectric);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (2400 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 3000) {
                    electricWinter = parseInt(formData.electricHeating) * 26;
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(indexElectric);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                }
                else{
                    console.log("square footage out of range")
                }
            }
            else if(formData.gasHeating !== "0" && (formData.electricHeating === '0' || formData.electricHeating === ''))
            {
                if (parseInt(formData.squareFootagePerHome) < 1200) {
                    gasWinter = parseInt(formData.gasHeating) * 8;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1200 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 1500) {
                    gasWinter = parseInt(formData.gasHeating) * 10;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1500 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 1800) {
                    gasWinter = parseInt(formData.gasHeating) * 11;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(gasWinter);
                    console.log(indexGas);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1800 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 2400) {
                    gasWinter = parseInt(formData.gasHeating) * 12;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (2400 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 3000) {
                    gasWinter = parseInt(formData.gasHeating) * 14;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                }
                else{
                    console.log("square footage out of range")
                }
            }
            else{
                if (parseInt(formData.squareFootagePerHome) < 1200) {
                    gasWinter = parseInt(formData.gasHeating) * 8;
                    electricWinter = parseInt(formData.electricHeating) * 15;
                    zGas = gasWinter *  diversityFactor[parseInt(formData.gasHeating) - 1];
                    zElectric = electricWinter * diversityFactor[parseInt(formData.electricHeating) - 1];
                    sum = zGas + zElectric;
    
                    index = zValueWinter.findIndex(function(number) {
                        return number > sum;
                    });
                    projectTransformerSize = transformerSizeWinter[index];
                    console.log(gasWinter);
                    console.log(electricWinter);
                    console.log(index);
                    console.log(sum);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1200 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 1500) {
                    gasWinter = parseInt(formData.gasHeating) * 10;
                    electricWinter = parseInt(formData.electricHeating) * 18;
                    zGas = gasWinter *  diversityFactor[parseInt(formData.gasHeating) - 1];
                    zElectric = electricWinter * diversityFactor[parseInt(formData.electricHeating) - 1];
                    sum = zGas + zElectric;
                    
                    index = zValueWinter.findIndex(function(number) {
                        return number > sum;
                    });
                    projectTransformerSize = transformerSizeWinter[index];
                    console.log(gasWinter);
                    console.log(electricWinter);
                    console.log(index);
                    console.log(sum);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1500 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 1800) {
                    gasWinter = parseInt(formData.gasHeating) * 11;
                    electricWinter = parseInt(formData.electricHeating) * 20;
                    zGas = gasWinter *  diversityFactor[parseInt(formData.gasHeating) - 1];
                    zElectric = electricWinter * diversityFactor[parseInt(formData.electricHeating) - 1];
                    sum = zGas + zElectric;
                    
                    index = zValueWinter.findIndex(function(number) {
                        return number > sum;
                    });
                    projectTransformerSize = transformerSizeWinter[index];
                    console.log(gasWinter);
                    console.log(electricWinter);
                    console.log(index);
                    console.log(sum);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (1800 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 2400) {
                    gasWinter = parseInt(formData.gasHeating) * 12;
                    electricWinter = parseInt(formData.electricHeating) * 21;
                    zGas = gasWinter *  diversityFactor[parseInt(formData.gasHeating) - 1];
                    zElectric = electricWinter * diversityFactor[parseInt(formData.electricHeating) - 1];
                    sum = zGas + zElectric;
                    
                    index = zValueWinter.findIndex(function(number) {
                        return number > sum;
                    });
                    projectTransformerSize = transformerSizeWinter[index];
                    console.log(gasWinter);
                    console.log(electricWinter);
                    console.log(index);
                    console.log(sum);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                } else if (2400 <= parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) < 3000) {
                    gasWinter = parseInt(formData.gasHeating) * 14;
                    electricWinter = parseInt(formData.electricHeating) * 26;
                    zGas = gasWinter *  diversityFactor[parseInt(formData.gasHeating) - 1];
                    zElectric = electricWinter * diversityFactor[parseInt(formData.electricHeating) - 1];
                    sum = zGas + zElectric;
                    
                    index = zValueWinter.findIndex(function(number) {
                        return number > sum;
                    });
                    projectTransformerSize = transformerSizeWinter[index];
                    console.log(gasWinter);
                    console.log(electricWinter);
                    console.log(index);
                    console.log(sum);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerSize(projectTransformerSize));
                    
                }
                else{
                    console.log("square footage out of range")
                }
            }
        }
        
         
        
       
        
        formData.transformerSize = projectTransformerSize;
       
        
         alert("The Transformer size to be used for this project in KW:" + projectTransformerSize);
        
        

        console.log(formData);
        dispatch(sendForm({ ...formData, email: user?.result?.email }));
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
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name ="project name" variant="outlined" label="Project Name" placeholder="Project Name" fullWidth value={formData.projectName} onChange={(e) => setFormData({ ...formData, projectName: e.target.value})} />
                
                <TextField name ="Number of homes" variant="outlined" label="Number of Homes" placeholder="Number Of Homes" fullWidth value={formData.numberOfHomes} onChange={(e) => setFormData({ ...formData, numberOfHomes: e.target.value})} />
                
                <TextField name ="electric heating" variant="outlined" label="Number of Homes with Electric Heating" placeholder="Number Of Homes with Electric Heating" fullWidth value={formData.electricHeating} onChange={(e) => setFormData({ ...formData, electricHeating: e.target.value})} />
                
                <TextField name ="gas heating" variant="outlined" label="Number of Homes with Gas Heating" placeholder="Number of Homes with Gas Heating " fullWidth value={formData.gasHeating} onChange={(e) => setFormData({ ...formData, gasHeating: e.target.value})} />
                
                <TextField name ="SF" variant="outlined" label="Enter the Maximum S.F of home" placeholder="Maximum Square Footage" fullWidth value={formData.squareFootagePerHome} onChange={(e) => setFormData({ ...formData, squareFootagePerHome: e.target.value})} />
                
                <TextField name ="Electrical Vehicles" variant="outlined" label="Number of Electrical Vehicles" placeholder="Number of Electrical Vehicles" fullWidth value={formData.numberOfEV} onChange={(e) => setFormData({ ...formData, numberOfEV: e.target.value})} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"  type="submit">Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" onClick={clear}>Clear</Button>
           </form>
        </Paper>
        
        

        
    );
};

export default Form;