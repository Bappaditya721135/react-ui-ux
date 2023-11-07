import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink, NavHashLink } from "react-router-hash-link";
import { isAccessor } from 'typescript';

export default function Header() {
  return (
    <nav className="navbar">
        <h3>techystart</h3>
        <ul className="nav__links">
            <NavHashLink to="/#home">Home</NavHashLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavHashLink to="/#about">About</NavHashLink>
            <NavHashLink to="/#brands">Brands</NavHashLink>
            <NavLink to="/services">Services</NavLink>
        </ul>
    </nav>
  )
}
