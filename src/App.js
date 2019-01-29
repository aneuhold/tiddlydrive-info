import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, green } from '@material-ui/core/colors';
import './App.css';
import Header from './Header';
import Landing from './Landing';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <div className="app">
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Landing />
    </MuiThemeProvider>
  </div>
);

export default App;
