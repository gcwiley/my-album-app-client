import React from 'react';
import { Typography } from '@material-ui/core'

import changes from '../data/changeLog';

export default function AboutPage() {

    return (
        <>
            <Typography variant="h5" gutterBottom>
                About My Album App
            </Typography>

            <Typography gutterBottom>
                My Album App is a simple web application that allows to manage your favorite albums and artists in a easy to use user interface.
            </Typography>

            <Typography variant="h5" gutterBottom>
                Change Log
            </Typography>


        </>
    );
}
