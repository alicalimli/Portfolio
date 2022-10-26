import './Project.style.scss'

import Project1 from '../Project1/Project1.component'

import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';


import UltraMovies from '../../assets/Ultra Movies.png'
import WeatherAPI from '../../assets/Weather API.png'
import UltraNFT from '../../assets/Ultra NFT.png'
import Nike from '../../assets/Nike.png'
import Monster from '../../assets/Monster.png'
import Gpt3 from '../../assets/GPT-3.png'

import ProjectData from '../../context/Project.data.json'
import Languages from '../languages/Languages.component'

const Project = () => {

    const [ projectData, setProjectData ] = useState(ProjectData);
    const [ buttonValue, setButtonValue ] = useState('What I know');

    const project = useRef(null);

    useEffect(() => {
        gsap.to(project.current, {
            opacity: 1,
            delay: 1,
            duration: 1
        })
    }, [])

    const showLanguage = () => {
        const testing = document.querySelector('.languages');
        const data_language = testing.getAttribute('data-language-toggle');
        if (data_language == 'false') {
            testing.setAttribute('data-language-toggle', 'true')
            setButtonValue('Close It')
        } else {
            testing.setAttribute('data-language-toggle', 'false')
            setButtonValue('What I know')
        }
        console.log(data_language)
    }

    return (
        <div id='project' ref={project}>
            <div>
                <h1 className="sectionTitle">Project</h1>
                <div className='dropDownLanguage'>
                    <Button className='whatIKnow' onClick={showLanguage}> { buttonValue } </Button>
                    <Languages />
                </div>
                <div className='projects'>
                    <Project1 data={projectData[0]} image={UltraMovies} />
                    <Project1 data={projectData[1]} image={WeatherAPI} />
                    <Project1 data={projectData[2]} image={UltraNFT} />
                    <Project1 data={projectData[3]} image={Nike} />
                    <Project1 data={projectData[4]} image={Monster} />
                    <Project1 data={projectData[5]} image={Gpt3} />
                </div>
            </div>
        </div>
    )
}

export default Project