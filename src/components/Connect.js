import React from 'react';
import { Typography, Container, TextField, Button, Card } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Connect = () => {
    return (
        <Container className='about' maxWidth='sm' align='center'>
                <Typography variant="h2" color="primary"> Connect </Typography>
                <IconButton color="secondary" href="https://github.com/ortufte" aria-label="go to GitHub">
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton color="secondary" href="https://www.linkedin.com/in/olivia-tufte/"  aria-label="go to LinkedIn">
                    <LinkedInIcon fontSize="large" />
                </IconButton>
 
                    <Card >
                        <form action="mailto:ortufte@gmail.com" method="GET" target="_blank" >
                            <Typography variant="h4" color="primary"> 
                                Whether you'd like to collaborate on a project, 
                                share feedback on my work, or ask me a question; 
                                I'd love to hear from you! 
                            </Typography>
                            <br></br>
                            {/* <label class="label" for="subject"><Typography variant="h4" color="primary">Subject</Typography></label> */}
                            <TextField
                                required
                                fullWidth 
                                variant="filled"
                                name="subject" 
                                id="subject" 
                                placeholder="Subject">
                            </TextField>
                            <br></br>
                            <br></br>
                            {/* <label class="label" for="body"><Typography variant="h4" color="primary">Message</Typography></label> */}
                            <TextField
                                required
                                fullWidth 
                                multiline
                                variant="filled"
                                id="standard-multiline-static"
                                placeholder="Message">
                            
                            </TextField>
                            <br></br>
                            <br></br>
                            <div><Button type="submit" variant="outlined" color="primary">SEND</Button></div>
                        </form>
                    </Card>
         
        </Container>
    )
}


         
export default Connect;