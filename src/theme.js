import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiDialogContentText: {
      // Name of the rule
      root: {
        // Some CSS
        color: '#202224',
        fontFamily: "Montserrat",
        fontSize: '1rem',
      },
    },
    MuiButton: {
      text: {
        
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
      fontSize: '1.5vw',
      // textShadow: '1px 1px 1px #E0AE8E'

    },
    //home subtitle and page headings + login sign up headings
    h3: {
      fontFamily: "Montserrat",
      fontSize: '2rem',
    },
    //page content 
    h4: {
      fontFamily: "Playfair Display"
    },
    //button text - dark grey
    subtitle2: {
      color: '#202224',
      fontFamily: "Montserrat",
      fontSize: '1.5rem',
    },
    h5: {
      color: '#202224',
      fontFamily: "Montserrat",
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontFamily: "Montserrat",
    },
  },
});

export default theme;