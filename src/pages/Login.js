import React from 'react';
import  { useState } from "react";ss
const Login = () => {
    const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
function validateFormFields() {
    return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
    event.preventDefault();
    }  
    return (
        <div>
          <form className="login-box"> 
              <label className="login-text">Username:</label>
              <input type="text" className="login-input"/>
              <label className="login-text">Password:</label>
              <input type="password" className="login-input"/>
              <button className="btn">Submit</button>
          </form>
        </div>
    )
}

export default Login;
