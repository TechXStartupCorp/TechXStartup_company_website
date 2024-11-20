import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";

const NavBar = () => {

    console.log(Nav, 'Nav');
  console.log(Nav.Item, 'Nav.Item');
  console.log(Nav.Link, 'Nav.Link');
  return (
    <Nav>
    <NavItem>
      <NavLink href="#home">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#about">About</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#contact">Contact</NavLink>
    </NavItem>
  </Nav>
  );
};

export default NavBar;
