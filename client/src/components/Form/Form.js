import React, {useState} from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';
import useStyles from './styles';
import { Box, grid } from '@mui/system';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useRadioGroup } from '@mui/material/RadioGroup';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { Radio, RadioGroup } from '@mui/material';


import {sendForm} from '../../actions/posts';




const Form = () => {
    

    const[formData, setFormData] = useState({
        projectName: '',
        numberOfHomes: '',
        electricHeating: '',
        gasHeating: '',
        squareFootagePerHome: '',
        transformerSize: '',
        transformerCost:'',
        totalSavings:''
    });

    const [dropdown, setDropdown] = useState("no");

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
        let transformerCostArr = [1056, 1108, 1425, 1323, 1841, 2282, 3117, 5015, 5200, 5486, 6935, 8200];
        let transformerSizeWinter= [10, 15, 25, 37.5, 50, 75, 100, 167]
        let electricWinter = 0;
        let zElectric = 0;
        let indexElectric = 0;
        let gasWinter = 0;
        let zGas = 0;
        let indexGas = 0

        let transformerSizeArr = [10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 25, 25, 25, 25, 25, 37.5, 37.5, 37.5, 37.5, 37.5, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 100, 100, 100, 100, 100, 167, 167, 167, 167, 167];
        let squareFootageArr = [1200, 1500, 1800, 2400, 3000, 1200, 1500, 1800, 2400, 3000, 1200, 1500, 1800, 2400, 3000, 1200, 1500, 1800, 2400, 3000, 1200, 1500, 1800, 2400, 3000, 1200, 1500, 1800, 2400, 3000, 1200, 1500, 1800, 2400, 3000, 1200, 1500, 1800, 2400, 3000];
        let numberOfHomesArr = [2, 2, 0, 0, 0, 4, 2, 2, 2, 2, 6, 4, 4, 4, 2, 8, 6, 6, 6, 4, 8, 8, 6, 6, 6, 10, 10, 8, 8, 6, 12, 10, 10, 10, 8, 12, 10, 10, 10, 8];
        let numberOfHomesArrEV = [2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 6, 6, 4, 4, 4, 8, 6, 6, 6, 4, 10, 8, 8, 8, 6, 10, 10, 8, 8, 6, 10, 10, 8, 8, 8];
        let transformerSizeCondensed = [10, 15, 25, 37.5, 50, 75, 100, 167]
        let sum = 0;
        
        let index = 0;
        let indexCondensed = 0;
        let transformerCost = 0;

        let projectTransformerSize = 0;
        let electricValue = 0;
        let totalSavings = 0;

        if (dropdown === "yes")
        {
            electricValue = 3.3;
        }

        function calculateTransformerCost(transformerSize)
        {
            console.log("old transformerSize = ", transformerSize);
            if (dropdown === "no")
            {

                index = transformerSizeArr.indexOf(parseInt(projectTransformerSize))
                console.log("dropdown = no");
                for(var i = 0; i <= transformerSizeArr.length; i++)
                {
                    console.log(transformerSizeArr[i])
                    if(transformerSizeArr[i] === parseInt(projectTransformerSize) && numberOfHomesArr[i]  >= parseInt(formData.numberOfHomes) && squareFootageArr[i] >= parseInt(formData.squareFootagePerHome) )
                    {
                        console.log("hello0")
                        formData.transformerSize = transformerSizeArr[i];
                        transformerSize = formData.transformerSize;
                        break;
                    }
                    else if (transformerSizeArr[i] === parseInt(projectTransformerSize) && numberOfHomesArr[i]  <=  parseInt(formData.numberOfHomes) && squareFootageArr[i] >= parseInt(formData.squareFootagePerHome) )
                    {
                        
                        index = transformerSizeCondensed.indexOf(projectTransformerSize);
                        formData.transformerSize = transformerSizeCondensed[index + 1];
                        transformerSize = formData.transformerSize;
                        console.log("hello");
                        console.log(transformerSize);
                        break;
                    }
                    else
                    {
                        formData.transformerSize = transformerSize;
                        
                    }
                }
            }
            else if(dropdown === "yes")
            {
                index = transformerSizeArr.indexOf(parseInt(projectTransformerSize))
                indexCondensed = transformerSizeCondensed.indexOf(parseInt(projectTransformerSize)) - 1;
                let newCost = 0;
                let oldCost = 0;
                console.log("dropdown = yes");
                for(var i = 0; i <= transformerSizeArr.length; i++)
                {
                    console.log(transformerSizeArr[i])
                    if(transformerSizeArr[i] === parseInt(projectTransformerSize) && numberOfHomesArrEV[i]  >= parseInt(formData.numberOfHomes) && squareFootageArr[i] >= parseInt(formData.squareFootagePerHome) )
                    {
                        formData.transformerSize = transformerSizeArr[i];
                        transformerSize = formData.transformerSize;

                       /*if (projectTransformerSize !== transformerSize)
                       {*/
                        newCost = transformerCostArr[indexCondensed];
                        oldCost = transformerCostArr[indexCondensed - 1];
                        
                        totalSavings = (2 * oldCost) - newCost;
                        console.log(totalSavings)
                        
                       /*}*/
                       formData.totalSavings = totalSavings;

                        break;
                    }
                    else if (transformerSizeArr[i] === parseInt(projectTransformerSize) && numberOfHomesArrEV[i]  <=  parseInt(formData.numberOfHomes) && squareFootageArr[i] >= parseInt(formData.squareFootagePerHome) )
                    {
                        
                        index = transformerSizeCondensed.indexOf(projectTransformerSize);
                        formData.transformerSize = transformerSizeCondensed[index + 1];
                        transformerSize = formData.transformerSize;

                        /*if (projectTransformerSize !== transformerSize)
                       {*/
                        newCost = transformerCostArr[indexCondensed];
                        oldCost = transformerCostArr[indexCondensed - 1];

                        totalSavings = (2 * oldCost) - newCost;
                        console.log(totalSavings)
                        
                       /*}*/
                       formData.totalSavings = totalSavings;
                        console.log("hello");
                        console.log(transformerSize);
                        break;
                    }
                    else
                    {
                        continue;
                    }
                }
            }
            
            
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




        if(parseInt(formData.numberOfHomes) > 10)
        {
            alert("Maximum number of houses is 10, Please input correct values");
            clear();
            return;
        }
        else if(parseInt(formData.squareFootagePerHome) > 3000)
        {
            alert("Square Footage per home should be less than 3000");
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
                if (parseInt(formData.squareFootagePerHome) <= 1200) {
                    electricWinter = parseInt(formData.electricHeating) * (15 + electricValue);
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric]; 
                    console.log(indexElectric);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1200 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 1500) {
                    electricWinter = parseInt(formData.electricHeating) * (18 + electricValue);
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(indexElectric);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1500 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 1800) {
                    electricWinter = parseInt(formData.electricHeating) * (20 + electricValue);
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(electricWinter);
                    console.log(indexElectric);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1800 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 2400) {
                    electricWinter = parseInt(formData.electricHeating) * (21 + electricValue);
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(indexElectric);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (2400 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 3000) {
                    electricWinter = parseInt(formData.electricHeating) * (26 + electricValue);
                    zElectric = parseInt(electricWinter) * diversityFactor[parseInt(formData.electricHeating) - 1];
                    indexElectric = zValueWinter.findIndex(function(number) {
                        return number > zElectric;
                    });
                    projectTransformerSize = transformerSizeWinter[indexElectric];
                    console.log(indexElectric);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                }
                else{
                    console.log("square footage out of range")
                }
            }
            else if(formData.gasHeating !== "0" && (formData.electricHeating === '0' || formData.electricHeating === ''))
            {
                if (parseInt(formData.squareFootagePerHome) <= 1200) {
                    gasWinter = parseInt(formData.gasHeating) * 8;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1200 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 1500) {
                    gasWinter = parseInt(formData.gasHeating) * 10;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1500 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 1800) {
                    gasWinter = parseInt(formData.gasHeating) * 11;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(gasWinter);
                    console.log(indexGas);
                    console.log(projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1800 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 2400) {
                    gasWinter = parseInt(formData.gasHeating) * 12;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (2400 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 3000) {
                    gasWinter = parseInt(formData.gasHeating) * 14;
                    zGas = parseInt(gasWinter) * diversityFactor[parseInt(formData.gasHeating) - 1];
                    indexGas = zValueWinter.findIndex(function(number) {
                        return number > zGas;
                    });
                    projectTransformerSize = transformerSizeWinter[indexGas];
                    console.log(indexGas);
                    console.log("transformer Size:" + projectTransformerSize);
                    console.log(calculateTransformerCost(projectTransformerSize));
                }
                else{
                    console.log("square footage out of range")
                }
            }
            else{
                if (parseInt(formData.squareFootagePerHome) <= 1200) {
                    gasWinter = parseInt(formData.gasHeating) * 8;
                    electricWinter = parseInt(formData.electricHeating) * (15 + electricValue);
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
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1200 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 1500) {
                    gasWinter = parseInt(formData.gasHeating) * 10;
                    electricWinter = parseInt(formData.electricHeating) * (18 + electricValue);
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
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1500 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 1800) {
                    gasWinter = parseInt(formData.gasHeating) * 11;
                    electricWinter = parseInt(formData.electricHeating) * (20 + electricValue); 
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
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (1800 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 2400) {
                    gasWinter = parseInt(formData.gasHeating) * 12;
                    electricWinter = parseInt(formData.electricHeating) * (21 + electricValue);
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
                    console.log(calculateTransformerCost(projectTransformerSize));
                } else if (2400 < parseInt(formData.squareFootagePerHome) && parseInt(formData.squareFootagePerHome) <= 3000) {
                    gasWinter = parseInt(formData.gasHeating) * 14;
                    electricWinter = parseInt(formData.electricHeating) * (26 + electricValue);
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
                    console.log(calculateTransformerCost(projectTransformerSize));
                    
                }
                else{
                    console.log("square footage out of range")
                }
            }
        }
        
         
        
       
        
        //formData.transformerSize = projectTransformerSize;
        formData.transformerCost = transformerCost;
        formData.totalSavings = totalSavings;
       
        
         alert("The Transformer size to be used for this project in KW:" + formData.transformerSize);
        
        

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
        });
    }

    

    
    return (
        <Paper className={classes.paper}>
            <Typography>Please Input project Information</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name ="project name" variant="outlined" label="Project Name" placeholder="Project Name" fullWidth value={formData.projectName} onChange={(e) => setFormData({ ...formData, projectName: e.target.value})} />
                
                <TextField name ="Number of homes" variant="outlined" label="Number of Homes" placeholder="Number Of Homes" fullWidth value={formData.numberOfHomes} onChange={(e) => setFormData({ ...formData, numberOfHomes: e.target.value})} />
                
                <TextField name ="electric heating" variant="outlined" label="Number of Homes with Electric Heating" placeholder="Number Of Homes with Electric Heating" fullWidth value={formData.electricHeating} onChange={(e) => setFormData({ ...formData, electricHeating: e.target.value})} />
                
                <TextField name ="gas heating" variant="outlined" label="Number of Homes with Gas Heating" placeholder="Number of Homes with Gas Heating " fullWidth value={formData.gasHeating} onChange={(e) => setFormData({ ...formData, gasHeating: e.target.value})} />
                
                <TextField name ="SF" variant="outlined" label="Enter the Maximum S.F of home" placeholder="Maximum Square Footage" fullWidth value={formData.squareFootagePerHome} onChange={(e) => setFormData({ ...formData, squareFootagePerHome: e.target.value})} />
                
                <div>
                <h6> Electric Vehicles enabled: {dropdown}</h6>
                <select value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
                    <option value = "no">No </option>
                    <option value = "yes">Yes </option>
                </select>
                </div>
                
                <div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"  type="submit">Submit</Button>
                <Button className={classes.buttonClear} variant="contained" color="secondary" size="large"  onClick={clear}>Clear</Button>
                </div>
                
           </form>
        </Paper>
        
        

        
    );
};

export default Form;