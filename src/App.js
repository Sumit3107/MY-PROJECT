import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/header'
import Profile from './layout/profile'
import Register from './layout/register'
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Register />
              </React.Fragment>
            )}
            />
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App

