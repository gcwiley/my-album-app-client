import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    alert: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    }
}))

export default function AppStatus() {

    const classes = useStyles();
    
    return (
        <Alert severity="info" className={classes.alert}>
            <AlertTitle>Under Development</AlertTitle>
            <strong>This web application is currrently in development.</strong> Application features and functionality may not work as expected and may change over time.{' '}
            <Link to='/about'>
                View Change Log
            </Link>
        </Alert>
    );
}