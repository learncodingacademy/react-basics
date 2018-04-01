import React from "react"
import {NavLink} from "react-router-dom";
import "./nav.css";

const Nav = ({isLoggedIn})=>(
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
        {isLoggedIn === true ? <li>
          <NavLink exact activeClassName = "active-nav" to = "/user-profile"> My Profile </NavLink>
        </li> : null}
   </ul>    
) 


export default Nav;