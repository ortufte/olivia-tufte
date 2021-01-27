import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: 5,
        margin: '0px 25px',
        maxWidth: '600px',
        boxShadow: '20px 20px 20px black',
        display: 'flex',
        justifyContent: 'center',
    } 
}));

const ProjectCard = ({ project }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card} display='block'>
            <CardActionArea>
                <CardMedia
                component="img"
                image={project.image}
                title="project photo"
                />
            <CardContent>
                <Typography gutterBottom variant="h2" >
                    {project.title}
                </Typography>
                <Typography variant="h4" >
                    {project.summary}
                   <br></br>
                   <br></br>
                   <Typography variant="body1" align='left'>
                        {project.details.map((det , i) => <li key={i}>{det}</li>)}
                   </Typography>
                   <br></br>
                    <Typography variant="body1" color="primary">
                        * Demonstration video and link to deployed site coming soon *
                    </Typography>

                </Typography>
            </CardContent>
            <CardActions >
                {/* <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button> */}
            </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default ProjectCard

