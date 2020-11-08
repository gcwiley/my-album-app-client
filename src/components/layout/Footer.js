import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(4, 2),
        marginTop: theme.spacing(5),
        backgroundColor: theme.palette.grey[200],
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
    }
}));

export default function Footer() {
    
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="md">
                <Typography
                    variant="button"
                    color="textSecondary"
                >
                    This web application is currently in beta testing mode.
                </Typography>
            </Container>
        </footer>
    );
}