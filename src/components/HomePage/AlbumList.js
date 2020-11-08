import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// MUI Components
import { Grid, Card, Typography, Paper, Divider, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    album_card: {
        width: theme.spacing(23),
        height: theme.spacing(23),
        margin: theme.spacing(1),
    },
    album_card_image: {
        width: theme.spacing(23),
        height: theme.spacing(23),
        position: 'center'
    }
}))

export default function AlbumList() {

    const classes = useStyles();

    const [ albums, setAlbums ] = useState([]);
    
    useEffect(() => {
        getAlbums()
    }, [])

    const getAlbums = async () => {
        const url = '/api/albums';
        const response = await axios.get(url)
        setAlbums(response.data)
    }

    return (
            <Paper 
                variant="outlined" 
                className={classes.paper} >

                <Typography 
                    variant="h6" 
                    gutterBottom
                    color="primary"
                >
                    My Albums
                </Typography>

                <Divider
                    variant="fullWidth"
                    light
                    className={classes.divider}
                />

                <Grid container spacing={0}>

                    {albums.map((album) => (
                        <Grid item component={Card} key={album._id} className={classes.album_card} elevation={3}>
                            <Link to={`/album/${album._id}`} >
                                <img src={album.mediaUrl} className={classes.album_card_image} alt={album.title} />
                            </Link>
                        </Grid>
                    ))}

                </Grid>

            </Paper>
    );
}
