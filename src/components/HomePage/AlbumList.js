import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, Typography, Card, makeStyles} from '@material-ui/core'

// Add MUI GridList Components


const useStyles = makeStyles((theme) => ({
    album_card: {
        width: theme.spacing(23),
        height: theme.spacing(23),
        marginTop: theme.spacing(4),
        marginRight: theme.spacing(3)
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
        <>
            <Typography variant="h5" gutterBottom>
                My Albums
            </Typography>

            <Grid container spacing={0}>

                {albums.map((album) => (
                    <Grid item component={Card} key={album._id} className={classes.album_card} elevation={3}>
                        <Link to={`/album/${album._id}`} >
                            <img src={album.mediaUrl} className={classes.album_card_image} alt={album.title} />
                        </Link>
                    </Grid>
                ))}

            </Grid>
       </>
    );
}
