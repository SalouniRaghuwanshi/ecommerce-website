import React from 'react';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import './pages/nav.css';
import {Switch ,Route} from 'react-router-dom';
function App() {
  return (
    <div >
      <Nav/>
    <Switch>
     <Route exact path="/">
      <Home/>
     </Route>
     <Route exact path="/login">
     <Register/>
     </Route>
     <Route exact path="/signup">
     <Register/>
     </Route>
    </Switch>

    </div>

  );
}

export default App;
