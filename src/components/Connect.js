import React from 'react';
import { Typography, Box, Card } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
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

const Connect = () => {

    const classes = useStyles()
    
    return (
        <FadeIn transitionDuration='4000'>
            <Box className={classes.root}>
                <Card align='center' >
                    <Typography variant="h2"> Connect </Typography>
                    <IconButton color="primary" href="https://github.com/ortufte" target="_blank" aria-label="go to GitHub" >
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="primary" href="https://www.linkedin.com/in/olivia-tufte/" target="_blank" aria-label="go to LinkedIn">
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="primary" href="mailto:ortufte@gmail.com" target="_blank" aria-label="send email">
                        <EmailIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4" > 
                                    Whether you'd like to collaborate on a project, 
                                    share feedback on my work, or ask me a question; 
                                    I'd love to hear from you! 
                    </Typography>
                </Card>
            </Box>
        </FadeIn>
    )
}


         
export default Connect;