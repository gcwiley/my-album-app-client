import React from "react";
import { Link } from 'react-router-dom';

import { Button, makeStyles } from '@material-ui/core';

import FaceIcon from '@material-ui/icons/Face'
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoIcon from '@material-ui/icons/Info';
import AlbumIcon from '@material-ui/icons/Album';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(0),
    },
  }));

export default function NavBar() {

    const classes = useStyles();

    return (
        <>
            <Button 
                component={Link}
                to="/"
                variant="outlined" 
                color="primary"
                className={classes.button}
                startIcon={<AlbumIcon />}
            >
                My Albums
            </Button>

            <Button
                component={Link}
                to="/addalbum" 
                variant="outlined"
                color="primary"
                className={classes.button}
                startIcon={<AddBoxIcon />}
            >
                New Album
            </Button>

            <Button
                component={Link}
                to="/artists" 
                variant="outlined"
                color="primary"
                className={classes.button}
                startIcon={<FaceIcon />}
            >
                My Artists
            </Button>

            <Button
                component={Link}
                to="/addartist" 
                variant="outlined"
                color="primary"
                className={classes.button}
                startIcon={<AddBoxIcon />}
            >
                New Artist
            </Button>

            <Button
                component={Link}
                to="/about" 
                variant="outlined" 
                color="primary"
                className={classes.button}
                startIcon={<InfoIcon />}
            >
                About
            </Button>
        </>
    );
}