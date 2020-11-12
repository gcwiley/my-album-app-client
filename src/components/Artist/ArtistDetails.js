import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';

import ArtistActions from './ArtistActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(5)
    },
    artist_picture: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        padding: theme.spacing(3)
    },
}));

export default function ArtistDetails() {

    const classes = useStyles();

    let { _id } = useParams();

    const [ artist, setArtist ] = useState('');

    console.log('ARTIST', artist.mediaUrl)

    useEffect(() => {
        getArtist()
    }, [])

    // fix this to other type of function
    async function getArtist() {
        try {
            const payload = { _id }
            const url = '/api/artist'
            const response = await axios.get(url, { params: payload })
            setArtist(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Paper 
            variant="outlined" 
            className={classes.paper}
        >

            <Grid 
                container 
                spacing={0}>

                <Grid item xs={8}>

                    <Typography 
                        component="h1" 
                        variant="h4"
                    >
                        {artist.first_name} {artist.last_name}
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom
                    >
                        <strong>Born:</strong> {artist.date_of_birth}
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom
                    >
                        <strong>Music Group:</strong> {artist.music_group}
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom
                    >
                        <strong>Genre:</strong> {artist.genre}
                    </Typography>

                    <Typography 
                        variant="body2" 
                        gutterBottom
                    >
                        {artist.summary}
                    </Typography>

                </Grid>

                <Grid item xs={4}>
                    <img src={artist.mediaUrl} className={classes.artist_picture} alt={artist.first_name} />
                </Grid>

            </Grid>

            <ArtistActions artist={artist} />

        </Paper>
    )
}