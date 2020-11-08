import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Typography, TextField, Grid, Paper, Button, Backdrop, CircularProgress, Snackbar, Divider, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
    },
    backdrop: {
        zIndex:theme.zIndex.drawer + 1,
        color: '#fff'
    },
    divider: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(1)
    }
}));

const INITIAL_ALBUM = {
    title: "",
    artist: "",
    studio: "",
    release_date: "",
    genre: "",
    summary: "",
    media: ""
}

export default function AlbumForm() {
    
    // CSS STYLES IMPORT
    const classes = useStyles();

    const history = useHistory()

    // MANAGE EXISTING STATE
    const [ album, setAlbum ] = useState(INITIAL_ALBUM)
    const [ mediaPreview, setMediaPreview ] = useState('')
    const [ success, setSuccess ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ disabled, setDisabled ] = useState(true);

    useEffect(() => {
        const isAlbum = Object.values(album).every(el => Boolean(el))
        isAlbum ? setDisabled(false) : setDisabled(true)
    }, [album])

    function handleChange(event) {
        const { name, value, files } = event.target;
        if (name === 'media') {
            setAlbum(prevState => ({ ...prevState, media: files[0] }));
            setMediaPreview(window.URL.createObjectURL(files[0]))
        } else {
            setAlbum(prevState => ({ ...prevState, [name]: value }))
        }
    }

    async function handleImageUpload() {
        const data = new FormData()
        data.append('file', album.media)
        data.append('upload_preset', 'album-app')
        data.append('cloud_name', 'dnc06uisc')
        const response = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
        const mediaUrl = response.data.url
        return mediaUrl;
    }

    // submits data to backend
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            setLoading(true)
            const mediaUrl = await handleImageUpload()
            console.log({mediaUrl})
            const url = 'api/album'
            const { title, artist, studio, release_date, genre, summary } = album
            const payload = { title, artist, studio, release_date, genre, summary, mediaUrl }
            console.log('PAYLOAD', payload)
            const response = await axios.post(url, payload)
            console.log('RESPONSE', response)
            setAlbum(INITIAL_ALBUM)
            setSuccess(true)
            history.push('/')
        } catch (error) {
            console.error('Error Message!', error)
        } finally {
            setLoading(false)
        }
    }

    return (

        <>
        <Snackbar
            open={success}
            anchorOrigin={{ 
                vertical: 'bottom', 
                horizontal: 'left' 
            }}
            autoHideDuration={5000}
        >
            <Alert 
                severity="success"
                elevation={2}
            >
                Album has been added to your library.
            </Alert>
        </Snackbar>

        <Paper
            variant="outlined"
            className={classes.paper}
        >

            <Typography 
                variant="h6" 
                gutterBottom
                color="primary"
            >
                Add a New Album
            </Typography>

            <Divider
                variant="fullWidth"
                light
                className={classes.divider}
            />

            <form onSubmit={handleSubmit} >

                <Grid container spacing={2}>

                    {/* ALBUM TITLE */}
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label='Title'
                            type="text"
                            fullWidth
                            margin="dense"
                            helperText="The full title of the Album"
                            name="title"
                            value={album.title}
                            autoFocus
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* ALBUM ARTIST */}
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label='Artist'
                            type="text"
                            fullWidth
                            margin="dense"
                            name="artist"
                            value={album.artist}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* ALBUM STUDIO */}
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label='Studio'
                            type="text"
                            fullWidth
                            margin="dense"
                            name="studio"
                            value={album.studio}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* ALBUM PRODUCER */}
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label='Producer'
                            type="text"
                            fullWidth
                            margin="dense"
                            name="producer"
                            value={album.producer}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            size="small"
                            type="date"
                            fullWidth
                            helperText="Release date"
                            name="release_date"
                            margin="dense"
                            value={album.release_date}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Genre"
                            variant="outlined"
                            size="small"
                            type="text"
                            fullWidth
                            margin="dense"
                            name="genre"
                            value={album.genre}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Summary"
                            variant="outlined"
                            placeholder="Please provide a short summary."
                            multiline
                            rows={6}
                            fullWidth
                            name="summary"
                            margin="dense"
                            value={album.summary}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <img src={mediaPreview} height="300px" alt="album cover" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            size="medium"
                            type="file"
                            name="media"
                            helperText="Select Album Cover"
                            onChange={handleChange}
                        />
                    </Grid>
                    
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={disabled}
                            startIcon={<CloudUploadIcon />}
                        >
                            Create
                        </Button>

                        <Backdrop
                            className={classes.backdrop}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </Grid>

                </Grid>
            </form>
        </Paper>
        </>
    );
}