import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


const LINKS=[
    {to:"/login",Text:"Login"},
    {to:"/signup",Text:"Signup"}
]

const Nav1 = () => {
    return (
       <div className="login-main-box">
           <ul className="login-nav">
             {
                   LINKS.map(item=>(<li key={item.to}><Link to={item.to} className="login-link" >{item.Text}</Link>
                   </li>
                   ))
             }
               
           </ul>
       </div>
    )
}

export default Nav1;
