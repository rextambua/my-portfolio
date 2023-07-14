import React from 'react';
import {useParams} from "react-router-dom";
import {projectList} from "../helpers/projectList";
import {GitHub} from "@mui/icons-material";
import './ProjectDetails.css'

function ProjectDetails() {
    const { id } = useParams();
    const project = projectList[id];

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt='project'/>
            <p>
                <b>Skills:</b> {project.skills}</p>
            <GitHub />
            {id}
        </div>
    );
}

export default ProjectDetails;