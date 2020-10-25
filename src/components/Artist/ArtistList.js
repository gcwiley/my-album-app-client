import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// MUI Components
import { Avatar, Paper, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    artist_card: {
        width: theme.spacing(20),
        height: theme.spacing(20),
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
        
        <Paper variant="outlined">

            <Typography variant="h5" gutterBottom>
                My Artists
            </Typography>

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