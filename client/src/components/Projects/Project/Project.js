import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';


import useStyles from './styles';

const Project = ({project}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

 if(user?.result?.email === project?.email)
 {
     return(
    <Card className={classes.card}>
    <CardMedia className={classes.media} title={project.projectName} />
    <div className={classes.overlay}>
      <Typography variant="h6">{project.name}</Typography>
      
    </div>
  
      <div className={classes.overlay2}>
        <Typography variant="h6">"hello world</Typography>
      </div>
      
  
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{project.projectName}</Typography>
    
  </Card>
     );
 }
 else
 {
     return(null);
 }

    


  
    
};

export default Project;