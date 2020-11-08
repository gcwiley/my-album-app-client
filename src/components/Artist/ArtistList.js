import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// MUI Components
import { Avatar, Paper, Grid, Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    artist_card: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        border: `7px solid ${theme.palette.background.default}`, 
    }
}))

export default function ArtistList() {

    const classes = useStyles();

    const [ artists, setArtists ] = useState([]);

    useEffect(() => {
        getArtists()
    }, [])

    const getArtists = async () => {
        const url = '/api/artists';
        const response = await axios.get(url)
        setArtists(response.data)
    }

    return (
        
        <Paper
            variant="outlined" 
            className={classes.paper}
        >

            <Typography 
                variant="h6" 
                gutterBottom
                color="primary"
            >
                My Artists
            </Typography>

            <Divider
                variant="fullWidth"
                light
                className={classes.divider}
            />

            <Grid container spacing={2}>
                {artists.map((artist) => (
                    <Grid item key={artist._id}>
                        <Link to={`/artist/${artist._id}`} >
                            <Avatar src={artist.mediaUrl} className={classes.artist_card} alt={artist.first_name} />
                        </Link>
                    </Grid>
                ))}
            </Grid>

        </Paper>
    );
}