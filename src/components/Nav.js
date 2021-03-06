import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Box >
            <nav align='center'>
                <Link to="/about" style={{ textDecoration: 'none' }}><Typography display='inline' variant='subtitle1' color='primary'> about  | </Typography></Link>
                <Link to="/projects" style={{ textDecoration: 'none' }}><Typography display='inline' variant='subtitle1' color='primary'> projects   | </Typography></Link>
                <Link to="/blog" style={{ textDecoration: 'none' }}><Typography display='inline' variant='subtitle1' color='primary'> blog   | </Typography></Link>
                <Link to="/connect" style={{ textDecoration: 'none' }}><Typography display='inline' variant='subtitle1' color='primary'> connect </Typography></Link>
            </nav>
        </Box>
    )
}

export default Nav;
