import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/Create-User"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Create-User
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Create-Post"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Create-Post
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Create-comment"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Create-Comment
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
