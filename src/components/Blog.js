import React from 'react';
import { Box, Typography } from '@material-ui/core'
import FadeIn from 'react-fade-in';

const Blog = () => {
    return(
        <FadeIn transitionDuration='5000'>
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
    )
}

export default Blog;