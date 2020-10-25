import React from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import { AppBar, Toolbar, Typography, Button, IconButton, Container, makeStyles} from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function MenuAppBar() {

  const classes = useStyles();

  const user = false;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>

            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MusicNoteIcon/>
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              My Album App
            </Typography>


            {user &&

                <Button
                  component={Link}
                  to='/signin'
                  variant="outlined"
                  color="inherit"
                  size="small"
                  className={classes.button}
                >
                  Sign In
                </Button>
                  
                }

                <Button
                  component={Link}
                  to="/signup" 
                  variant="outlined"
                  color="inherit"
                  size="small"
                  className={classes.button}
                >
                  Sign Up
                </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}