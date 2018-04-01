import React from "react"
import {NavLink} from "react-router-dom";
import "./nav.css";

const Nav = ()=>(
   <ul className = "nav">
       <li>
          <NavLink exact activeClassName = "active-nav" to = "/"> Home </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName = "active-nav" to = "/contact"> Conatct </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName = "active-nav" to = "/about"> about </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName = "active-nav" to = "/page"> Page </NavLink>
        </li>
   </ul>    
) 


export default Nav;