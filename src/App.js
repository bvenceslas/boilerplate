import React from 'react';
import './App.css';
import Home from './Pages/Home';
import AddPost from './Pages/AddPost';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import About from './Pages/About';
import Login from './Pages/Login';

const App = () => {
    return (
      <div className="body">
        <div className="main">
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/addPost">
                <AddPost />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>        
      </div>
        
    );
}

export default App;
