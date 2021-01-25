import React from 'react';
import Nav from './Nav';
import { Typography } from '@material-ui/core';

const Home = () => {
    return(
        <div>
            <Typography variant='h1' color='secondary' align='center'> OLIVIA </Typography>
            <Nav />
            <Typography variant='h1' color='secondary' align='center'> TUFTE </Typography>
        </div>
    )
}

export default Home