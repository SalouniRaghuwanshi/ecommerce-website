import React from 'react';  
const Login = () => {
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
