import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';

import AlbumActions from './AlbumActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(2)
    },
    album_cover: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        padding: theme.spacing(3),
    },
}));

export default function AlbumDetails() {

    const classes = useStyles();

    let { _id } = useParams();

    const [ album, setAlbum ] = useState('');

    useEffect(() => {
        getAlbum()
    }, [])

    const getAlbum = async () => {
        try {
            const payload = { _id }
            const url = '/api/album'
            const response = await axios.get(url, { params: payload })
            setAlbum(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <>
        <Paper variant="outlined" className={classes.paper}>

            <Grid container spacing={0}>

                <Grid item xs={8}>

                    <Typography 
                        variant="h5"
                        color="primary"
                        gutterBottom
                    >
                        {album.title}
                    </Typography>

                    <Typography 
                        variant="button" 
                        color="primary" 
                        gutterBottom
                    >
                        By {album.artist}
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom
                    >
                        <strong>Studio/Label:</strong> {album.studio}
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom
                    >
                        <strong>Date Released:</strong> {album.release_date}
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom
                    >
                        <strong>Genre:</strong> {album.genre}
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom
                    >
                        <strong>Summary</strong>
                    </Typography>

                    <Typography 
                        variant="body2" 
                        gutterBottom
                    >
                        {album.summary}
                    </Typography>

                </Grid>

                <Grid item  xs={4}>
                    <img src={album.mediaUrl} className={classes.album_cover} alt={album.title} />
                </Grid>

            </Grid>

            </Paper>

            <AlbumActions album={album} />

        </>
    );
}