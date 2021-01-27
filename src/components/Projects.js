import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
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
            'Wellness tracking app; allows users to evaluate the efficacy of natural treatments for various ailments',
          details: [
            'Utilized ReactJS to build a fast and flexible component-based front end.', 
            'Integrated Redux to manage state and improve performance by preventing unnecessary re-rendering of components.',
            'Styled with MaterialUI and custom CSS.'
          ]
        },
            
        { title: 'Humanity Helps', 
          image: '/images/HumanityHelps.jpeg', 
          summary: 
            'Community database app; provides access to donation site information in times of emergency',
          details: [
            'Employed PostgreSQL, Active Record, and Ruby on Rails to build the API.', 
            'Utilized object-oriented JavaScript to build an interactive front end.',
            'Combined Bootstrap with custom CSS to design the user interface.'
            ]
            },
        { title: 'Job Hunter', 
          image: '/images/JobHunter.jpeg', 
          summary: 
            'Organizational tool for job seekers; enables users to focus on the most important tasks at hand',
          details: [
            'Developed a RESTful application with MySQL, Active Record, and Ruby on Rails.', 
            'Designed a user-friendly front end with Bootstrap and custom CSS',
            'Implemented OmniAuth to enable a user to sign in with Google'
            ]
        },
    ];

    return (
        <div className={classes.root}>
            <Carousel interval='10000' >
                {
                    projects.map( (project, i) => <ProjectCard key={i} project={project} /> )
                }
            </Carousel>
        </div>
    )
}

export default Projects;