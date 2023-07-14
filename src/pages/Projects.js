import React from 'react';
import ProjectItem from "../components/ProjectItem";
import './Projects.css'
import {projectList} from '../helpers/projectList'
function Projects(props) {
    return (
        <div className='projects'>
            <h1> My projects</h1>
            <div>
                {projectList.map
                ((project, idx)=>
                    (<ProjectItem id={idx} name={project.name} image={project.image}/>))}
            </div>
        </div>
    );
}

export default Projects;