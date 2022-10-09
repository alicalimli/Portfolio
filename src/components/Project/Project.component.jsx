import './Project.style.scss'

import Project1 from '../Project1/Project1.component'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

import UltraMovies from '../../assets/Ultra Movies.png'
import WeatherAPI from '../../assets/Weather API.png'

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
            <div>
                <h1>Project</h1>
                <div>
                    <Project1 data={data[0]} technology="NodeJS" img={UltraMovies} projectName="Ultra Movie" description="This Website is all about Downloading Movie, but it's fake, I just made it for practising. The tools that I used to make this Full Responsive Website:" />
                    <Project1 data={data[1]} technology="ReactJS" img={WeatherAPI} projectName="Weather API" description="This is the website where You can check the weather of the most Cities." />
                </div>
            </div>
        </div>
    )
}

export default Project