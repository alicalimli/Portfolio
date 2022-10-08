import './Project.style.scss'

import Project1 from '../Project1/Project1.component'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'


const Project = () => {

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
            <h1>Project</h1>
            <Project1 />
            <Project1 />
        </div>
    )
}

export default Project