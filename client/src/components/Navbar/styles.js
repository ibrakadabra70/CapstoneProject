import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 50px',
    backgroundColor: theme.palette.secondary.dark,
    
  },
  logout:{
    backgroundColor: "#ffffff",
    color: theme.palette.secondary.dark,
  }
}));