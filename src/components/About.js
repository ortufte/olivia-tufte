import React from 'react';
import { Box, Typography, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FadeIn from 'react-fade-in';

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

const About = () => {

    const classes = useStyles()

    return(
        <FadeIn transitionDuration='4000'>
            <Box className={classes.root}>
                <Card>
                    <Typography variant="body2" color="primary" align='center' >
                        "Unprecedented technological capabilities combined with unlimited 
                        human creativity have given us tremendous power to take on intractable 
                        problems like poverty, unemployment, disease, and environmental degradation. 
                        Our challenge is to translate this extraordinary potential into meaningful 
                        change." <br></br> - Muhammad Yunus
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography variant="h2" >About Me</Typography>
                    <br></br>
                    <Typography variant="h4" >
                        I want to help people. That alone describes me; my actions and work are all driven by that passion. 
                        Technology has transitioned from something I found useful to a critical tool for my life's work. 
                        I attended Flatiron School's online software engineering program, graduating in December of 2020.
                        Throughout the program I gained experience in the following technologies: Ruby, SQL, HTML, CSS, 
                        Sinatra, Rails, JavaScript, React, and Redux. I completed five capstone projects, three of which 
                        you can see on my projects page. Learning new things has become a habit that I very much enjoy, I 
                        am currently investing time into learning additional frameworks and AWS. 
                        <br></br>
                        <br></br>
                        My background is in commercial construction project coordination and management, as well as commercial 
                        HVAC service team management. I transitioned into software engineering after realizing it married my desire 
                        to benefit society with my creativity and interest in technology. Some of the skills I honed while being 
                        both a supportive team member and a team leader include time management, communication, attention to detail, 
                        adaptability, and collaboration.This experience will be critical to my success as a software engineer.
                        <br></br>
                        <br></br>
                        Learning how to code has changed my life and I intend to use it to change the lives of others. 

                    </Typography>
                </Card>
            </Box>
        </FadeIn>
    )
}

export default About;