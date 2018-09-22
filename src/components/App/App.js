import React, { Component } from 'react';
import './App.css';
import fusoraLogo from './transparent.png';
import RoutedApp from '../routes/RoutedApp';
import routes from '../routes/routes.json';
import { HashRouter as Router, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={fusoraLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Fusora</h1>
            <ul>
                {
                  routes.sort((a,b)=> {
                    var nameA = a.name.toUpperCase(); 
                    var nameB = b.name.toUpperCase(); 
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                  }).map(route=>
                      <li className="App-Linklist"><Link to={route.path} className="App-List">{route.name}</Link></li>
                  )
              }
            </ul>
          </header>
          <RoutedApp />
        </div>
      </Router>
    );
  }
}

export default App;
