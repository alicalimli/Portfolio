import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

import './Navbar.style.scss'

// images
import logo from '../../assets/logo.png'
import { ReactComponent as About } from '../../assets/file-earmark-person.svg'
import { ReactComponent as HamMenu } from '../../assets/list.svg'
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

    return (
        <nav className='paddingSize' ref={navbar}>
            <div>
                <img src={logo} alt="" />
                <ul>
                    <li><Link to="/" className='nav-link'><About className='nav-svg-link' />about</Link></li>
                    <li><Link to="/story" className='nav-link'>story</Link></li>
                    <li><Link to="#" className='nav-link'>project</Link></li>
                    <li><Link to="#" className='nav-link'>contact</Link></li>
                </ul>
                <HamMenu className='ham-menu' />
            </div>
        </nav>
    )
}

export default Navbar