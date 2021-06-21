import { NavLink } from "react-router-dom";
import logo from "../image/logo.jpeg";

function Nav() {
  return (
    <>
      <header>
        <img src={logo} alt="LBC-logo" height="300px" />
      </header>
      <div className="nav">
        <span>
          <NavLink to="/home">Home</NavLink>
        </span>
        <span>
          <NavLink to="/items">Items</NavLink>
        </span>
        <span>
          <NavLink to="/login">Login</NavLink>
        </span>
        <span>
          <NavLink to="/signup">Sign Up</NavLink>
        </span>
        <span>
          <NavLink to="/mycart">My Cart</NavLink>
        </span>
        <span>
          <button onClick={() => localStorage.clear()}>Log Out</button>
        </span>
      </div>
    </>
  );
}

export default Nav;
