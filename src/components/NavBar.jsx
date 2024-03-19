import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#111111", position: "static" }}>
      <Toolbar>
        <NavLink
          to="/"
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
            marginRight: "20px",
            color:"inherit",
            textDecoration:"none"
          }}
        >
          Code for interview
        </NavLink>
        <NavLink
          to="/all"
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
            marginRight: "20px",
            color:"inherit",
            textDecoration:"none"
          }}
        >
          All Users
        </NavLink>
        <NavLink
          to="/add"
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
            marginRight: "20px",
            color:"inherit",
            textDecoration:"none"
          }}
        >
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
