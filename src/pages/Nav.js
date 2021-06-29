import React from 'react';
import {Link} from 'react-router-dom';

const LINKS=[
    {to:"/",Text:"Home"},
    {to:"/login",Text:"Login"},
    {to:"/signup",Text:"Signup"},
    {to:"/menu",Text:"Menu"},
    {to:"/checkout",Text:"Checkout"}
]

const Nav = () => {
    return (
       <div>
           <ul>
             {
                   LINKS.map(item=>(<li ley={item.to}><Link to={item.to}>{item.Text}</Link>
                   </li>
                   ))
             }
               
           </ul>
       </div>
    )
}

export default Nav
