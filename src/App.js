import React from 'react';
import Nav from './pages/Nav';
import Home from './pages/Home';
import {Switch ,Route} from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Nav/>
     <Route exact path="/">
      <Home/>
     </Route>
    </Switch>
  );
}

export default App;
