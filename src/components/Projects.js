import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
  }))

const Projects = () => {

    const classes = useStyles()

    const projects = [
        { title: 'eudaimonia', 
          image: '/images/eudaimonia.jpeg',
          summary: 
            'Wellness tracking app; allows users to evaluate the efficacy of natural treatments for various ailments. ReactJS, Redux, MaterialUI ' },
        { title: 'Humanity Helps', 
          image: '/images/HumanityHelps.jpeg', 
          summary: 
            'Community database app; provides access to donation site information in times of emergency. Ruby on Rails, PostgreSQL, JavaScript, Bootstrap ' },
        { title: 'Job Hunter', 
          image: '/images/JobHunter.jpeg', 
          summary: 
            'Organizational tool for job seekers; enables users to focus on the most important tasks at hand. Ruby on Rails, MySQL, Bootstrap' },
    ];

    return (
        <div className={classes.root}>
            <Carousel interval='10000'>
                {
                    projects.map( (project, i) => <ProjectCard key={i} project={project} /> )
                }
            </Carousel>
        </div>
    )
}

export default Projects;