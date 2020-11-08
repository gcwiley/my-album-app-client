import React from 'react';
import { Typography, Paper, Divider, makeStyles } from '@material-ui/core'

// CSS Styles 
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
    },
    divider: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
}));

export default function AboutPage() {

    const classes = useStyles();

    return (
        <>

            <Paper
                variant="outlined" 
                className={classes.paper}
            >

                <Typography 
                    variant="h6" 
                    gutterBottom
                    color="primary"
                >
                    About
                </Typography>

                <Divider
                    variant="fullWidth"
                    light
                    className={classes.divider}
                />

                <Typography
                    variant="body1" 
                    gutterBottom
                >
                    My Album App is a simple web application that allows to manage your favorite albums and artists in a easy to use user interface.
                </Typography>

            </Paper>
        </>
    );
}
