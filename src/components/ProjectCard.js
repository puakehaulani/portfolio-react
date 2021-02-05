import React from 'react';
import project from "../projects.json";

function ProjectCard() {
    const projectDisplay = project.project.map((item) =>
        <div className="card col-md-3 mb-4 w-20 mx-2">
            <img src={item.thumbnail} className="card-img-top" alt={item.title} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.about}</p>
                <a href={item.deployment} className="">deployment</a> |
                <a href={item.repo} className=""> repo</a>
            </div>
        </div>
    )
    return (
        <div className="row">
            {projectDisplay}
        </div>
    )
}

export default ProjectCard