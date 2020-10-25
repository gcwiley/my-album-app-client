import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    deleteButton: {
        margin: theme.spacing(2)
    }
}))

export default function AlbumActions({album}) {

    const classes = useStyles();

    const history = useHistory()

    const { _id } = album;

    const [ modal, setModal ] = useState(false)

    // Delete Album Function
    async function handleDelete() {
        try {
            const payload = { _id }
            const url = '/api/album'
            await axios.delete(url, { params: payload })
            history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setModal(true)}
                startIcon={<DeleteIcon />}
                className={classes.deleteButton}
            >
                Delete Album
            </Button>

            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.editButton}
                disabled
            >
                Edit Album
            </Button>

            <Dialog
                open={modal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Delete Album</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this album from your library?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>

                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setModal(false) }
                    >
                        Cancel
                    </Button>

                    <Button
                        variant='contained'
                        color='secondary'
                        size="small"
                        onClick={handleDelete}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>

                </DialogActions>

            </Dialog>
        </>
    )
}
