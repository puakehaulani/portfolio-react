import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        <ul className="nav justify-content-end">

            <li className="nav-item">
                <Link
                    to="/portfolio-react/about"
                    className={location.pathname === "/portfolio-react/about" ? "nav-link active" : "nav-link"}
                >
                    about
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio-react/projects"
                    className={location.pathname === "/portfolio-react/projects" ? "nav-link active" : "nav-link"}
                >
                    projects
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio-react/resume"
                    className={location.pathname === "/portfolio-react/resume" ? "nav-link active" : "nav-link"}
                >
                    resume
        </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
