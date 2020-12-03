import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SimpleSnackbar(props) {

  return (
    <div>
      {
        props.snackBarMessage === 'Product Added Successfully' ?
          <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          bodystyle={{backgroundColor : `${props.snackBarColor}`}}
          open={props.snackbarOpenClose}
          autoHideDuration={4000}
          onClose={props.handleSnackbarClose}
          message={props.snackBarMessage}
          action={
            <React.Fragment>
              <Link to='/Cart'>
                <Button style={{color:'#B2F9F9'}} size="small" onClick={props.handleSnackbarClose}>
                  View Cart
                </Button>
              </Link>
              <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleSnackbarClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        /> : 
        <Snackbar open={props.snackbarOpenClose} autoHideDuration={6000} onClose={props.handleSnackbarClose}>
          <Alert onClose={props.handleSnackbarClose} severity="error">
            {props.snackBarMessage}
          </Alert>
        </Snackbar>
      }
      
    </div>
  );
}
