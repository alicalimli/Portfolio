import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

import './Navbar.style.scss'

// images
import logo from '../../assets/logo.png'
import { ReactComponent as About } from '../../assets/file-earmark-person.svg'
import { useRef, useEffect } from 'react'

const Navbar = () => {

    const navbar = useRef()

    useEffect(() => {
        gsap.to(navbar.current, {
            scale: 1,
            opacity: 1,
            duration: 1.5
        })
    }, [])

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
            </div>
        </nav>
    )
}

export default Navbar