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
    },
    MuiContainer: {
      root: {
        background: 'rgba(3, 3, 3, 0.5)',
        padding: '40px',
        borderRadius: '30px',
        // opacity: '0.5',
      }
    },
    MuiCard: {
      root: {
        padding: '40px'
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
    // section headlines
    h2 : {
      fontFamily: "'Yeseva One', cursive;",
      fontSize: '4vw',
    },
    //page text
    h4: {
      fontFamily: "'Federo', sans-serif;",
      fontSize: '2vw',
    },
  
  },
});

export default theme;