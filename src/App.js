import React from 'react';
import Home from './Pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AddPost from './Pages/AddPost';

const App = () => {
    return (
        <Router>
      <div>
        <Switch>
          <Route path="/addPost">
            <AddPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
