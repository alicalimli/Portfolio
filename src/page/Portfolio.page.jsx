import { Fragment, useState } from "react"

import BackgroundGradient from '../components/Background Gradient/bgGradient.component'
import Header from "../components/Header/Header.component"
import Project from "../components/Project/Project.component"
import ControlledAccordions from "../components/Story/Story.component"
import Contact from "../components/Contact/Contact.component"

import { MaterialUISwitch } from '../components/Light & Dark/light&dark.component'

import '../components/Light & Dark/light&dark.style.scss'

import HeaderImg from '../assets/header img 2.png'
import darkHeaderImg from '../assets/dark image.png'

const Portfolio = () => {

    const information = {
        name: "Ali Reza",
        job: "Front-End Developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit molestiae perspiciatis quibusdam, optio est repellat odio esse voluptas commodi, minima numquam expedita, adipisci asperiores nostrum. Dolor nisi voluptatum cupiditate!",
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

    return (
        <Fragment>
            <BackgroundGradient bottom="-100%" right="50%" />
            <BackgroundGradient bottom="-250%" right="90%" hide="hide" />
            <BackgroundGradient bottom="-20%" right="80%" hide="hide" />
            <MaterialUISwitch onClick={dakrandlight} />
            <Header data={ information } img={headerImage} />
            <Project />
            <ControlledAccordions />
            <Contact />
        </Fragment>
    )
}

export default Portfolio