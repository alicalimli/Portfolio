import { Fragment, useState } from "react"

import BackgroundGradient from '../components/Background Gradient/bgGradient.component'
import Header from "../components/Header/Header.component"
import Project from "../components/Project/Project.component"
import ControlledAccordions from "../components/Story/Story.component"
import Contact from "../components/Contact/Contact.component"
import Footer from "../components/Footer/Footer.component"
import SocialMedia from "../components/Social Media/SocialMedia.component"
import Github from "../components/GitHub/github.component"
import Loading from "../components/LoadingPage/Loading.component"

import { MaterialUISwitch } from '../components/Light & Dark/light&dark.component'

import '../components/Light & Dark/light&dark.style.scss'

import HeaderImg from '../assets/header img 2.png'
import darkHeaderImg from '../assets/dark image.png'

const Portfolio = () => {

    const information = {
        name: "Ali Reza",
        job: "Front-End Developer",
        about: "I'm from Afghanistan. it's been 2 years that I'm Coding and has learnt so many things. I like to collaborate with Developers for learning new things from them.",
    }

    const [ headerImage, setHeaderImage ] = useState(HeaderImg)

    const dakrandlight = (e) => {
        const value = e.target.checked;
        if (value == true) {
            document.body.classList.add('dark')
            setHeaderImage(darkHeaderImg)
        } else {
            document.body.classList.remove('dark')
            setHeaderImage(HeaderImg)
        }
    }

    const owner = 'Ali Reza';

    setTimeout(() => {
        const sourceCode = document.querySelector('.github');
        sourceCode.classList.add('showGithub')
    }, 8000)

    setTimeout(() => {
        const loading = document.querySelector('.loading');
        loading.style.display = 'none'
    }, 2000)
    
    return (
        <Fragment>
            <Loading />
            <Github />
            <SocialMedia />
            <BackgroundGradient bottom="-100%" right="50%" />
            <BackgroundGradient bottom="-250%" right="90%" hide="hide" />
            <BackgroundGradient bottom="-20%" right="80%" hide="hide" />
            <MaterialUISwitch onClick={dakrandlight} />
            <Header data={ information } img={headerImage} />
            <Project />
            <ControlledAccordions />
            <Contact />
            <Footer owner={owner} />
        </Fragment>
    )
}

export default Portfolio