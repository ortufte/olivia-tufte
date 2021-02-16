import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        padding: '20px',
        boxShadow: '10px 10px 20px 10px',
      }
    }
  },
  palette: {
    primary: {
      main: '#B9592C',
    },
    secondary: {
      main: '#E0AE8E',
    },
  },
  typography: {
    // home headline
    h1: {
      fontFamily: "'Federo', sans-serif;",
      fontSize: '20vw',
      // textShadow: '5px 2px 2px #B9592C'
    },
    // user nav
    subtitle1: {
      fontFamily: "'Yeseva One', cursive;",
      fontSize: '1.1rem',
      '@media (min-width:600px)': {
        fontSize: '1.7rem',
      },
    },
    // section headlines
    h2 : {
      fontFamily: "'Yeseva One', cursive;",
      fontSize: 'xx-large',
    },
    // home link
    h3 : {
      fontFamily: "'Federo', sans-serif;",
      fontSize: 'xx-large',
      color: '#000000',
      fontWeight: 'bold',
      padding: '10px'
    },
    //about, connect and project summary text
    h4: {
      fontFamily: "'Federo', sans-serif;",
      fontSize: 'large',
    },
    //project details and note
    body1: {
      fontFamily: "'Federo', sans-serif;",
      fontSize: 'medium',
    },
    //about quote
    body2: {
      fontFamily: "'Yeseva One', cursive;",
      fontSize: 'medium'
    },
  
  },
});

export default theme;