import React from 'react';
// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import { useState } from 'react'
import { PROJECT_INFO } from '../constants'
import Arrow from './Arrow'

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

    const [index, setIndex] = useState(0);
    const content = PROJECT_INFO[index];
    const numSlides = PROJECT_INFO.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };

    return (
        <div className={classes.root} 
    >
            {/* <Typography className='projects' variant="h2" color="primary"> Projects </Typography> */}
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <ProjectCard content={content} />
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
          
        </div>
    )
}

export default Projects;