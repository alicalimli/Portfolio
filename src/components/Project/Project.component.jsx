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

    const data = [
        ['HTML', 'CSS', 'JavaScript', 'NODEJS', 'ExpressJS', 'EJS'],
        ['HTML', 'CSS', 'NODEJS', 'ExpressJS', 'EJS', 'Tailwind']
    ]


    return (
        <div id='project' ref={project}>
            <h1>Project</h1>
            <div>
                <Project1 data={data[0]} technology="NodeJS" />
                <Project1 data={data[1]} technology="ReactJS" />
            </div>
        </div>
    )
}

export default Project