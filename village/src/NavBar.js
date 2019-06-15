import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Smurfs</NavLink>
      {" | "}
      <NavLink to="/smurf-form">Form</NavLink>
    </div>
  );
}
