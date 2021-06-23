import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import logo from "../image/logo.jpeg";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

function Nav() {
  function handleLogout() {
    localStorage.clear();
    window.location.href = "/home";
  }
  return (
    <>
      <header>
        <Image src={logo} alt="LBC-logo" height="200px" />
      </header>
      <div className="topnav">
        <span className="ui button">
          <NavLink to="/home">Home</NavLink>
        </span>
        <span className="ui button">
          <NavLink to="/items">Items</NavLink>
        </span>
        <span className="ui button">
          <NavLink to="/login">Login</NavLink>
        </span>
        <span className="ui button">
          <NavLink to="/signup">Sign Up</NavLink>
        </span>
        <span className="ui button">
          <NavLink to="/mycart">My Cart</NavLink>
        </span>
        <span>
          <Button onClick={handleLogout}>Log Out</Button>
        </span>
      </div>
    </>
  );
}

export default Nav;
