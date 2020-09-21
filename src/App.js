import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/landing';
import NewPage from './components/newPage';
import Headers from './components/Headers.js';
import Heropane from './components/Heropane';

function App(props) {
 

  return (
    <div className="app">
       <Router>
        <Switch>
            <Route exact path = "/">
              <Headers />
              <Heropane />
            </Route>
          
            <Route path = "/about"  > 
              <Landing />
            </Route>

           
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
