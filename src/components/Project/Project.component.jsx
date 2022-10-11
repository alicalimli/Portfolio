import './Project.style.scss'

import Project1 from '../Project1/Project1.component'

import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'

import UltraMovies from '../../assets/Ultra Movies.png'
import WeatherAPI from '../../assets/Weather API.png'
import UltraNFT from '../../assets/Ultra NFT.png'
import Nike from '../../assets/Nike.png'

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
                    <Project1 data={projectData[2]} image={UltraNFT} />
                    <Project1 data={projectData[1]} image={WeatherAPI} />
                    <Project1 data={projectData[3]} image={Nike} />
                </div>
            </div>
        </div>
    )
}

export default Project