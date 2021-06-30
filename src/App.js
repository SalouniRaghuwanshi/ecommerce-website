import React from 'react';
import Nav from './pages/Nav';
import Home from './pages/Home';
import {Switch ,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Nav/>
    <Switch>
     <Route exact path="/">
      <Home/>
     </Route>
     <Route exact path="/login">
      this is login page
     </Route>
    </Switch>
    </div>
  );
}

export default App;
