import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'

function Nav() {
    return (
        <nav className="navbar-test">
        <Link className="website-title" to="/dashboard">
            FitFlow
        </Link>
        <div className="navbar-navigation">
            <Link className="navbar-link" to="/workout">
                <button className="btn btn-primary">
                    Start Workout
                </button>
            </Link>
            <i class="far fa-circle-user"></i>
            <Link className="navbar-link" to="/profile">
                    FirstName
                <i class="fas fa-angle-down"></i>
            </Link>
            <i class="fas fa-gear"></i>
            <Link className="navbar-link" to="/profile">
                Settings
                <i class="fas fa-angle-down"></i>
            </Link>
        </div>
        
        </nav>
    );
    }

export default Nav;