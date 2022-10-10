import './Project.style.scss'

import Project1 from '../Project1/Project1.component'

import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'

import UltraMovies from '../../assets/Ultra Movies.png'
import WeatherAPI from '../../assets/Weather API.png'

import ProjectData from '../../context/Project.data.json'

const Project = () => {

    const [ projectData, setProjectData ] = useState(ProjectData);

    const project = useRef(null);

    useEffect(() => {
        gsap.to(project.current, {
            opacity: 1,
            delay: 1,
            duration: 1
        })
    }, [])

    return (
        <div id='project' ref={project}>
            <div>
                <h1 className="sectionTitle">Project</h1>
                <div>
                    <Project1 data={projectData[0]} image={UltraMovies} />
                    <Project1 data={projectData[1]} image={WeatherAPI} />
                    <Project1 data={projectData[2]} image='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' />
                </div>
            </div>
        </div>
    )
}

export default Project