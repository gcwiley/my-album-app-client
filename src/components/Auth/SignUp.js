import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import catchErrors from '../../utils/catchErrors';

import { Avatar, Paper, Button, TextField, Typography, Container, makeStyles} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
      paper: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      marginTop: theme.spacing(1),
    },
    submitButton: {
      margin: theme.spacing(3, 0, 2)
    },
    alertMessage: {
      marginTop: theme.spacing(2)
    }
}));

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
}

export default function SignUp() {

  const classes = useStyles();

  // Manage State here
  const [ user, setUser ] = useState(INITIAL_USER);
  const [ disabled, setDisabled ] = useState(true);
  const [ loading, setLoading ] = useState(false);
  // const [ error, setError ] = useState('');

  useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user])

  function handleChange(event) {
    const { name, value } = event.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      // setError('')
      console.log(user)
      const url = 'URL GOES HERE'
      const payload = { ...user }
      await axios.post(url, payload)
    } catch (error) {
      // catchErrors(error, setError)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (

    <Container component='main' maxWidth='xs'>

      <Paper variant='outlined' className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Create Account
        </Typography>

        <form 
          onSubmit={handleSubmit}
          className={classes.form} 
        >
              <TextField
                variant="outlined"
                size="small"
                label="Name"
                type="text"
                fullWidth
                margin="dense"
                name="name"
                autoFocus
                autoComplete="off"
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                size="small"
                label="Email"
                type="email"
                fullWidth
                margin="dense"
                name="email"
                autoComplete="off"
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                size="small"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                name="password"
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                className={classes.submitButton}
                disabled={disabled || loading}
              >
                Sign Up
              </Button>
        </form>
      </Paper>

      <Alert className={classes.alertMessage} severity='info'>Existing User?
        <Link to='/signin'>
          <Typography variant='subtitle2'>
            Sign In
          </Typography>
        </Link>
      </Alert>

    </Container>
  );
}