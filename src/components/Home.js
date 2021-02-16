import React from 'react';
import Nav from './Nav';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '20px',
      borderRadius: '30px',
      alignItems: 'center',
      maxWidth: 'md',
      align:'center',
      margin: 'auto',
      },
  }))


const Home = () => {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <Typography variant='h1' color='secondary' align='center'> OLIVIA </Typography>
            <Nav />
            <Typography variant='h1' color='secondary' align='center'> TUFTE </Typography>
        </div>
    )
}

export default Home

