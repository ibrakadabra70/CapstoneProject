import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  buttonSubmit: {
    marginBottom: 10,
    color: "#ffffff",
    backgroundColor: theme.palette.secondary.dark
  },
  buttonClear: {
    marginBottom: 10,
    color: "#ffffff",
    
  }
}));