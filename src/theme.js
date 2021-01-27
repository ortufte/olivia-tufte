import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        // background: 'rgba(3, 3, 3, 0.5)',
        padding: '40px',
        borderRadius: '30px',
        height: 'auto !important',
        height: '100%',
      }
    },
    MuiCard: {
      root: {
        padding: '40px',
        // background: 'rgba(228, 209, 178, 0.9)',
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
      fontSize: '2.5vw',
      // textShadow: '1px 1px 1px #E0AE8E'

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