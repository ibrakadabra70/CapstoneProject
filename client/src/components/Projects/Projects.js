import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Project from './Project/Project';
import useStyles from './styles';

const Projects = () => {
  const projects = useSelector((state) => state.forms);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  console.log(projects);
  return (
    !projects.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {projects.map((project) => {
              if(user.result.email === project.email){
                return(
                <Grid key={project.id} item xs={12} sm={6} md={6}>
                <Project project={project}/>
              </Grid>
                )
              }
              return null;
    })}
        </Grid>
      )
  );
};

export default Projects;