import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'

function Nav() {
    return (
        <nav className="navbar-test">
        <Link className="website-title" to="/dashboard">
            FitFlow
        </Link>
        <div>
            <Link to="/workout">
                <button className="btn btn-primary">
                    Start Workout
                </button>
            </Link>
            <Link className="navbar-text-test" to="/dashboard">
                Dashboard
            </Link>
            <Link className="navbar-text-test" to="/profile">
                <i class="far fa-circle-user"></i>
                FirstName
            </Link>
            <div class="vr" style={{height: "29px", backgroundColor: "#AAB4BE"}}></div>
        </div>
        
        </nav>
    );
    }

export default Nav;