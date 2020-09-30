import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    type: 'dark',
    primary: {
      light: '#7986cb',
      //main: '#3f51b5',
       main: '#BB86FC',
      //main: '#0576bd',
      //dark: '#303f9f',
      dark:  '#3700B3',
      contrastText: '#000',
    },
    secondary:{
      light: '#ff4081',
      //main: '#f50057',
      main: '#BB86FC',
      //dark: '#c51162',
      dark: '#3700B3',
      contrastText: '#000',
    },
    error:{
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning:{
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info:{
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success:{
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    text:{
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider:'rgba(255, 255, 255, 0.12)',
    background:{
      paper: '#424242',
      default: '#303030'
    },
    action:{
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: '0.08',
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: '0.16',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: '0.38',
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: '0.12',
      activatedOpacity: '0.24',
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        "&:hover": {
          color: '#fff'
        }
      },
    },
  },
  typography: {
    fontFamily: [
      'Inter',
    ].join(','),
  },
});

export default theme;
