import React from "react";

function Navigation(){
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="nav-link active">Profile</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Settings</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Logout</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
