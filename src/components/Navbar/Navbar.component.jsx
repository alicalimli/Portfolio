import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './Navbar.style.scss'
// import './testing.scss'
// import './testing2.css'

// images
import logo from '../../assets/logo.png'
import { ReactComponent as About } from '../../assets/file-earmark-person.svg'
import { ReactComponent as Story } from '../../assets/hourglass-split.svg'
import { ReactComponent as Project } from '../../assets/cast.svg'
import { ReactComponent as Contact } from '../../assets/bxs-contact.svg'
import { ReactComponent as HamMenu } from '../../assets/list.svg'
import { ReactComponent as XMenu } from '../../assets/x-lg.svg'

import ProjectData from '../../context/Project.data.json'


const Navbar = () => {

    const [dataToggle, setDataToggle] = useState('false')
    const [ projectData, setProjectData ] = useState(ProjectData);

    const navListShow = () => {
        const navList = document.querySelector('nav > div > div')
        // navList.classList.add('nav-list-show')
        if (dataToggle == 'false') {
            navList.setAttribute('data-toggle', 'true')
            setDataToggle('true')
        } else if (dataToggle == 'true') {
            navList.setAttribute('data-toggle', 'false')
            setDataToggle('false')
        }
    }

    return (
        <nav>
            <div>
                <Link to='/' className='logoImg'><img src={logo} alt="" /></Link>
                <div onClick={navListShow}>
                    <ul data-toggle={dataToggle}>
                        {/* <XMenu className='x-menu' onClick={navListShow} /> */}
                        <li><a href="/#about" className='nav-link'><About className='nav-svg-link' /> about</a></li>
                        <li><a href="/#project" className='nav-link'><Project className='nav-svg-link' /> project <span>{ projectData.length }</span> </a></li>
                        <li><a href="/#story" className='nav-link'><Story className='nav-svg-link' /> story</a></li>
                        <li><Link to="#" className='nav-link'><Contact className='nav-svg-link' /> contact</Link></li>
                        {/* <small>Designed By <i>Ali Reza</i></small> */}
                    </ul>
                </div>
                <HamMenu className='ham-menu' onClick={navListShow} />
            </div>
        </nav>
    )
}

export default Navbar