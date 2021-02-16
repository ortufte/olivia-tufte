import React from 'react';
import { Box, Typography } from '@material-ui/core'
import FadeIn from 'react-fade-in';
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

const Blog = () => {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <FadeIn transitionDuration='4000'>
                <Box 
                    padding='40px'
                    borderRadius= '30px'
                    alignItems="center"
                    maxWidth='sm'
                    align='center'
                >
                    <Typography variant='h2' color='primary' > COMING SOON! </Typography>
                </Box>
            </FadeIn>
        </div>
    )
}

export default Blog;