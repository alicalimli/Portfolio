import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import 'boxicons'

import './Navbar.style.scss'

// images
import logo from '../../assets/logo.png'
import { ReactComponent as About } from '../../assets/file-earmark-person.svg'
import { ReactComponent as Story } from '../../assets/hourglass-split.svg'
import { ReactComponent as Project } from '../../assets/cast.svg'
import { ReactComponent as Contact } from '../../assets/bxs-contact.svg'
import { ReactComponent as HamMenu } from '../../assets/list.svg'
import { ReactComponent as XMenu } from '../../assets/x-lg.svg'
import { useRef, useEffect } from 'react'

const Navbar = () => {

    const navbar = useRef()

    useEffect(() => {
        gsap.to(navbar.current, {
            scale: 1,
            opacity: 1,
            delay: .2,
            duration: 1.5
        })
    }, [])

    window.addEventListener('scroll', (e) => {
        const navbarChange = document.querySelector('nav > div');
        const scrollValue = window.scrollY;
        if (scrollValue >= 50) {
            navbarChange.classList.add('nav-active')
        } else {
            navbarChange.classList.remove('nav-active')
        }
    })


    const navListShow = () => {
        const navList = document.querySelector('nav ul')
        const ulAttribute = navList.getAttribute('data-toggle') 
        // navList.classList.add('nav-list-show')
        if (ulAttribute == 'false') {
            navList.setAttribute('data-toggle', 'true')
        } else {
            navList.setAttribute('data-toggle', 'false')
        }
    }

    return (
        <nav className='paddingSize' ref={navbar}>
            <div>
                <img src={logo} alt="" />
                <ul data-toggle="false">
                    <XMenu className='x-menu' onClick={navListShow} />
                    <li><a href="#about" className='nav-link'><About className='nav-svg-link' /> about</a></li>
                    <li><a href="#project" className='nav-link'><Project className='nav-svg-link' /> project</a></li>
                    <li><a href="#story" className='nav-link'><Story className='nav-svg-link' /> story</a></li>
                    <li><Link to="#" className='nav-link'><Contact className='nav-svg-link' /> contact</Link></li>
                    <small>Designed By <i>Ali Reza</i></small>
                </ul>
                <HamMenu className='ham-menu' onClick={navListShow} />
            </div>
        </nav>
    )
}

export default Navbar