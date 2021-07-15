import React from 'react'
import Nav1 from './Nav1'
import {Switch ,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
const Register = () => {
  return (
    <div className="pic1">
      <Nav1/>
      <Switch>
     <Route exact path="/login">
      <Login/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
    </Switch>
    </div>
  )
}

export default Register
