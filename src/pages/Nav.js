import React from 'react';
import {Link} from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

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
           <NavList>
             {
                   LINKS.map(item=>(<li key={item.to}><LinkStyled to={item.to}>{item.Text}</LinkStyled>
                   </li>
                   ))
             }
               
           </NavList>
       </div>
    )
}

export default Nav
