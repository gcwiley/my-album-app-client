import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Typography, TextField, Grid, Paper, Button, Backdrop, CircularProgress, Snackbar, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
}));

const INITIAL_ARTIST = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    place_of_birth: "",
    music_group: "",
    summary: "",
    media: ""
}

export default function ArtistForm() {

    // CSS STYLES IMPORT
    const classes = useStyles();

    // MANAGE EXISTING STATE
    const [ artist, setArtist ] = useState(INITIAL_ARTIST);
    const [ mediaPreview, setMediaPreview ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ disabled, setDisabled ] = useState(true);

    useEffect(() => {
        const isArtist = Object.values(artist).every(el => Boolean(el))
        isArtist ? setDisabled(false) : setDisabled(true)
    }, [artist])

    function handleChange(event) {
        const { name, value, files } = event.target;
        if (name === 'media') {
            setArtist(prevState => ({ ...prevState, media: files[0] }));
            setMediaPreview(window.URL.createObjectURL(files[0]))
        } else {
            setArtist(prevState => ({ ...prevState, [name]: value }))
        }
    }

    async function handleImageUpload() {
        const data = new FormData()
        data.append('file', artist.media)
        data.append('upload_preset', 'album-app')
        data.append('cloud_name', 'dnc06uisc')
        const response = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
        const mediaUrl = response.data.url
        return mediaUrl
    }

    // submits data to backend
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            setLoading(true)
            const mediaUrl = await handleImageUpload()
            console.log({mediaUrl})
            const url = 'api/artist'
            const { first_name, last_name, date_of_birth, place_of_birth, music_group, summary } = artist
            const payload = { first_name, last_name, date_of_birth, place_of_birth, music_group, summary, mediaUrl }
            console.log('PAYLOAD', payload)
            const response = await axios.post(url, payload)
            console.log('RESPONSE', response)
            setSuccess(true)
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
                Artist has been added to your library
            </Alert>
        </Snackbar>

        <Paper variant="outlined" className={classes.paper}>

            <Typography variant="h4" gutterBottom>
                New Artist
            </Typography>

            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label="First Name"
                            type="text"
                            fullWidth
                            margin="none"
                            name="first_name"
                            value={artist.first_name}
                            autoFocus
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label="Last Name"
                            type="text"
                            fullWidth
                            margin="none"
                            name="last_name"
                            value={artist.last_name}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            size="small"
                            type="date"
                            helperText="Date of Birth"
                            fullWidth
                            margin="none"
                            name="date_of_birth"
                            value={artist.date_of_birth}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label='Place of Birth'
                            type="text"
                            fullWidth
                            margin="none"
                            name="place_of_birth"
                            value={artist.place_of_birth}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label="Music Group"
                            type="text"
                            fullWidth
                            margin="none"
                            name="music_group"
                            value={artist.music_group}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            size="small"
                            label="Summary"
                            placeholder="Please provide a short summary."
                            multiline
                            rows={6}
                            fullWidth
                            name="summary"
                            value={artist.summary}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <img scr={mediaPreview} height="300px" alt="artist cover" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            size="small"
                            type="file"
                            name="media"
                            helperText="Select Artist Picture"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={ disabled || loading }
                            startIcon={<CloudUploadIcon />}
                        >
                            Submit
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
    )
}