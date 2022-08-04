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
                to="/User"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                User
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Post"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Post
              </NavLink>
            </li>

            <li>
              <NavLink
                to="comment"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Comment
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
