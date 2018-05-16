import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search/search';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar/>
          <Search/>
        </div>
      </MuiThemeProvider>
    );


  }
}

export default App;
