import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Connect from './components/Connect';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})`,
      backgroundSize: 'cover',
      height: '100vh',
      
    },
    main: {
      height: '90vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 'auto'
    }
}))

const App = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}> 
      <Link to="/" style={{ textDecoration: 'none' }}><Typography variant='h3' > OT </Typography></Link>
      <div className={classes.main}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/connect" component={Connect}></Route>
        </Switch>
    </div>
    </div>
  );
}

export default App;
