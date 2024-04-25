import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'

function Nav() {
    return (
        <nav className="navbar-test">
        <Link className="navbar-text-test" to="/">
            Home
        </Link>
        <Link className="navbar-text-test" to="/dashboard">
            Dashboard
        </Link>
        <Link className="navbar-text-test" to="/profile">
            Profile
        </Link>
        </nav>
    );
    }

export default Nav;