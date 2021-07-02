import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


const LINKS=[
    {to:"/",Text:"Home"},
    {to:"/login",Text:"Login"},
    {to:"/signup",Text:"Signup"},
    {to:"/menu",Text:"Menu"},
    {to:"/checkout",Text:"Checkout"}
]

const Nav = () => {
    return (
       <div className="pic">
           <ul className="Nav">
             {
                   LINKS.map(item=>(<li key={item.to}><Link to={item.to} className="link">{item.Text}</Link>
                   </li>
                   ))
             }
               
           </ul>
       </div>
    )
}

export default Nav;
