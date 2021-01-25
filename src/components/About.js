import React from 'react';
import { Container, Typography } from '@material-ui/core'

const About = () => {
    return(
        <Container className='about' maxWidth='sm' >
            <Typography variant="h2" color="primary">About</Typography>
            <Typography variant="h4" color="secondary">
                I am a full stack software engineer with experience in the following 
                technologies: Ruby, SQL, HTML, CSS, Sinatra, Rails, JavaScript, React, 
                and Redux. My background is in commercial construction project coordination 
                and management, as well as commercial HVAC service team management. Some of 
                the skills I honed while being both a supportive team member and a team leader 
                include time management, communication, attention to detail, adaptability, and 
                collaboration. This experience will be critical to my success as a software engineer.
            </Typography>
        </Container>
    )
}

export default About;