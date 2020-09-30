import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackResponse(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        props.message === 'failed' ? (
          <Snackbar 
            open={props.openSnackbarCohen} 
            autoHideDuration={3000} 
            onClose={props.handleCloseSnackbarCohen}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            action={
              <Fragment>
                <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleCloseSnackbarCohen}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Fragment>
            }
          >
            <Alert onClose={props.handleCloseSnackbarCohen} severity="error">
              Cohen / HADS submit failed
            </Alert>
          </Snackbar>
        ):(
          props.message === 'success' ? (
            <Snackbar 
              open={props.openSnackbarCohen} 
              autoHideDuration={3000}
              onClose={props.handleCloseSnackbarCohen}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              action={
                <Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleCloseSnackbarCohen}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Fragment>
              }
            >
              <Alert onClose={props.handleCloseSnackbarCohen} severity="success">
                Cohen / HADS submitted successfully
              </Alert>
            </Snackbar>
          ):(
            <Snackbar 
              open={props.openSnackbarCohen} 
              autoHideDuration={3000}
              onClose={props.handleCloseSnackbarCohen}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              action={
                <Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleCloseSnackbarCohen}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Fragment>
              }
            >
              <Alert onClose={props.handleCloseSnackbarCohen} severity="warning">
                Your COHEN is already submitted
              </Alert>
            </Snackbar>
          )
        )
      }
    </div>
  );
}