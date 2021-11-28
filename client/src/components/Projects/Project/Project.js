import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import  {deletePost} from '../../../actions/posts';




import useStyles from './styles';

const Project = ({project}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

 if(user?.result?.email === project?.email)
 {
     return(
  
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>{project.projectName}</Card.Header>
    <Card.Body>
      <Card.Text>
        Number of homes: {project.numberOfHomes}
      </Card.Text>
      <Card.Text>
      Homes with electric heating: {project.electricHeating}
      </Card.Text>
      <Card.Text>
        Homes with gas heating: {project.gasHeating}
      </Card.Text>
      <Card.Text>
        Square Footage per home: {project.squareFootagePerHome}
      </Card.Text>
      <Card.Text>
        Number of electric vehicles: {project.numberOfEV}
      </Card.Text>
      <Card.Text>
        Required Transformer Size: {project.transformerSize}
      </Card.Text>
      <Card.Text>
        Cost of transformer: {project.transformerCost}
      </Card.Text>
      <Button size="small" className={classes.buttonDelete} color="secondary" onClick={() => dispatch(deletePost(project._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
    </Card.Body>
  </Card>
     );
 }
 else
 {
     return(null);
 }

    


  
    
};

export default Project;