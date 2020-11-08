import React, { useState } from 'react';
import { IconButton, Collapse, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    alert: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    }
}))

export default function StatusBar() {

    const classes = useStyles();

    const [ open, setOpen ] = useState(true);
    
    return (

        <Collapse in={open}>

            <Alert 
                severity="info" 
                className={classes.alert}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                <AlertTitle>Under Development</AlertTitle>
                <strong>This web application is currrently in development.</strong> Application features and functionality may not work as expected and may change over time.{' '}
            </Alert>
        </Collapse>
    );
}